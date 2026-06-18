import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const COMPONENT = 'selection-listbox-mock';

/**
 * Returns the labels of the options currently marked `aria-selected="true"`.
 */
const getSelectedTexts = (page: Page) => page.evaluate((selector) => {
    const host = document.querySelector(selector);
    return [...(host?.shadowRoot?.querySelectorAll('[role="option"][aria-selected="true"]') ?? [])]
        .map((option) => option.textContent?.trim() ?? '');
}, COMPONENT);

/**
 * Returns the `aria-multiselectable` value on the listbox container.
 */
const getMultiselectable = (page: Page) => page.evaluate((selector) => {
    const host = document.querySelector(selector);
    return host?.shadowRoot?.querySelector('[role="listbox"]')?.getAttribute('aria-multiselectable') ?? null;
}, COMPONENT);

/**
 * Counts `change` events the component emits, accumulated on `window`.
 */
const installChangeCounter = (page: Page) => page.evaluate((selector) => {
    (window as unknown as { __changes: number }).__changes = 0;
    document.querySelector(selector)?.addEventListener('change', () => {
        (window as unknown as { __changes: number }).__changes += 1;
    });
}, COMPONENT);

const getChangeCount = (page: Page) => page.evaluate(() => (window as unknown as { __changes: number }).__changes);

const option = (page: Page, index: number) => page.locator(COMPONENT).locator('[role="option"]').nth(index);

const loadStory = async (page: Page, storyId: string) => {
    const mockPage = new BasePage(page, storyId);
    await mockPage.load();
    await page.locator(COMPONENT).waitFor({ state: 'visible' });
};

test.describe('SelectionController', () => {
    test.describe('single-select', () => {
        test('should start with nothing selected and no aria-multiselectable', async ({ page }) => {
            await loadStory(page, 'webc-core--selection-single');

            expect(await getSelectedTexts(page)).toEqual([]);
            expect(await getMultiselectable(page)).toBeNull();
        });

        test('should select a clicked option, replacing the previous selection', async ({ page }) => {
            await loadStory(page, 'webc-core--selection-single');

            await option(page, 1).click();
            expect(await getSelectedTexts(page)).toEqual(['Mushroom']);

            await option(page, 3).click();
            expect(await getSelectedTexts(page)).toEqual(['Olives']);
        });

        test('should select the active option with the keyboard', async ({ page }) => {
            await loadStory(page, 'webc-core--selection-single');

            await page.keyboard.press('Tab'); // focus the listbox (active = Pepperoni)
            await page.keyboard.press('ArrowDown'); // active = Mushroom
            await page.keyboard.press('Enter'); // select active

            expect(await getSelectedTexts(page)).toEqual(['Mushroom']);
        });

        test('should fire a change event only when the selection actually changes', async ({ page }) => {
            await loadStory(page, 'webc-core--selection-single');
            await installChangeCounter(page);

            await option(page, 0).click();
            expect(await getChangeCount(page)).toBe(1);

            // Clicking the already-selected option is a no-op — no change event.
            await option(page, 0).click();
            expect(await getChangeCount(page)).toBe(1);
        });
    });

    test.describe('single-select, selection follows focus', () => {
        test('should select the first option on load and follow the active option as it moves', async ({ page }) => {
            await loadStory(page, 'webc-core--selection-single-follows-focus');

            // The active item is set to the first option on render, and selection follows it.
            expect(await getSelectedTexts(page)).toEqual(['Pepperoni']);

            await page.keyboard.press('Tab');
            await page.keyboard.press('ArrowDown');
            expect(await getSelectedTexts(page)).toEqual(['Mushroom']);

            await page.keyboard.press('ArrowDown');
            expect(await getSelectedTexts(page)).toEqual(['Onion']);
        });
    });

    test.describe('pre-selection (initial value from markup)', () => {
        test('should reflect an option pre-selected in markup once the host seeds its value', async ({ page }) => {
            await loadStory(page, 'webc-core--selection-pre-selected');

            // 'Onion' is marked selected in markup; the host seeds it and the controller reflects it.
            expect(await getSelectedTexts(page)).toEqual(['Onion']);

            // Normal selection still works from there.
            await option(page, 0).click();
            expect(await getSelectedTexts(page)).toEqual(['Pepperoni']);
        });

        test('should start active on the pre-selected option when selection follows focus', async ({ page }) => {
            await loadStory(page, 'webc-core--selection-follows-focus-pre-selected');

            // Onion is pre-selected and the host has seeded the active item to it.
            expect(await getSelectedTexts(page)).toEqual(['Onion']);

            // So the first ArrowDown moves from Onion to Olives (not from the first option).
            await page.keyboard.press('Tab');
            await page.keyboard.press('ArrowDown');
            expect(await getSelectedTexts(page)).toEqual(['Olives']);
        });
    });

    test.describe('multi-select', () => {
        test('should set aria-multiselectable on the container', async ({ page }) => {
            await loadStory(page, 'webc-core--selection-multiple');

            expect(await getMultiselectable(page)).toBe('true');
        });

        test('should toggle options independently on click', async ({ page }) => {
            await loadStory(page, 'webc-core--selection-multiple');

            await option(page, 0).click();
            await option(page, 2).click();
            expect(await getSelectedTexts(page)).toEqual(['Pepperoni', 'Onion']);

            // Toggling an already-selected option removes it.
            await option(page, 0).click();
            expect(await getSelectedTexts(page)).toEqual(['Onion']);
        });

        test('should toggle the active option with Space', async ({ page }) => {
            await loadStory(page, 'webc-core--selection-multiple');

            await page.keyboard.press('Tab'); // active = Pepperoni
            await page.keyboard.press('Space');
            await page.keyboard.press('ArrowDown'); // active = Mushroom
            await page.keyboard.press('ArrowDown'); // active = Onion
            await page.keyboard.press('Space');

            expect(await getSelectedTexts(page)).toEqual(['Pepperoni', 'Onion']);
        });

        test('should select a contiguous range with Shift+click', async ({ page }) => {
            await loadStory(page, 'webc-core--selection-multiple');

            await option(page, 0).click(); // anchor = Pepperoni
            await option(page, 2).click({ modifiers: ['Shift'] }); // extend to Onion

            expect(await getSelectedTexts(page)).toEqual(['Pepperoni', 'Mushroom', 'Onion']);
        });
    });
});
