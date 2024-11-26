import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { variants } from '../../src/defs.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

variants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
  let basePage = new BasePage(page, `chip--${variant}-prop-variations`);

  basePage.load();

    // Follow up to remove in Jan
    await page.waitForTimeout(5000);

    await percySnapshot(page, `PIE Chip - Variant: ${variant}`, percyWidths);
}));
