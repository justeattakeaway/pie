
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieCardContainer, CardContainerProps } from '@/index';

const componentSelector = '[data-test-id="pie-card-container"]';
const linkSelector = '[data-test-id="pie-card-container-link"]';
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

    test('should render an anchor tag with the provided href, target and rel attributes', async ({ mount, page }) => {
        // Arrange
        const href = 'foo.com';
        const rel = 'noopener noreferrer';
        const target = '_blank';

        await mount(PieCardContainer, {
            props: {
                href,
                rel,
                target,
            } as CardContainerProps,
            slots: {
                default: slotContent,
            },
        });

        // Act
        const componentLink = page.locator(linkSelector);

        // Assert
        await expect(componentLink).toHaveAttribute('href', href);
        await expect(componentLink).toHaveAttribute('rel', rel);
        await expect(componentLink).toHaveAttribute('target', target);
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
            const componentLink = page.locator(linkSelector);

            // Assert
            await expect(componentLink).toHaveAttribute('aria-disabled', disabled.toString());
        });
    });

    test('should add an aria-label attribute that matches the value of the aria.linkLabel prop', async ({ mount, page }) => {
        // Arrange
        const linkLabel = 'foo';

        await mount(PieCardContainer, {
            props: {
                aria: {
                    linkLabel,
                },
            } as CardContainerProps,
            slots: {
                default: slotContent,
            },
        });

        // Act
        const componentLink = page.locator(linkSelector);

        // Assert
        await expect(componentLink).toHaveAttribute('aria-label', linkLabel);
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
            test('should set class `isDraggable`', async ({ mount, page }) => {
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
                const componentClass = await component.getAttribute('class');

                // Assert
                expect(componentClass).toContain('isDraggable');
            });
        });

        test.describe('when set to false', () => {
            test('should not set class `isDraggable`', async ({ mount, page }) => {
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
                const componentClass = await component.getAttribute('class');

                // Assert
                expect(componentClass).not.toContain('isDraggable');
            });
        });
    });
});
