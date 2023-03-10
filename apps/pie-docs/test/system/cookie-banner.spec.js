import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL);
});

test.describe('PIE - Cookie Banner Tests - @desktop', async () => {

    const cookieTypes = [
        'accept-all-cookies-button',
        'accept-necessary-cookies-button'
    ];

    cookieTypes.forEach(cookieType => {
        test(`Should close the cookie banner when the ${cookieType} button is clicked`, async ({ page }) => {
            // Arrange
            const cookieBannerComponent = page.getByTestId('cookie-banner-component');
            const cookieAcceptSelector = page.getByTestId(cookieType);
    
            // Ensure Cookie banner exists before clicking
            expect.soft(cookieBannerComponent).toBeVisible();
    
            await cookieAcceptSelector.click();
    
            // Assert
            expect(cookieBannerComponent).not.toBeVisible();
        });
    });
});
