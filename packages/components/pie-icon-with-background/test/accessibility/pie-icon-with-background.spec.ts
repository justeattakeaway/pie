import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('PieIconWithBackground - Accessibility tests', () => {
    test('a11y - should test the PieIconWithBackground component WCAG compliance', async ({ page, makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, 'icon-with-background--default');

        await basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
