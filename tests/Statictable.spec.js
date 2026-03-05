const { test, expect } = require('@playwright/test');

test('Static Web Table Validation', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');

    const rows = page.locator('table tbody tr');
    const columns = page.locator('table thead tr th');

    // 1️⃣ Count rows & columns
    console.log('Total Rows:', await rows.count());
    console.log('Total Columns:', await columns.count());

    for (let i = 0; i < await rows.count(); i++) {

        const row = rows.nth(i);

        const book = (await row.locator('td').nth(0).textContent()).trim();
        const author = (await row.locator('td').nth(1).textContent()).trim();
        const subject = (await row.locator('td').nth(2).textContent()).trim();
        const price = Number(await row.locator('td').nth(3).textContent());

        // 2️⃣ Print all book names
        console.log('Book:', book);

        // 3️⃣ Get price of Learn Java
        if (book === 'Learn Java') {
            console.log('Price of Learn Java:', price);
        }

        // 4️⃣ Print books by Mukesh
        if (author === 'Mukesh') {
            console.log('Book by Mukesh:', book);
        }

        // 5️⃣ Print books with price > 1000
        if (price > 1000) {
            console.log('Expensive Book:', book);
        }
    }

});