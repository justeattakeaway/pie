import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieChip - Accessibility tests', () => {
    test('a11y - should test the PieChip component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const pieChipPage = new BasePage(page, 'chip--default');
        await pieChipPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
