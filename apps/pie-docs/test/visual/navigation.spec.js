import { test } from '@playwright/test';
import PERCY_BREAKPOINTS from './percy-breakpoints';
import { percySnapshot } from '../playwright/playwright-helper';
import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

test.describe('PIE - Page Visual Tests', () => {
    test.beforeEach(async ({ page, baseURL }) => {
        await page.goto(baseURL);
    });

    expectedRoutesJson.forEach((route) => {
        test(`Should take a screenshot of the requested route: - ${route}`, async ({ page }) => {
            // Arrange
            await page.goto(route, { waitUntil: 'networkidle' });

            // Assert
            await percySnapshot(page, `PIE - ${route}`);
        });
    });
});

test.describe('PIE - Site Nav Menu', () => {
    test.beforeEach(async ({ page, baseURL }) => {
        await page.goto(baseURL);
    });

    test('Should open and close the mobile navigation menu - @mobile', async ({ page }) => {
        // Arrange
        const navToggleLabel = page.getByTestId('nav_toggle_label');
        const navMenu = page.getByTestId('site_nav');

        // Act - Open nav menu
        await navToggleLabel.click();
        await navMenu.isVisible();

        const mobileWidths = [PERCY_BREAKPOINTS.MOBILE, PERCY_BREAKPOINTS.TABLET];

        // Assert
        await percySnapshot(page, 'PIE - Mobile Nav', mobileWidths);
    });
});
