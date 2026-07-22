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

readingDirections.forEach((direction) => test(`should render checkboxes in list items with dir: ${direction}`, async ({ page }) => {
    const checkboxGroupListItems = new BasePage(page, 'checkbox-group--with-list-items-checked');
    await checkboxGroupListItems.load({}, { writingDirection: direction });

    await expect.soft(page.getByTestId(checkboxGroup.selectors.container.dataTestId)).toBeVisible();

    await percySnapshot(page, `PIE Checkbox Group - list items - dir: ${direction}`, percyWidths);
}));

test('should render checkboxes in list items when the group is disabled', async ({ page }) => {
    const checkboxGroupDisabled = new BasePage(page, 'checkbox-group--with-list-items-group-disabled');
    await checkboxGroupDisabled.load();

    await expect.soft(page.getByTestId(checkboxGroup.selectors.container.dataTestId)).toBeVisible();

    await percySnapshot(page, 'PIE Checkbox Group - list items - disabled group', percyWidths);
});
