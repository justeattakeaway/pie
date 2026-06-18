import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const COMPONENT = 'active-descendant-mock';

/**
 * Returns the `aria-activedescendant` value on the listbox container.
 */
const getActiveDescendantId = (page: Page) => page.evaluate((selector) => {
    const host = document.querySelector(selector);
    return host?.shadowRoot?.querySelector('[role="listbox"]')?.getAttribute('aria-activedescendant') ?? null;
}, COMPONENT);

/**
 * Returns the text of the option currently referenced by `aria-activedescendant`,
 * resolving the id through the shadow root. `null` when nothing is active.
 */
const getActiveOptionText = (page: Page) => page.evaluate((selector) => {
    const host = document.querySelector(selector);
    const root = host?.shadowRoot;
    const activeId = root?.querySelector('[role="listbox"]')?.getAttribute('aria-activedescendant');
    if (!activeId) return null;
    return root?.getElementById(activeId)?.textContent?.trim() ?? null;
}, COMPONENT);

/**
 * Returns the role of the element that currently holds focus within the shadow root.
 */
const getFocusedRole = (page: Page) => page.evaluate((selector) => {
    const host = document.querySelector(selector);
    return host?.shadowRoot?.activeElement?.getAttribute('role') ?? null;
}, COMPONENT);

/**
 * Returns the text of the option the host has marked with `[data-active]`. This
 * is host-rendered styling state (not controller state), so it only tracks the
 * active descendant if the controller requests a host update on change.
 */
const getVisuallyActiveText = (page: Page) => page.evaluate((selector) => {
    const host = document.querySelector(selector);
    return host?.shadowRoot?.querySelector('[role="option"][data-active]')?.textContent?.trim() ?? null;
}, COMPONENT);

const loadStory = async (page: Page, storyId: string, globals: Record<string, unknown> = {}) => {
    const mockPage = new BasePage(page, storyId);
    await mockPage.load({}, globals);
    await page.locator(COMPONENT).waitFor({ state: 'visible' });
};

test.describe('ActiveDescendantController', () => {
    test.describe('initial state', () => {
        test('should point aria-activedescendant at the first option, with a generated id', async ({ page }) => {
            await loadStory(page, 'webc-core--active-descendant-vertical');

            // The options have no author-provided id, so the controller generates one.
            const activeId = await getActiveDescendantId(page);
            expect(activeId).toBeTruthy();
            expect(await getActiveOptionText(page)).toBe('Option 1');
        });

        test('should move focus to the container (not an option) when tabbing in', async ({ page }) => {
            await loadStory(page, 'webc-core--active-descendant-vertical');

            await page.keyboard.press('Tab');

            // Focus lands on the listbox itself; options are never focused.
            expect(await getFocusedRole(page)).toBe('listbox');
        });
    });

    test.describe('navigation', () => {
        test('should move the active descendant without moving DOM focus', async ({ page }) => {
            await loadStory(page, 'webc-core--active-descendant-vertical');
            await page.keyboard.press('Tab');

            await page.keyboard.press('ArrowDown');
            expect(await getActiveOptionText(page)).toBe('Option 2');
            // Focus remains on the container throughout.
            expect(await getFocusedRole(page)).toBe('listbox');

            await page.keyboard.press('ArrowDown');
            expect(await getActiveOptionText(page)).toBe('Option 3');

            await page.keyboard.press('ArrowUp');
            expect(await getActiveOptionText(page)).toBe('Option 2');
            expect(await getFocusedRole(page)).toBe('listbox');
        });

        test('should re-render the host so its active styling follows navigation', async ({ page }) => {
            await loadStory(page, 'webc-core--active-descendant-vertical');
            await page.keyboard.press('Tab');

            // The host marks the active option with [data-active] in updated();
            // this only keeps up if the controller requests a host update.
            expect(await getVisuallyActiveText(page)).toBe('Option 1');

            await page.keyboard.press('ArrowDown');
            expect(await getVisuallyActiveText(page)).toBe('Option 2');

            await page.keyboard.press('End');
            expect(await getVisuallyActiveText(page)).toBe('Option 4');
        });

        test('should jump to the first and last options with Home and End', async ({ page }) => {
            await loadStory(page, 'webc-core--active-descendant-vertical');
            await page.keyboard.press('Tab');

            await page.keyboard.press('End');
            expect(await getActiveOptionText(page)).toBe('Option 4');

            await page.keyboard.press('Home');
            expect(await getActiveOptionText(page)).toBe('Option 1');
        });
    });

    test.describe('wrapping', () => {
        test('should wrap at the ends when wrapping is enabled', async ({ page }) => {
            await loadStory(page, 'webc-core--active-descendant-vertical');
            await page.keyboard.press('Tab');

            await page.keyboard.press('ArrowUp');
            expect(await getActiveOptionText(page)).toBe('Option 4');

            await page.keyboard.press('ArrowDown');
            expect(await getActiveOptionText(page)).toBe('Option 1');
        });

        test('should stop at the ends when wrapping is disabled', async ({ page }) => {
            await loadStory(page, 'webc-core--active-descendant-no-wrap');
            await page.keyboard.press('Tab');

            await page.keyboard.press('ArrowUp');
            expect(await getActiveOptionText(page)).toBe('Option 1');

            await page.keyboard.press('End');
            expect(await getActiveOptionText(page)).toBe('Option 4');

            await page.keyboard.press('ArrowDown');
            expect(await getActiveOptionText(page)).toBe('Option 4');
        });
    });

    test.describe('orientation', () => {
        test('should ignore vertical arrow keys when orientation is horizontal', async ({ page }) => {
            await loadStory(page, 'webc-core--active-descendant-horizontal');
            await page.keyboard.press('Tab');

            await page.keyboard.press('ArrowDown');
            expect(await getActiveOptionText(page)).toBe('Option 1');

            await page.keyboard.press('ArrowRight');
            expect(await getActiveOptionText(page)).toBe('Option 2');
        });
    });

    test.describe('RTL', () => {
        test('should mirror the horizontal axis but not the vertical axis', async ({ page }) => {
            await loadStory(page, 'webc-core--active-descendant-rtl', { writingDirection: 'rtl' });
            await page.keyboard.press('Tab');

            // Horizontal mirrors: ArrowLeft advances in RTL.
            await page.keyboard.press('ArrowLeft');
            expect(await getActiveOptionText(page)).toBe('Option 2');

            await page.keyboard.press('ArrowRight');
            expect(await getActiveOptionText(page)).toBe('Option 1');

            // Vertical does not mirror: ArrowDown still advances.
            await page.keyboard.press('ArrowDown');
            expect(await getActiveOptionText(page)).toBe('Option 2');
        });
    });

    test.describe('pointer interaction', () => {
        test('should make a clicked option active and keep focus on the container', async ({ page }) => {
            await loadStory(page, 'webc-core--active-descendant-vertical');

            await page.locator(COMPONENT).locator('[role="option"]').nth(2).click();

            expect(await getActiveOptionText(page)).toBe('Option 3');
            expect(await getFocusedRole(page)).toBe('listbox');

            // Keyboard navigation continues from the clicked option.
            await page.keyboard.press('ArrowDown');
            expect(await getActiveOptionText(page)).toBe('Option 4');
        });
    });
});
