import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const componentSelector = '[data-test-id="pie-headless-radio-group"]';

test.describe('PieHeadlessRadioGroup - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'headless-radio-group--default');

        basePage.load();
        await page.waitForTimeout(2500);

        // Act
        const headlessRadioGroup = page.locator(componentSelector);

        // Assert
        expect(headlessRadioGroup).toBeVisible();
    });
});
