import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { statusTypes } from '../../src/defs.ts';

const readingDirections = ['ltr', 'rtl'];

readingDirections.forEach(async (dir) => {
    statusTypes.forEach(async (status) => {
        test(`Status - ${status} - ${dir}`, async ({ page }) => {
            const textInputVariations = new BasePage(page, `text-input--${status}-variations`);
            await textInputVariations.load({}, { writingDirection: dir });
            await page.waitForSelector('pie-text-input');

            await percySnapshot(page, `PIE Text Input - statusType - ${status} - ${dir}`, { widths: [1280] });
        });
    });

    test(`Content and slots - ${dir}`, async ({ page }) => {
    // Arrange
        const textInputVariations = new BasePage(page, 'text-input--slot-variations');
        await textInputVariations.load({}, { writingDirection: dir });
        await page.waitForSelector('pie-text-input');

        // Assert
        await percySnapshot(page, `PIE Text Input - Content and Slots - ${dir}`, { widths: [1280] });
    });
});
