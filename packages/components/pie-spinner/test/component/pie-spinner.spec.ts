
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieSpinner, SpinnerProps } from '@/index';

const componentSelector = '[data-test-id="pie-spinner"]';

test.describe('PieSpinner - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieSpinner, {
            props: {} as SpinnerProps,
        });

        // Act
        const spinner = page.locator(componentSelector);

        // Assert
        expect(spinner).toBeVisible();
    });
});
