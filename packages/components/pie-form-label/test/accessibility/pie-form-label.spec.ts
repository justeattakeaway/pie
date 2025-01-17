import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import type { FormLabelProps } from '../../src/index.ts';

test.describe('PieFormLabel - Accessibility tests', () => {
    test('a11y - should test the PieFormLabel component WCAG compliance', async ({ makeAxeBuilder, page }) => {
        // Arrange
        const props: FormLabelProps = {
            for: 'form-label',
            optional: 'Optional',
            trailing: 'hellooo',
        };

        const formLabelPage = new BasePage(page, 'form-label--default');
        await formLabelPage.load({ ...props });

        // Act
        const results = await makeAxeBuilder().analyze();

        // Assert
        expect(results.violations).toEqual([]);
    });
});
