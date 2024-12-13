import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-thumbnail"]';

test.describe('PieThumbnail - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'thumbnail--default');

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const thumbnail = page.locator(componentSelector);

        // Assert
        expect(thumbnail).toBeVisible();
    });
});
