import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-icon-with-background"]';

test.describe('PieIconWithBackground - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'icon-with-background--default');

        await basePage.load();

        // Act
        const iconWithBackground = page.locator(componentSelector);

        // Assert
        await expect(iconWithBackground).toBeVisible();
    });
});
