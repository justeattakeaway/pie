
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieInput, InputProps, types } from '@/index';

const componentSelector = '[data-test-id="pie-input"]';

test.describe('PieInput - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieInput, {
            props: {} as InputProps,
        });

        // Act
        const input = page.locator(componentSelector);

        // Assert
        expect(input).toBeVisible();
    });

    test.describe('Props', () => {
        test('should default to text type if no type prop provided', async ({ mount }) => {
            // Arrange
            const component = await mount(PieInput, {});

            // Act
            const input = component.locator('input');

            // Assert
            expect(input).toHaveAttribute('type', 'text');
        });

        test('should apply the type prop to the HTML input rendered', async ({ mount }) => {
            // Arrange
            const component = await mount(PieInput, {
                props: {
                    type: 'number',
                } as InputProps,
            });

            // Act
            const input = component.locator('input');

            // Assert
            expect(input).toHaveAttribute('type', 'number');
        });
    });
});
