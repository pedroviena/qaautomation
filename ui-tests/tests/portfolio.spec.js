const { test, expect } = require('@playwright/test');

test('Verifica o título da página inicial do portfólio', async ({ page }) => {
  // Navega para a URL base
  await page.goto('/');

  // CORREÇÃO: Verifica se o título da página é exatamente o esperado.
  // Isso torna o teste mais preciso e evita falhas de regex.
  await expect(page).toHaveTitle("Pedro Arian Alves Neves Viena - Desenvolvedor Full Stack");
});