import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { variants } from '../../src/defs.ts';

variants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
    const basePage = new BasePage(page, `thumbnail--${variant}-prop-variations`);

    basePage.load();

    await page.waitForTimeout(5000);

    await percySnapshot(page, `PIE Thumbnail - Variant: ${variant}`, percyWidths);
}));
