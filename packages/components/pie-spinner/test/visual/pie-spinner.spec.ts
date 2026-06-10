import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { variants } from '../../src/defs.ts';
import { spinner } from '../helpers/page-object/selectors.ts';

test.describe('PieSpinner - Visual tests`', () => {
    variants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
    // Arrange
        const spinnerVariantsPage = new BasePage(page, `spinner--${variant}-variations`);
        await spinnerVariantsPage.load();

        // Assert
        await expect(page.getByTestId(spinner.selectors.container.dataTestId).first()).toBeVisible();
        await percySnapshot(page, `PIE Spinner - Variant: ${variant}`, percyWidths);
    }));
});
