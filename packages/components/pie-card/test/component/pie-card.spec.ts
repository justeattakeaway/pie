import { test, expect, type Page } from '@playwright/test';
import type { CardProps } from '../../src/index.ts';
import { tags, paddingValues } from '../../src/defs.ts';
import { CardDefaultPage } from '../helpers/page-object/pie-card-default.page.ts';
import { CardWithImagePage } from '../helpers/page-object/pie-card-with-image.page.ts';
import { CardWithSlottedControlsPage } from '../helpers/page-object/pie-card-with-slotted-controls.page.ts';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface Window {
        __cardClicks?: number;
        __slottedClicks?: number;
    }
}

/** Installs browser-side listeners on the host element and the slotted interactive control for polling with `waitForFunction`. */
const installClickListeners = (page: Page) => page.evaluate(() => {
    window.__cardClicks = 0;
    window.__slottedClicks = 0;
    document.querySelector('pie-card')?.addEventListener('click', () => {
        window.__cardClicks = (window.__cardClicks ?? 0) + 1;
    });
    document.querySelector('[data-test-id="card-action"]')?.addEventListener('click', () => {
        window.__slottedClicks = (window.__slottedClicks ?? 0) + 1;
    });
});

test.describe('PieCard - Component tests', () => {
    test('should render successfully', async ({ page }) => {
    // Arrange
        const cardDefaultPage = new CardDefaultPage(page);
        await cardDefaultPage.load();

        // Assert
        await expect(cardDefaultPage.cardComponent.componentLocator).toBeVisible();
    });

    test('should correctly render the slot content', async ({ page }) => {
    // Arrange
        const cardDefaultPage = new CardDefaultPage(page);
        await cardDefaultPage.load();

        // Act
        const renderedSlotContent = cardDefaultPage.cardComponent.componentLocator.getByTestId('slot-content');

        // Assert
        await expect(renderedSlotContent).toBeAttached();
    });

    test('should render the card as an anchor tag with the provided href, target and rel attributes if tag = a', async ({ page }) => {
    // Arrange
        const props: CardProps = {
            tag: 'a',
            rel: 'noopener noreferrer',
            target: '_blank',
        };
        const cardDefaultPage = new CardDefaultPage(page);
        await cardDefaultPage.load({ ...props });

        // Wait for the component to be ready before using page.evaluate
        await cardDefaultPage.cardComponent.componentLocator.waitFor({ state: 'attached' });

        // Act - Have to manually set the href as Storybook doesn't support certain characters when passed via query params
        await page.evaluate(() => {
            const card = document.querySelector('pie-card');
            card?.setAttribute('href', 'foo.com');
        });

        // Assert

        await expect.soft(cardDefaultPage.cardComponent.linkLocator).toBeAttached();

        await expect(cardDefaultPage.cardComponent.componentLocator).toHaveAttribute('href', 'foo.com' as string);
        await expect(cardDefaultPage.cardComponent.componentLocator).toHaveAttribute('rel', props.rel as string);
        await expect(cardDefaultPage.cardComponent.componentLocator).toHaveAttribute('target', props.target as string);
        await expect(cardDefaultPage.cardComponent.componentLocator).not.toHaveAttribute('role', 'button');
        await expect(cardDefaultPage.cardComponent.componentLocator).not.toHaveAttribute('tabindex', '0');
    });

    test('should render the card with an invisible overlay button when tag = "button"', async ({ page }) => {
    // Arrange
        const props: CardProps = {
            tag: 'button',
        };

        const cardDefaultPage = new CardDefaultPage(page);
        await cardDefaultPage.load({ ...props });

        // Assert
        await expect(cardDefaultPage.cardComponent.buttonLocator).toBeAttached();
        await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveRole('button');
        await expect(cardDefaultPage.cardComponent.surfaceLocator).toBeVisible();
        await expect(cardDefaultPage.cardComponent.linkLocator).not.toBeVisible();
    });

    [true, false].forEach((disabled) => {
        test(`should ${disabled ? '' : 'not '}render a disabled overlay button when the disabled prop is ${disabled}`, async ({ page }) => {
            // Arrange
            const props: CardProps = {
                disabled,
                tag: 'button',
            };
            const cardDefaultPage = new CardDefaultPage(page);
            await cardDefaultPage.load({ ...props });

            // Assert
            if (disabled) {
                await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('disabled', '');
            } else {
                await expect(cardDefaultPage.cardComponent.buttonLocator).not.toHaveAttribute('disabled');
            }
        });
    });

    tags.forEach((tag) => {
        test(`should add an aria-label attribute that matches the value of the aria.label prop when tag is ${tag}`, async ({ page }) => {
            // Arrange
            const label = 'foo';
            const props: CardProps = {
                tag,
                aria: { label },
            };
            const cardDefaultPage = new CardDefaultPage(page);
            await cardDefaultPage.load({ ...props });

            // Act
            const locatorId = tag === 'a' ? cardDefaultPage.cardComponent.linkLocator : cardDefaultPage.cardComponent.buttonLocator;

            // Assert
            await expect(locatorId).toHaveAttribute('aria-label', label);
        });
    });

    test.describe('Prop: `isDraggable`', () => {
        test.describe('when set to true', () => {
            test('should set a class of `is-draggable`', async ({ page }) => {
                // Arrange

                const cardDefaultPage = new CardDefaultPage(page);
                await cardDefaultPage.load({
                    isDraggable: true,
                    tag: 'button',
                });

                // Assert
                await expect(cardDefaultPage.cardComponent.surfaceLocator).toHaveClass(/is-draggable/);
            });
        });

        test.describe('when set to false', () => {
            test('should not set a class of `is-draggable`', async ({ page }) => {
                // Arrange
                const cardDefaultPage = new CardDefaultPage(page);
                await cardDefaultPage.load({
                    isDraggable: false,
                    tag: 'button',
                });

                // Assert
                await expect(cardDefaultPage.cardComponent.surfaceLocator).not.toHaveClass(/is-draggable/);
            });
        });
    });

    test.describe('Prop: `padding`', () => {
        test.describe('when `padding` is set as a single string value', () => {
            test('should set an attribute of style with the correct padding value', async ({ page }) => {
                // Arrange
                const props: CardProps = {
                    padding: 'a',
                    tag: 'button',
                };
                const cardDefaultPage = new CardDefaultPage(page);
                await cardDefaultPage.load({ ...props });

                // Assert
                await expect(cardDefaultPage.cardComponent.surfaceLocator).toHaveAttribute('style', 'padding: var(--dt-spacing-a)');
            });
        });
    });
});

