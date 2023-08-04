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

    test('should set `isChecked` to `false` by default', async ({ mount }) => {
        // Arrange
        const component = await mount(PieToggleSwitch);

        // Act
        const pieToggleSwitchComponent = await component.locator(componentSelector).isChecked();

        // Assert
        await expect(pieToggleSwitchComponent).toBe(false);
    });

    test('should set `isDisabled` to `false` by default', async ({ mount }) => {
        // Arrange
        const component = await mount(PieToggleSwitch);

        // Act
        const pieToggleSwitchComponent = await component.locator(componentSelector).isDisabled();

        // Assert
        await expect(pieToggleSwitchComponent).toBe(false);
    });

    test.describe('component interaction states', () => {
        test.describe('when the component is clicked', () => {
            test('should set `isChecked` to `true`', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        isChecked: false,
                    },
                });

                // Act
                await page.click(componentSelector);

                const pieToggleSwitchComponent = await component.locator(componentSelector).isChecked();

                // Assert
                await expect(pieToggleSwitchComponent).toBe(true);
            });
        });
    });
});

