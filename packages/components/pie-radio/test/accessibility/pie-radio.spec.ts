import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieRadio - Accessibility tests', () => {
    test('a11y - should test the PieRadio component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const radioDefaultPage = await new BasePage(page, 'radio--default');
        await radioDefaultPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
