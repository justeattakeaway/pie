import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-popover"]';

test.describe('PiePopover - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'popover--default');

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const popover = page.locator(componentSelector);

        // Assert
        expect(popover).toBeVisible();
    });
});
