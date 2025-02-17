import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('Pie<%= componentName %> - Visual tests`', () => {
    test('should display the Pie<%= componentName %> component successfully', async ({ page }) => {
        const basePage = new BasePage(page, '<%= fileName %>--default');

        basePage.load();
        await page.waitForTimeout(2500);

        await percySnapshot(page, 'Pie<%= componentName %> - Visual Test');
    });
});
