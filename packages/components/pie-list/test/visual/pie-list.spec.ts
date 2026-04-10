import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieList - Visual tests`', () => {
    test('should display the PieList component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'list--default');

        await basePage.load();

        await percySnapshot(page, 'PieList - Visual Test');
    });
});
