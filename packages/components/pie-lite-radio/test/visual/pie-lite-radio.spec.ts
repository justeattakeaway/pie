import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieLiteRadio - Visual tests`', () => {
    test('should display the PieLiteRadio component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'lite-radio--default');
        basePage.waitUntilStrategy = 'networkidle';

        await basePage.load();

        await percySnapshot(page, 'PieLiteRadio - Visual Test');
    });
});
