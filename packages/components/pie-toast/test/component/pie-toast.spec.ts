
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieToast, ToastProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-toast"]';

test.describe('PieToast - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieToast, {
            props: {} as ToastProps,
        });

        // Act
        const toast = page.locator(componentSelector);

        // Assert
        expect(toast).toBeVisible();
    });
});
