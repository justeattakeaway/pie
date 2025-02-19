import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieSelect - Visual tests`', () => {
    test('should display the PieSelect component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'select--default');

        basePage.load();
        await page.waitForTimeout(2500);

        await percySnapshot(page, 'PieSelect - Visual Test');
    });
});
