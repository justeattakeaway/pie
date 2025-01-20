import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieDivider - Accessibility tests', () => {
    test('a11y - should test the PieDivider component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const dividerPage = new BasePage(page, 'divider');

        await dividerPage.load();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
