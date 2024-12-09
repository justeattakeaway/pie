import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { ButtonComponent } from '../helpers/page-object/pie-button.page.ts';

test('should render all size variations', async ({ page }) => {

    const button = new ButtonComponent(page, 'button--button-size-prop-variations');
    await button.load();

    // Follow up to remove in Jan
    await page.waitForTimeout(2500);

    await percySnapshot(page, 'PIE Button - sizes/isResponsive/responsiveSize', percyWidths);
});

test('should render all size variations, with larger button text string', async ({ page }) => {

    const button = new ButtonComponent(page, 'button--double-line-button-prop-variations');
    await button.load();

    // Follow up to remove in Jan
    await page.waitForTimeout(2500);

    await percySnapshot(page, 'PIE Button - sizes/isResponsive/responsiveSize - double line text', percyWidths);
});
