const { test, expect } = require('@playwright/test');

test('should display profile information', async ({ page }) => {
    await page.goto('file:///' + __dirname + '/../index.html');
    
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Profil Saya');

    const name = page.locator('p:nth-child(2)');
    const major = page.locator('p:nth-child(3)');
    const university = page.locator('p:nth-child(4)');

    await expect(name).toHaveText(/Nama: .+/);
    await expect(major).toHaveText(/Jurusan: .+/);
    await expect(university).toHaveText(/Universitas: .+/);

    const hobbies = page.locator('ul li');
    await expect(hobbies).toHaveCount(3);
});
