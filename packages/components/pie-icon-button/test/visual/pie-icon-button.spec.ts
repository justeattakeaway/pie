import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { iconButton } from '../helpers/page-object/selectors.ts';
import { variants } from '../../src/defs.ts';

variants.forEach((variant) => {
    test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
    // Arrange
        const iconButtonPage = new BasePage(page, `icon-button--${variant}--variations`);
        await iconButtonPage.load();

        const iconButtonComponent = await page.locator(iconButton.selectors.container.dataTestId).first();

        // Assert
        await expect.soft(iconButtonComponent).toBeVisible();
        await percySnapshot(page, `PIE Icon Button - Variant: ${variant}`, percyWidths);
    });
});
