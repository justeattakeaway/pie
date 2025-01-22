import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { CheckboxDefaultPage } from '../helpers/page-object/pie-checkbox-default.page.ts';

test.describe('PieCheckbox - Accessibility tests', () => {
    test('a11y - should test the PieCheckbox component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        // Arrange
        const checkboxDefaultPage = new CheckboxDefaultPage(page);
        await checkboxDefaultPage.load();

        // Act
        const results = await makeAxeBuilder().analyze();

        // Assert
        await expect(checkboxDefaultPage.checkboxComponent.componentLocator).toBeVisible();
        expect(results.violations).toEqual([]);
    });
});
