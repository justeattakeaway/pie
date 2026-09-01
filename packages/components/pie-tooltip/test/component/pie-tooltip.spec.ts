import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-tooltip"]';

test.describe('PieTooltip - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'tooltip--default');

        await basePage.load();

        // Act
        const tooltip = page.locator(componentSelector);

        // Assert
        await expect(tooltip).toBeVisible();
    });
});
