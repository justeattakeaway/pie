
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieSpinner } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-spinner"]';

test.describe('PieSpinner - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieSpinner);

        // Act
        const spinner = page.locator(componentSelector);

        // Assert
        expect(spinner).toBeVisible();
    });

    test('should set `aria-live` to `polite` by default', async ({ mount }) => {
        // Arrange
        const component = await mount(PieSpinner);

        // Act
        const pieSpinnerComponent = await component.locator(componentSelector);

        // Assert
        expect(pieSpinnerComponent).toHaveAttribute('aria-live', 'polite');
    });

    test('should set `role` to `status` by default', async ({ mount }) => {
        // Arrange
        const component = await mount(PieSpinner);

        // Act
        const pieSpinnerComponent = await component.locator(componentSelector);

        // Assert
        expect(pieSpinnerComponent).toHaveAttribute('role', 'status');
    });

    test.describe('Props: `aria`', () => {
        test('should render the correct label if aria.label is passed', async ({ mount }) => {
            // Arrange
            const ariaLabelText = 'Loading';

            const component = await mount(PieSpinner, {
                props: { aria: { label: ariaLabelText } },
            });

            // Act
            const pieSpinnerComponent = await component.locator(componentSelector);

            // Assert
            expect(pieSpinnerComponent).toContainText(ariaLabelText);
        });

        test('should not render the label element if aria.label is not passed', async ({ mount }) => {
            // Arrange
            const ariaLabelText = 'Loading';

            const component = await mount(PieSpinner);

            // Act
            const pieSpinnerComponent = await component.locator(componentSelector);

            // Assert
            expect(pieSpinnerComponent).not.toContainText(ariaLabelText);
        });
    });
});
