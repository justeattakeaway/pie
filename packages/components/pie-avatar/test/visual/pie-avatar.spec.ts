import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieAvatar - Visual tests`', () => {
    test('should display the PieAvatar component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'avatar--default');

        basePage.load();
        await page.waitForTimeout(2500);

        await percySnapshot(page, 'PieAvatar - Visual Test');
    });
});
