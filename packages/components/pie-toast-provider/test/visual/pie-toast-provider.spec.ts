import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieToastProvider - Visual tests`', () => {
    test('should display the PieToastProvider component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'toast-provider--default');

        basePage.load();

        // Follow up to remove in Jan
        await page.waitForTimeout(5000);

        await percySnapshot(page, 'PieToastProvider - Visual Test');
    });
});
