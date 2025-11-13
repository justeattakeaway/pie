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

test('should render slotted raw SVG icons correctly in all sizes', async ({ page }) => {
    const rawSVGPage = new BasePage(page, 'tag--raw-svg-slot');

    await rawSVGPage.load();

    await percySnapshot(page, 'PIE Tag - Raw SVG Slot', percyWidths);
});

test('should render text truncation correctly for different tag sizes and variants', async ({ page }) => {
    const textTruncationPage = new BasePage(page, 'tag--text-truncation');

    await textTruncationPage.load();

    await percySnapshot(page, 'PIE Tag - Text Truncation', percyWidths);
});

test('should render translucent tags over images correctly', async ({ page }) => {
    const translucentOverImagePage = new BasePage(page, 'tag--translucent-over-image');

    await translucentOverImagePage.load();

    await percySnapshot(page, 'PIE Tag - Translucent Over Image', percyWidths);
});

test('should render icon-only tags as the large size for both small and large sizes', async ({ page }) => {
    const iconOnlyPage = new BasePage(page, 'tag--icon-only-variations');

    await iconOnlyPage.load();

    await percySnapshot(page, 'PIE Tag - Icon Only Variations', percyWidths);
});
