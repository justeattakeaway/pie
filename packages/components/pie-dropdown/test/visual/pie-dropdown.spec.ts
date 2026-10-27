import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieDropdown - Visual tests`', () => {
    test('should display the PieDropdown component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'dropdown--default');
        await basePage.load();

        await percySnapshot(page, 'PieDropdown - Visual Test');
    });
});
