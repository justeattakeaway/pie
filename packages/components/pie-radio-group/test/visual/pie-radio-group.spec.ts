import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const directions = ['ltr', 'rtl'];

directions.forEach((direction) => test(`should render all prop variations for direction: ${direction}`, async ({ page }) => {
    const radioGroupVariationsPage = new BasePage(page, 'radio-group--variations');
    await radioGroupVariationsPage.load({}, { writingDirection: direction });
    await page.waitForSelector('pie-radio-group');

    await percySnapshot(page, `PIE Radio Group - direction: ${direction}`, percyWidths);
}));

