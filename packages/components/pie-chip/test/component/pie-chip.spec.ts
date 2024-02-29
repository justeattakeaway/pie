
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieChip, ChipProps } from '../../src/index.ts';
import { ON_CHIP_CLOSE_EVENT } from '../../src/defs.ts';

const componentSelector = '[data-test-id="pie-chip"]';
const closeBtnSelector = '[data-test-id="chip-close-button"]';

const props: Partial<ChipProps> = {
    variant: 'default',
    isSelected: false,
    isDismissible: false,
    disabled: false,
    aria: {
        label: 'Chip Label',
        close: 'Chip Close',
    },
};

const dismissibleProps: Partial<ChipProps> = {
    variant: 'default',
    isSelected: true,
    isDismissible: true,
};

test.describe('PieChip - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieChip, {
            props,
            slots: {
                default: 'Label',
            },
        });

        // Act
        const chip = page.locator(componentSelector);

        // Assert
        await expect(chip).toBeVisible();
    });

    test.describe('if NOT disabled', () => {
        test('closeBtnSelector should emit the close event', async ({ mount, page }) => {
            // Arrange
            const events : Array<Event> = [];

            await mount(PieChip, {
                props: {
                    ...dismissibleProps,
                    disabled: false,
                },
                on: {
                    [ON_CHIP_CLOSE_EVENT]: (event: Event) => events.push(event),
                },
            });

            const chip = page.locator(componentSelector);
            const closeButton = chip.locator(closeBtnSelector);

            // Act
            await closeButton.click();

            // Assert
            expect(events).toHaveLength(1);
        });
    });

    test.describe('if disabled', () => {
        test('closeBtnSelector should be disabled', async ({ mount, page }) => {
            // Arrange
            await mount(PieChip, {
                props: {
                    ...dismissibleProps,
                    disabled: true,
                },
            });

            const chip = page.locator(componentSelector);
            const closeButton = chip.locator(closeBtnSelector);

            // Act && Assert
            await expect(closeButton).toBeDisabled();
        });
    });

    test.describe('Chip Close: aria: attribute', () => {
        test.describe('aria-label', () => {
            test.describe('when an aria close value is provided', () => {
                test('should render on the component with the correct value', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieChip, {
                        props: {
                            ...dismissibleProps,
                            aria: {
                                close: 'Chip Close',
                            },
                        } as ChipProps,
                    });

                    const closeButton = page.locator(closeBtnSelector);

                    // Act && Assert
                    await expect(closeButton).toHaveAttribute('aria-label', 'Chip Close');
                });
            });

            test.describe('when an aria close value is not provided', () => {
                test('should not render on the component', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieChip, {
                        props: {
                            ...dismissibleProps,
                            aria: {
                                close: '',
                            },
                        } as ChipProps,
                    });

                    const chip = page.locator(componentSelector);
                    const closeButton = chip.locator(closeBtnSelector);

                    // Act && Assert
                    await expect(closeButton).not.toHaveAttribute('aria-label', 'Chip Close');
                });
            });
        });
    });

    test.describe('Chip: aria: attributes', () => {
        test.describe('aria-live', () => {
            test('should render on the component with the value `polite`', async ({ mount, page }) => {
                // Arrange
                await mount(PieChip, {
                    props,
                });

                const chip = page.locator(componentSelector);

                // Act && Assert
                await expect(chip).toHaveAttribute('aria-live', 'polite');
            });
        });

        test.describe('aria-atomic', () => {
            test('should render on the component with the value `true`', async ({ mount, page }) => {
                // Arrange
                await mount(PieChip, {
                    props,
                });

                const chip = page.locator(componentSelector);

                // Act && Assert
                await expect(chip).toHaveAttribute('aria-atomic', 'true');
            });
        });

        test.describe('aria-label', () => {
            test.describe('when passed in', () => {
                test('should render on the component with the correct value', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieChip, {
                        props,
                    });

                    const chip = page.locator(componentSelector);

                    // Act && Assert
                    await expect(chip).toHaveAttribute('aria-label', 'Chip Label');
                });
            });

            test.describe('when not passed in', () => {
                test('should not render on the component', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieChip, {
                        props: {} as ChipProps,
                    });

                    const chip = page.locator(componentSelector);

                    // Act && Assert
                    await expect(chip).not.toHaveAttribute('aria-label', 'Chip Label');
                });
            });
        });

        test.describe('aria-busy', () => {
            test.describe('when the component is in a `isLoading` state', () => {
                test('should render on the component with the value `true`', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieChip, {
                        props: {
                            isLoading: true,
                        },
                    });

                    const chip = page.locator(componentSelector);

                    // Act && Assert
                    await expect(chip).toHaveAttribute('aria-busy', 'true');
                });
            });

            test.describe('when the component is not in a `isLoading` state', () => {
                test('should render on the component with the value `false`', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieChip, {
                        props,
                    });

                    const chip = page.locator(componentSelector);

                    // Act && Assert
                    await expect(chip).toHaveAttribute('aria-busy', 'false');
                });
            });
        });

        test.describe('aria-current', () => {
            test.describe('when the component is in a `isSelected` state', () => {
                test('should render on the component with the value `true`', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieChip, {
                        props: {
                            isSelected: true,
                        },
                    });

                    const chip = page.locator(componentSelector);

                    // Act && Assert
                    await expect(chip).toHaveAttribute('aria-current', 'true');
                });
            });

            test.describe('when the component is not in a `isSelected` state', () => {
                test('should render on the component with the value `false`', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieChip, {
                        props,
                    });

                    const chip = page.locator(componentSelector);

                    // Act && Assert
                    await expect(chip).toHaveAttribute('aria-current', 'false');
                });
            });
        });
    });
});
