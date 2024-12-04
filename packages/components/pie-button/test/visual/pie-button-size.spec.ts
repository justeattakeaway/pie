import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { ButtonComponent } from '../helpers/page-object/pie-button.component.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
test('should render all size variations', async ({ page }) => {
    // Arrange
    const buttonPage = new BasePage(page, 'button--responsive-button-variations');
    const buttonComponent = new ButtonComponent(page);
    await buttonPage.load();

    // Assert
    await expect.soft(buttonComponent.componentLocator.first()).toBeVisible();
    await percySnapshot(page, 'PIE Button - sizes/isResponsive/responsiveSize', { widths: [1280] });
});

test('should render all size variations, with larger button text string', async ({ page }) => {
    // Arrange
    const buttonPage = new BasePage(page, 'button--double-line-text-button-variations');
    const buttonComponent = new ButtonComponent(page);
    await buttonPage.load();

    // Assert
    await expect.soft(buttonComponent.componentLocator.first()).toBeVisible();
    await percySnapshot(page, 'PIE Button - sizes/isResponsive/responsiveSize - double line text', percyWidths);
});
