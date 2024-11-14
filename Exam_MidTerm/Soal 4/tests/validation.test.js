// tests/validation.test.js
const { test, expect } = require('@playwright/test');

test.describe('Form Validation Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Load the HTML file in the browser
    await page.goto('file:///' + __dirname + '/../index.html');
  });

  test('should show error when name is empty', async ({ page }) => {
   
    await page.fill('#email', 'test@example.com');
    await page.fill('#message', 'This is a valid message with more than 20 characters.');
    
    await page.click('button[type="submit"]');
   
    const errorText = await page.locator('#error').innerText();
    expect(errorText).toContain('Nama tidak boleh kosong');
  });

  test('should show error for invalid email format', async ({ page }) => {
   
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'invalid-email');
    await page.fill('#message', 'This is a valid message with more than 20 characters.');
    
    await page.click('button[type="submit"]');
    
    const errorText = await page.locator('#error').innerText();
    expect(errorText).toContain('Email harus valid');
  });

  test('should show error for message less than 20 characters', async ({ page }) => {
  
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#message', 'Short message');
    
    await page.click('button[type="submit"]');
  
    const errorText = await page.locator('#error').innerText();
    expect(errorText).toContain('Pesan minimal 20 karakter');
  });

  test('should submit form successfully when all fields are valid', async ({ page }) => {

    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#message', 'This is a valid message with more than 20 characters.');
    
    await page.click('button[type="submit"]');
    
    const errorText = await page.locator('#error').innerText();
    expect(errorText).toBe('');
  });
});
