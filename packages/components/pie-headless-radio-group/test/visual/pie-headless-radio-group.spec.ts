import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieHeadlessRadioGroup - Visual tests`', () => {
    test('should display the PieHeadlessRadioGroup component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'headless-radio-group--default');

        basePage.load();
        await page.waitForTimeout(2500);

        await percySnapshot(page, 'PieHeadlessRadioGroup - Visual Test');
    });
});
