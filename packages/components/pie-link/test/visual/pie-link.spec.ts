import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import {
    sizes,
    variants,
} from '../../src/defs.ts';

variants.forEach((variant) => {
    sizes.forEach((size) => {
        test(`should render all prop variations for Variant: ${variant} and Size: ${size}`, async ({ page }) => {
            const linkVariationsPage = new BasePage(page, `link--${variant}-${size}-variations`);

            await linkVariationsPage.load();

            await percySnapshot(page, `PIE Link - Variant: ${variant} - Size: ${size}`, percyWidths);
        });
    });
});
