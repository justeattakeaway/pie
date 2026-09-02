import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import { positions, type TooltipProps } from '../../src/defs.ts';
import { tooltip } from '../helpers/page-object/selectors.ts';

/**
 * The default `--tooltip-offset`, taken from `--dt-spacing-b`. Asserted rather than read back so
 * that a change to the default has to be a deliberate one.
 */
const defaultOffset = 8;

/**
 * Where the arrow's centre sits from the panel's aligned edge for the `-start` and `-end`
 * alignments: `--dt-radius-rounded-b` plus `--tooltip-arrow-size`. This is what makes the three
 * alignments on each side read as three distinct placements.
 */
const arrowInset = 16;

/**
 * The inline size of a `default` panel. `default` is a fixed width, not a cap, so the panel is
 * this wide whatever its content.
 */
const defaultInlineSize = 280;

const longContent = 'Orders placed before 6pm arrive today. Orders placed after 6pm arrive the next working day, including at weekends.';

// Layout is measured in CSS pixels, so allow a pixel of sub-pixel rounding.
const tolerance = 1;

type Box = { x: number; y: number; width: number; height: number };

const getBox = async (page: Page, dataTestId: string): Promise<Box> => {
    const box = await page.getByTestId(dataTestId).boundingBox();

    expect(box).not.toBeNull();

    return box as Box;
};

/**
 * Measures an element inside a specific tooltip's shadow root. The grid stories render twelve
 * panels at once, so the shared `pie-tooltip-*` test ids have to be scoped by the host's own
 * test id to identify one of them.
 */
const getScopedBox = async (page: Page, hostTestId: string, innerTestId: string): Promise<Box> => {
    const box = await page.getByTestId(hostTestId).getByTestId(innerTestId).boundingBox();

    expect(box).not.toBeNull();

    return box as Box;
};

const edges = (box: Box) => ({
    top: box.y,
    bottom: box.y + box.height,
    left: box.x,
    right: box.x + box.width,
    width: box.width,
    height: box.height,
    centreX: box.x + (box.width / 2),
    centreY: box.y + (box.height / 2),
});

const sideOf = (position: typeof positions[number]) => position.split('-')[0] as 'top' | 'bottom' | 'left' | 'right';
const alignmentOf = (position: typeof positions[number]) => position.split('-')[1] as 'start' | 'end' | undefined;

const loadDefaultStory = async (page: Page, props: Partial<TooltipProps> & Record<string, unknown> = {}) => {
    const basePage = new BasePage(page, 'tooltip--default');

    await basePage.load({ ...props });
    await expect(page.getByTestId(tooltip.selectors.trigger.dataTestId)).toBeVisible();

    return basePage;
};

