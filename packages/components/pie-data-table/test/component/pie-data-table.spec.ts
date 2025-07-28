import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-data-table"]';

test.describe('PieDataTable - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'data-table--default');

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const dataTable = page.locator(componentSelector);

        // Assert
        expect(dataTable).toBeVisible();
    });
});
