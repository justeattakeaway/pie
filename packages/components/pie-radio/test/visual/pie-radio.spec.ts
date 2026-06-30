import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { radio } from '../helpers/page-object/selectors.ts';

const readingDirections = ['ltr', 'rtl'];

readingDirections.forEach((dir) => {
    test(`should render all prop variations for the direction: ${dir}`, async ({ page }) => {
    // Arrange
        const radioVariations = new BasePage(page, 'radio--variations');
        await radioVariations.load({}, { writingDirection: dir });
        await page.waitForSelector(radio.selectors.container.dataTestId);

        // Assert
        await percySnapshot(page, `PIE Radio Variations: ${dir}`, { widths: [1280] });
    });
});
