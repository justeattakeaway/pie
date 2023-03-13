import { test, expect } from '@playwright/test';
import { disableCookieBanner } from '../playwright/playwright-helper';

test.describe('PIE - 404 Page - @desktop', () => {
<<<<<<< HEAD
    test.beforeEach(async ({ page, context, baseURL }) => {
=======
    test.beforeEach(async ({ page, baseURL, context }) => {
>>>>>>> 7bf428922b8975e7a9964cd647c98ee26ae7ed5c
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
<<<<<<< HEAD
            page.waitForResponse((resp) => resp.url() === baseURL),
=======
            page.waitForResponse((resp) => resp.status() === 200),
>>>>>>> 7bf428922b8975e7a9964cd647c98ee26ae7ed5c
            visitHomepageLink.click()
        ]);

        // Assert
        await expect(page.url()).toBe(baseURL);
    });
});
