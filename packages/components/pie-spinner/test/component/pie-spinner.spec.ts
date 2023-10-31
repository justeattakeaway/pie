
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieSpinner, SpinnerProps } from '@/index';

const componentSelector = '[data-test-id="pie-spinner"]';

test.describe('PieSpinner - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieSpinner, {
            props: {
                size: 'm',
                variant: 'brand',
            } as SpinnerProps,
        });

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
});
