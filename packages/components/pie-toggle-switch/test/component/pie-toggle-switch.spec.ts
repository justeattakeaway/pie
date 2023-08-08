import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieToggleSwitch } from '@/index';

const componentSelector = '[data-test-id="toggle-switch-component"]';
const toggleInputSelector = '[data-test-id="toggle-switch-input"]';

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

    test.describe('Props: `aria`', () => {
        test.describe('when label exist', () => {
            test('should render the component with the correct aria-labels', async ({ mount }) => {
                // Arrange
                const ariaLabelText = 'Aria label';

                const component = await mount(PieToggleSwitch, {
                    props: {
                        aria: {
                            label: ariaLabelText,
                        },
                    },
                });

                // Act
                const toggleSwitchInput = await component.locator(toggleInputSelector);
                const ariaLabel = await toggleSwitchInput.getAttribute('aria-label');

                // Assert
                await expect(ariaLabel).toBe(ariaLabelText);
            });
        });

        test.describe('when describedBy exist', () => {
            const ariaDescriptionID = 'toggle-switch-description';
            const ariaDescriptionSelector = `[data-test-id="${ariaDescriptionID}"]`;
            const ariaDescriptionText = 'Aria description';

            test('should render the component with the correct description id', async ({ mount }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        aria: {
                            describedBy: ariaDescriptionText,
                        },
                    },
                });

                // Act
                const toggleSwitchInput = await component.locator(toggleInputSelector);
                const ariaDescription = await toggleSwitchInput.getAttribute('aria-describedBy');

                // Assert
                await expect(ariaDescription).toBe(ariaDescriptionID);
            });

            test('should render a description element with the correct text', async ({ mount }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        aria: {
                            describedBy: ariaDescriptionText,
                        },
                    },
                });

                // Act
                const ariaDescriptionElement = await component.locator(ariaDescriptionSelector);

                // Assert
                await expect(ariaDescriptionElement).toContainText(ariaDescriptionText);
            });
        });
    });
});

