import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PiePagination - Accessibility tests', () => {
    test('a11y - should test the PiePagination component WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'pagination--default');

        await basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
