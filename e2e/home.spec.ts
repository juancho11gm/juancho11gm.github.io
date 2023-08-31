import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/Juan González/);
});

test('get started link', async ({ page }) => {
	await page.goto('/');
	await page
		.getByRole('navigation')
		.getByRole('link', { name: 'Home' })
		.click();
	await page
		.getByRole('navigation')
		.getByRole('link', { name: 'Projects' })
		.click();
	await page
		.getByRole('navigation')
		.getByRole('link', { name: 'About' })
		.click();
});
