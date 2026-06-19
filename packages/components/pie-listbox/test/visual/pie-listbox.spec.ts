import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieListbox - Visual tests`', () => {
    test('should display the PieListbox component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'listbox--default');
        await basePage.load();

        await percySnapshot(page, 'PieListbox - Visual Test');
    });
});
