import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieDataTable - Visual tests`', () => {
    test('should display the PieDataTable component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'data-table--default');

        basePage.load();
        await page.waitForTimeout(2500);

        await percySnapshot(page, 'PieDataTable - Visual Test');
    });
});
