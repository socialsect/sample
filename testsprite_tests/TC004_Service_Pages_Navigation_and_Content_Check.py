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
        # Navigate to the services overview page
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/footer/div/div/div[3]/ul/li/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click each service link to open the corresponding detailed service page
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/main/section[4]/div/div/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Verify navigation allows easy return to overview and other pages from this detailed service page
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/footer/div/div/div[3]/ul/li/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click each service link to open the corresponding detailed service page, starting with the AI Consulting service
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/main/section[4]/div/div/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Verify navigation allows easy return to overview and other pages from this detailed service page
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/footer/div/div/div[3]/ul/li/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click the next service link to open the corresponding detailed service page, starting with IT Modernization
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/main/section[4]/div/div/div[2]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Verify navigation allows easy return to overview and other pages from this detailed service page
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/footer[2]/div/div/div[3]/ul/li/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click the next service link to open the corresponding detailed service page, starting with Strategic Advisory
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/main/section[4]/div/div/div[3]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Verify navigation allows easy return to overview and other pages from this detailed service page
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/footer[2]/div/div/div[3]/ul/li/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click the next service link to open the corresponding detailed service page, starting with AI Enablement Strategy
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/main/section[4]/div/div/div[4]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Verify navigation allows easy return to overview and other pages from this detailed service page
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div[3]/footer[2]/div/div/div[3]/ul/li/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click the next service link to open the corresponding detailed service page, starting with Constitutional AI Governance
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/main/section[4]/div/div/div[5]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Verify navigation allows easy return to overview and other pages from this detailed service page
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/footer/div/div/div[3]/ul/li/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click the last service link to open the corresponding detailed service page, starting with Systems Optimization
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div/main/section[4]/div/div/div[6]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Assert that the services overview page displays the list of services with brief summaries
        overview_section = frame.locator('xpath=html/body/div/div/main/section[4]')
        assert await overview_section.is_visible(), 'Services overview section should be visible'
        service_links = overview_section.locator('a')
        count = await service_links.count()
        assert count > 0, 'There should be at least one service link in the overview'
        for i in range(count):
            service_link = service_links.nth(i)
            text = await service_link.text_content()
            assert text and len(text.strip()) > 0, f'Service link {i} should have descriptive text'
            # Optionally check for brief summary near the link if available
            summary_locator = overview_section.locator(f'xpath=./div[{i+1}]/p')
            if await summary_locator.count() > 0:
                summary_text = await summary_locator.nth(0).text_content()
                assert summary_text and len(summary_text.strip()) > 0, f'Service summary {i} should be descriptive'
        
        # Assert detailed service pages have descriptive content and technical info
        # Assuming after clicking a service link, the detailed page content is loaded in the same frame
        detailed_content = frame.locator('xpath=html/body/div/div/main')
        assert await detailed_content.is_visible(), 'Detailed service content should be visible'
        detailed_text = await detailed_content.text_content()
        assert detailed_text and len(detailed_text.strip()) > 100, 'Detailed service page should have sufficient descriptive content'
        
        # Assert navigation back to overview works
        footer_nav_link = frame.locator('xpath=html/body/div/div/footer/div/div/div[3]/ul/li/a').first
        assert await footer_nav_link.is_visible(), 'Footer navigation link to overview should be visible'
        link_href = await footer_nav_link.get_attribute('href')
        assert link_href and ('services' in link_href or link_href.endswith('/')), 'Footer navigation link should point to services overview or home'
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    