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

test.describe('PIE - site nav menu - @desktop', () => {
    test.beforeEach(async ({ page, context }) => {
        await disableCookieBanner(page, context);
    });

    test('Should still be visible when the page has scrolled down', async ({ page }) => {
        // Arrange
        await page.goto('all-about-pie/what-is-pie/');
        const firstNavSection = page.getByTestId('site_nav_section_1');
        const siteHeader = page.getByTestId('site_header');

        // Assert - Navigation and top of the page are visible
        await expect.soft(firstNavSection).toBeVisible();
        await expect.soft(siteHeader).toBeVisible();

        // Act - Scroll to the bottom of the page
        await page.keyboard.down('End');

        // Assert - Navigation is still visible, but top of the page is not
        await expect(firstNavSection).toBeVisible();
        await expect(siteHeader).not.toBeVisible();
    });
});
