// tests/toggle.test.js
const { test, expect } = require('@playwright/test');

test.describe('Dark Mode Toggle Button Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Load the HTML file in the browser
    await page.goto('file:///' + __dirname + '/../index.html');
  });

  test('should have initial button text as "Mode Gelap"', async ({ page }) => {
    const toggleButton = await page.$('#toggleButton');
    const buttonText = await toggleButton.innerText();

    expect(buttonText).toBe('Mode Gelap');
  });

  test('should toggle to dark mode and change button text to "Mode Terang"', async ({ page }) => {
    const toggleButton = await page.$('#toggleButton');

    await toggleButton.click();
    const buttonTextAfterClick = await toggleButton.innerText();
    const backgroundColor = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);

    expect(buttonTextAfterClick).toBe('Mode Terang');
    expect(backgroundColor).toBe('rgb(0, 0, 0)'); // or a dark shade like rgb(34, 34, 34)
  });

  test('should toggle back to light mode and change button text to "Mode Gelap"', async ({ page }) => {
    const toggleButton = await page.$('#toggleButton');

    await toggleButton.click();
    await toggleButton.click();
    const buttonTextAfterSecondClick = await toggleButton.innerText();
    const backgroundColor = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);

    expect(buttonTextAfterSecondClick).toBe('Mode Gelap');
    expect(backgroundColor).toBe('rgb(255, 255, 255)'); // or a light shade like rgb(240, 240, 240)
  });
});
