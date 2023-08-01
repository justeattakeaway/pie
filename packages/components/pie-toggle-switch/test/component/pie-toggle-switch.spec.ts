import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieToggleSwitch } from '@/index';

const props = {
    isChecked: false,
    isDisabled: false,
};

const componentSelector = '[data-test-id="pie-toggle-switch"]';

test('should be visible', async ({ mount, page }) => {
    // Arrange
    await mount(PieToggleSwitch, {
        props,
    });

    // Act
    const toggleSwitch = page.locator(componentSelector);

    // Assert
    expect(toggleSwitch).not.toBeVisible();
});
