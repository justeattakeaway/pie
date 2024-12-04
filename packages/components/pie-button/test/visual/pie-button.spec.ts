import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { ButtonComponent } from '../helpers/page-object/pie-button.component.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { variants } from '../../src/defs.ts';

variants.forEach((variant) => {
    test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
        // Arrange
        const buttonPage = new BasePage(page, `button--${variant}-variations`);
        const buttonComponent = new ButtonComponent(page);
        await buttonPage.load();

        // Assert
        await expect.soft(buttonComponent.componentLocator.first()).toBeVisible();
        await percySnapshot(page, `PIE Button - Variant: ${variant}`, { widths: [1280] });
    });
});
