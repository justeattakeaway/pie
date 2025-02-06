import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { variants } from '../../src/defs.ts';
import { thumbnail } from '../helpers/selectors.ts';

variants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
    const basePage = new BasePage(page, `thumbnail--${variant}-prop-variations`);
    await basePage.load();

    const thumbnailComponent = page.getByTestId(thumbnail.selectors.container.dataTestId).first();
    await expect.soft(thumbnailComponent).toBeVisible();

    await percySnapshot(page, `PIE Thumbnail - Variant: ${variant}`, { widths: [1280] });
}));

test('should render all prop variants for background variants', async ({ page }) => {
    const basePage = new BasePage(page, 'thumbnail--background-prop-variations');
    await basePage.load();

    const thumbnailComponent = page.getByTestId(thumbnail.selectors.container.dataTestId).first();
    await expect.soft(thumbnailComponent).toBeVisible();

    await percySnapshot(page, 'PIE Thumbnail - backgroundColor variants', { widths: [1280] });
});

test('should render all prop variations for the 4by3 aspect ratio', async ({ page }) => {
    const basePage = new BasePage(page, 'thumbnail--aspect-ratio-4-by-3-prop-variations');
    await basePage.load();

    const thumbnailComponent = page.getByTestId(thumbnail.selectors.container.dataTestId).first();
    await expect.soft(thumbnailComponent).toBeVisible();

    await percySnapshot(page, 'PIE Thumbnail - aspectRatio: 4by3', { widths: [1280] });
});

test('should render all prop variations for the 16by9 aspect ratio', async ({ page }) => {
    const basePage = new BasePage(page, 'thumbnail--aspect-ratio-16-by-9-prop-variations');
    await basePage.load();

    const thumbnailComponent = page.getByTestId(thumbnail.selectors.container.dataTestId).first();
    await expect.soft(thumbnailComponent).toBeVisible();

    await percySnapshot(page, 'PIE Thumbnail - aspectRatio: 16by9', { widths: [1280] });
});
