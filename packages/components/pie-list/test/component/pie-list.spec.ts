import {
    test, expect, type Page,
} from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const EXPECTED_CHANGE_EVENT_MESSAGE = 'Change event dispatched';
const componentSelector = '[data-test-id="pie-list"]';

const startChangeEventCapture = (page: Page) => {
    const messages: string[] = [];
    page.on('console', (m) => {
        if (m.type() === 'info' && m.text() === EXPECTED_CHANGE_EVENT_MESSAGE) {
            messages.push(m.text());
        }
    });
    return messages;
};

const getTabindex = (page: Page, testId: string) => page.getByTestId(testId).getAttribute('tabindex');

const isSelected = (page: Page, testId: string) => page.getByTestId(testId).evaluate((el) => (el as HTMLElement & { selected: boolean }).selected);

const getSelectedValues = (page: Page) => page.locator(componentSelector).evaluate((list) => Array.from(list.querySelectorAll('pie-list-item'))
    .filter((el) => (el as HTMLElement & { selected: boolean }).selected)
    .map((el) => (el as HTMLElement & { value: string }).value));

const focusBeforeButton = async (page: Page) => {
    const before = page.getByTestId('btn-before');
    await expect(before).toBeVisible();
    await before.focus();
};

test.describe('PieList - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'list--default');
        await basePage.load();
        await expect(page.locator(componentSelector)).toBeVisible();
    });

    test.describe('selection-type="multi"', () => {
        test.describe('Initial tabindex state', () => {
            test('first selected item gets tabindex="0", others get "-1"', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();

                expect(await getTabindex(page, 'item-1')).toBe('-1');
                expect(await getTabindex(page, 'item-2')).toBe('0');
                expect(await getTabindex(page, 'item-3')).toBe('-1');
                expect(await getTabindex(page, 'item-4')).toBe('-1');
            });

            test('with no items selected, first item gets tabindex="0"', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-none-selected').load();

                expect(await getTabindex(page, 'item-1')).toBe('0');
                expect(await getTabindex(page, 'item-2')).toBe('-1');
                expect(await getTabindex(page, 'item-3')).toBe('-1');
                expect(await getTabindex(page, 'item-4')).toBe('-1');
            });
        });

        test.describe('Tab / Shift+Tab', () => {
            test('Tab from preceding focusable lands on the first selected item', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expect(page.getByTestId('item-2')).toBeFocused();
            });

            test('Second Tab leaves the list and lands on the next focusable', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await expect(page.getByTestId('btn-after')).toBeFocused();
            });

            test('with no items selected, Tab lands on the first item', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-none-selected').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expect(page.getByTestId('item-1')).toBeFocused();
            });

            test('Shift+Tab from following focusable lands on the first selected item', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
                await page.getByTestId('btn-after').focus();

                await page.keyboard.press('Shift+Tab');

                await expect(page.getByTestId('item-2')).toBeFocused();
            });
        });

        test.describe('Arrow keys', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('ArrowDown moves focus to the next item without changing selection', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowDown');

                await expect(page.getByTestId('item-3')).toBeFocused();
                expect(await isSelected(page, 'item-2')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(events).toEqual([]);
            });

            test('ArrowUp moves focus to the previous item without changing selection', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowUp');

                await expect(page.getByTestId('item-1')).toBeFocused();
                expect(await isSelected(page, 'item-2')).toBe(true);
                expect(await isSelected(page, 'item-1')).toBe(false);
                expect(events).toEqual([]);
            });

            test('ArrowDown at the last item keeps focus on the last item', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');

                await expect(page.getByTestId('item-4')).toBeFocused();

                await page.keyboard.press('ArrowDown');

                await expect(page.getByTestId('item-4')).toBeFocused();
            });

            test('ArrowUp at the first item keeps focus on the first item', async ({ page }) => {
                await page.keyboard.press('ArrowUp');

                await expect(page.getByTestId('item-1')).toBeFocused();

                await page.keyboard.press('ArrowUp');

                await expect(page.getByTestId('item-1')).toBeFocused();
            });
        });

        test.describe('Space', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'list--multi-select-none-selected').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('Space on an unselected focused item selects it and emits change', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('Space');

                expect(await isSelected(page, 'item-1')).toBe(true);
                expect(events).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
            });

            test('Space on a selected focused item deselects it and emits change', async ({ page }) => {
                await page.keyboard.press('Space');
                const events = startChangeEventCapture(page);

                await page.keyboard.press('Space');

                expect(await isSelected(page, 'item-1')).toBe(false);
                expect(events).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
            });

            test('Space across multiple items toggles them independently', async ({ page }) => {
                await page.keyboard.press('Space');
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('Space');
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('Space');

                expect(await getSelectedValues(page)).toEqual(['m1', 'm2', 'm3']);
            });
        });

        test.describe('Other keys', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            for (const key of ['Home', 'End', 'Enter', 'a']) {
                test(`${key} does not change focus or selection or emit change`, async ({ page }) => {
                    const events = startChangeEventCapture(page);

                    await page.keyboard.press(key);

                    await expect(page.getByTestId('item-2')).toBeFocused();
                    expect(await getSelectedValues(page)).toEqual(['m2', 'm4']);
                    expect(events).toEqual([]);
                });
            }
        });

        test.describe('Mouse', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'list--multi-select-none-selected').load();
            });

            test('Click on an item selects it, moves focus to it, and emits change', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-3').click();

                expect(await isSelected(page, 'item-3')).toBe(true);
                await expect(page.getByTestId('item-3')).toBeFocused();
                expect(events).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
            });

            test('Click on a selected item deselects it and emits change', async ({ page }) => {
                await page.getByTestId('item-3').click();
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-3').click();

                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(events).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
            });
        });

        test.describe('Focus restoration', () => {
            test('after Tab away and back, focus returns to the roving item', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                await page.keyboard.press('ArrowDown');

                await expect(page.getByTestId('item-3')).toBeFocused();

                await page.keyboard.press('Tab');
                await expect(page.getByTestId('btn-after')).toBeFocused();

                await page.keyboard.press('Shift+Tab');

                await expect(page.getByTestId('item-2')).toBeFocused();
            });
        });
    });

    test.describe('selection-type="single"', () => {
        test.describe('Initial tabindex state', () => {
            test('selected item gets tabindex="0", others get "-1"', async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();

                expect(await getTabindex(page, 'item-1')).toBe('-1');
                expect(await getTabindex(page, 'item-2')).toBe('-1');
                expect(await getTabindex(page, 'item-3')).toBe('0');
                expect(await getTabindex(page, 'item-4')).toBe('-1');
            });

            test('with no items selected, first item gets tabindex="0"', async ({ page }) => {
                await new BasePage(page, 'list--single-select-none-selected').load();

                expect(await getTabindex(page, 'item-1')).toBe('0');
                expect(await getTabindex(page, 'item-2')).toBe('-1');
            });
        });

        test.describe('Tab / Shift+Tab', () => {
            test('Tab from preceding focusable lands on the selected item', async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expect(page.getByTestId('item-3')).toBeFocused();
            });

            test('Second Tab leaves the list and lands on the next focusable', async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await expect(page.getByTestId('btn-after')).toBeFocused();
            });

            test('with no item selected, Tab lands on the first item', async ({ page }) => {
                await new BasePage(page, 'list--single-select-none-selected').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expect(page.getByTestId('item-1')).toBeFocused();
            });
        });

        test.describe('Arrow keys', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('ArrowDown moves focus AND selects the next item, deselecting the previous', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowDown');

                await expect(page.getByTestId('item-4')).toBeFocused();
                expect(await isSelected(page, 'item-4')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await getSelectedValues(page)).toEqual(['s4']);
                expect(events.length).toBe(2);
            });

            test('ArrowUp moves focus AND selects the previous item, deselecting the previous selection', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowUp');

                await expect(page.getByTestId('item-2')).toBeFocused();
                expect(await isSelected(page, 'item-2')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await getSelectedValues(page)).toEqual(['s2']);
                expect(events.length).toBe(2);
            });

            test('ArrowDown at the last item is a no-op (focus stays, selection unchanged, no change event)', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await expect(page.getByTestId('item-4')).toBeFocused();

                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowDown');

                await expect(page.getByTestId('item-4')).toBeFocused();
                expect(await getSelectedValues(page)).toEqual(['s4']);
                expect(events).toEqual([]);
            });

            test('ArrowUp at the first item is a no-op (focus stays, selection unchanged, no change event)', async ({ page }) => {
                await page.keyboard.press('ArrowUp');
                await page.keyboard.press('ArrowUp');
                await expect(page.getByTestId('item-1')).toBeFocused();

                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowUp');

                await expect(page.getByTestId('item-1')).toBeFocused();
                expect(await getSelectedValues(page)).toEqual(['s1']);
                expect(events).toEqual([]);
            });

            test('After arrow navigation, exactly one item remains selected', async ({ page }) => {
                await page.keyboard.press('ArrowUp');
                await page.keyboard.press('ArrowUp');
                await page.keyboard.press('ArrowDown');

                expect((await getSelectedValues(page)).length).toBe(1);
            });
        });

        test.describe('Space', () => {
            test('Space is a no-op (no change event, selection unchanged)', async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                const events = startChangeEventCapture(page);

                await page.keyboard.press('Space');

                await expect(page.getByTestId('item-3')).toBeFocused();
                expect(await getSelectedValues(page)).toEqual(['s3']);
                expect(events).toEqual([]);
            });
        });

        test.describe('Mouse', () => {
            test('Click on an item selects it, deselects previous, focuses it, emits a change event per item state change', async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-1').click();

                expect(await isSelected(page, 'item-1')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await getSelectedValues(page)).toEqual(['s1']);
                await expect(page.getByTestId('item-1')).toBeFocused();
                expect(events.length).toBe(2);
            });

            test('Click on the already-selected item does not emit a change event', async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-3').click();

                expect(await isSelected(page, 'item-3')).toBe(true);
                expect(events).toEqual([]);
            });
        });
    });

    test.describe('selection-type undefined', () => {
        test('Tab from preceding focusable skips the list entirely', async ({ page }) => {
            await new BasePage(page, 'list--undefined-selection-type').load();
            await focusBeforeButton(page);

            await page.keyboard.press('Tab');

            await expect(page.getByTestId('btn-after')).toBeFocused();
        });

        test('list items have no tabindex attribute', async ({ page }) => {
            await new BasePage(page, 'list--undefined-selection-type').load();

            expect(await getTabindex(page, 'item-1')).toBeNull();
            expect(await getTabindex(page, 'item-2')).toBeNull();
            expect(await getTabindex(page, 'item-3')).toBeNull();
        });

        test('Click on an item does not change selection or emit a change event', async ({ page }) => {
            await new BasePage(page, 'list--undefined-selection-type').load();
            const events = startChangeEventCapture(page);

            await page.getByTestId('item-1').click();

            expect(await isSelected(page, 'item-1')).toBe(false);
            expect(events).toEqual([]);
        });

        test('keyboard events on a programmatically focused item are ignored', async ({ page }) => {
            await new BasePage(page, 'list--undefined-selection-type').load();
            await page.getByTestId('item-1').evaluate((el) => (el as HTMLElement).focus());
            const events = startChangeEventCapture(page);

            await page.keyboard.press('ArrowDown');
            await page.keyboard.press('Space');

            expect(await getSelectedValues(page)).toEqual([]);
            expect(events).toEqual([]);
        });
    });

    test.describe('Slot changes', () => {
        test('Appending an item to a list with a rover keeps the existing rover', async ({ page }) => {
            await new BasePage(page, 'list--dynamic-slots').load();

            expect(await getTabindex(page, 'item-1')).toBe('0');

            await page.getByTestId('btn-add').click();

            expect(await getTabindex(page, 'item-1')).toBe('0');
            expect(await getTabindex(page, 'item-2')).toBe('-1');
        });

        test('Appending the first item to an empty list makes it the rover', async ({ page }) => {
            await new BasePage(page, 'list--empty-list').load();

            const itemCount = await page.evaluate(() => {
                const list = document.querySelector('pie-list[data-test-id="pie-list"]');
                if (!list) return -1;
                const item = document.createElement('pie-list-item');
                item.setAttribute('value', 'new1');
                item.setAttribute('data-test-id', 'item-1');
                item.textContent = 'New Option';
                list.appendChild(item);
                return list.querySelectorAll('pie-list-item').length;
            });
            expect(itemCount).toBe(1);

            await expect(page.locator('[data-test-id="pie-list"] pie-list-item').first()).toHaveAttribute('tabindex', '0');
        });

        test('Removing the rover promotes the next item to be the rover', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-none-selected').load();

            expect(await getTabindex(page, 'item-1')).toBe('0');

            await page.evaluate(() => {
                const list = document.querySelector('pie-list[data-test-id="pie-list"]');
                const item1 = list?.querySelector('[data-test-id="item-1"]');
                item1?.remove();
            });

            await expect(page.getByTestId('item-2')).toHaveAttribute('tabindex', '0');
        });
    });

    test.describe('Runtime selection-type switching', () => {
        test('undefined → multi: items become focusable; first item gets tabindex="0"', async ({ page }) => {
            await new BasePage(page, 'list--runtime-selection-type-switch').load();

            expect(await getTabindex(page, 'item-1')).toBeNull();

            await page.getByTestId('btn-set-multi').click();

            await expect(page.getByTestId('item-1')).toHaveAttribute('tabindex', '0');
            await expect(page.getByTestId('item-2')).toHaveAttribute('tabindex', '-1');
        });

        test('multi → single: strategy swaps and tabindex state is reset', async ({ page }) => {
            await new BasePage(page, 'list--runtime-selection-type-switch').load();
            await page.getByTestId('btn-set-multi').click();
            await page.getByTestId('item-2').click();
            expect(await isSelected(page, 'item-2')).toBe(true);

            await page.getByTestId('btn-set-single').click();

            await expect(page.getByTestId('item-2')).toHaveAttribute('tabindex', '0');
            await page.getByTestId('btn-before').focus();
            await page.keyboard.press('Tab');
            await expect(page.getByTestId('item-2')).toBeFocused();
        });

        test('multi → undefined: all items lose their tabindex', async ({ page }) => {
            await new BasePage(page, 'list--runtime-selection-type-switch').load();
            await page.getByTestId('btn-set-multi').click();
            await expect(page.getByTestId('item-1')).toHaveAttribute('tabindex', '0');

            await page.getByTestId('btn-set-undefined').click();

            expect(await getTabindex(page, 'item-1')).toBeNull();
            expect(await getTabindex(page, 'item-2')).toBeNull();
            expect(await getTabindex(page, 'item-3')).toBeNull();
        });
    });
});
