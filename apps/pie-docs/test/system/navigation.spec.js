import { test, expect } from '@playwright/test';
import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080');
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
        const cookieAcceptAllSelector = page.getByTestId('accept-all-cookies-button');
        const navToggleLabel = page.getByTestId('nav_toggle_label');
        const navToggleInput = page.getByTestId('nav_toggle_input');

        // Assert
        await cookieAcceptAllSelector.click();
        await navToggleLabel.click();
        await navToggleLabel.click();

        // Expect
        await expect(navToggleInput).not.toBeFocused();
    });
});
