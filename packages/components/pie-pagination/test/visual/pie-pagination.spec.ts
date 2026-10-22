import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PiePagination - Visual tests`', () => {
    test('should display the PiePagination component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'pagination--default');
        await basePage.load();

        await percySnapshot(page, 'PiePagination - Visual Test');
    });
});
