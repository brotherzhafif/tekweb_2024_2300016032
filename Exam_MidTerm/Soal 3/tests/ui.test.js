const { test, expect } = require('@playwright/test');

test.describe('Simple Navigation Test', () => {
  test.beforeEach(async ({ page }) => {
    // Load the HTML file in the browser
    await page.goto('file:///' + __dirname + '/../index.html');
  });

  test('should contain four navigation links with correct text', async ({ page }) => {
    const links = await page.$$('nav a');
    const linkTexts = await Promise.all(links.map(async link => await link.innerText()));

    expect(links.length).toBe(4);
    expect(linkTexts).toEqual(['Home', 'About', 'Services', 'Contact']);
  });

  test('should display navigation links horizontally', async ({ page }) => {
    const nav = await page.$('nav');
    const displayStyle = await nav.evaluate(el => window.getComputedStyle(el).display);

    expect(displayStyle).toBe('flex'); // Common horizontal layout style
  });

  test('should apply hover effect on navigation links', async ({ page }) => {
    const link = await page.$('nav a:first-child');  // Target first link as example

    const initialColor = await link.evaluate(el => window.getComputedStyle(el).color);

    await link.hover();
    const hoverColor = await link.evaluate(el => window.getComputedStyle(el).color);

    expect(hoverColor).not.toBe(initialColor);
  });

  test('should be responsive on smaller screens', async ({ page }) => {

    await page.setViewportSize({ width: 500, height: 800 });
    const nav = await page.$('nav');
    const flexDirection = await nav.evaluate(el => window.getComputedStyle(el).flexDirection);

    expect(['row', 'column']).toContain(flexDirection);
  });
});
