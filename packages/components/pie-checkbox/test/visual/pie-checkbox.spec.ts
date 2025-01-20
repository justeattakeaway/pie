import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const checkedStates = [true, false];
checkedStates.forEach((state) => test(`should render all prop variations for the checked state: ${state}`, async ({ page }) => {
    const checkboxVariationsPage = new BasePage(page, `checkbox--checked-${state}-variations`);
    await checkboxVariationsPage.load();

    await percySnapshot(page, `PIE Checkbox - Checked State: ${state}`, percyWidths);
}));
