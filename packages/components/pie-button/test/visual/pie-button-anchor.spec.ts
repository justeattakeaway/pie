import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ButtonComponent } from '../helpers/page-object/pie-button.component.ts';
import { variants } from '../../src/defs.ts';

variants.forEach((variant) => {
    test(`should render all size and variant variations for anchor tag for variant: ${variant}`, async ({ page }) => {
        // Arrange
        const buttonPage = new BasePage(page, `button--${variant}-anchor-variations`);
        const buttonComponent = new ButtonComponent(page);
        await buttonPage.load();

        // Assert
        await expect.soft(buttonComponent.componentLocator.first()).toBeVisible();
        await percySnapshot(page, `PIE Button Anchor Variants - ${variant}`, percyWidths);
    });
});