paddingValues.forEach((paddingValue) => {
    test(`should allow valid "padding" values: ${paddingValue}`, async ({ page }) => {
    // Arrange
        const props: CardProps = {
            tag: 'button',
        };

        const cardDefaultPage = new CardDefaultPage(page);
        await cardDefaultPage.load({ ...props });

        const values = paddingValue.split(',');

        // Wait for the component to be ready before using page.evaluate
        await cardDefaultPage.cardComponent.componentLocator.waitFor({ state: 'attached' });

        // Setting this manually due to Storybook limitations - https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
        await page.evaluate((paddingValue) => {
            const card = document.querySelector('pie-card');
            if (card) {
                // example format
                card.padding = paddingValue as CardProps['padding'];
            } else {
                throw new Error('Card not found');
            }
        }, paddingValue);

        // Assert
        if (values.length > 1) {
            await expect(cardDefaultPage.cardComponent.surfaceLocator).toHaveAttribute('style', `padding: var(--dt-spacing-${values[0]}) var(--dt-spacing-${values[1]})`);
        } else {
            await expect(cardDefaultPage.cardComponent.surfaceLocator).toHaveAttribute('style', `padding: var(--dt-spacing-${values[0]})`);
        }
    });
});

test('should not allow values outside "a-g"', async ({ page }) => {
    const invalidPaddingValue = { padding: 'z' };

    // Arrange
    const props: CardProps = {
        padding: invalidPaddingValue.padding as CardProps['padding'],
        tag: 'button',
    };

    const cardDefaultPage = new CardDefaultPage(page);
    await cardDefaultPage.load({ ...props });

    // Assert
    await expect(cardDefaultPage.cardComponent.surfaceLocator).toHaveAttribute('style', '');
});

