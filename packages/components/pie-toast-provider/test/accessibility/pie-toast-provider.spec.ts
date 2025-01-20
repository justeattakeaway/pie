import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieToastProvider - Accessibility tests', () => {
    test('a11y - should test the PieToastProvider component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const pieToastProviderPage = new BasePage(page, 'toast-provider--default');
        await pieToastProviderPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