test.describe('PieTooltip - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        await loadDefaultStory(page);

        // Act
        const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

        // Assert
        await expect(panel).toBeVisible();
    });

    test.describe('isOpen', () => {
        test('should show the panel when isOpen is true', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { isOpen: true });

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            await expect(panel).toBeVisible();
        });

        test('should hide the panel when isOpen is false', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { isOpen: false });

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            await expect(panel).toBeHidden();
        });

        test('should remove the dialog panel from the accessibility tree while closed', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'tooltip--with-action');

            await basePage.load({ isOpen: false });

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            // The panel is display: none while closed, so it is out of the accessibility tree.
            await expect(panel).toBeHidden();
        });

        test('should keep the trigger clickable while the panel is open', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { isOpen: true });

            await page.evaluate(() => {
                window.__eventsArray = [];
                document.querySelector('[data-test-id="tooltip-trigger"]')
                    ?.addEventListener('click', () => window.__eventsArray.push('trigger-click'));
            });

            // Act
            // The host is projected over the trigger's box, so it must not swallow the trigger's
            // own pointer events.
            await page.getByTestId(tooltip.selectors.trigger.dataTestId).click();

            // Assert
            await expect.poll(async () => page.evaluate(() => window.__eventsArray)).toEqual(['trigger-click']);
        });
    });

    test.describe('position', () => {
        positions.forEach((position) => {
            test(`should place the panel on the correct side of the trigger when position is ${position}`, async ({ page }) => {
                // Arrange
                await loadDefaultStory(page, { position });

                // Act
                const trigger = edges(await getBox(page, tooltip.selectors.trigger.dataTestId));
                const panel = edges(await getBox(page, tooltip.selectors.panel.dataTestId));

                // Assert
                switch (sideOf(position)) {
                    case 'top':
                        expect(trigger.top - panel.bottom).toBeCloseTo(defaultOffset, 0);
                        break;
                    case 'bottom':
                        expect(panel.top - trigger.bottom).toBeCloseTo(defaultOffset, 0);
                        break;
                    case 'left':
                        expect(trigger.left - panel.right).toBeCloseTo(defaultOffset, 0);
                        break;
                    default:
                        expect(panel.left - trigger.right).toBeCloseTo(defaultOffset, 0);
                }
            });

            test(`should align the panel on the cross axis when position is ${position}`, async ({ page }) => {
                // Arrange
                await loadDefaultStory(page, { position });

                // Act
                const trigger = edges(await getBox(page, tooltip.selectors.trigger.dataTestId));
                const panel = edges(await getBox(page, tooltip.selectors.panel.dataTestId));
                const side = sideOf(position);
                const alignment = alignmentOf(position);
                const isBlockAxisAlignment = side === 'left' || side === 'right';

                // Assert
                if (!alignment) {
                    if (isBlockAxisAlignment) {
                        expect(Math.abs(panel.centreY - trigger.centreY)).toBeLessThanOrEqual(tolerance);
                    } else {
                        expect(Math.abs(panel.centreX - trigger.centreX)).toBeLessThanOrEqual(tolerance);
                    }
                } else if (isBlockAxisAlignment) {
                    const panelEdge = alignment === 'start' ? panel.top : panel.bottom;
                    const triggerEdge = alignment === 'start' ? trigger.top : trigger.bottom;

                    expect(Math.abs(panelEdge - triggerEdge)).toBeLessThanOrEqual(tolerance);
                } else {
                    const panelEdge = alignment === 'start' ? panel.left : panel.right;
                    const triggerEdge = alignment === 'start' ? trigger.left : trigger.right;

                    expect(Math.abs(panelEdge - triggerEdge)).toBeLessThanOrEqual(tolerance);
                }
            });

            test(`should attach the arrow to the panel edge facing the trigger when position is ${position}`, async ({ page }) => {
                // Arrange
                await loadDefaultStory(page, { position });

                // Act
                const panel = edges(await getBox(page, tooltip.selectors.panel.dataTestId));
                const arrow = edges(await getBox(page, tooltip.selectors.arrow.dataTestId));

                // Assert
                switch (sideOf(position)) {
                    case 'top':
                        expect(Math.abs(arrow.centreY - panel.bottom)).toBeLessThanOrEqual(tolerance);
                        break;
                    case 'bottom':
                        expect(Math.abs(arrow.centreY - panel.top)).toBeLessThanOrEqual(tolerance);
                        break;
                    case 'left':
                        expect(Math.abs(arrow.centreX - panel.right)).toBeLessThanOrEqual(tolerance);
                        break;
                    default:
                        expect(Math.abs(arrow.centreX - panel.left)).toBeLessThanOrEqual(tolerance);
                }
            });

            test(`should not obscure its own trigger when position is ${position}`, async ({ page }) => {
                // Arrange
                await loadDefaultStory(page, { position });

                // Act
                const trigger = edges(await getBox(page, tooltip.selectors.trigger.dataTestId));
                const panel = edges(await getBox(page, tooltip.selectors.panel.dataTestId));

                // Assert
                // WCAG 2.4.11: a persistent non-modal panel must never cover the focused trigger.
                const overlaps = panel.left < trigger.right &&
                    panel.right > trigger.left &&
                    panel.top < trigger.bottom &&
                    panel.bottom > trigger.top;

                expect(overlaps).toBe(false);
            });
        });

        test('should not mutate the position property', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { position: 'top-start' });

            // Act
            const position = await page.evaluate(() => document.querySelector('pie-tooltip')?.getAttribute('position'));

            // Assert
            expect(position).toBe('top-start');
        });
    });

    test.describe('RTL', () => {
        /**
         * The placement grid rendered in RTL. Direction comes from the `writingDirection` global,
         * the same switch the Storybook toolbar drives, so the story under test is the one a
         * consumer would look at. Every placement is present, each anchor named
         * `placement-<position>`.
         */
        const loadRtlGrid = async (page: Page, position: typeof positions[number]) => {
            const basePage = new BasePage(page, 'tooltip--placement-grid');
            const host = `placement-${position}-tooltip`;

            await basePage.load({}, { writingDirection: 'rtl' });
            await expect(page.getByTestId(host).getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

            return {
                trigger: edges(await getBox(page, `placement-${position}`)),
                panel: edges(await getScopedBox(page, host, tooltip.selectors.panel.dataTestId)),
                arrow: edges(await getScopedBox(page, host, tooltip.selectors.arrow.dataTestId)),
            };
        };

        test('should mirror an inline-axis alignment without any JavaScript awareness of direction', async ({ page }) => {
            // Arrange & Act
            const { trigger, panel } = await loadRtlGrid(page, 'top-start');

            // Assert
            // In RTL the inline-start edge is the right-hand edge, so `top-start` aligns there.
            expect(Math.abs(panel.right - trigger.right)).toBeLessThanOrEqual(tolerance);
        });

        test('should swap the left placement to the right of the trigger in RTL', async ({ page }) => {
            // Arrange & Act
            const { trigger, panel } = await loadRtlGrid(page, 'left');

            // Assert
            // `left` resolves on the inline axis, and the inline-start side is the right-hand
            // side in RTL, so the panel appears to the right of its trigger.
            expect(panel.left - trigger.right).toBeCloseTo(defaultOffset, 0);
        });

        test('should swap the right placement to the left of the trigger in RTL', async ({ page }) => {
            // Arrange & Act
            const { trigger, panel } = await loadRtlGrid(page, 'right');

            // Assert
            expect(trigger.left - panel.right).toBeCloseTo(defaultOffset, 0);
        });

        test('should keep the arrow on the panel edge facing the trigger when the sides swap in RTL', async ({ page }) => {
            // Arrange & Act
            const { arrow, panel } = await loadRtlGrid(page, 'left');

            // Assert
            // The panel sits to the right of the trigger in RTL, so the arrow moves with it and
            // attaches to the panel's left edge.
            expect(Math.abs(arrow.centreX - panel.left)).toBeLessThanOrEqual(tolerance);
        });
    });

    test.describe('size', () => {
        test('should size the panel to 280px when size is default and the content is short', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { size: 'default', content: 'Arrives today.' });

            // Act
            const panel = await getBox(page, tooltip.selectors.panel.dataTestId);

            // Assert
            expect(panel.width).toBeCloseTo(defaultInlineSize, 0);
        });

        test('should size the panel to 280px when size is default and the content is long', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { size: 'default', content: longContent });

            // Act
            const panel = await getBox(page, tooltip.selectors.panel.dataTestId);

            // Assert
            expect(panel.width).toBeCloseTo(defaultInlineSize, 0);
        });

        test('should size the panel to its content when size is fit-to-content', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { size: 'fit-to-content', content: longContent });

            // Act
            const panel = await getBox(page, tooltip.selectors.panel.dataTestId);

            // Assert
            expect(panel.width).toBeGreaterThan(defaultInlineSize);
        });

        test('should match the inline size of the trigger\'s parent element when size is fill-container', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { size: 'fill-container', containerInlineSize: '420px' });

            // Act
            const container = await getBox(page, tooltip.selectors.triggerContainer.dataTestId);
            const panel = await getBox(page, tooltip.selectors.panel.dataTestId);

            // Assert
            // `fill-container` is defined as the inline size of the trigger's parent element.
            expect(container.width).toBeCloseTo(420, 0);
            expect(panel.width).toBeCloseTo(container.width, 0);
        });

        test('should ignore the content length when size is fill-container', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, {
                size: 'fill-container',
                containerInlineSize: '420px',
                content: 'Arrives today.',
            });

            // Act
            const panel = await getBox(page, tooltip.selectors.panel.dataTestId);

            // Assert
            expect(panel.width).toBeCloseTo(420, 0);
        });
    });

    test.describe('CSS variables', () => {
        test('should size the panel from --tooltip-width', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { tooltipWidth: '200px' });

            // Act
            const panel = await getBox(page, tooltip.selectors.panel.dataTestId);

            // Assert
            expect(panel.width).toBeCloseTo(200, 0);
        });

        (['top', 'bottom', 'left', 'right'] as const).forEach((position) => {
            test(`should apply --tooltip-offset as the measured gap on the ${position} side`, async ({ page }) => {
                // Arrange
                await loadDefaultStory(page, { position, tooltipOffset: '32px' });

                // Act
                const trigger = edges(await getBox(page, tooltip.selectors.trigger.dataTestId));
                const panel = edges(await getBox(page, tooltip.selectors.panel.dataTestId));

                // Assert
                switch (position) {
                    case 'top':
                        expect(trigger.top - panel.bottom).toBeCloseTo(32, 0);
                        break;
                    case 'bottom':
                        expect(panel.top - trigger.bottom).toBeCloseTo(32, 0);
                        break;
                    case 'left':
                        expect(trigger.left - panel.right).toBeCloseTo(32, 0);
                        break;
                    default:
                        expect(panel.left - trigger.right).toBeCloseTo(32, 0);
                }
            });
        });

        test('should inset the arrow from the panel\'s aligned edge for the -start alignments', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { position: 'top-start' });

            // Act
            const panel = edges(await getBox(page, tooltip.selectors.panel.dataTestId));
            const arrow = edges(await getBox(page, tooltip.selectors.arrow.dataTestId));

            // Assert
            expect(arrow.centreX - panel.left).toBeCloseTo(arrowInset, 0);
        });

        test('should inset the arrow from the panel\'s aligned edge for the -end alignments', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { position: 'top-end' });

            // Act
            const panel = edges(await getBox(page, tooltip.selectors.panel.dataTestId));
            const arrow = edges(await getBox(page, tooltip.selectors.arrow.dataTestId));

            // Assert
            expect(panel.right - arrow.centreX).toBeCloseTo(arrowInset, 0);
        });

        test('should inset the arrow on the block axis for the left and right alignments', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { position: 'left-end' });

            // Act
            const panel = edges(await getBox(page, tooltip.selectors.panel.dataTestId));
            const arrow = edges(await getBox(page, tooltip.selectors.arrow.dataTestId));

            // Assert
            expect(panel.bottom - arrow.centreY).toBeCloseTo(arrowInset, 0);
        });

        test('should centre the arrow on the trigger for the centre alignments', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { position: 'top' });

            // Act
            const trigger = edges(await getBox(page, tooltip.selectors.trigger.dataTestId));
            const arrow = edges(await getBox(page, tooltip.selectors.arrow.dataTestId));

            // Assert
            expect(Math.abs(arrow.centreX - trigger.centreX)).toBeLessThanOrEqual(tolerance);
        });

        test('should keep the arrow attached to the panel edge and over the trigger centre when the offset changes', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { position: 'top', tooltipOffset: '32px' });

            // Act
            const trigger = edges(await getBox(page, tooltip.selectors.trigger.dataTestId));
            const panel = edges(await getBox(page, tooltip.selectors.panel.dataTestId));
            const arrow = edges(await getBox(page, tooltip.selectors.arrow.dataTestId));

            // Assert
            expect(Math.abs(arrow.centreY - panel.bottom)).toBeLessThanOrEqual(tolerance);
            expect(Math.abs(arrow.centreX - trigger.centreX)).toBeLessThanOrEqual(tolerance);
        });
    });

    test.describe('anchor and panel sizes', () => {
        test('should centre a panel wider than its trigger, overflowing evenly on both sides', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'tooltip--anchor-widths');

            await basePage.load();
            await expect(page.getByTestId('narrow-anchor-tooltip')).toBeVisible();

            // Act
            const trigger = edges(await getBox(page, 'narrow-anchor'));
            const panel = edges(await getBox(page, 'narrow-anchor-tooltip'));

            // Assert
            expect(panel.width).toBeGreaterThan(trigger.width);
            expect(trigger.left - panel.left).toBeCloseTo(panel.right - trigger.right, 0);
        });

        test('should centre a panel narrower than its trigger', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'tooltip--anchor-widths');

            await basePage.load();
            await expect(page.getByTestId('wide-anchor-tooltip')).toBeVisible();

            // Act
            const trigger = edges(await getBox(page, 'wide-anchor'));
            const panel = edges(await getBox(page, 'wide-anchor-tooltip'));

            // Assert
            expect(panel.width).toBeLessThan(trigger.width);
            expect(Math.abs(panel.centreX - trigger.centreX)).toBeLessThanOrEqual(tolerance);
        });
    });

    test.describe('re-anchoring', () => {
        const settleFrames = (page: Page) => page.evaluate(() => new Promise<void>((resolve) => {
            requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        }));

        test('should stay attached to the trigger while the page scrolls', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'tooltip--scrollable-page');

            await basePage.load();
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

            const triggerBefore = edges(await getBox(page, tooltip.selectors.trigger.dataTestId));

            // Act
            await page.evaluate(() => window.scrollBy(0, 300));
            await settleFrames(page);

            // Assert
            const triggerAfter = edges(await getBox(page, tooltip.selectors.trigger.dataTestId));
            const panelAfter = edges(await getBox(page, tooltip.selectors.panel.dataTestId));

            // The trigger really did move, so the gap assertion cannot pass trivially.
            expect(triggerAfter.top).toBeLessThan(triggerBefore.top);
            expect(panelAfter.top - triggerAfter.bottom).toBeCloseTo(defaultOffset, 0);
        });
    });

    test.describe('roles and accessible names', () => {
        const loadDialogStory = async (page: Page) => {
            const basePage = new BasePage(page, 'tooltip--with-action');

            await basePage.load();
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

            return basePage;
        };

        test('should use role tooltip when the action slot is empty', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page);

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            await expect(panel).toHaveAttribute('role', 'tooltip');
        });

        test('should use role dialog when the action slot is filled', async ({ page }) => {
            // Arrange
            await loadDialogStory(page);

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            await expect(panel).toHaveAttribute('role', 'dialog');
        });

        test('should never set aria-modal on the panel', async ({ page }) => {
            // Arrange
            await loadDialogStory(page);

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            // The panel is non-modal and focus is never trapped.
            await expect(panel).not.toHaveAttribute('aria-modal');
        });

        test('should name the dialog panel from the heading', async ({ page }) => {
            // Arrange
            await loadDialogStory(page);

            // Act
            const headingText = await page.evaluate(() => {
                const root = document.querySelector('pie-tooltip')?.shadowRoot;
                const panel = root?.querySelector('[data-test-id="pie-tooltip"]');
                const labelledBy = panel?.getAttribute('aria-labelledby');

                return labelledBy ? root?.getElementById(labelledBy)?.textContent?.trim() : null;
            });

            // Assert
            expect(headingText).toBe('Delivery times');
        });

        test('should name the dialog panel from aria.label when there is no heading', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'tooltip--with-action-and-no-heading');

            await basePage.load();
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            await expect(panel).toHaveAttribute('aria-label', 'Delivery times');
            await expect(panel).not.toHaveAttribute('aria-labelledby');
        });

        test('should not name the panel in tooltip mode', async ({ page }) => {
            // Arrange
            const basePage = new BasePage(page, 'tooltip--with-heading');

            await basePage.load();
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            // A tooltip is a description, never a name.
            await expect(panel).not.toHaveAttribute('aria-labelledby');
            await expect(panel).not.toHaveAttribute('aria-label');
        });

        test('should not point aria-describedby at the dialog panel\'s own content', async ({ page }) => {
            // Arrange
            await loadDialogStory(page);

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            await expect(panel).not.toHaveAttribute('aria-describedby');
        });
    });

    test.describe('isDismissible', () => {
        const loadDismissibleStory = async (page: Page) => {
            const basePage = new BasePage(page, 'tooltip--dismissible');

            await basePage.load();
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

            return basePage;
        };

        test('should not render the close button by default', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page);

            // Act
            const closeButton = page.getByTestId(tooltip.selectors.close.dataTestId);

            // Assert
            await expect(closeButton).toBeHidden();
        });

        test('should render the close button when isDismissible is true', async ({ page }) => {
            // Arrange
            await loadDismissibleStory(page);

            // Act
            const closeButton = page.getByTestId(tooltip.selectors.close.dataTestId);

            // Assert
            await expect(closeButton).toBeVisible();
        });

        test('should name the close button from aria.close', async ({ page }) => {
            // Arrange
            await loadDismissibleStory(page);

            // Act
            const closeButton = page.getByRole('button', { name: 'Close' });

            // Assert
            await expect(closeButton).toBeVisible();
        });

        test('should place the close button in the tab sequence inside the panel', async ({ page }) => {
            // Arrange
            await loadDismissibleStory(page);

            // Act
            await page.getByTestId(tooltip.selectors.trigger.dataTestId).focus();
            await page.keyboard.press('Tab');

            // Assert
            const focusedLabel = await page.evaluate(() => {
                let active: Element | null | undefined = document.activeElement;

                while (active?.shadowRoot?.activeElement) {
                    active = active.shadowRoot.activeElement;
                }

                return active?.getAttribute('aria-label');
            });

            expect(focusedLabel).toBe('Close');
        });

        test('should emit exactly one close event when the close button is clicked', async ({ page }) => {
            // Arrange
            const basePage = await loadDismissibleStory(page);

            await basePage.listenForEvent('pie-tooltip-close');

            // Act
            await page.getByTestId(tooltip.selectors.close.dataTestId).click();
            await page.waitForFunction(() => window.__eventsArray.length > 0);

            // Assert
            expect(await basePage.getCapturedEvents()).toEqual(['pie-tooltip-close']);
        });

        test('should not close itself when nothing is listening for the close event', async ({ page }) => {
            // Arrange
            await loadDismissibleStory(page);

            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Act
            // The test stories wire no listeners at all, so the close button has no effect.
            await page.getByTestId(tooltip.selectors.close.dataTestId).click();

            // Assert
            await expect(panel).toBeVisible();

            const isOpen = await page.evaluate(() => (document.querySelector('pie-tooltip') as (HTMLElement & { isOpen: boolean }) | null)?.isOpen);

            expect(isOpen).toBe(true);
        });
    });

    test.describe('trigger', () => {
        test('should render without a trigger id', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page);

            await page.evaluate(() => document.querySelector('pie-tooltip')?.removeAttribute('trigger'));

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            await expect(panel).toBeVisible();
        });
    });
});
