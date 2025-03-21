import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const readingDirections = ['ltr', 'rtl'];

test.describe('PieSelect - Visual tests`', () => {
    readingDirections.forEach((direction) => {
        test(`should render prop variations in writing direction: ${direction}`, async ({ page }) => {
            // Arrange
            const selectVariationsPage = new BasePage(page, 'select--variations');
            await selectVariationsPage.load({}, { writingDirection: direction });

            // Assert
            await percySnapshot(page, `PIE Select - Variations - ${direction}`);
        });
    });

    readingDirections.forEach((direction) => {
        test(`should render assistive text and status prop variations in writing direction: ${direction}`, async ({ page }) => {
            // Arrange
            const selectVariationsPage = new BasePage(page, 'select--status-variations');
            await selectVariationsPage.load({}, { writingDirection: direction });

            // Assert
            await percySnapshot(page, `PIE Select - Assistive Text & Status - ${direction}`);
        });
    });
});
