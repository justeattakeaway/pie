import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const COMPONENT = 'roving-tabindex-mock';

/**
 * Returns the `tabIndex` of each button in the mock's shadow root, in DOM order.
 */
const getTabindexes = (page: Page) => page.evaluate((selector) => {
    const host = document.querySelector(selector);
    return [...(host?.shadowRoot?.querySelectorAll('button') ?? [])].map((button) => button.tabIndex);
}, COMPONENT);

/**
 * Returns the id of the button that currently has focus within the mock's
 * shadow root, or `null` when focus is elsewhere.
 */
const getFocusedId = (page: Page) => page.evaluate((selector) => {
    const host = document.querySelector(selector);
    return host?.shadowRoot?.activeElement?.id ?? null;
}, COMPONENT);

/**
 * Moves focus onto the active item (the single tab stop) by tabbing from the body.
 */
const tabIntoGroup = async (page: Page) => {
    await page.keyboard.press('Tab');
};

const loadStory = async (page: Page, storyId: string, globals: Record<string, unknown> = {}) => {
    const mockPage = new BasePage(page, storyId);
    await mockPage.load({}, globals);
    await page.locator(COMPONENT).waitFor({ state: 'visible' });
};

test.describe('RovingTabindexController', () => {
    test.describe('initial state', () => {
        test('should make only the first item part of the tab sequence', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-both');

            expect(await getTabindexes(page)).toEqual([0, -1, -1, -1]);
        });

        test('should focus the first item when tabbing into the group', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-both');

            await tabIntoGroup(page);

            expect(await getFocusedId(page)).toBe('item-1');
        });
    });

    test.describe('navigation (LTR, both orientations)', () => {
        test('should move forward with ArrowRight and ArrowDown', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-both');
            await tabIntoGroup(page);

            await page.keyboard.press('ArrowRight');
            expect(await getFocusedId(page)).toBe('item-2');
            expect(await getTabindexes(page)).toEqual([-1, 0, -1, -1]);

            await page.keyboard.press('ArrowDown');
            expect(await getFocusedId(page)).toBe('item-3');
        });

        test('should move backward with ArrowLeft and ArrowUp', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-both');
            await tabIntoGroup(page);

            await page.keyboard.press('ArrowRight');
            await page.keyboard.press('ArrowRight');
            expect(await getFocusedId(page)).toBe('item-3');

            await page.keyboard.press('ArrowLeft');
            expect(await getFocusedId(page)).toBe('item-2');

            await page.keyboard.press('ArrowUp');
            expect(await getFocusedId(page)).toBe('item-1');
        });

        test('should jump to the first and last items with Home and End', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-both');
            await tabIntoGroup(page);

            await page.keyboard.press('End');
            expect(await getFocusedId(page)).toBe('item-4');

            await page.keyboard.press('Home');
            expect(await getFocusedId(page)).toBe('item-1');
        });
    });

    test.describe('wrapping', () => {
        test('should wrap from the last item to the first and vice versa when wrapping is enabled', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-both');
            await tabIntoGroup(page);

            // Backward from the first item wraps to the last.
            await page.keyboard.press('ArrowLeft');
            expect(await getFocusedId(page)).toBe('item-4');

            // Forward from the last item wraps back to the first.
            await page.keyboard.press('ArrowRight');
            expect(await getFocusedId(page)).toBe('item-1');
        });

        test('should stop at the ends when wrapping is disabled', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-no-wrap');
            await tabIntoGroup(page);

            // Already at the first item; ArrowLeft should not wrap.
            await page.keyboard.press('ArrowLeft');
            expect(await getFocusedId(page)).toBe('item-1');

            await page.keyboard.press('End');
            expect(await getFocusedId(page)).toBe('item-4');

            // At the last item; ArrowRight should not wrap.
            await page.keyboard.press('ArrowRight');
            expect(await getFocusedId(page)).toBe('item-4');
        });
    });

    test.describe('orientation', () => {
        test('should ignore vertical arrow keys when orientation is horizontal', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-horizontal');
            await tabIntoGroup(page);

            await page.keyboard.press('ArrowDown');
            expect(await getFocusedId(page)).toBe('item-1');

            await page.keyboard.press('ArrowRight');
            expect(await getFocusedId(page)).toBe('item-2');
        });

        test('should ignore horizontal arrow keys when orientation is vertical', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-vertical');
            await tabIntoGroup(page);

            await page.keyboard.press('ArrowRight');
            expect(await getFocusedId(page)).toBe('item-1');

            await page.keyboard.press('ArrowDown');
            expect(await getFocusedId(page)).toBe('item-2');
        });
    });

    test.describe('RTL', () => {
        test('should advance with ArrowLeft and retreat with ArrowRight', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-rtl', { writingDirection: 'rtl' });
            await tabIntoGroup(page);

            // In RTL, the next (visually-left) item is reached with ArrowLeft.
            await page.keyboard.press('ArrowLeft');
            expect(await getFocusedId(page)).toBe('item-2');

            await page.keyboard.press('ArrowLeft');
            expect(await getFocusedId(page)).toBe('item-3');

            // ArrowRight moves back towards the first item.
            await page.keyboard.press('ArrowRight');
            expect(await getFocusedId(page)).toBe('item-2');
        });

        test('should keep Home and End anchored to the first and last DOM items in RTL', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-rtl', { writingDirection: 'rtl' });
            await tabIntoGroup(page);

            await page.keyboard.press('End');
            expect(await getFocusedId(page)).toBe('item-4');

            await page.keyboard.press('Home');
            expect(await getFocusedId(page)).toBe('item-1');
        });

        test('should not mirror the vertical axis in RTL', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-rtl', { writingDirection: 'rtl' });
            await tabIntoGroup(page);

            // Only the horizontal axis mirrors in RTL; ArrowDown still advances.
            await page.keyboard.press('ArrowDown');
            expect(await getFocusedId(page)).toBe('item-2');

            await page.keyboard.press('ArrowUp');
            expect(await getFocusedId(page)).toBe('item-1');
        });
    });

    test.describe('nested markup', () => {
        test('should navigate items that are nested inside other markup', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-nested');

            // Items are wrapped in <div><span>…</span></div>, not direct children.
            expect(await getTabindexes(page)).toEqual([0, -1, -1, -1]);

            await tabIntoGroup(page);
            expect(await getFocusedId(page)).toBe('item-1');

            await page.keyboard.press('ArrowRight');
            expect(await getFocusedId(page)).toBe('item-2');
            expect(await getTabindexes(page)).toEqual([-1, 0, -1, -1]);

            await page.keyboard.press('End');
            expect(await getFocusedId(page)).toBe('item-4');
        });
    });

    test.describe('direct focus', () => {
        test('should make a directly focused item the active tab stop', async ({ page }) => {
            await loadStory(page, 'webc-core--roving-tabindex-both');

            // Focus the third item directly, bypassing arrow navigation.
            await page.locator(COMPONENT).locator('#item-3').focus();

            expect(await getFocusedId(page)).toBe('item-3');
            expect(await getTabindexes(page)).toEqual([-1, -1, 0, -1]);

            // Subsequent arrow navigation continues from the focused item.
            await page.keyboard.press('ArrowRight');
            expect(await getFocusedId(page)).toBe('item-4');
        });
    });
});
