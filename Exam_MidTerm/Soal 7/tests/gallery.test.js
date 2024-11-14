// tests/gallery.test.js
const { test, expect } = require('@playwright/test');

test.describe('Image Gallery Grid Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Load the HTML file in the browser
    await page.goto('file:///' + __dirname + '/../index.html');
  });

  test('should contain at least 6 images in gallery', async ({ page }) => {
    const images = await page.$$('.gallery img');
    expect(images.length).toBeGreaterThanOrEqual(6);
  });

  test('should apply CSS Grid to gallery', async ({ page }) => {
    const gallery = await page.$('.gallery');
    const displayStyle = await gallery.evaluate(el => window.getComputedStyle(el).display);

    expect(displayStyle).toBe('grid');
  });

  test('should display multiple columns on larger screens', async ({ page }) => {

    await page.setViewportSize({ width: 1200, height: 800 });
    const gallery = await page.$('.gallery');
    const gridTemplateColumns = await gallery.evaluate(el => window.getComputedStyle(el).gridTemplateColumns);

    const columnCount = gridTemplateColumns.split(' ').length;
    expect(columnCount).toBeGreaterThan(1);
  });

  test('should display a single column on smaller screens', async ({ page }) => {
    
    await page.setViewportSize({ width: 500, height: 800 });
    const gallery = await page.$('.gallery');
    const gridTemplateColumns = await gallery.evaluate(el => window.getComputedStyle(el).gridTemplateColumns);

    const columnCount = gridTemplateColumns.split(' ').length;
    expect(columnCount).toBe(1);
  });
});
