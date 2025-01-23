import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import type { AssistiveTextProps } from '../../src/index.ts';
import { variants } from '../../src/defs.ts';
import { assistiveText } from '../helpers/page-object/selectors.ts';

test.describe('PieAssistiveText - Accessibility tests', () => {
    variants.forEach((variant) => {
        test(`a11y - should test the PieAssistiveText component WCAG compliance if variant is = "${variant}"`, async ({ makeAxeBuilder, page }) => {
            // Arrange

            const props : AssistiveTextProps = {
                variant,
            };

            const assistiveTextPage = new BasePage(page, 'assistive-text--default');
            await assistiveTextPage.load({ ...props });

            // Act
            const assistiveTextComponent = page.getByTestId(assistiveText.selectors.container.dataTestId);

            // Assert
            expect.soft(assistiveTextComponent).toBeVisible();

            const results = await makeAxeBuilder().analyze();

            expect(results.violations).toEqual([]);
        });
    });
});
