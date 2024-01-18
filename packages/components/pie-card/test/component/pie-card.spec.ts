
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieCard, CardProps } from '../../src/index.ts';
import { tags, paddingValues } from '../../src/defs.ts';

const componentSelector = '[data-test-id="pie-card"]';
const slotSelector = '[data-test-id="slot-content"]';

const slotContent = `<div data-test-id="slot-content">
    Slot content
    </div>`;

test.describe('PieCard - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieCard, {
            props: {} as CardProps,
            slots: {
                default: slotContent,
            },
        });

        // Act
        const card = page.locator(componentSelector);

        // Assert
        await expect(card).toBeVisible();
    });

    test('should correctly render the slot content', async ({ mount, page }) => {
        // Arrange
        await mount(PieCard, {
            props: {} as CardProps,
            slots: {
                default: slotContent,
            },
        });

        // Act
        const renderedSlotContent = page.locator(slotSelector);

        // Assert
        await expect(renderedSlotContent).toBeVisible();
    });

    test('should render the card as an anchor tag with the provided href, target and rel attributes if tag = a', async ({ mount, page }) => {
        // Arrange
        const tag = 'a';
        const href = 'foo.com';
        const rel = 'noopener noreferrer';
        const target = '_blank';

        await mount(PieCard, {
            props: {
                tag,
                href,
                rel,
                target,
            } as CardProps,
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

    test('should render the card as a div that behaves like a button if tag = "button"', async ({ mount, page }) => {
        // Arrange
        const tag = 'button';

        await mount(PieCard, {
            props: {
                tag,
            } as CardProps,
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

    [true, false].forEach((disabled) => {
        test(`should add an aria-disabled attribute that matches the value of the disabled prop (${disabled})`, async ({ mount, page }) => {
            // Arrange
            await mount(PieCard, {
                props: {
                    disabled,
                } as CardProps,
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

    tags.forEach((tag) => {
        test(`should add an aria-label attribute that matches the value of the aria.label prop when tag is ${tag}`, async ({ mount, page }) => {
            // Arrange
            const label = 'foo';

            await mount(PieCard, {
                props: {
                    tag,
                    aria: { label },
                } as CardProps,
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

        await mount(PieCard, {
            props: {
                variant,
            } as CardProps,
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
                await mount(PieCard, {
                    props: {
                        isDraggable: true,
                    } as CardProps,
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
                await mount(PieCard, {
                    props: {
                        isDraggable: false,
                    } as CardProps,
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
                await mount(PieCard, {
                    props: {
                        padding: 'a',
                    } as CardProps,
                    slots: {
                        default: slotContent,
                    },
                });

                const component = page.locator(componentSelector);
                const componentAttribute = await component.getAttribute('style');

                // Assert
                expect(componentAttribute).toBe('padding: var(--dt-spacing-a)');
            });

            paddingValues.forEach((paddingValue) => {
                test(`should allow valid "padding" values: ${paddingValue}`, async ({ mount, page }) => {
                    // Arrange
                    await mount(PieCard, {
                        props: {
                            padding: paddingValue,
                        } as CardProps,
                        slots: {
                            default: slotContent,
                        },
                    });

                    const component = page.locator(componentSelector);
                    const componentAttribute = await component.getAttribute('style');
                    const values = paddingValue.split(',');

                    // Assert
                    if (values.length > 1) {
                        expect(componentAttribute).toBe(`padding: var(--dt-spacing-${values[0]}) var(--dt-spacing-${values[1]})`);
                    } else {
                        expect(componentAttribute).toBe(`padding: var(--dt-spacing-${values[0]})`);
                    }
                });
            });

            test('should not allow values outside "a-g"', async ({ mount, page }) => {
                const invalidPaddingValue = { padding: 'z' };

                // Arrange
                await mount(PieCard, {
                    props: {
                        padding: invalidPaddingValue.padding,
                    } as CardProps,
                    slots: {
                        default: slotContent,
                    },
                });

                const component = page.locator(componentSelector);
                const componentAttribute = await component.getAttribute('style');

                // Assert
                expect(componentAttribute).toBe('');
            });

            test('should not allow more than one single value i.e "ab"', async ({ mount, page }) => {
                const invalidPaddingValue = { padding: 'ab' };

                // Arrange
                await mount(PieCard, {
                    props: {
                        padding: invalidPaddingValue.padding,
                    } as CardProps,
                    slots: {
                        default: slotContent,
                    },
                });

                const component = page.locator(componentSelector);
                const componentAttribute = await component.getAttribute('style');

                // Assert
                expect(componentAttribute).toBe('');
            });
        });

        test.describe('when `padding` is set as a comma separated string value', () => {
            test('should set an attribute of style with the correct padding value', async ({ mount, page }) => {
                // Arrange
                const paddingValue = { padding: 'a,b' };
                await mount(PieCard, {
                    props: {
                        padding: paddingValue.padding,
                    } as CardProps,
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
                await mount(PieCard, {
                    props: {
                        padding: paddingValue.padding,
                    } as CardProps,
                    slots: {
                        default: slotContent,
                    },
                });

                const component = page.locator(componentSelector);
                const componentAttribute = await component.getAttribute('style');

                // Assert
                expect(componentAttribute).toBe('');
            });
        });
    });
});
