import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieSwitch - Accessibility tests', () => {
    test('a11y - should test the PieSwitch component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const switchPage = new BasePage(page, 'switch');

        await switchPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
