import { test, expect } from '@playwright/test';

test.describe('PIE - 404 Page - @desktop', () => {
    test.beforeEach(async ({ page, baseURL }) => {
        await page.goto(baseURL);
    });

    test('Should go to the homepage when clicking "Visit homepage" link', async ({ page, baseURL }) => {
        // Arrange
        await page.goto('404.html');

        const visitHomepageLink = page.getByTestId('404-visit-homepage');

        // Act
        await Promise.all([
            page.waitForResponse((resp) => resp.status() === 200),
            visitHomepageLink.click()
        ]);

        // Assert
        const actualUrl = new URL(page.url()).href;
        const expectedUrl = new URL(baseURL).href;
        await expect(actualUrl).toBe(expectedUrl);
    });
});
