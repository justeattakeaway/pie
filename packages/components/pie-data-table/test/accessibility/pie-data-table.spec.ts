import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import { dataTableStories } from '../constants.ts';

test.describe('PieDataTable - Accessibility tests', () => {
    dataTableStories.forEach((storyUrl: string) => {
        const friendlyStoryName = storyUrl.replace(/-/g, ' ');

        test(`should test a11y for Story: ${friendlyStoryName}`, async ({ page, makeAxeBuilder }) => {
            // Arrange
            const basePage = new BasePage(page, `data-table--${storyUrl}`);

            basePage.load();
            await page.waitForTimeout(2500);

            // Act
            const results = await makeAxeBuilder().analyze();

            expect(results.violations).toEqual([]);
        });
    });
});
