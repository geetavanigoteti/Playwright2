
const { test, expect } = require('@playwright/test');

test.only('basic urltest', async ({ browser, page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    console.log(await page.title());
    await expect(page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');
    await page.locator('#username').fill('geeta');
    await page.getByRole('button', { name: 'Primary Action' }).click();
    await page.getByRole('button', { name: 'Toggle Button' }).click();
});