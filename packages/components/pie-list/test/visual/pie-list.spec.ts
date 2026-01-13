import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe.skip('PieList - Visual tests`', () => {
    test('should display the PieList component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'list--default');

        basePage.load();
        await page.waitForTimeout(2500);

        await percySnapshot(page, 'PieList - Visual Test');
    });
});
