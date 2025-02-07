import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieToast - Accessibility tests', () => {
    test('a11y - should test the PieToast component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const toastPage = new BasePage(page, 'tag');

        await toastPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
