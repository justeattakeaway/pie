import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-accordion"]';

test.describe('PieAccordion - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'accordion--default');

        await basePage.load();

        // Act
        const accordion = page.locator(componentSelector);

        // Assert
        await expect(accordion).toBeVisible();
    });
});
