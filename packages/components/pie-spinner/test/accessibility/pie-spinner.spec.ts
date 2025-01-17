import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { variants } from '../../src/defs';

test.describe('PieSpinner - Accessibility tests', () => {
    variants.forEach((variant) => {
        test(`a11y - should test the PieSpinner component WCAG compliance - ${variant}`, async ({ makeAxeBuilder, page }) => {
            // Arrange
            const spinnerPage = new BasePage(page, `spinner---${variant}`);
            await spinnerPage.load();

            // Act
            const results = await makeAxeBuilder().analyze();

            // Assert
            expect(results.violations).toEqual([]);
        });
    });
});
