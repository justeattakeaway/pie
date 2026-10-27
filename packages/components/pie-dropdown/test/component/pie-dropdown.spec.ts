import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-dropdown"]';

test.describe('PieDropdown - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'dropdown--default');

        await basePage.load();

        // Act
        const dropdown = page.locator(componentSelector);

        // Assert
        await expect(dropdown).toBeVisible();
    });
});
