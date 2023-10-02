
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieCardContainer, CardContainerProps } from '@/index';
import { interactionTypes, padding } from '@/defs';

const componentSelector = '[data-test-id="pie-card-container"]';
const slotSelector = '[data-test-id="slot-content"]';

const slotContent = `<div data-test-id="slot-content">
    Slot content
    </div>`;

test.describe('PieCardContainer - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieCardContainer, {
            props: {} as CardContainerProps,
            slots: {
                default: slotContent,
            },
        });

        // Act
        const cardContainer = page.locator(componentSelector);

        // Assert
        await expect(cardContainer).toBeVisible();
    });

    test('should correctly render the slot content', async ({ mount, page }) => {
        // Arrange
        await mount(PieCardContainer, {
            props: {} as CardContainerProps,
            slots: {
                default: slotContent,
            },
        });

        // Act
        const renderedSlotContent = page.locator(slotSelector);

        // Assert
        await expect(renderedSlotContent).toBeVisible();
    });

    test('should render the card as an anchor tag with the provided href, target and rel attributes if interactionType = anchor', async ({ mount, page }) => {
        // Arrange
        const interactionType = 'anchor';
        const href = 'foo.com';
        const rel = 'noopener noreferrer';
        const target = '_blank';

        await mount(PieCardContainer, {
            props: {
                interactionType,
                href,
                rel,
                target,
            } as CardContainerProps,
            slots: {
                default: slotContent,
            },
        });

        // Act
        const component = page.locator(componentSelector);

        // Assert
        await expect(component).toHaveAttribute('href', href);
        await expect(component).toHaveAttribute('rel', rel);
        await expect(component).toHaveAttribute('target', target);
        await expect(component).not.toHaveAttribute('role', 'button');
        await expect(component).not.toHaveAttribute('tabindex', '0');
    });

    test('should render the card as a div that behaves like a button if interactionType = "button"', async ({ mount, page }) => {
        // Arrange
        const interactionType = 'button';

        await mount(PieCardContainer, {
            props: {
                interactionType,
            } as CardContainerProps,
            slots: {
                default: slotContent,
            },
        });

        // Act
        const component = page.locator(componentSelector);

        // Assert
        await expect(component).toHaveAttribute('role', 'button');
        await expect(component).toHaveAttribute('tabindex', '0');
    });

    test('should render the card without button or anchor attributes when interactionType = "none"', async ({ mount, page }) => {
        // Arrange
        const interactionType = 'none';
        const href = 'foo.com';
        const rel = 'noopener noreferrer';
        const target = '_blank';

        await mount(PieCardContainer, {
            props: {
                interactionType,
                href,
                rel,
                target,
            } as CardContainerProps,
            slots: {
                default: slotContent,
            },
        });

        // Act
        const component = page.locator(componentSelector);

        // Assert
        await expect(component).not.toHaveAttribute('role', 'button');
        await expect(component).not.toHaveAttribute('tabindex', '0');
        await expect(component).not.toHaveAttribute('href', href);
        await expect(component).not.toHaveAttribute('rel', rel);
        await expect(component).not.toHaveAttribute('target', target);
    });

    [true, false].forEach((disabled) => {
        test(`should add an aria-disabled attribute that matches the value of the disabled prop (${disabled})`, async ({ mount, page }) => {
            // Arrange
            await mount(PieCardContainer, {
                props: {
                    disabled,
                } as CardContainerProps,
                slots: {
                    default: slotContent,
                },
            });

            // Act
            const component = page.locator(componentSelector);

            // Assert
            await expect(component).toHaveAttribute('aria-disabled', disabled.toString());
        });
    });

    interactionTypes.forEach((interactionType) => {
        test(`should add an aria-label attribute that matches the value of the aria.label prop when interactionType is ${interactionType}`, async ({ mount, page }) => {
            // Arrange
            const label = 'foo';

            await mount(PieCardContainer, {
                props: {
                    interactionType,
                    aria: { label },
                } as CardContainerProps,
                slots: {
                    default: slotContent,
                },
            });

            // Act
            const component = page.locator(componentSelector);

            // Assert
            await expect(component).toHaveAttribute('aria-label', label);
        });
    });

    test('should add a variant attribute that matches the variant prop provided', async ({ mount, page }) => {
        // Arrange
        const variant = 'default';

        await mount(PieCardContainer, {
            props: {
                variant,
            } as CardContainerProps,
            slots: {
                default: slotContent,
            },
        });

        // Act
        const component = page.locator(componentSelector);

        // Assert
        await expect(component).toHaveAttribute('variant', variant);
    });

    test.describe('Prop: `isDraggable`', () => {
        test.describe('when set to true', () => {
            test('should set an attribute of `isDraggable`', async ({ mount, page }) => {
                // Arrange
                await mount(PieCardContainer, {
                    props: {
                        isDraggable: true,
                    } as CardContainerProps,
                    slots: {
                        default: slotContent,
                    },
                });

                const component = page.locator(componentSelector);
                const componentAttribute = await component.getAttribute('isDraggable');

                // Assert
                expect(componentAttribute).toBeDefined();
            });
        });

        test.describe('when set to false', () => {
            test('should not set an attribute of `isDraggable`', async ({ mount, page }) => {
                // Arrange
                await mount(PieCardContainer, {
                    props: {
                        isDraggable: false,
                    } as CardContainerProps,
                    slots: {
                        default: slotContent,
                    },
                });

                // Act
                const component = page.locator(componentSelector);
                const componentAttribute = await component.getAttribute('isDraggable');

                // Assert
                expect(componentAttribute).toBeNull();
            });
        });
    });

    test.describe('Prop: `padding`', () => {
        test.describe('when `padding` is set as a single string value', () => {
            test('should set an attribute of style with the correct padding value', async ({ mount, page }) => {
                // Arrange
                await mount(PieCardContainer, {
                    props: {
                        padding: 'a',
                    } as CardContainerProps,
                    slots: {
                        default: slotContent,
                    },
                });

                const component = page.locator(componentSelector);
                const componentAttribute = await component.getAttribute('style');

                // Assert
                expect(componentAttribute).toBe('padding: var(--dt-spacing-a)');
            });

            padding.forEach((paddingValue) => {
                test(`should allow valid "padding" values: ${paddingValue}`, async ({ mount, page }) => {
                    // Arrange
                    await mount(PieCardContainer, {
                        props: {
                            padding: paddingValue,
                        } as CardContainerProps,
                        slots: {
                            default: slotContent,
                        },
                    });

                    const component = page.locator(componentSelector);
                    const componentAttribute = await component.getAttribute('style');

                    // Assert
                    expect(componentAttribute).toBe(`padding: var(--dt-spacing-${paddingValue})`);
                });
            });

            test('should not allow values outside "a-g"', async ({ mount, page }) => {
                const invalidPaddingValue = { padding: 'z' };

                // Arrange
                await mount(PieCardContainer, {
                    props: {
                        padding: invalidPaddingValue.padding,
                    } as CardContainerProps,
                    slots: {
                        default: slotContent,
                    },
                });

                const component = page.locator(componentSelector);
                const componentAttribute = await component.getAttribute('style');

                // Assert
                expect(componentAttribute).toBe(null);
            });

            test('should not allow more than one single value i.e "ab"', async ({ mount, page }) => {
                const invalidPaddingValue = { padding: 'ab' };

                // Arrange
                await mount(PieCardContainer, {
                    props: {
                        padding: invalidPaddingValue.padding,
                    } as CardContainerProps,
                    slots: {
                        default: slotContent,
                    },
                });

                const component = page.locator(componentSelector);
                const componentAttribute = await component.getAttribute('style');

                // Assert
                expect(componentAttribute).toBe(null);
            });
        });

        test.describe('when `padding` is set as a comma separated string value', () => {
            test('should set an attribute of style with the correct padding value', async ({ mount, page }) => {
                // Arrange
                const paddingValue = { padding: 'a, b' };
                await mount(PieCardContainer, {
                    props: {
                        padding: paddingValue.padding,
                    } as CardContainerProps,
                    slots: {
                        default: slotContent,
                    },
                });

                const component = page.locator(componentSelector);
                const componentAttribute = await component.getAttribute('style');

                // Assert
                expect(componentAttribute).toBe('padding: var(--dt-spacing-a) var(--dt-spacing-b)');
            });

            test('should not allow more than 2 padding values', async ({ mount, page }) => {
                // Arrange
                const paddingValue = { padding: 'a, b, c' };
                await mount(PieCardContainer, {
                    props: {
                        padding: paddingValue.padding,
                    } as CardContainerProps,
                    slots: {
                        default: slotContent,
                    },
                });

                const component = page.locator(componentSelector);
                const componentAttribute = await component.getAttribute('style');

                // Assert
                expect(componentAttribute).toBe(null);
            });
        });
    });
});
