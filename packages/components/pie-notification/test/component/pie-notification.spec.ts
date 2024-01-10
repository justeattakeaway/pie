
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieNotification, NotificationProps } from '../../src/index';

const componentSelector = '[data-test-id="pie-notification"]';

test.describe('PieNotification - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieNotification, {
            props: {} as NotificationProps,
        });

        // Act
        const notification = page.locator(componentSelector);

        // Assert
        expect(notification).toBeVisible();
    });
});
