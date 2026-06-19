import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import type { AssistiveTextProps } from '../../src/index.ts';
import { assistiveText } from '../helpers/page-object/selectors.ts';

test.describe('PieAssistiveText - Component tests', () => {
    test('should render successfully', async ({ page }) => {
    // Arrange
        const assistiveTextPage = new BasePage(page, 'assistive-text--default');
        await assistiveTextPage.load();

        // Act
        const assistiveTextComponent = page.getByTestId(assistiveText.selectors.container.dataTestId);

        // Assert
        await expect(assistiveTextComponent).toBeVisible();
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

    test('should render the `message` prop content', async ({ page }) => {
    // Arrange
        const assistiveTextPage = new BasePage(page, 'assistive-text--default');
        const props: AssistiveTextProps = {
            message: 'Form hint message',
        };
        await assistiveTextPage.load({ ...props });

        // Act
        const assistiveTextComponent = page.getByTestId(assistiveText.selectors.container.dataTestId);

        // Assert
        await expect(assistiveTextComponent).toContainText('Form hint message');
    });

    test('should set polite live region attributes when variant is `default`', async ({ page }) => {
    // Arrange
        const assistiveTextPage = new BasePage(page, 'assistive-text--default');
        await assistiveTextPage.load();

        // Act
        const assistiveTextComponent = page.getByTestId(assistiveText.selectors.container.dataTestId);

        // Assert
        await expect(assistiveTextComponent).toHaveAttribute('role', 'status');
        await expect(assistiveTextComponent).toHaveAttribute('aria-live', 'polite');
        await expect(assistiveTextComponent).toHaveAttribute('aria-atomic', 'true');
    });

    test('should set assertive live region attributes when variant is `error`', async ({ page }) => {
    // Arrange
        const assistiveTextPage = new BasePage(page, 'assistive-text--default');
        const props: AssistiveTextProps = {
            variant: 'error',
        };
        await assistiveTextPage.load({ ...props });

        // Act
        const assistiveTextComponent = page.getByTestId(assistiveText.selectors.container.dataTestId);

        // Assert
        await expect(assistiveTextComponent).toHaveAttribute('role', 'alert');
        await expect(assistiveTextComponent).toHaveAttribute('aria-live', 'assertive');
        await expect(assistiveTextComponent).toHaveAttribute('aria-atomic', 'true');
    });

    test('should set polite live region attributes when variant is `success`', async ({ page }) => {
    // Arrange
        const assistiveTextPage = new BasePage(page, 'assistive-text--default');
        const props: AssistiveTextProps = {
            variant: 'success',
        };
        await assistiveTextPage.load({ ...props });

        // Act
        const assistiveTextComponent = page.getByTestId(assistiveText.selectors.container.dataTestId);

        // Assert
        await expect(assistiveTextComponent).toHaveAttribute('role', 'status');
        await expect(assistiveTextComponent).toHaveAttribute('aria-live', 'polite');
        await expect(assistiveTextComponent).toHaveAttribute('aria-atomic', 'true');
    });
});
