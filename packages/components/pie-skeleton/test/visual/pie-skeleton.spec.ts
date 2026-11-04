import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieSkeleton - Visual tests`', () => {
    test('should display the PieSkeleton component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'skeleton--default');
        await basePage.load();

        await percySnapshot(page, 'PieSkeleton - Visual Test');
    });
});
