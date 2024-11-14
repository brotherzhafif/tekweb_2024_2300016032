// tests/dropdown.test.js
const { test, expect } = require('@playwright/test');

test.describe('Dropdown Menu Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Load the HTML file in the browser
    await page.goto('file:///' + __dirname + '/../index.html');
  });

  test('should hide dropdown menu on initial load', async ({ page }) => {
    const dropdownMenu = await page.$('#dropdownMenu');
    const visibility = await dropdownMenu.evaluate(el => window.getComputedStyle(el).display);

    expect(visibility).toBe('none');
  });

  test('should toggle dropdown menu visibility on button click', async ({ page }) => {
    const dropdownButton = await page.$('#dropdownButton');
    const dropdownMenu = await page.$('#dropdownMenu');

    await dropdownButton.click();
    let visibility = await dropdownMenu.evaluate(el => window.getComputedStyle(el).display);
    expect(visibility).not.toBe('none');

    await dropdownButton.click();
    visibility = await dropdownMenu.evaluate(el => window.getComputedStyle(el).display);
    expect(visibility).toBe('none');
  });

  test('should contain the correct options in the dropdown menu', async ({ page }) => {
    const dropdownMenu = await page.$('#dropdownMenu');


    const optionsText = await dropdownMenu.evaluate(menu =>
      Array.from(menu.querySelectorAll('a')).map(option => option.textContent.trim())
    );

    expect(optionsText).toEqual(['Opsi 1', 'Opsi 2', 'Opsi 3']);
  });
});
