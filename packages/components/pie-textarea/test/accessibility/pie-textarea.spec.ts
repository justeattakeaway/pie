import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieTextarea - Accessibility tests', () => {
    test('a11y - should test the PieTextarea component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const textAreaPage = new BasePage(page, 'textarea');

        await textAreaPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
