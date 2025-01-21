import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieTag - Accessibility tests', () => {
    test('a11y - should test the PieTag component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const tagPage = new BasePage(page, 'tag');

        await tagPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
