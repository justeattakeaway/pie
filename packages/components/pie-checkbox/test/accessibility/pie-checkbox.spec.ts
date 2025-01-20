import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { CheckboxDefaultPage } from '../helpers/page-object/pie-checkbox-default.page.ts';

test.describe('PieCheckbox - Accessibility tests', () => {
    test('a11y - should test the PieCheckbox component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        const checkboxDefaultPage = new CheckboxDefaultPage(page);
        await checkboxDefaultPage.load();

        const results = await makeAxeBuilder().analyze();
        await expect(checkboxDefaultPage.checkboxComponent.componentLocator).toBeVisible();
        expect(results.violations).toEqual([]);
    });
});
