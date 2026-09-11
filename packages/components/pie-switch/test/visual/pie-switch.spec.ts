import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const writingDirections = ['dir', 'rtl'];

const percyWidths = {
    widths: [1280],
};

writingDirections.forEach((direction) => {
    test(`should render all prop variations in writing direction: ${direction}`, async ({ page }) => {
        // Arrange
        const switchVariationsPage = new BasePage(page, 'switch--variations');
        await switchVariationsPage.load({}, { writingDirection: direction });

        // Assert
        await percySnapshot(page, `PIE Toast - Writing Direction: ${direction}`, percyWidths);
    });
});
