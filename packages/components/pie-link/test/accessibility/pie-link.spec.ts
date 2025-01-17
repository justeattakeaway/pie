import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieLink - Accessibility tests', () => {
    test('a11y - should test the PieLink component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const linkPage = new BasePage(page, 'link');

        await dividerPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
