// tests/carousel.test.js
const { test, expect } = require('@playwright/test');

test.describe('Image Carousel Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Load the HTML file in the browser
    await page.goto('file:///' + __dirname + '/../index.html');
  });

  test('should display the first image on initial load', async ({ page }) => {
    const carouselImage = await page.$('#carouselImage');
    const src = await carouselImage.getAttribute('src');

    expect(src).toBe('path/to/image1.jpg');  
  });

  test('should update to the next image on Next button click', async ({ page }) => {
    const nextButton = await page.$('#nextButton');
    const carouselImage = await page.$('#carouselImage');

    await nextButton.click();
    let src = await carouselImage.getAttribute('src');
    expect(src).toBe('path/to/image2.jpg');  

    await nextButton.click();
    src = await carouselImage.getAttribute('src');
    expect(src).toBe('path/to/image3.jpg');  
  });

  test('should update to the previous image on Previous button click', async ({ page }) => {
    const prevButton = await page.$('#prevButton');
    const carouselImage = await page.$('#carouselImage');

    await page.click('#nextButton');
    await page.click('#nextButton');

    await prevButton.click();
    let src = await carouselImage.getAttribute('src');
    expect(src).toBe('path/to/image2.jpg');  

    await prevButton.click();
    src = await carouselImage.getAttribute('src');
    expect(src).toBe('path/to/image1.jpg');  // Update based on the actual image paths
  });

  test('should loop to the first image after the last image on Next click', async ({ page }) => {
    const nextButton = await page.$('#nextButton');
    const carouselImage = await page.$('#carouselImage');


    await nextButton.click();
    await nextButton.click();
    await nextButton.click();  // Assuming three images total


    await nextButton.click();
    const src = await carouselImage.getAttribute('src');
    expect(src).toBe('path/to/image1.jpg');  // Update based on the actual image path
  });

  test('should loop to the last image after the first image on Previous click', async ({ page }) => {
    const prevButton = await page.$('#prevButton');
    const carouselImage = await page.$('#carouselImage');


    await prevButton.click();
    const src = await carouselImage.getAttribute('src');
    expect(src).toBe('path/to/image3.jpg');  // Update based on the actual image paths
  });
});
