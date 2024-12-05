import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieThumbnail - Visual tests`', () => {
    test('should display the PieThumbnail component successfully', async ({ page }) => {
      const basePage = new BasePage(page, 'thumbnail--default');

      basePage.load();
      await page.waitForTimeout(2500);

      await percySnapshot(page, 'PieThumbnail - Visual Test');
    });
});
