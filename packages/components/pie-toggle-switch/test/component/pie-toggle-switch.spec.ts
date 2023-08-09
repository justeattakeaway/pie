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
                label: {
                    text: 'Label',
                    position: {
                        leading: true,
                        trailing: false,
                    },
                },
            },
        });

        // Act
        const toggleSwitch = page.locator(componentSelector);

        // Assert
        await expect(toggleSwitch).toBeVisible();
    });

    test('should set `isChecked` to `false` by default', async ({ mount }) => {
        // Arrange
        const component = await mount(PieToggleSwitch, {
            props: {
                isChecked: false,
                isDisabled: false,
                label: {
                    text: 'Label',
                    position: {
                        leading: true,
                        trailing: false,
                    },
                },
            },
        });

        // Act
        const pieToggleSwitchComponent = await component.locator(componentSelector).isChecked();

        // Assert
        await expect(pieToggleSwitchComponent).toBe(false);
    });

    test('should set `isDisabled` to `false` by default', async ({ mount }) => {
        // Arrange
        const component = await mount(PieToggleSwitch, {
            props: {
                isChecked: false,
                isDisabled: false,
                label: {
                    text: 'Label',
                    position: {
                        leading: true,
                        trailing: false,
                    },
                },
            },
        });

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
                        label: {
                            text: 'Label',
                            position: {
                                leading: true,
                                trailing: false,
                            },
                        },
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

    test.describe('Props: `LabelProps`', () => {
        test.describe('when a label is passed as `leading`', () => {
            test('should render a leading label with class `c-toggleSwitch--leading`', async ({ mount }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        label: {
                            text: 'Label',
                            position: {
                                leading: true,
                                trailing: false,
                            },
                        },
                    },
                });

                const pieToggleSwitchLabel = await component.locator('[data-test-id="toggle-switch-label"]');

                // Assert
                await expect(pieToggleSwitchLabel).toHaveClass('c-toggleSwitch-label c-toggleSwitch--leading');
            });
        });

        test.describe('when a label is passed as `trailing`', () => {
            test('should render a leading label with class `c-toggleSwitch--trailing`', async ({ mount }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        label: {
                            text: 'Label',
                            position: {
                                leading: false,
                                trailing: true,
                            },
                        },
                    },
                });

                const pieToggleSwitchLabel = await component.locator('[data-test-id="toggle-switch-label"]');

                // Assert
                await expect(pieToggleSwitchLabel).toHaveClass('c-toggleSwitch-label c-toggleSwitch--trailing');
            });
        });

        test.describe('when a label is passed as `leading` & `trailing`', () => {
            test('should not render a label', async ({ mount }) => {
                // Arrange
                const component = await mount(PieToggleSwitch, {
                    props: {
                        label: {
                            text: 'Label',
                            position: {
                                leading: true,
                                trailing: true,
                            },
                        },
                    },
                });

                const pieToggleSwitchLabel = await component.locator('[data-test-id="toggle-switch-label"]');

                // Assert
                await expect(pieToggleSwitchLabel).not.toBeVisible();
            });
        });
    });
});

