import { test } from '../playwright/fixtures';
import { disableCookieBanner } from '../playwright/playwright-helper';
import expectedRoutesJson from '../snapshots/expected-routes.snapshot.json';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);
});

test.describe('PIE - Page Visual Tests - @desktop', () => {
    test.beforeEach(async ({ page, context }) => {
        await disableCookieBanner(page, context, false);
    });

    expectedRoutesJson.forEach((route) => {
        test(`Should respond take a screenshot of the requested route: - ${route}`, async ({ page, percyScreenshot }) => {
            // Arrange
            const url = `${await page.url()}/${route}`;
            await page.goto(url, { waitUntil: 'networkidle' });

            // Assert
            await percyScreenshot(page, { screenshotName: 'Example Site' });
        });
    });
});

// test.describe('PIE - site nav menu - @mobile', () => {
//     test.beforeEach(async ({ page, context }) => {
//         await disableCookieBanner(page, context);
//     });

//     test('Should open and close the mobile navigation menu', async ({ page }) => {
//         // Arrange
//         const navToggleLabel = page.getByTestId('nav_toggle_label');
//         const navMenu = page.getByTestId('site_nav');

//         // Act - Open nav menu
//         await navToggleLabel.click();

//         // Assert - Nav menu is open
//         await expect.soft(navMenu).toBeVisible();

//         // Act - Close nav menu
//         await navToggleLabel.click();

//         // Assert - Nav menu is closed
//         await expect(navMenu).not.toBeVisible();
//     });
// });
