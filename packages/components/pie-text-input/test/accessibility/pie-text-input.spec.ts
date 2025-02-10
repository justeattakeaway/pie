
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieTextInput - Accessibility tests', () => {
    test('a11y - should test the PieTextInput component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const textInputDefaultPage = new BasePage(page, 'text-input--default');
        await textInputDefaultPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
