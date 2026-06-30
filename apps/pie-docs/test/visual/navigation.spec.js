import { test } from '@playwright/test';
import PERCY_BREAKPOINTS from './percy-breakpoints';
import { percySnapshot } from '../playwright/playwright-helper';

test.describe('PIE - Page Visual Tests', () => {
    test.beforeEach(async ({ page, baseURL }) => {
        await page.goto(baseURL);
    });

    const templateVariants = [
        { route: '/', name: 'Home Page' },
        { route: '/all-about-pie/what-is-pie/', name: 'Content Page' },
        { route: '/components/card/', name: 'Content Page with Table of Contents' },
        { route: '/components/card/code', name: 'Content Page with Tabs' },
        { route: '/foundations/colour/tokens/alias/light/', name: 'Page with Toggles' },
        { route: '/patterns/nested-overrides/', name: 'Usage shortcode examples' },
        { route: '/foo/bar/baz/', name: '404 Page' },
    ];

    templateVariants.forEach((variant) => {
        test(`Should take a screenshot of the requested route: - ${variant.name}`, async ({ page }) => {
            // Arrange
            await page.goto(variant.route, { waitUntil: 'networkidle' });

            // Assert
            await percySnapshot(page, `PIE - ${variant.name}`);
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
