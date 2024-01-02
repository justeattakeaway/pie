
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieInput, InputProps } from '@/index';

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
});
