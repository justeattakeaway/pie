import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const readingDirections = ['ltr', 'rtl'];

test.describe('PieBreadcrumb - Visual tests`', () => {
    test('should truncate the breadcrumb text when the label is too long (bigger than 250px)', async ({ page }) => {
        // Arrange
        const basePage = new BasePage(page, 'breadcrumb--with-long-text');
        basePage.load();
        await page.waitForTimeout(2500);

        // Assert
        await percySnapshot(page, 'PieBreadcrumb - Truncation Visual Test');
    });

    readingDirections.forEach((direction) => {
        test(`should render items in writing direction: ${direction}`, async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'breadcrumb--default');
            await basePage.load({}, { writingDirection: direction });

            // Assert
            await percySnapshot(page, `PieBreadcrumb - ${direction}`);
        });
    });
});