test('should not allow more than one single value i.e "ab"', async ({ page }) => {
    const invalidPaddingValue = { padding: 'ab' };

    // Arrange
    const props: CardProps = {
        padding: invalidPaddingValue.padding as CardProps['padding'],
        tag: 'button',
    };

    const cardDefaultPage = new CardDefaultPage(page);
    await cardDefaultPage.load({ ...props });

    // Assert
    await expect(cardDefaultPage.cardComponent.surfaceLocator).toHaveAttribute('style', '');
});

test.describe('when `padding` is set as a comma separated string value', () => {
    test('should not allow more than 2 padding values', async ({ page }) => {
    // Arrange
        const paddingValue = { padding: 'a, b, c' };
        const props: CardProps = {
            padding: paddingValue.padding as CardProps['padding'],
            tag: 'button',
        };

        const cardDefaultPage = new CardDefaultPage(page);
        await cardDefaultPage.load({ ...props });

        await expect(cardDefaultPage.cardComponent.surfaceLocator).toHaveAttribute('style', '');
    });
});

test.describe('Prop: disabled', () => {
    test.describe('when an image exists and the prop `disabled` is set to `true`', () => {
        test('should set the opacity to 50%', async ({ page }) => {
            // Arrange
            const props: CardProps = {
                disabled: true,
            };

            const cardWithImagePage = new CardWithImagePage(page);
            await cardWithImagePage.load({ ...props });

            // Act
            const component = cardWithImagePage.cardComponent.componentLocator.locator('[data-test-id="slot-content"]');
            const image = component.locator('img');

            // Assert the image has the correct opacity
            await expect(image).toHaveCSS('opacity', '0.5');
        });
    });

    test.describe('when an image exists and the prop `disabled` is set to `false`', () => {
        test('should not set the opacity style on the image element', async ({ page }) => {
            // Arrange
            const props: CardProps = {
                disabled: false,
            };

            const cardWithImagePage = new CardWithImagePage(page);
            await cardWithImagePage.load({ ...props });

            // Act
            const component = cardWithImagePage.cardComponent.componentLocator.locator('[data-test-id="slot-content"]');
            const image = component.locator('img');

            // Assert the image has the correct opacity
            await expect(image).not.toHaveCSS('opacity', '0.5');
        });
    });

    test.describe('when the prop `tag` is set to `button`', () => {
        test('should disable the overlay button when disabled', async ({ page }) => {
            // Arrange
            const props: CardProps = {
                tag: 'button',
                disabled: true,
            };

            const cardDefaultPage = new CardDefaultPage(page);
            await cardDefaultPage.load({ ...props });

            // Assert
            await expect(cardDefaultPage.cardComponent.buttonLocator).toHaveAttribute('disabled', '');
            await expect(cardDefaultPage.cardComponent.buttonLocator).not.toHaveAttribute('tabindex');
        });
    });

    test.describe('when the prop `tag` is set to `a`', () => {
        test('should set `aria-disabled` to `true` when disabled', async ({ page }) => {
            // Arrange
            const props: CardProps = {
                tag: 'a',
                disabled: true,
            };

            const cardDefaultPage = new CardDefaultPage(page);
            await cardDefaultPage.load({ ...props });

            // Assert
            await expect(cardDefaultPage.cardComponent.linkLocator).toHaveAttribute('aria-disabled', 'true');
        });

        test('should not set the href attribute when disabled', async ({ page }) => {
            // Arrange
            const props: CardProps = {
                tag: 'a',
                disabled: true,
            };

            const cardDefaultPage = new CardDefaultPage(page);
            await cardDefaultPage.load({ ...props });

            await cardDefaultPage.cardComponent.componentLocator.waitFor({ state: 'attached' });

            await page.evaluate(() => {
                const card = document.querySelector('pie-card');
                card?.setAttribute('href', 'foo.com');
            });

            // Assert
            await expect(cardDefaultPage.cardComponent.linkLocator).not.toHaveAttribute('href');
        });
    });
});

