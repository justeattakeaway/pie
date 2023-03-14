import { test } from '../playwright/fixtures';
import { percySnapshot } from '../playwright/playwright-helper';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);
});

test.describe('PIE - Cookie Banner Tests', async () => {
    test('Should display Cookie Banner', async ({ page }) => {
        // Arrange
        const cookieBannerComponent = page.getByTestId('cookie-banner-component');

        await cookieBannerComponent.isVisible();

        // Assert
        await percySnapshot(page, 'PIE - Cookie Banner');
    });
});
