import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

import { type TooltipProps } from '../../src/defs.ts';
import { tooltip } from '../helpers/page-object/selectors.ts';

type Box = { x: number; y: number; width: number; height: number };

const getBox = async (page: Page, dataTestId: string): Promise<Box> => {
    const box = await page.getByTestId(dataTestId).boundingBox();

    expect(box).not.toBeNull();

    return box as Box;
};

const bottomOf = (box: Box) => box.y + box.height;

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
    test.describe('isOpen', () => {
        test('should hide the panel when isOpen is false', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page, { isOpen: false });

            // Act
            const panel = page.getByTestId(tooltip.selectors.panel.dataTestId);

            // Assert
            // The panel is `display: none` while closed, so it is also out of the accessibility tree.
            await expect(panel).toBeHidden();
        });

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

    test.describe('trigger', () => {
        test('should stay attached to the trigger while the page scrolls', async ({ page }) => {
            // Arrange
            // A viewport shorter than the story's own padding is what makes the page scrollable.
            await page.setViewportSize({ width: 1280, height: 300 });
            await loadDefaultStory(page, { position: 'bottom' });

            const triggerBefore = await getBox(page, tooltip.selectors.trigger.dataTestId);
            const panelBefore = await getBox(page, tooltip.selectors.panel.dataTestId);
            const gap = panelBefore.y - bottomOf(triggerBefore);

            // Act
            await page.evaluate(() => window.scrollBy(0, 100));
            await page.evaluate(() => new Promise<void>((resolve) => {
                requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
            }));

            // Assert
            const triggerAfter = await getBox(page, tooltip.selectors.trigger.dataTestId);
            const panelAfter = await getBox(page, tooltip.selectors.panel.dataTestId);

            // The trigger really did move, so the gap assertion cannot pass trivially.
            expect(triggerAfter.y).toBeLessThan(triggerBefore.y);
            expect(panelAfter.y - bottomOf(triggerAfter)).toBeCloseTo(gap, 0);
        });

        test('should render the panel when there is no trigger id', async ({ page }) => {
            // Arrange
            await loadDefaultStory(page);

            // Act
            await page.evaluate(() => document.querySelector('pie-tooltip')?.removeAttribute('trigger'));

            // Assert
            await expect(page.getByTestId(tooltip.selectors.panel.dataTestId)).toBeVisible();
        });
    });
});
