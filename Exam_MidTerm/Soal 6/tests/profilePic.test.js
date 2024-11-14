// tests/profilePic.test.js
const { test, expect } = require('@playwright/test');

test.describe('Profile Picture Styling Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Load the HTML file in the browser
    await page.goto('file:///' + __dirname + '/../index.html');
  });

  test('should have an img element inside .profile-pic', async ({ page }) => {
    const img = await page.$('.profile-pic img');
    expect(img).not.toBeNull();
  });

  test('should style image as a circle', async ({ page }) => {
    const img = await page.$('.profile-pic img');
    const width = await img.evaluate(el => el.clientWidth);
    const height = await img.evaluate(el => el.clientHeight);
    const borderRadius = await img.evaluate(el => window.getComputedStyle(el).borderRadius);

    expect(width).toBe(height);
    expect(borderRadius).toBe('50%');
  });

  test('should apply border styling to image', async ({ page }) => {
    const img = await page.$('.profile-pic img');
    const borderWidth = await img.evaluate(el => window.getComputedStyle(el).borderWidth);
    const borderColor = await img.evaluate(el => window.getComputedStyle(el).borderColor);

    expect(parseFloat(borderWidth)).toBeGreaterThan(0);
    expect(borderColor).not.toBe('rgba(0, 0, 0, 0)');  // Ensures border color is defined
  });

  test('should apply shadow effect to image', async ({ page }) => {
    const img = await page.$('.profile-pic img');
    const boxShadow = await img.evaluate(el => window.getComputedStyle(el).boxShadow);

    expect(boxShadow).not.toBe('none');
  });

  test('should maintain responsiveness on different screen sizes', async ({ page }) => {
    const img = await page.$('.profile-pic img');

    await page.setViewportSize({ width: 400, height: 800 });
    const smallWidth = await img.evaluate(el => el.clientWidth);

    await page.setViewportSize({ width: 1200, height: 800 });
    const largeWidth = await img.evaluate(el => el.clientWidth);

    expect(smallWidth).toBeLessThanOrEqual(largeWidth);
  });
});
