import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieIconWithBackground - Visual tests`', () => {
    test('should display the PieIconWithBackground component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'icon-with-background--default');
        await basePage.load();

        await percySnapshot(page, 'PieIconWithBackground - Visual Test');
    });
});
