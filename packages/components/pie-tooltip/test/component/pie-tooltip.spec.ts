import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import { type TooltipProps } from '../../src/defs.ts';
import { tooltip } from '../helpers/page-object/selectors.ts';

const loadDefaultStory = async (page: Page, props: Partial<TooltipProps> & Record<string, unknown> = {}) => {
    const basePage = new BasePage(page, 'tooltip--default');

    await basePage.load({ ...props });
    await expect(page.getByTestId(tooltip.selectors.trigger.dataTestId)).toBeVisible();

    return basePage;
};

const loadStory = async (page: Page, storyId: string) => {
    const basePage = new BasePage(page, storyId);

    await basePage.load();
    await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

    return basePage;
};

/**
 * Placement itself is asserted by the Percy snapshots of the placement grid stories, which render
 * all twelve positions in both writing directions. What is tested here is the behaviour behind
 * placement that a snapshot cannot see: the panel's open state, the positions measured in
 * JavaScript, the roles and accessible names, and the close event.
 */
test.describe('PieTooltip - Component tests', () => {
    test.describe('trigger', () => {
        test('should keep the trigger clickable while the panel is open', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { isOpen: true });

            const trigger = page.getByTestId(tooltip.selectors.trigger.dataTestId);

            // Act
            // The host is projected over the trigger's box, so it must not swallow the trigger's
            // own pointer events. Playwright hit-tests the target before clicking, so this fails
            // outright if the host is in the way.
            await trigger.click();

            // Assert
            await expect(trigger).toBeFocused();
        });
    });

    test.describe('roles and accessible names', () => {
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
            await loadStory(page, 'tooltip--with-action');

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            await expect(panel).toHaveAttribute('role', 'dialog');
        });

        test('should name the dialog panel from the heading', async ({ page }) => {
            // Arrange
            await loadStory(page, 'tooltip--with-action');

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            await expect(panel).toHaveAccessibleName('Delivery times');
        });

        test('should name the dialog panel from aria.label when there is no heading', async ({ page }) => {
            // Arrange
            await loadStory(page, 'tooltip--with-action-and-no-heading');

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            await expect(panel).toHaveAccessibleName('Delivery times');

            // Proves the name came from `aria.label` and not from a heading.
            await expect(panel).not.toHaveAttribute('aria-labelledby');
        });

        test('should not name the panel from the heading in tooltip mode', async ({ page }) => {
            // Arrange
            // The heading is set here rather than taken from a story, so that the test cannot
            // pass vacuously if a story's arguments change.
            await loadDefaultStory(page, { heading: 'Delivery times' });

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            // There is a heading to name the panel with, and the panel is in tooltip mode.
            await expect(page.getByTestId(tooltip.selectors.heading.dataTestId)).toHaveText('Delivery times');
            await expect(panel).toHaveAttribute('role', 'tooltip');

            // A tooltip is a description, never a name, so that heading must not name the panel.
            // `role="tooltip"` takes its name from its contents, so the assertion is on the
            // absence of the wiring rather than on the computed name.
            await expect(panel).not.toHaveAttribute('aria-labelledby');
            await expect(panel).not.toHaveAttribute('aria-label');
        });
    });

    test.describe('isDismissible', () => {
        test('should name the close button from aria.close', async ({ page }) => {
            // Arrange
            await loadStory(page, 'tooltip--dismissible');

            // Act
            const closeButton = page.getByRole('button', { name: 'Close' });

            // Assert
            await expect(closeButton).toBeVisible();
        });

        test('should place the close button in the tab sequence inside the panel', async ({ page }) => {
            // Arrange
            await loadStory(page, 'tooltip--dismissible');

            // Act
            await page.getByTestId(tooltip.selectors.trigger.dataTestId).focus();
            await page.keyboard.press('Tab');

            // Assert
            await expect(page.getByTestId(tooltip.selectors.close.dataTestId)).toBeFocused();
        });

        test('should emit exactly one close event when the close button is clicked', async ({ page }) => {
            // Arrange
            const basePage = await loadStory(page, 'tooltip--dismissible');

            await basePage.listenForEvent('pie-tooltip-close');

            // Act
            await page.getByTestId(tooltip.selectors.close.dataTestId).click();
            await page.waitForFunction(() => window.__eventsArray.length > 0);

            // Assert
            expect(await basePage.getCapturedEvents()).toEqual(['pie-tooltip-close']);
        });

        test('should not close itself when nothing is listening for the close event', async ({ page }) => {
            // Arrange
            await loadStory(page, 'tooltip--dismissible');

            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Act
            // The test stories wire no listeners at all, so the close button has no effect: the
            // consumer owns `isOpen` and the component never writes to it.
            await page.getByTestId(tooltip.selectors.close.dataTestId).click();

            // Assert
            await expect(panel).toBeVisible();

            const isOpen = await page.evaluate(() => (document.querySelector('pie-tooltip') as (HTMLElement & { isOpen: boolean }) | null)?.isOpen);

            expect(isOpen).toBe(true);
        });
    });

    test.describe('trigger anchoring', () => {
        test('should render the panel when there is no trigger id', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page);

            // Act
            await page.evaluate(() => document.querySelector('pie-tooltip')?.removeAttribute('trigger'));

            // Assert
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();
        });
    });

    /**
     * `boundingBox()` reports the layout box, which is identical whether or not the box is clipped
     * away, so it can never fail on a clipping bug. These tests use it only to choose a probe
     * point and then hit-test that point, because hit testing does respect clipping: an area that
     * has been clipped belongs to no element at all.
     */
    test.describe('escaping clipping ancestors', () => {
        const openInModal = async (page: Page, storyId: string) => {
            const basePage = new BasePage(page, storyId);

            await basePage.load();

            // `showModal()` runs from an async `firstUpdated`, so the dialog can open after the
            // page has otherwise settled.
            await expect(page.getByTestId(tooltip.selectors.modal.dataTestId)).toBeVisible();
            await basePage.freezeAnimations();

            await page.getByTestId(tooltip.selectors.trigger.dataTestId).click();
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();

            return basePage;
        };

        const getHostPosition = (page: Page) => page.evaluate(() => getComputedStyle(document.querySelector('pie-tooltip') as HTMLElement).position);

        const modalStories = [
            { name: 'the footer is not pinned', storyId: 'tooltip--in-modal' },
            { name: 'the footer is pinned', storyId: 'tooltip--in-modal-with-pinned-footer' },
        ];

        modalStories.forEach(({ name, storyId }) => {
            test(`should render the panel outside the modal when ${name}`, async ({ page }) => {
                // Arrange
                await openInModal(page, storyId);

                const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);
                const panelBox = (await panel.boundingBox())!;
                const dialogBox = (await page.getByTestId(tooltip.selectors.modal.dataTestId).boundingBox())!;
                const dialogBottom = dialogBox.y + dialogBox.height;

                // The story places the trigger last with the panel below it, so the panel has to
                // cross the modal's bottom edge. Without this the rest could pass for the wrong
                // reason.
                expect(panelBox.y + panelBox.height).toBeGreaterThan(dialogBottom);

                // Act
                // A point that is inside the panel but outside the dialog, so it exists only if
                // the panel escaped.
                const probe = {
                    x: Math.round(panelBox.x + panelBox.width / 2),
                    y: Math.round(dialogBottom + 4),
                };

                expect(probe.y).toBeLessThan(panelBox.y + panelBox.height);

                // `elementFromPoint` retargets the shadow-DOM panel to its host.
                const tagAtProbe = await page.evaluate(
                    ({ x, y }) => document.elementFromPoint(x, y)?.tagName ?? null,
                    probe,
                );

                // Assert
                expect(tagAtProbe).toBe('PIE-TOOLTIP');
                expect(await getHostPosition(page)).toBe('fixed');
            });
        });

        test('should keep the modal open when the escaped panel is clicked', async ({ page }) => {
            // Arrange
            await openInModal(page, 'tooltip--in-modal');

            const dialog = page.getByTestId(tooltip.selectors.modal.dataTestId);

            // Act
            // The panel now paints outside the dialog's box, which is exactly what the modal's
            // backdrop light-dismiss looks for. It targets `pie-tooltip` rather than the dialog,
            // so the modal must stay open.
            await page.getByTestId(tooltip.selectors.slottedContent.dataTestId).click();

            // Assert
            await expect(dialog).toBeVisible();
        });

        test('should keep the panel anchored when a scroll container inside a shadow root scrolls', async ({ page }) => {
            // Arrange
            await openInModal(page, 'tooltip--in-modal');

            const trigger = page.getByTestId(tooltip.selectors.trigger.dataTestId);
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            const triggerBoxBefore = (await trigger.boundingBox())!;
            const panelBoxBefore = (await panel.boundingBox())!;
            const offsetBefore = panelBoxBefore.y - triggerBoxBefore.y;

            // Act
            // `scroll` is not composed, so this never reaches a listener on `window`. If the
            // component does not listen on the shadow root itself, the panel stays put while the
            // trigger moves.
            await page.evaluate(() => {
                const container = document.querySelector('pie-modal')
                    ?.shadowRoot?.querySelector('.c-modal-scrollContainer');

                container?.scrollBy(0, 80);
            });

            await page.evaluate(() => new Promise((resolve) => {
                requestAnimationFrame(() => requestAnimationFrame(resolve));
            }));

            // Assert
            const triggerBoxAfter = (await trigger.boundingBox())!;
            const panelBoxAfter = (await panel.boundingBox())!;

            expect(triggerBoxAfter.y).not.toBe(triggerBoxBefore.y);
            expect(panelBoxAfter.y - triggerBoxAfter.y).toBeCloseTo(offsetBefore, 0);
        });

        test('should promote the panel to fixed when the clipper is its containing block', async ({ page }) => {
            // Arrange
            await loadStory(page, 'tooltip--in-clipping-scroll-container');

            // Assert
            expect(await getHostPosition(page)).toBe('fixed');
        });

        test('should leave the panel absolute when the clipper is inside its containing block', async ({ page }) => {
            // Arrange
            await loadStory(page, 'tooltip--clipper-inside-containing-block');

            // Assert
            // An absolute box already escapes a clipper that sits inside its containing block, so
            // promoting would buy a re-projection on every scroll for nothing.
            expect(await getHostPosition(page)).toBe('absolute');
        });
    });
});
