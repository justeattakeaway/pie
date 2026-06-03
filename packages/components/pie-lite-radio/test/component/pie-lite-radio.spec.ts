import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-lite-radio"]';

test.describe('PieLiteRadio - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'lite-radio--default');

        await basePage.load();

        // Act
        const liteRadio = page.locator(componentSelector);

        // Assert
        expect(liteRadio).toBeVisible();
    });
});