test.describe('PieCard - Prop: `aria`', () => {
    tags.forEach((tag) => {
        test(`should forward description, haspopup and expanded to the interactive element when tag is ${tag}`, async ({ page }) => {
            // Arrange
            const props: CardProps = {
                tag,
                aria: {
                    label: 'foo',
                    description: 'bar',
                    haspopup: 'dialog',
                    expanded: true,
                },
            };
            const cardDefaultPage = new CardDefaultPage(page);
            await cardDefaultPage.load({ ...props });

            // Act
            const locator = tag === 'a' ? cardDefaultPage.cardComponent.linkLocator : cardDefaultPage.cardComponent.buttonLocator;

            // Assert
            await expect(locator).toHaveAttribute('aria-description', 'bar');
            await expect(locator).toHaveAttribute('aria-haspopup', 'dialog');
            await expect(locator).toHaveAttribute('aria-expanded', 'true');
        });

        test(`should not render description, haspopup or expanded attributes when the aria fields are omitted when tag is ${tag}`, async ({ page }) => {
            // Arrange
            const props: CardProps = {
                tag,
                aria: { label: 'foo' },
            };
            const cardDefaultPage = new CardDefaultPage(page);
            await cardDefaultPage.load({ ...props });

            // Act
            const locator = tag === 'a' ? cardDefaultPage.cardComponent.linkLocator : cardDefaultPage.cardComponent.buttonLocator;

            // Assert
            await expect(locator).not.toHaveAttribute('aria-description');
            await expect(locator).not.toHaveAttribute('aria-haspopup');
            await expect(locator).not.toHaveAttribute('aria-expanded');
        });
    });
});

