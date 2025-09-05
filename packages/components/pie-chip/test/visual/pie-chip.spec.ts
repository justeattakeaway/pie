import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type ChipProps, variants, types } from '../../src/defs.ts';

types.forEach((type) => {
    variants.forEach((variant) => {
        test(`should render - Type: ${type}, Variant: ${variant}`, async ({ page }) => {
            const basePage = new BasePage(page, `chip--${variant}-prop-variations`);
            const props: Partial<ChipProps> = {
                type,
            };

            await basePage.load(props);

            // Follow up to remove in Jan 2026
            await page.waitForTimeout(5000);

            // Note: The Percy snapshot name is now more specific for the button type
            await percySnapshot(page, `PIE Chip - Type: ${type}, Variant: ${variant}`, percyWidths);
        });
    });
});
