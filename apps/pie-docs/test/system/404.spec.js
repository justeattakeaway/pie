import { test, expect } from '@playwright/test';
import { disableCookieBanner } from '../helpers/playwright-helper';

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL);
});

test.describe('PIE - 404 Page - @desktop', () => {
    test.beforeEach(async ({ page, context }) => {
        await disableCookieBanner(page, context, false);
    });

    test('Should go to the homepage when clicking "Visit homepage" link', async ({ page }) => {
        // Arrange
        const url = `${await page.url()}/404.html`;
        await page.goto(url);

        const visitHomepageLink = page.getByTestId('404-visit-homepage');

        // Act
        await Promise.all([
            page.waitForURL(process.env.BASE_URL),
            visitHomepageLink.click()
        ]);

        // Assert
        await expect(page.url()).toBe(process.env.BASE_URL);
    });
});
