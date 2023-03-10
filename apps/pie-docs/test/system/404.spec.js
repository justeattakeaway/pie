import { test, expect } from '@playwright/test';
import { disableCookieBanner } from '../helpers/playwright-helper';

test.describe('PIE - 404 Page - @desktop', () => {
    test.beforeEach(async ({ page, context }) => {
        await page.goto(process.env.BASE_URL);
        await disableCookieBanner(page, context, false);
    });

    test('Should go to the homepage when clicking "Visit homepage" link', async ({ page }) => {
        // Arrange
        const url = `${page.url()}/404.html`;
        await page.goto(url);

        const visitHomepageLink = page.getByTestId('404-visit-homepage');

        // Act
        await Promise.all([
            page.waitForResponse((resp) => resp.url() === process.env.BASE_URL),
            visitHomepageLink.click()
        ]);

        // Assert
        await expect(page.url()).toBe(process.env.BASE_URL);
    });
});
