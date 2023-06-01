import { test, expect } from '@playwright/test';
import { disableCookieBanner } from '../playwright/playwright-helper';
import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';
import { isElementVisibleInViewport } from '../helpers/functions';

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
    let siteNavigation;
    let contentHeader;

    test.beforeEach(async ({ page, context }) => {
        await disableCookieBanner(page, context);
        await page.goto('all-about-pie/what-is-pie/');

        // Arrange
        siteNavigation = await page.getByTestId('site_nav_section_1');
        contentHeader = await page.getByTestId('content_header');
    });

    test('Should be visible at the top of the page', async () => {
        // Assert - Navigation and top of the page are visible
        await expect(await isElementVisibleInViewport(siteNavigation)).toBeTruthy();
        await expect(await isElementVisibleInViewport(contentHeader)).toBeTruthy();
    });

    test('Should still be visible when the page has scrolled down', async ({ page }) => {
        // Act - Scroll to the bottom of the page
        await page.keyboard.press('End');
        await page.waitForTimeout(1000);

        // Assert - Navigation is still visible, but top of the page is not
        await expect.soft(await isElementVisibleInViewport(contentHeader)).not.toBeTruthy();
        await expect(await isElementVisibleInViewport(siteNavigation)).toBeTruthy();
    });
});
