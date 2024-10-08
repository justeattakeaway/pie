import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieCard, type CardProps } from '../../src/index.ts';
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

    test.describe('Prop: `isDraggable`', () => {
        test.describe('when set to true', () => {
            test('should set a class of `c-card--draggable`', async ({ mount, page }) => {
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

                // Assert
                expect(component).toHaveClass(/c-card--draggable/);
            });
        });

        test.describe('when set to false', () => {
            test('should not set a class of `c-card--draggable`', async ({ mount, page }) => {
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

                // Assert
                expect(component).not.toHaveClass(/c-card--draggable/);
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

    test.describe('Prop: disabled', () => {
        test.describe('when an image exists and the prop `disabled` is set to `true`', () => {
            test('should set the opacity to 50%', async ({ mount, page }) => {
                // Arrange
                const slottedImageContent = `<div data-test-id="slot-content">
                    <img alt="Sample Image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBA==" />
                </div>`;

                await mount(PieCard, {
                    props: {
                        disabled: true,
                    } as CardProps,
                    slots: {
                        default: slottedImageContent,
                    },
                });

                // Act
                const component = page.locator('[data-test-id="slot-content"]');
                const image = component.locator('img');

                // Assert the image has the correct opacity
                await expect(image).toHaveCSS('opacity', '0.5');
            });
        });

        test.describe('when an image exists and the prop `disabled` is set to `false`', () => {
            test('should not set the opacity style on the image element', async ({ mount, page }) => {
                // Arrange
                const slottedImageContent = `<div data-test-id="slot-content">
                    <img alt="Sample Image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBA==" />
                </div>`;

                await mount(PieCard, {
                    props: {
                        disabled: false,
                    } as CardProps,
                    slots: {
                        default: slottedImageContent,
                    },
                });

                // Act
                const component = page.locator('[data-test-id="slot-content"]');
                const image = component.locator('img');

                // Assert the image has the correct opacity
                await expect(image).not.toHaveCSS('opacity', '0.5');
            });
        });

        test.describe('when the prop `tag` is set to `button`', () => {
            test('should set `aria-disabled` to `true` when disabled', async ({ mount, page }) => {
                // Arrange
                await mount(PieCard, {
                    props: {
                        tag: 'button',
                        disabled: true,
                    } as CardProps,
                    slots: {
                        default: slotContent,
                    },
                });

                // Act
                const component = page.locator(componentSelector);

                // Assert
                await expect(component).toHaveAttribute('aria-disabled', 'true');
            });

            test('should set `tabindex` to `-1` when disabled', async ({ mount, page }) => {
                // Arrange
                await mount(PieCard, {
                    props: {
                        tag: 'button',
                        disabled: true,
                    } as CardProps,
                    slots: {
                        default: slotContent,
                    },
                });

                // Act
                const component = page.locator(componentSelector);

                // Assert
                await expect(component).toHaveAttribute('tabindex', '-1');
            });

            test('should not trigger the click event when the tag prop is set to `button` and is `disabled`', async ({ mount, page }) => {
                // Arrange
                const messages: string[] = [];

                await mount(PieCard, {
                    props: {
                        tag: 'button',
                        disabled: true,
                    } as CardProps,
                    slots: {
                        default: slotContent,
                    },
                    on: {
                        click: () => messages.push('1'),
                    },
                });

                // Act
                const component = page.locator(componentSelector);
                await page.evaluate(() => {
                    const card = document.querySelector('pie-card');
                    card?.shadowRoot?.querySelector('div')?.click();
                });

                // Assert
                await expect(component).toBeDisabled();
                expect(messages).toHaveLength(0);
            });
        });

        test.describe('when the prop `tag` is set to `a`', () => {
            test('should set `aria-disabled` to `true` when disabled', async ({ mount, page }) => {
                // Arrange
                await mount(PieCard, {
                    props: {
                        tag: 'a',
                        disabled: true,
                    } as CardProps,
                    slots: {
                        default: slotContent,
                    },
                });

                // Act
                const component = page.locator(componentSelector);

                // Assert
                await expect(component).toHaveAttribute('aria-disabled', 'true');
            });

            test('should not set the href attribute when disabled', async ({ mount, page }) => {
                // Arrange
                await mount(PieCard, {
                    props: {
                        tag: 'a',
                        disabled: true,
                    } as CardProps,
                    slots: {
                        default: slotContent,
                    },
                });

                // Act
                const component = page.locator(componentSelector);

                // Assert
                await expect(component).not.toHaveAttribute('href');
            });
        });
    });
});
