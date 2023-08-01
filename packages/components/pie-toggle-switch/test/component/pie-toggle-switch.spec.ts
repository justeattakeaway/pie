import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieToggleSwitch } from '@/index';

const componentSelector = '[data-test-id="toggle-switch-component"]';

test.describe('Component: `Pie toggle switch`', () => {
    test('should be visible', async ({ mount, page }) => {
        // Arrange
        await mount(PieToggleSwitch, {
            props: {
                isChecked: false,
                isDisabled: false,
            },
        });

        // Act
        const toggleSwitch = page.locator(componentSelector);

        // Assert
        await expect(toggleSwitch).toBeVisible();
    });
});

