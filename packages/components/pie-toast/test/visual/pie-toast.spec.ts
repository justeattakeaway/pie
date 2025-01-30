import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { toast } from 'test/helpers/page-object/selectors.ts';
import { variants } from '../../src/defs.ts';

const percyWidths = {
    widths: [1475],
};

variants.forEach((variant) => {
    test(`should render all prop variations for Variant: ${variant}`, async ({ page }) => {
        const toastVariationsPage = new BasePage(page, `toast--${variant}-variations`);

        await toastVariationsPage.load();
        await expect.soft(page.getByTestId(toast.selectors.container.dataTestId).first()).toBeVisible();

        await percySnapshot(page, `PIE Toast - Variant: ${variant}`, percyWidths);
    });
});
