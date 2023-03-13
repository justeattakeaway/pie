import { test, expect } from '@playwright/test';

<<<<<<< HEAD
test.beforeEach(async ({ page   , baseURL }) => {
=======
test.beforeEach(async ({ page, baseURL }) => {
>>>>>>> 2f02874aef761367edc70869b9a208994270c86a
    await page.goto(baseURL);
});

test.describe('PIE - Cookie Banner Tests - @desktop', async () => {
    const cookieTypes = [
        'accept-all-cookies-button',
        'accept-necessary-cookies-button'
    ];

    cookieTypes.forEach(async (cookieType) => {
        test(`Should close the cookie banner when the ${cookieType} button is clicked`, async ({ page }) => {
            // Arrange
            const cookieBannerComponent = page.getByTestId('cookie-banner-component');
            const cookieAcceptSelector = page.getByTestId(cookieType);

            // Ensure Cookie banner exists before clicking
            await expect.soft(cookieBannerComponent).toBeVisible();

            await cookieAcceptSelector.click();

            // Assert
            await expect(cookieBannerComponent).not.toBeVisible();
        });
    });
});
