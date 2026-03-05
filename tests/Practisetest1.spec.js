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
    await page.getByLabel('Username').fill('geeta');
    await page.waitForTimeout(500);
    //await page.getByRole('link', { name: 'Home' }).click();
    //page.getByRole('Navigation', { name: 'Home' });
    //await page.waitForTimeout(500);
    await page.getByRole('checkbox', { name: 'Accept Terms' }).check();
    await page.waitForTimeout(500);
    const StartButton = page.getByRole('button', { name: 'Start' });
    await StartButton.click();
    await page.waitForTimeout(500);
    const StopButton = page.getByRole('button', { name: 'Stop' });
    await StopButton.click();
});