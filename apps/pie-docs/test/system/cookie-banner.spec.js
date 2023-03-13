import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page   , baseURL }) => {
    await page.goto(baseURL);
});

test.describe('PIE - Cookie Banner Tests - @desktop', async () => {
    test('Should close the cookie banner when the first button is clicked', async ({ page }) => {
        // Arrange
        const cookieBannerComponent = page.getByTestId('cookie-banner-component');
        const cookieAcceptAllSelector = page.getByTestId('accept-all-cookies-button');

        // Expect
        // Ensure Cookie banner exists before clicking
        expect.soft(cookieBannerComponent).toBeVisible();

        // Assert
        await cookieAcceptAllSelector.click();

        // Expect
        expect(cookieBannerComponent).not.toBeVisible();
    });

    test('Should close the cookie banner when the second button is clicked', async ({ page }) => {
        // Arrange
        const cookieBannerComponent = page.getByTestId('cookie-banner-component');
        const cookieNecessarySelector = page.getByTestId('accept-necessary-cookies-button');

        // Expect
        // Ensure Cookie banner exists before clicking
        expect.soft(cookieBannerComponent).toBeVisible();

        // Assert
        await cookieNecessarySelector.click();

        // Expect
        expect(cookieBannerComponent).not.toBeVisible();
    });
});
