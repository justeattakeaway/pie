import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-list"]';

test.describe.skip('PieList - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'list--default');

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const list = page.locator(componentSelector);

        // Assert
        expect(list).toBeVisible();
    });
});
