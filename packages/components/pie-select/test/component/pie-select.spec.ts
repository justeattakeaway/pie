import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-select"]';

test.describe('PieSelect - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'select--default');

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const select = page.locator(componentSelector);

        // Assert
        expect(select).toBeVisible();
    });
});