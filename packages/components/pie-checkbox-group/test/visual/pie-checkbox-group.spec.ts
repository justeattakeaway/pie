import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { checkboxGroup } from '../helpers/page-object/selectors.ts';

const readingDirections = ['ltr', 'rtl'];

readingDirections.forEach((direction) => test(`should render all prop variations for the checkbox group component with dir: ${direction}`, async ({ page }) => {
    // Arrange
    const checkboxGroupVariations = new BasePage(page, 'checkbox-group--variations');
    await checkboxGroupVariations.load({}, { writingDirection: direction });

    // Assert
    const checkboxGroupComponent = page.getByTestId(checkboxGroup.selectors.container.dataTestId).first();
    await expect.soft(checkboxGroupComponent).toBeVisible();

    await percySnapshot(page, `PIE Checkbox Group - dir: ${direction}`, percyWidths);
}));
