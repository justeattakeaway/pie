import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { checkboxGroup } from '../helpers/page-object/selectors.ts';

test.describe('PieCheckboxGroup - Accessibility tests', () => {
    test('a11y - should test the PieCheckboxGroup component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        // Arrange
        const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
        await checkboxGroupPage.load();

        // Assert
        const checkboxGroupComponent = page.getByTestId(checkboxGroup.selectors.container.dataTestId);
        await expect.soft(checkboxGroupComponent).toBeVisible();

        const results = await makeAxeBuilder().analyze();
        expect(results.violations).toEqual([]);
    });
});
