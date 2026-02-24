const { test } = require('@playwright/test');
const { time } = require('node:console');

test('testcase1', async ({ browser, page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    console.log(await page.title());
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Primary Action' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Toggle Button' }).click();
    await page.waitForTimeout(500);

});