import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import { dataTableStories } from '../constants.ts';

const readingDirections = ['ltr', 'rtl'];

test.describe('PieDataTable - Visual tests`', () => {
    dataTableStories.forEach((storyUrl: string) => {
        readingDirections.forEach((dir) => {
            const friendlyStoryName = storyUrl.replace(/-/g, ' ');

            test(`should display the PieDataTable component successfully - ${friendlyStoryName} - ${dir}`, async ({ page }) => {
                const basePage = new BasePage(page, `data-table--${storyUrl}`);

                basePage.load({}, { writingDirection: dir });
                await page.waitForTimeout(2500);

                await percySnapshot(page, `PieDataTable - ${friendlyStoryName} - ${dir}`);
            });
        });
    });
});
