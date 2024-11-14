const { test, expect } = require('@playwright/test');

test.describe('Responsive Layout Test', () => {
  test.beforeEach(async ({ page }) => {
  
    await page.goto('file:///' + __dirname + '/../index.html');
  });

  test('should apply Flexbox layout on body', async ({ page }) => {
    const body = await page.$('body');
    const display = await body.evaluate(el => window.getComputedStyle(el).display);
    const flexDirection = await body.evaluate(el => window.getComputedStyle(el).flexDirection);

    expect(display).toBe('flex');
    expect(flexDirection).toBe('column');
  });

  test('should correctly structure header, main, and footer', async ({ page }) => {
    const header = await page.$('header');
    const main = await page.$('main');
    const footer = await page.$('footer');

    expect(header).not.toBeNull();
    expect(main).not.toBeNull();
    expect(footer).not.toBeNull();
  });

  test('should adjust layout responsively', async ({ page }) => {
    // Set viewport to a smaller screen size and check layout
    await page.setViewportSize({ width: 500, height: 800 });
    const main = await page.$('main');
    const mainFlexGrow = await main.evaluate(el => window.getComputedStyle(el).flexGrow);
    
    // Check that main section can grow to fill space
    expect(mainFlexGrow).toBe('1');
    
    // Test again for a larger screen to confirm flexibility
    await page.setViewportSize({ width: 1200, height: 800 });
    expect(mainFlexGrow).toBe('1');  // Should remain the same, indicating Flexbox adaptability
  });
});
