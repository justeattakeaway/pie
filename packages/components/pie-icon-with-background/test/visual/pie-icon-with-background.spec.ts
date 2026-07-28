import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieIconWithBackground - Visual tests', () => {
    test('should render all shape variations', async ({ page }) => {
        const basePage = new BasePage(page, 'icon-with-background--shape-variations');
        await basePage.load();

        await percySnapshot(page, 'PieIconWithBackground - Shape variations', percyWidths);
    });
});
