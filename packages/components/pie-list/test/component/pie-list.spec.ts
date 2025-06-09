import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieList - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'components-list--default');
        await basePage.load();

        // Act
        const listComponent = page.locator('pie-list');

        // Assert
        await expect(listComponent).toBeVisible();
    });
});
