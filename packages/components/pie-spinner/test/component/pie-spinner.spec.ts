import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import type { SpinnerProps } from '../../src/index.ts';
import { spinner } from '../helpers/page-object/selectors.ts';

test.describe('PieSpinner - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const spinnerPage = new BasePage(page, 'spinner--brand');
        await spinnerPage.load();

        // Assert
        await expect(page.getByTestId(spinner.selectors.container.dataTestId)).toBeVisible();
    });

    test('should set `aria-live` to `polite` by default', async ({ page }) => {
        // Arrange
        const spinnerPage = new BasePage(page, 'spinner--brand');
        await spinnerPage.load();

        // Assert
        await expect(page.getByTestId(spinner.selectors.container.dataTestId)).toHaveAttribute('aria-live', 'polite');
    });

    test('should set `role` to `status` by default', async ({ page }) => {
        // Arrange
        const spinnerPage = new BasePage(page, 'spinner--brand');
        await spinnerPage.load();

        // Assert
        await expect(page.getByTestId(spinner.selectors.container.dataTestId)).toHaveAttribute('role', 'status');
    });
});

test.describe('Props: `aria`', () => {
    test('should render the correct label if aria.label is passed', async ({ page }) => {
        // Arrange
        const ariaLabelText = 'Loading';
        const props: SpinnerProps = {
            aria: {
                label: ariaLabelText,
            },
        };

        const spinnerPage = new BasePage(page, 'spinner--brand');
        await spinnerPage.load({ ...props });

        // Act
        const pieSpinnerComponent = await page.getByTestId(spinner.selectors.container.dataTestId);

        // Assert
        await expect(pieSpinnerComponent).toContainText(ariaLabelText);
    });

    test('should not render the label element if aria.label is not passed', async ({ page }) => {
        // Arrange
        const ariaLabelText = 'Loading';

        const spinnerPage = new BasePage(page, 'spinner--brand');
        await spinnerPage.load();

        // Assert
        await expect(page.getByTestId(spinner.selectors.container.dataTestId)).not.toContainText(ariaLabelText);
    });
});
