const { Chrome, devices } = require('@playwright/test');

(async () => {
    const browser = await Chrome.launch();
    const page = await browser.newPage();
    await page.goto('https://playwright.dev/');
    await page.screenshot({ path: `example.png` });
    await browser.close();
})();