const { test } = require('@playwright/test');

test('basic urltest', async ({ browser, page }) => {
  //const context = await browser.newContext();
  //const page = await browser.newPage();
  await page.screenshot({ path: `example.png` });
});