import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const checkedStates = [true, false];
checkedStates.forEach((state) => test(`should render all prop variations for the checked state: ${state}`, async ({ page }) => {
    // Arrange
    const checkboxVariationsPage = new BasePage(page, `checkbox--checked-${state}-variations`);
    checkboxVariationsPage.waitUntilStrategy = 'networkidle';
    await checkboxVariationsPage.load();

    // Assert
    await percySnapshot(page, `PIE Checkbox - Checked State: ${state}`, percyWidths);
}));

test('should render all label position and fit variations', async ({ page }) => {
    // Arrange
    const labelPositionPage = new BasePage(page, 'checkbox--label-position-variations');
    labelPositionPage.waitUntilStrategy = 'networkidle';
    await labelPositionPage.load();

    // Assert
    await percySnapshot(page, 'PIE Checkbox - Label Position Variations', percyWidths);
});

test('should render all rich label variations', async ({ page }) => {
    // Arrange
    const richLabelPage = new BasePage(page, 'checkbox--rich-label-variations');
    richLabelPage.waitUntilStrategy = 'networkidle';
    await richLabelPage.load();

    // Assert
    await percySnapshot(page, 'PIE Checkbox - Rich Label Variations', percyWidths);
});
