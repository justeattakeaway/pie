import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { variants } from '../../src/defs.ts';

variants.forEach((variant) => {
    test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
        const tagVariationsPage = new BasePage(page, `tag--${variant}-variations`);

        await tagVariationsPage.load();

        await percySnapshot(page, `PIE Tag - Variant: ${variant}`, percyWidths);
    });
});

test('should allow for custom styling using CSS parts', async ({ page }) => {
    const tagVariationsPage = new BasePage(page, 'tag--custom-styled-tags');

    await tagVariationsPage.load();

    await percySnapshot(page, 'PIE Tag - CSS parts styles', percyWidths);
});
