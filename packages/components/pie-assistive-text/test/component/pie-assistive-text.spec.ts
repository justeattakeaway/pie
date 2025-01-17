import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { assistiveText } from '../helpers/page-object/selectors.ts';
import type { AssistiveTextProps } from '../../src/index.ts';

test.describe('PieAssistiveText - Component tests', () => {
    test('should render successfully', async ({ page }) => {
    // Arrange
        const assistiveTextPage = new BasePage(page, 'assistive-text--default');
        await assistiveTextPage.load();

        // Act
        const assistiveTextComponent = page.getByTestId(assistiveText.selectors.container.dataTestId);

        // Assert
        expect(assistiveTextComponent).toBeVisible();
    });

    test('should set `variant` to `default` by default', async ({ page }) => {
    // Arrange
        const assistiveTextPage = new BasePage(page, 'assistive-text--default');
        await assistiveTextPage.load();

        // Act
        const assistiveTextComponent = page.getByTestId(assistiveText.selectors.container.dataTestId);

        // Assert
        await expect(assistiveTextComponent).toHaveClass(/c-assistiveText--default/);
    });
});
