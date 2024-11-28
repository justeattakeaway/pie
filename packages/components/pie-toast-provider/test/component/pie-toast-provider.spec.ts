import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieToastProvider } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-toast-provider"]';

test.describe('PieToastProvider - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieToastProvider);

        // Act
        const toastProvider = page.locator(componentSelector);

        // Assert
        expect(toastProvider).toBeVisible();
    });
});
