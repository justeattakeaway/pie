import { test, expect } from '@playwright/test';
import { disableCookieBanner } from '../helpers/playwright-helper';

test.describe('PIE - 404 Page - @desktop', () => {
    test.beforeEach(async ({ page, baseURL, context }) => {
        await page.goto(baseURL);
        await disableCookieBanner(page, context, false);
    });

    test('Should go to the homepage when clicking "Visit homepage" link', async ({ page, baseURL }) => {
        // Arrange
        const url = `${baseURL}/404.html`;
        await page.goto(url);

        const visitHomepageLink = page.getByTestId('404-visit-homepage');

        // Act
        await Promise.all([
            page.waitForResponse((resp) => resp.status() === 200),
            visitHomepageLink.click()
        ]);

        // Assert
        await expect(page.url()).toBe(baseURL);
    });
});
