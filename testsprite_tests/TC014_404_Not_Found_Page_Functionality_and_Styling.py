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
        # Navigate to a non-existent URL path on the site to trigger the 404 error page
        await page.goto('http://localhost:5176/non-existent-route', timeout=10000)
        

        # Assert the page title contains '404 Error' and 'Page Not Found'
        assert '404 Error' in await page.title()
        assert 'Page Not Found' in await page.title()
        # Assert the main error message is displayed correctly
        main_message = await page.locator('text=The page you\'re looking for doesn\'t exist or has been moved. You can still explore FERZ\'s AI governance and strategic consulting services.').is_visible()
        assert main_message
        # Assert navigation links back to homepage and key pages are present
        assert await page.locator('a[href="/"]').is_visible()  # Homepage link
        assert await page.locator('a[href="/services-overview"]').is_visible()  # Services Overview link
        assert await page.locator('a[href="/contact-us"]').is_visible()  # Contact Us link
        # Assert popular pages links are present
        assert await page.locator('a[href="/products"]').is_visible()  # AI Governance Products
        assert await page.locator('a[href="/methodologies"]').is_visible()  # Our Methodologies
        assert await page.locator('a[href="/about-us"]').is_visible()  # About FERZ
        assert await page.locator('a[href="/ip-portfolio"]').is_visible()  # IP Portfolio
        # Assert the search prompt is visible
        assert await page.locator('text=Looking for something specific? Try searching our site.').is_visible()
        # Assert page styling and layout by checking presence of main container and branding elements
        assert await page.locator('header').is_visible()  # Header should be visible
        assert await page.locator('footer').is_visible()  # Footer should be visible
        assert await page.locator('text=FERZ — Formalizing Emergent Reasoning Zones').is_visible()  # Branding text in footer
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    