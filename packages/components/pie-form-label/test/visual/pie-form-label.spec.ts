import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page';

test.describe('Pie Form Label - Visual tests`', () => {
    test('should display the Pie Form Label component successfully', async ({ page }) => {
        const formLabelPage = new BasePage(page, 'form-label--default');
        await formLabelPage.load();

        await percySnapshot(page, 'Pie Form Label - Visual Test', percyWidths);
    });
});
