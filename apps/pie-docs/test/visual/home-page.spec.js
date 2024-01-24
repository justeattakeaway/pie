import { test } from '@playwright/test';
import { disableCookieBanner, percySnapshot } from '../playwright/playwright-helper';

test.describe('PIE - Home Page Tests', async () => {
    const showCookieBannerValues = [true, false];

    showCookieBannerValues.forEach((showCookieBanner) => {
        test(`Should display Cookie Banner: ${showCookieBanner}`, async ({ page, context, baseURL }) => {
            // Arrange
            await page.goto(baseURL);

            if (showCookieBanner) {
                const cookieBannerComponent = page.getByTestId('cookie-banner-component');

                await cookieBannerComponent.isVisible();
            } else {
                await disableCookieBanner(page, context, true);
            }

            // Assert
            await percySnapshot(page, `PIE - Home Page -  Cookie Banner: ${showCookieBanner}`);
        });
    });
});
