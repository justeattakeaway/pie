import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { variants } from '../../src/defs.ts';

variants.forEach((variant) => {
    test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
        const tagVariationsPage = new BasePage(page, `tag--${variant}-variations`);
        tagVariationsPage.waitUntilStrategy = 'networkidle';

        await tagVariationsPage.load();

        await percySnapshot(page, `PIE Tag - Variant: ${variant}`, percyWidths);
    });
});

test('should allow for custom styling using CSS parts', async ({ page }) => {
    const tagVariationsPage = new BasePage(page, 'tag--custom-styled-tags');
    tagVariationsPage.waitUntilStrategy = 'networkidle';

    await tagVariationsPage.load();

    await percySnapshot(page, 'PIE Tag - CSS parts styles', percyWidths);
});

test('should render slotted raw SVG icons correctly in all sizes', async ({ page }) => {
    const rawSVGPage = new BasePage(page, 'tag--raw-svg-slot');
    rawSVGPage.waitUntilStrategy = 'networkidle';

    await rawSVGPage.load();

    await percySnapshot(page, 'PIE Tag - Raw SVG Slot', percyWidths);
});

test('should render text truncation correctly for different tag sizes and variants', async ({ page }) => {
    const textTruncationPage = new BasePage(page, 'tag--text-truncation');
    textTruncationPage.waitUntilStrategy = 'networkidle';

    await textTruncationPage.load();

    await percySnapshot(page, 'PIE Tag - Text Truncation', percyWidths);
});

test('should render translucent tags over images correctly', async ({ page }) => {
    const translucentOverImagePage = new BasePage(page, 'tag--translucent-over-image');
    translucentOverImagePage.waitUntilStrategy = 'networkidle';

    await translucentOverImagePage.load();

    await percySnapshot(page, 'PIE Tag - Translucent Over Image', percyWidths);
});

test('should render icon-only tags as the large size for both small and large sizes', async ({ page }) => {
    const iconOnlyPage = new BasePage(page, 'tag--icon-only-variations');
    iconOnlyPage.waitUntilStrategy = 'networkidle';

    await iconOnlyPage.load();

    await percySnapshot(page, 'PIE Tag - Icon Only Variations', percyWidths);
});
