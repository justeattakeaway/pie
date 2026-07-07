import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieAccordion - Visual tests`', () => {
    test('should display the PieAccordion component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'accordion--default');
        await basePage.load();

        await percySnapshot(page, 'PieAccordion - Visual Test');
    });
});
