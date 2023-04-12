import { test, expect } from '@playwright/test';
import { disableCookieBanner } from '../playwright/playwright-helper';
import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);
});

test.describe('PIE - Status Code Tests - @desktop', () => {
    test.beforeEach(async ({ page, context }) => {
        await disableCookieBanner(page, context, false);
    });

    expectedRoutesJson.forEach((route) => {
        test(`Should respond with a '200' status code for route - ${route}`, async ({ page }) => {
            // Arrange
            const response = await page.goto(route);

            // Assert
            await expect(response.status()).toBe(200);
        });
    });
});

test.describe('PIE - site nav menu - @mobile', () => {
    test.beforeEach(async ({ page, context }) => {
        await disableCookieBanner(page, context);
    });

    test('Should open and close the mobile navigation menu', async ({ page }) => {
        // Arrange
        const navToggleLabel = page.getByTestId('nav_toggle_label');
        const navMenu = page.getByTestId('site_nav');

        // Act - Open nav menu
        await navToggleLabel.click();

        // Assert - Nav menu is open
        await expect.soft(navMenu).toBeVisible();

        // Act - Close nav menu
        await navToggleLabel.click();

        // Assert - Nav menu is closed
        await expect(navMenu).not.toBeVisible();
    });
});
