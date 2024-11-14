const { test, expect } = require('@playwright/test');

test.describe('Change Content Test', () => {
  test.beforeEach(async ({ page }) => {
    // Load the HTML file in the browser
    await page.goto('file:///' + __dirname + '/../index.html');
  });

  test('should display initial text in paragraph', async ({ page }) => {
    const paragraphText = await page.locator('#info').innerText();
    expect(paragraphText).toBe('Ini adalah teks awal.');
  });

  test('should change text on button click', async ({ page }) => {
  
    await page.click('#changeTextButton');
  
    const updatedText = await page.locator('#info').innerText();
    expect(updatedText).toBe('Teks telah diubah!');
  });

  test('should trigger event listener on button click', async ({ page }) => {
    await page.evaluate(() => {
      window.eventTriggered = false;
      document.getElementById('changeTextButton').addEventListener('click', () => {
        window.eventTriggered = true;
      });
    });

    await page.click('#changeTextButton');

    const eventTriggered = await page.evaluate(() => window.eventTriggered);
    expect(eventTriggered).toBe(true);
  });
});