test.describe('PieCard - Card click behaviour with slotted interactive controls', () => {
    test('should emit a native click event on the host when the card is clicked', async ({ page }) => {
        // Arrange
        const cardPage = new CardWithSlottedControlsPage(page);
        await cardPage.load();
        await installClickListeners(page);

        const countBefore = await page.evaluate(() => window.__cardClicks ?? 0);

        // Act
        await cardPage.cardComponent.surfaceLocator.click();

        // Assert
        await page.waitForFunction(
            (count) => (window.__cardClicks ?? 0) > count,
            countBefore,
        );
        await expect.poll(() => page.evaluate(() => (document.querySelector('#restaurant-modal') as HTMLDialogElement & { isOpen: boolean })?.isOpen ?? false)).toBe(true);
    });

    test('should not emit a click event on the host when a slotted interactive control stops propagation', async ({ page }) => {
        // Arrange
        const cardPage = new CardWithSlottedControlsPage(page);
        await cardPage.load();
        await installClickListeners(page);

        const countBefore = await page.evaluate(() => window.__cardClicks ?? 0);

        // Act
        await cardPage.cardComponent.componentLocator.getByTestId('card-action').click();

        // Assert - the slotted control's own handler runs (favouriting) and stops propagation, so the host listener and modal do not.
        await page.waitForFunction(() => (window.__slottedClicks ?? 0) > 0);
        await expect.poll(() => page.evaluate(() => window.__cardClicks ?? 0)).toBe(countBefore);
        await expect.poll(() => page.evaluate(() => (document.querySelector('#restaurant-modal') as HTMLDialogElement & { isOpen: boolean })?.isOpen ?? false)).toBe(false);
        await expect.poll(() => page.evaluate(() => ({
            outline: getComputedStyle(document.querySelector('[data-test-id="icon-heart-outline"]')!).display,
            filled: getComputedStyle(document.querySelector('[data-test-id="icon-heart-filled"]')!).display,
        }))).toEqual({ outline: 'none', filled: 'block' });

        // Act - clicking the control again unfavourites it, and still never triggers the card's click.
        await cardPage.cardComponent.componentLocator.getByTestId('card-action').click();

        // Assert
        await page.waitForFunction(() => (window.__slottedClicks ?? 0) > 1);
        await expect.poll(() => page.evaluate(() => window.__cardClicks ?? 0)).toBe(countBefore);
        await expect.poll(() => page.evaluate(() => ({
            outline: getComputedStyle(document.querySelector('[data-test-id="icon-heart-outline"]')!).display,
            filled: getComputedStyle(document.querySelector('[data-test-id="icon-heart-filled"]')!).display,
        }))).toEqual({ outline: 'block', filled: 'none' });
    });

    test('should emit a click event on the host when a slotted element does not stop propagation', async ({ page }) => {
        // Arrange
        const cardPage = new CardWithSlottedControlsPage(page);
        await cardPage.load();
        await installClickListeners(page);

        const countBefore = await page.evaluate(() => window.__cardClicks ?? 0);

        // Act - dispatch a click from slotted content that has no handler of its own.
        await page.evaluate(() => {
            document
                .querySelector('[data-test-id="slot-content"]')
                ?.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
        });

        // Assert - the component does not intercept clicks from slotted content.
        await page.waitForFunction(
            (count) => (window.__cardClicks ?? 0) > count,
            countBefore,
        );
        await expect.poll(() => page.evaluate(() => (document.querySelector('#restaurant-modal') as HTMLDialogElement & { isOpen: boolean })?.isOpen ?? false)).toBe(true);
    });

    test('should emit a click event on the host when the overlay button is activated with the Enter key', async ({ page }) => {
        // Arrange
        const cardPage = new CardWithSlottedControlsPage(page);
        await cardPage.load();
        await installClickListeners(page);

        const countBefore = await page.evaluate(() => window.__cardClicks ?? 0);

        // Act
        await page.evaluate(() => {
            document.querySelector('pie-card')
                ?.shadowRoot
                ?.querySelector<HTMLButtonElement>('.c-card-overlay')
                ?.focus();
        });
        await page.keyboard.press('Enter');

        // Assert
        await page.waitForFunction(
            (count) => (window.__cardClicks ?? 0) > count,
            countBefore,
        );
    });

    test('should focus the card overlay before any slotted interactive controls when tabbing', async ({ page }) => {
        // Arrange
        const cardPage = new CardWithSlottedControlsPage(page);
        await cardPage.load();

        // Act & Assert - tabbing should land on the card's overlay button first, then the slotted controls in slot order.
        await page.keyboard.press('Tab');
        await expect.poll(() => page.evaluate(() => {
            const root = document.querySelector('pie-card')?.shadowRoot;
            return root?.activeElement?.classList.contains('c-card-overlay') ?? false;
        })).toBe(true);

        await page.keyboard.press('Tab');
        await expect.poll(() => page.evaluate(() => document.activeElement?.tagName ?? '')).toBe('PIE-ICON-BUTTON');

        await page.keyboard.press('Tab');
        await expect.poll(() => page.evaluate(() => document.activeElement?.tagName ?? '')).toBe('PIE-LINK');
    });

    test('should not emit a click event on the host when the card is disabled', async ({ page }) => {
        // Arrange
        const cardPage = new CardWithSlottedControlsPage(page);
        await cardPage.load({ disabled: true });
        await installClickListeners(page);

        const countBefore = await page.evaluate(() => window.__cardClicks ?? 0);

        // Act - clicking the card hits the disabled overlay; clicking the slotted control proves clicks are dispatched at all.
        await cardPage.cardComponent.surfaceLocator.click();
        await cardPage.cardComponent.componentLocator.getByTestId('card-action').click();

        // Assert
        await page.waitForFunction(() => (window.__slottedClicks ?? 0) > 0);
        await expect.poll(() => page.evaluate(() => window.__cardClicks ?? 0)).toBe(countBefore);
        await expect.poll(() => page.evaluate(() => (document.querySelector('#restaurant-modal') as HTMLDialogElement & { isOpen: boolean })?.isOpen ?? false)).toBe(false);
    });
});
