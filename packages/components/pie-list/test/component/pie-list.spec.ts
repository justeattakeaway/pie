import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-list"]';

test.describe('PieList - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'list--default');

        await basePage.load();

        // Act
        const list = page.locator(componentSelector);

        // Assert
        await expect(list).toBeVisible();
    });
});
