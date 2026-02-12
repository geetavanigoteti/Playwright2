
const { test, expect } = require('@playwright/test');

test('basic urltest', async ({ browser, page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    console.log(await page.title());
    await expect(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
});