const { test, expect } = require('@playwright/test');

test('Verifica o título da página inicial do portfólio', async ({ page }) => {
  // O Playwright vai navegar para a URL base definida no `playwright.config.js`
  // ou na variável de ambiente. Como não especificamos um caminho, ele vai para a raiz "/".
  await page.goto('/');

  // Verifica se o título da página é o esperado
  await expect(page).toHaveTitle(/Pedro Viena/);
});