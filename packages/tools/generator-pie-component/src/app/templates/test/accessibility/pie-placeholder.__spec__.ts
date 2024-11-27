import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { Pie<%= componentName %> } from '../../src/index.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

test.describe('Pie<%= componentName %> - Accessibility tests', () => {
    test('a11y - should test the Pie<%= componentName %> component WCAG compliance', async ({ makeAxeBuilder }) => {
        // Arrange
        const basePage = new BasePage(page, '<%= fileName %>--default');
        
        await page.waitForTimeout(2500);

        basePage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});