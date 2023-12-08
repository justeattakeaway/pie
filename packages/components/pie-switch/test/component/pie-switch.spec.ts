import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieSwitch } from '@/index';
import {
    SwitchProps,
    type LabelPlacement,
    labelPlacements,
    ON_SWITCH_CHANGED_EVENT,
} from '@/defs';

const componentSelector = '[data-test-id="switch-component"]';
const inputSelector = '[data-test-id="switch-input"]';
const switchLabelSelector = (placement: LabelPlacement = 'leading') => `[data-test-id="switch-label-${placement}"]`;

test.describe('Component: `Pie switch`', () => {
    test('should be visible', async ({ mount, page }) => {
        // Arrange
        await mount(PieSwitch, {
            props: {
                checked: false,
                isDisabled: false,
            },
        });

        // Act
        const pieSwitch = page.locator(componentSelector);

        // Assert
        await expect(pieSwitch).toBeVisible();
    });

    test('should set `isChecked` to `false` by default', async ({ mount }) => {
        // Arrange
        const component = await mount(PieSwitch);

        // Act
        const pieSwitchComponent = await component.locator(componentSelector).isChecked();

        // Assert
        expect(pieSwitchComponent).toBe(false);
    });

    test('should set `isDisabled` to `false` by default', async ({ mount }) => {
        // Arrange
        const component = await mount(PieSwitch);

        // Act
        const pieSwitchComponent = await component.locator(componentSelector).isDisabled();

        // Assert
        expect(pieSwitchComponent).toBe(false);
    });

    test('should have an `id` of `switch` on the input element', async ({ mount }) => {
        // Arrange
        const component = await mount(PieSwitch);

        // Act
        const pieSwitchInput = component.locator(inputSelector);

        // Assert
        await expect(pieSwitchInput).toHaveAttribute('id', 'switch');
    });

    test.describe('when the switch contains a label element', () => {
        test('should set associated `for` value on the label', async ({ mount }) => {
            // Arrange
            const component = await mount(PieSwitch, {
                props: {
                    label: 'Label',
                    labelPlacement: 'leading',
                } as SwitchProps,
            });

            // Act
            const pieSwitchLabel = component.locator(switchLabelSelector());

            // Assert
            await expect(pieSwitchLabel).toHaveAttribute('for', 'switch');
        });
    });

    test.describe('component interaction states', () => {
        test.describe('when the component is clicked', () => {
            test('should set `isChecked` to `true`', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieSwitch, {
                    props: {
                        checked: false,
                    },
                });

                // Act
                await page.click(componentSelector);

                const pieSwitchComponent = await component.locator(componentSelector).isChecked();

                // Assert
                expect(pieSwitchComponent).toBe(true);
            });

            test('should set `isChecked` to `false`', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieSwitch, {
                    props: {
                        checked: true,
                    },
                });

                // Act
                await page.click(componentSelector);

                const pieSwitchComponent = await component.locator(componentSelector).isChecked();

                // Assert
                expect(pieSwitchComponent).toBe(false);
            });

            test('should emit an event with the correct name', async ({ mount, page }) => {
                // Arrange
                let eventHeard = false;
                await mount(PieSwitch, {
                    on: {
                        [ON_SWITCH_CHANGED_EVENT]: () => {
                            eventHeard = true;
                        },
                    },
                });

                // Act
                await page.click(componentSelector);

                // Assert
                await expect(eventHeard).toBe(true);
            });
        });

        test.describe('when the components label element is clicked', () => {
            test('should set `isChecked` to `true`', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieSwitch, {
                    props: {
                        label: 'Label',
                        labelPlacement: 'leading',
                    } as SwitchProps,
                });

                // Act
                await page.click(switchLabelSelector());

                const pieSwitchComponent = await component.locator(componentSelector).isChecked();

                // Assert
                expect(pieSwitchComponent).toBe(true);
            });

            test('should set `isChecked` to `false`', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieSwitch, {
                    props: {
                        label: 'Label',
                        labelPlacement: 'leading',
                        checked: true,
                    } as SwitchProps,
                });

                // Act
                await page.click(switchLabelSelector());

                const pieSwitchComponent = await component.locator(componentSelector).isChecked();

                // Assert
                expect(pieSwitchComponent).toBe(false);
            });

            test('should emit an event with the correct name', async ({ mount, page }) => {
                // Arrange
                let eventHeard = false;
                await mount(PieSwitch, {
                    on: {
                        [ON_SWITCH_CHANGED_EVENT]: () => {
                            eventHeard = true;
                        },
                    },
                });

                // Act
                await page.click(componentSelector);

                // Assert
                await expect(eventHeard).toBe(true);
            });
        });
    });

    test.describe('Props: `aria`', () => {
        test.describe('when label exist', () => {
            test('should render the component with the correct aria-labels', async ({ mount }) => {
                // Arrange
                const ariaLabelText = 'Aria label';

                const component = await mount(PieSwitch, {
                    props: {
                        aria: {
                            label: ariaLabelText,
                        },
                    },
                });

                // Act
                const switchInput = component.locator(inputSelector);
                const ariaLabel = await switchInput.getAttribute('aria-label');

                // Assert
                expect(ariaLabel).toBe(ariaLabelText);
            });
        });

        test.describe('when describedBy exist', () => {
            const ariaDescriptionID = 'switch-description';
            const ariaDescriptionSelector = `[data-test-id="${ariaDescriptionID}"]`;
            const ariaDescriptionText = 'Aria description';

            test('should render the component with the correct description id', async ({ mount }) => {
                // Arrange
                const component = await mount(PieSwitch, {
                    props: {
                        aria: {
                            describedBy: ariaDescriptionText,
                        },
                    },
                });

                // Act
                const switchInput = component.locator(inputSelector);
                const ariaDescription = await switchInput.getAttribute('aria-describedBy');

                // Assert
                expect(ariaDescription).toBe(ariaDescriptionID);
            });

            test('should render a description element with the correct text', async ({ mount }) => {
                // Arrange
                const component = await mount(PieSwitch, {
                    props: {
                        aria: {
                            describedBy: ariaDescriptionText,
                        },
                    },
                });

                // Act
                const ariaDescriptionElement = component.locator(ariaDescriptionSelector);

                // Assert
                await expect(ariaDescriptionElement).toContainText(ariaDescriptionText);
            });
        });
    });

    test.describe('Props: `LabelProps`', () => {
        labelPlacements.forEach((labelPlacement) => {
            test(`should render a ${labelPlacement} label`, async ({ mount }) => {
                // Arrange
                const component = await mount(PieSwitch, {
                    props: {
                        label: 'Label',
                        labelPlacement,
                    } as SwitchProps,
                });

                const selector = switchLabelSelector(labelPlacement);
                const pieSwitchLabel = component.locator(selector);
                const testId = await pieSwitchLabel.getAttribute('data-test-id');

                // Assert
                await expect(pieSwitchLabel).toBeVisible();
                expect(testId).toContain(labelPlacement);
            });
        });
    });
});
