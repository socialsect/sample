import asyncio
from playwright import async_api

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:5176", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # Navigate to the articles listing page by clicking the 'Articles' link in the navigation menu.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/footer/div/div/div[2]/ul/li[3]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click on the first article's 'Read Full Article' link to open the article detail page.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/main/div[3]/div/div[3]/article/div[2]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Assert that the articles list is visible with titles and summaries on the listing page
        articles_list = frame.locator('xpath=//main//article')
        assert await articles_list.count() > 0, 'No articles found in the listing'
        first_article_title = await articles_list.nth(0).locator('h2').inner_text()
        first_article_summary = await articles_list.nth(0).locator('p.summary').inner_text()
        assert first_article_title.strip() != '', 'First article title is empty'
        assert first_article_summary.strip() != '', 'First article summary is empty'
        # Assert that markdown content is rendered correctly in the article detail page
        article_title = await frame.locator('xpath=//main//h1').inner_text()
        assert article_title == 'A Sophisticated Tactical Implementation of Primitive Strategic Thinking: The AI Optimization Trap', 'Article title does not match expected'
        article_content = await frame.locator('xpath=//main//article//div[contains(@class, "content")]').inner_html()
        assert '<p>' in article_content, 'Markdown paragraph tags not found in article content'
        assert '<img' in article_content, 'Embedded images not found in article content'
        # Assert SEO metadata tags, OpenGraph, Twitter cards, and structured data are generated and valid
        meta_title = await frame.locator('xpath=//head//title').inner_text()
        assert meta_title == article_title, 'Meta title does not match article title'
        og_title = await frame.locator('xpath=//head//meta[@property="og:title"]/@content').get_attribute('content')
        assert og_title == article_title, 'OpenGraph title does not match article title'
        twitter_title = await frame.locator('xpath=//head//meta[@name="twitter:title"]/@content').get_attribute('content')
        assert twitter_title == article_title, 'Twitter card title does not match article title'
        meta_description = await frame.locator('xpath=//head//meta[@name="description"]/@content').get_attribute('content')
        assert meta_description.strip() != '', 'Meta description is empty'
        og_description = await frame.locator('xpath=//head//meta[@property="og:description"]/@content').get_attribute('content')
        assert og_description.strip() != '', 'OpenGraph description is empty'
        twitter_description = await frame.locator('xpath=//head//meta[@name="twitter:description"]/@content').get_attribute('content')
        assert twitter_description.strip() != '', 'Twitter card description is empty'
        structured_data = await frame.locator('xpath=//head//script[@type="application/ld+json"]').inner_text()
        assert structured_data.strip().startswith('{'), 'Structured data JSON-LD not found or invalid'
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    