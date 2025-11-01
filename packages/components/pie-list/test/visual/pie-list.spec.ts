import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const directions = ['ltr', 'rtl'];

test.describe('PieList - Visual tests`', () => {
    test('should display the PieList component successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'list--default');

        await basePage.load();

        await percySnapshot(page, 'PieList - Visual Test');
    });

    directions.forEach((dir) => {
        test(`should render all prop variations with ${dir} direction`, async ({ page }) => {
            const listVariantsPage = new BasePage(page, 'list--variants');
            await listVariantsPage.load({}, { writingDirection: dir });

            await expect.soft(page.locator('pie-list').first()).toBeVisible();
            await percySnapshot(page, `PIE List - Variants - ${dir}`, percyWidths);
        });
    });
});
