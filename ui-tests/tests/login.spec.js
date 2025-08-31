
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test('Login com JWT válido', async ({ page }) => {
  const loginPage = new LoginPage(page);

  
  const user = process.env.TEST_USER || "user@test.com";
  const password = process.env.TEST_PASSWORD || "123456";

  await loginPage.goto();
  await loginPage.login(user, password);

  
  await expect(page).toHaveURL(/.*dashboard/);
});