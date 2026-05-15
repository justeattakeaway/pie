import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { variants } from '../../src/defs';

test.describe('PieSpinner - Accessibility tests', () => {
    variants.forEach((variant) => {
        test(`a11y - should test the PieSpinner component WCAG compliance - ${variant}`, async ({ makeAxeBuilder, page }) => {
            // Arrange
            const spinnerPage = new BasePage(page, `spinner--${variant}`);
            spinnerPage.waitUntilStrategy = 'networkidle';
            await spinnerPage.load();

            // Act
            const axeBuilder = variant === 'inverse' ? makeAxeBuilder().disableRules('color-contrast') : makeAxeBuilder();

            const results = await axeBuilder.analyze();

            // Assert
            expect(results.violations).toEqual([]);
        });
    });
});
