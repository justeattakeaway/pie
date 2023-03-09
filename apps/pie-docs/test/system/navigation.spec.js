import { test, expect } from '@playwright/test';
import { disableCookieBanner } from '../helpers/playwright-helper';
import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

test.beforeEach(async ({ page, context }) => {
    await page.goto(process.env.BASE_URL);
    await disableCookieBanner(page, context);
});

test.describe('PIE - Status Code Tests - @desktop', () => {
    expectedRoutesJson.forEach((route) => {
        test(`Should respond with a '200' status code for route - ${route}`, async ({ page }) => {
            // Arrange
            const url = `${await page.url()}/${route}`;
            const response = await page.goto(url);

            // Expect
            await expect(response.status()).toBe(200);
        });
    });
});

test.describe('PIE - site nav menu - @mobile', () => {
    test('Should open and close the mobile navigation menu', async ({ page }) => {
        // Arrange
        const navToggleLabel = page.getByTestId('nav_toggle_label');
        const navMenu = page.getByTestId('site_nav');

        // Assert
        // Opens nav menu
        await navToggleLabel.click();

        // Closes nav menu
        await navToggleLabel.click();

        // Expect
        await expect(navMenu).not.toBeVisible();
    });
});
