import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieTooltip - Visual tests`', () => {
    test('should display the PieTooltip component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'tooltip--default');
        await basePage.load();

        await percySnapshot(page, 'PieTooltip - Visual Test');
    });
});
