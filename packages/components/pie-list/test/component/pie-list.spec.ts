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

const getRole = (page: Page, testId: string) => page.getByTestId(testId).getAttribute('role');

const getAria = (page: Page, testId: string, attr: string) => page.getByTestId(testId).getAttribute(attr);

const getItemId = (page: Page, testId: string) => page.getByTestId(testId).getAttribute('id');

const getListAttr = (page: Page, attr: string) => page.locator(componentSelector).getAttribute(attr);

const isSelected = (page: Page, testId: string) => page.getByTestId(testId).evaluate((el) => (el as HTMLElement & { selected: boolean }).selected);

const isActive = (page: Page, testId: string) => page.getByTestId(testId).getAttribute('data-active').then((v) => v !== null);

const expectActiveItem = async (page: Page, testId: string) => {
    // The list container holds DOM focus; the active option is identified
    // visually via data-active and to AT via aria-activedescendant.
    await expect(page.locator(componentSelector)).toBeFocused();
    expect(await isActive(page, testId)).toBe(true);
    expect(await getListAttr(page, 'aria-activedescendant')).toBe(await getItemId(page, testId));
};

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

    test.describe('interaction-type="multi-select"', () => {
        test.describe('Initial state', () => {
            test('list is the single tab stop (tabindex="0"); items have no tabindex', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();

                expect(await getListAttr(page, 'tabindex')).toBe('0');
                expect(await getTabindex(page, 'item-1')).toBeNull();
                expect(await getTabindex(page, 'item-2')).toBeNull();
                expect(await getTabindex(page, 'item-3')).toBeNull();
                expect(await getTabindex(page, 'item-4')).toBeNull();
            });

            test('no item is marked active until the list is engaged', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();

                expect(await isActive(page, 'item-1')).toBe(false);
                expect(await isActive(page, 'item-2')).toBe(false);
                expect(await isActive(page, 'item-3')).toBe(false);
                expect(await isActive(page, 'item-4')).toBe(false);
            });
        });

        test.describe('Tab / Shift+Tab', () => {
            test('Tab from preceding focusable enters at the first selected item', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expectActiveItem(page, 'item-2');
            });

            test('Second Tab leaves the list and lands on the next focusable', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await expect(page.getByTestId('btn-after')).toBeFocused();
            });

            test('with no items selected, Tab enters at the first item', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-none-selected').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expectActiveItem(page, 'item-1');
            });

            test('Shift+Tab from following focusable enters at the first selected item', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
                await page.getByTestId('btn-after').focus();

                await page.keyboard.press('Shift+Tab');

                await expectActiveItem(page, 'item-2');
            });
        });

        test.describe('Arrow keys', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('ArrowDown moves active to the next item without changing selection', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-3');
                expect(await isSelected(page, 'item-2')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(events).toEqual([]);
            });

            test('ArrowUp moves active to the previous item without changing selection', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowUp');

                await expectActiveItem(page, 'item-1');
                expect(await isSelected(page, 'item-2')).toBe(true);
                expect(await isSelected(page, 'item-1')).toBe(false);
                expect(events).toEqual([]);
            });

            test('ArrowDown at the last item keeps active on the last item', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-4');

                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-4');
            });

            test('ArrowUp at the first item keeps active on the first item', async ({ page }) => {
                await page.keyboard.press('ArrowUp');

                await expectActiveItem(page, 'item-1');

                await page.keyboard.press('ArrowUp');

                await expectActiveItem(page, 'item-1');
            });
        });

        test.describe('Space', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'list--multi-select-none-selected').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('Space on an unselected active item selects it and emits change', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('Space');

                expect(await isSelected(page, 'item-1')).toBe(true);
                expect(events).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
            });

            test('Space on a selected active item deselects it and emits change', async ({ page }) => {
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

            ['Home', 'End', 'Enter', 'a'].forEach((key) => {
                test(`${key} does not change active item or selection or emit change`, async ({ page }) => {
                    const events = startChangeEventCapture(page);

                    await page.keyboard.press(key);

                    await expectActiveItem(page, 'item-2');
                    expect(await getSelectedValues(page)).toEqual(['m2', 'm4']);
                    expect(events).toEqual([]);
                });
            });
        });

        test.describe('Mouse', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'list--multi-select-none-selected').load();
            });

            test('Click on an item selects it, makes it active, and emits change', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-3').click();

                expect(await isSelected(page, 'item-3')).toBe(true);
                await expectActiveItem(page, 'item-3');
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
            test('after Tab away and back, the previously active item is still active', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-3');

                await page.keyboard.press('Tab');
                await expect(page.getByTestId('btn-after')).toBeFocused();

                await page.keyboard.press('Shift+Tab');

                await expectActiveItem(page, 'item-3');
            });
        });
    });

    test.describe('interaction-type="single-select"', () => {
        test.describe('Initial state', () => {
            test('list is the single tab stop (tabindex="0"); items have no tabindex', async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();

                expect(await getListAttr(page, 'tabindex')).toBe('0');
                expect(await getTabindex(page, 'item-1')).toBeNull();
                expect(await getTabindex(page, 'item-2')).toBeNull();
                expect(await getTabindex(page, 'item-3')).toBeNull();
                expect(await getTabindex(page, 'item-4')).toBeNull();
            });

            test('no item is marked active until the list is engaged', async ({ page }) => {
                await new BasePage(page, 'list--single-select-none-selected').load();

                expect(await isActive(page, 'item-1')).toBe(false);
                expect(await isActive(page, 'item-2')).toBe(false);
            });
        });

        test.describe('Tab / Shift+Tab', () => {
            test('Tab from preceding focusable enters at the selected item', async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expectActiveItem(page, 'item-3');
            });

            test('Second Tab leaves the list and lands on the next focusable', async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await expect(page.getByTestId('btn-after')).toBeFocused();
            });

            test('with no item selected, Tab enters at the first item', async ({ page }) => {
                await new BasePage(page, 'list--single-select-none-selected').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expectActiveItem(page, 'item-1');
            });
        });

        test.describe('Arrow keys', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('ArrowDown moves active AND selects the next item, deselecting the previous', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-4');
                expect(await isSelected(page, 'item-4')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await getSelectedValues(page)).toEqual(['s4']);
                expect(events.length).toBe(2);
            });

            test('ArrowUp moves active AND selects the previous item, deselecting the previous selection', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowUp');

                await expectActiveItem(page, 'item-2');
                expect(await isSelected(page, 'item-2')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await getSelectedValues(page)).toEqual(['s2']);
                expect(events.length).toBe(2);
            });

            test('ArrowDown at the last item is a no-op (active stays, selection unchanged, no change event)', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await expectActiveItem(page, 'item-4');

                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-4');
                expect(await getSelectedValues(page)).toEqual(['s4']);
                expect(events).toEqual([]);
            });

            test('ArrowUp at the first item is a no-op (active stays, selection unchanged, no change event)', async ({ page }) => {
                await page.keyboard.press('ArrowUp');
                await page.keyboard.press('ArrowUp');
                await expectActiveItem(page, 'item-1');

                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowUp');

                await expectActiveItem(page, 'item-1');
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

                await expectActiveItem(page, 'item-3');
                expect(await getSelectedValues(page)).toEqual(['s3']);
                expect(events).toEqual([]);
            });
        });

        test.describe('Mouse', () => {
            test('Click on an item selects it, deselects previous, makes it active, emits a change event per item state change', async ({ page }) => {
                await new BasePage(page, 'list--single-select-keyboard-navigation').load();
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-1').click();

                expect(await isSelected(page, 'item-1')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await getSelectedValues(page)).toEqual(['s1']);
                await expectActiveItem(page, 'item-1');
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

    test.describe('interaction-type none', () => {
        test('Tab from preceding focusable skips the list entirely', async ({ page }) => {
            await new BasePage(page, 'list--none-interaction-type').load();
            await focusBeforeButton(page);

            await page.keyboard.press('Tab');

            await expect(page.getByTestId('btn-after')).toBeFocused();
        });

        test('list has no tabindex; items have no tabindex', async ({ page }) => {
            await new BasePage(page, 'list--none-interaction-type').load();

            expect(await getListAttr(page, 'tabindex')).toBeNull();
            expect(await getTabindex(page, 'item-1')).toBeNull();
            expect(await getTabindex(page, 'item-2')).toBeNull();
            expect(await getTabindex(page, 'item-3')).toBeNull();
        });

        test('Click on an item does not change selection or emit a change event', async ({ page }) => {
            await new BasePage(page, 'list--none-interaction-type').load();
            const events = startChangeEventCapture(page);

            await page.getByTestId('item-1').click();

            expect(await isSelected(page, 'item-1')).toBe(false);
            expect(events).toEqual([]);
        });

        test('keyboard events on a programmatically focused item are ignored', async ({ page }) => {
            await new BasePage(page, 'list--none-interaction-type').load();
            await page.getByTestId('item-1').evaluate((el) => (el as HTMLElement).focus());
            const events = startChangeEventCapture(page);

            await page.keyboard.press('ArrowDown');
            await page.keyboard.press('Space');

            expect(await getSelectedValues(page)).toEqual([]);
            expect(events).toEqual([]);
        });
    });

    // For radio/checkbox/switch the list is a semantic grouping container;
    // it must not interfere with the slotted controls' own focus and selection.
    const slottedControlCases = [
        { type: 'radio', story: 'list--radio-interaction-type', listRole: 'radiogroup' },
        { type: 'checkbox', story: 'list--checkbox-interaction-type', listRole: 'group' },
        { type: 'switch', story: 'list--switch-interaction-type', listRole: 'group' },
    ] as const;

    slottedControlCases.forEach(({ type, story, listRole }) => {
        test.describe(`interaction-type="${type}"`, () => {
            test(`list has role="${listRole}"; no tabindex; no aria-multiselectable`, async ({ page }) => {
                await new BasePage(page, story).load();

                expect(await getListAttr(page, 'role')).toBe(listRole);
                expect(await getListAttr(page, 'tabindex')).toBeNull();
                expect(await getListAttr(page, 'aria-multiselectable')).toBeNull();
                expect(await getListAttr(page, 'aria-activedescendant')).toBeNull();
            });

            test('items have no role and no aria-selected / aria-disabled', async ({ page }) => {
                await new BasePage(page, story).load();

                expect(await getRole(page, 'item-1')).toBeNull();
                expect(await getAria(page, 'item-1', 'aria-selected')).toBeNull();
                expect(await getAria(page, 'item-1', 'aria-disabled')).toBeNull();
                expect(await getRole(page, 'item-2')).toBeNull();
                expect(await getAria(page, 'item-2', 'aria-selected')).toBeNull();
            });

            test('Tab from preceding focusable does not stop on the list', async ({ page }) => {
                await new BasePage(page, story).load();
                await focusBeforeButton(page);

                // First Tab lands on the first slotted interactive control, not the list.
                await page.keyboard.press('Tab');
                await expect(page.locator(componentSelector)).not.toBeFocused();
            });

            test('clicking an item does not engage list selection logic', async ({ page }) => {
                await new BasePage(page, story).load();

                // Click on the list-item itself (not its inner control). The list
                // must not toggle selection or set aria-activedescendant.
                await page.getByTestId('item-2').click({ position: { x: 0, y: 0 } });

                expect(await getListAttr(page, 'aria-activedescendant')).toBeNull();
                expect(await getAria(page, 'item-2', 'aria-selected')).toBeNull();
            });
        });
    });

    test.describe('Slot changes', () => {
        test('Appending an item does not engage the list before focus', async ({ page }) => {
            await new BasePage(page, 'list--dynamic-slots').load();

            // No item is active before the list has been engaged.
            expect(await isActive(page, 'item-1')).toBe(false);
            expect(await getListAttr(page, 'aria-activedescendant')).toBeNull();

            await page.getByTestId('btn-add').click();

            expect(await isActive(page, 'item-1')).toBe(false);
            expect(await isActive(page, 'item-2')).toBe(false);
        });

        test('Adding an item to an empty list does not preemptively set an active descendant', async ({ page }) => {
            await new BasePage(page, 'list--empty-list').load();
            await page.locator(componentSelector).waitFor({ state: 'attached' });

            const itemCount = await page.evaluate(() => {
                const list = document.querySelector('pie-list[data-test-id="pie-list"]');
                if (!list) return -1;
                const item = document.createElement('pie-list-item');
                item.setAttribute('value', 'new1');
                item.setAttribute('id', 'new-1-id');
                item.setAttribute('data-test-id', 'item-1');
                item.textContent = 'New Option';
                list.appendChild(item);
                return list.querySelectorAll('pie-list-item').length;
            });
            expect(itemCount).toBe(1);

            expect(await getListAttr(page, 'aria-activedescendant')).toBeNull();
            expect(await isActive(page, 'item-1')).toBe(false);
        });

        test('Removing the active item clears the stale active descendant', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-none-selected').load();

            // Engage the list so item-1 becomes the active descendant.
            await focusBeforeButton(page);
            await page.keyboard.press('Tab');
            await expectActiveItem(page, 'item-1');

            await page.evaluate(() => {
                const list = document.querySelector('pie-list[data-test-id="pie-list"]');
                const item1 = list?.querySelector('[data-test-id="item-1"]');
                item1?.remove();
            });

            await expect(page.locator(componentSelector)).not.toHaveAttribute('aria-activedescendant', /.+/);
        });
    });

    test.describe('Runtime interaction-type switching', () => {
        test('none → multi-select: list becomes tabbable (tabindex="0"); items stay non-focusable', async ({ page }) => {
            await new BasePage(page, 'list--runtime-interaction-type-switch').load();

            expect(await getListAttr(page, 'tabindex')).toBeNull();

            await page.getByTestId('btn-set-multi').click();

            expect(await getListAttr(page, 'tabindex')).toBe('0');
            expect(await getTabindex(page, 'item-1')).toBeNull();
            expect(await getTabindex(page, 'item-2')).toBeNull();
        });

        test('multi-select → single-select: strategy swaps; Tab still enters the list at the active item', async ({ page }) => {
            await new BasePage(page, 'list--runtime-interaction-type-switch').load();
            await page.getByTestId('btn-set-multi').click();
            await page.getByTestId('item-2').click();
            expect(await isSelected(page, 'item-2')).toBe(true);

            await page.getByTestId('btn-set-single').click();

            expect(await getListAttr(page, 'tabindex')).toBe('0');
            await page.getByTestId('btn-before').focus();
            await page.keyboard.press('Tab');
            await expectActiveItem(page, 'item-2');
        });

        test('multi-select → none: list loses tabindex; aria-activedescendant cleared', async ({ page }) => {
            await new BasePage(page, 'list--runtime-interaction-type-switch').load();
            await page.getByTestId('btn-set-multi').click();
            await page.getByTestId('item-1').click();
            expect(await getListAttr(page, 'tabindex')).toBe('0');

            await page.getByTestId('btn-set-none').click();

            expect(await getListAttr(page, 'tabindex')).toBeNull();
            expect(await isActive(page, 'item-1')).toBe(false);
        });
    });

    test.describe('ARIA roles', () => {
        test('interaction-type="multi-select": list has role="listbox", items have role="option"', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-keyboard-navigation').load();

            expect(await getListAttr(page, 'role')).toBe('listbox');
            expect(await getRole(page, 'item-1')).toBe('option');
            expect(await getRole(page, 'item-2')).toBe('option');
            expect(await getRole(page, 'item-3')).toBe('option');
            expect(await getRole(page, 'item-4')).toBe('option');
        });

        test('interaction-type="single-select": list has role="listbox", items have role="option"', async ({ page }) => {
            await new BasePage(page, 'list--single-select-keyboard-navigation').load();

            expect(await getListAttr(page, 'role')).toBe('listbox');
            expect(await getRole(page, 'item-1')).toBe('option');
            expect(await getRole(page, 'item-2')).toBe('option');
            expect(await getRole(page, 'item-3')).toBe('option');
            expect(await getRole(page, 'item-4')).toBe('option');
        });

        test('interaction-type none: list has role="list", items have role="listitem"', async ({ page }) => {
            await new BasePage(page, 'list--none-interaction-type').load();

            expect(await getListAttr(page, 'role')).toBe('list');
            expect(await getRole(page, 'item-1')).toBe('listitem');
            expect(await getRole(page, 'item-2')).toBe('listitem');
            expect(await getRole(page, 'item-3')).toBe('listitem');
        });
    });

    test.describe('aria-multiselectable', () => {
        test('interaction-type="multi-select": list has aria-multiselectable="true"', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
            expect(await getListAttr(page, 'aria-multiselectable')).toBe('true');
        });

        test('interaction-type="single-select": list has no aria-multiselectable', async ({ page }) => {
            await new BasePage(page, 'list--single-select-keyboard-navigation').load();
            expect(await getListAttr(page, 'aria-multiselectable')).toBeNull();
        });

        test('interaction-type none: list has no aria-multiselectable', async ({ page }) => {
            await new BasePage(page, 'list--none-interaction-type').load();
            expect(await getListAttr(page, 'aria-multiselectable')).toBeNull();
        });
    });

    test.describe('aria-selected', () => {
        test('interaction-type="multi-select": items reflect their selected state', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-keyboard-navigation').load();

            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('false');
            expect(await getAria(page, 'item-2', 'aria-selected')).toBe('true');
            expect(await getAria(page, 'item-3', 'aria-selected')).toBe('false');
            expect(await getAria(page, 'item-4', 'aria-selected')).toBe('true');
        });

        test('interaction-type="single-select": items reflect their selected state', async ({ page }) => {
            await new BasePage(page, 'list--single-select-keyboard-navigation').load();

            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('false');
            expect(await getAria(page, 'item-2', 'aria-selected')).toBe('false');
            expect(await getAria(page, 'item-3', 'aria-selected')).toBe('true');
            expect(await getAria(page, 'item-4', 'aria-selected')).toBe('false');
        });

        test('interaction-type none: items have no aria-selected', async ({ page }) => {
            await new BasePage(page, 'list--none-interaction-type').load();

            expect(await getAria(page, 'item-1', 'aria-selected')).toBeNull();
            expect(await getAria(page, 'item-2', 'aria-selected')).toBeNull();
            expect(await getAria(page, 'item-3', 'aria-selected')).toBeNull();
        });

        test('updates to "true" when an item is toggled on (multi)', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-none-selected').load();
            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('false');

            await page.getByTestId('item-1').click();

            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('true');
        });

        test('updates to "false" when an item is toggled off (multi)', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-none-selected').load();
            await page.getByTestId('item-1').click();
            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('true');

            await page.getByTestId('item-1').click();

            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('false');
        });

        test('moves with selection on single-select arrow navigation', async ({ page }) => {
            await new BasePage(page, 'list--single-select-keyboard-navigation').load();
            await focusBeforeButton(page);
            await page.keyboard.press('Tab');

            await page.keyboard.press('ArrowDown');

            expect(await getAria(page, 'item-3', 'aria-selected')).toBe('false');
            expect(await getAria(page, 'item-4', 'aria-selected')).toBe('true');
        });
    });

    test.describe('aria-activedescendant', () => {
        test('absent on the list before any focus or click', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
            expect(await getListAttr(page, 'aria-activedescendant')).toBeNull();
        });

        test('set to the active item id when the list receives focus via Tab', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
            await focusBeforeButton(page);

            await page.keyboard.press('Tab');

            expect(await getListAttr(page, 'aria-activedescendant')).toBe(await getItemId(page, 'item-2'));
        });

        test('updates as active moves via arrow keys', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
            await focusBeforeButton(page);
            await page.keyboard.press('Tab');

            await page.keyboard.press('ArrowDown');

            expect(await getListAttr(page, 'aria-activedescendant')).toBe(await getItemId(page, 'item-3'));
        });

        test('set to the clicked item id on click', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-none-selected').load();
            expect(await getListAttr(page, 'aria-activedescendant')).toBeNull();

            await page.getByTestId('item-3').click();

            expect(await getListAttr(page, 'aria-activedescendant')).toBe(await getItemId(page, 'item-3'));
        });

        test('persists on the last active item when focus leaves the list', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-keyboard-navigation').load();
            await focusBeforeButton(page);
            await page.keyboard.press('Tab');
            const itemId = await getItemId(page, 'item-2');

            await page.keyboard.press('Tab');
            await expect(page.getByTestId('btn-after')).toBeFocused();

            expect(await getListAttr(page, 'aria-activedescendant')).toBe(itemId);
        });

        test('removed when interaction-type switches to none', async ({ page }) => {
            await new BasePage(page, 'list--runtime-interaction-type-switch').load();
            await page.getByTestId('btn-set-multi').click();
            await page.getByTestId('item-2').click();
            expect(await getListAttr(page, 'aria-activedescendant')).toBe(await getItemId(page, 'item-2'));

            await page.getByTestId('btn-set-none').click();

            expect(await getListAttr(page, 'aria-activedescendant')).toBeNull();
        });

        test('kept when interaction-type switches between multi-select and single-select', async ({ page }) => {
            await new BasePage(page, 'list--runtime-interaction-type-switch').load();
            await page.getByTestId('btn-set-multi').click();
            await page.getByTestId('item-2').click();
            const itemId = await getItemId(page, 'item-2');
            expect(await getListAttr(page, 'aria-activedescendant')).toBe(itemId);

            await page.getByTestId('btn-set-single').click();

            expect(await getListAttr(page, 'aria-activedescendant')).toBe(itemId);
        });

        test('not set when the clicked item has no id (consumer owns id assignment)', async ({ page }) => {
            await new BasePage(page, 'list--dynamic-slots').load();
            expect(await getItemId(page, 'item-1')).toBeNull();

            await page.getByTestId('item-1').click();

            expect(await getListAttr(page, 'aria-activedescendant')).toBeNull();
        });
    });

    test.describe('aria-activedescendant set in markup', () => {
        test('the referenced item is marked active without engaging the list', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-with-active-descendant').load();

            expect(await isActive(page, 'item-1')).toBe(false);
            expect(await isActive(page, 'item-2')).toBe(false);
            expect(await isActive(page, 'item-3')).toBe(true);
            expect(await isActive(page, 'item-4')).toBe(false);
        });

        test('Tab from preceding focusable enters the list with that item still active', async ({ page }) => {
            await new BasePage(page, 'list--multi-select-with-active-descendant').load();
            await focusBeforeButton(page);

            await page.keyboard.press('Tab');

            await expectActiveItem(page, 'item-3');
        });
    });

    test.describe('Disabled items', () => {
        test.describe('aria-disabled', () => {
            test('interaction-type="multi-select": items reflect their disabled state', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-with-disabled').load();

                expect(await getAria(page, 'item-1', 'aria-disabled')).toBe('false');
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('true');
                expect(await getAria(page, 'item-3', 'aria-disabled')).toBe('false');
                expect(await getAria(page, 'item-4', 'aria-disabled')).toBe('true');
                expect(await getAria(page, 'item-5', 'aria-disabled')).toBe('false');
            });

            test('interaction-type="single-select": items reflect their disabled state', async ({ page }) => {
                await new BasePage(page, 'list--single-select-with-disabled').load();

                expect(await getAria(page, 'item-1', 'aria-disabled')).toBe('false');
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('true');
                expect(await getAria(page, 'item-3', 'aria-disabled')).toBe('false');
                expect(await getAria(page, 'item-4', 'aria-disabled')).toBe('true');
                expect(await getAria(page, 'item-5', 'aria-disabled')).toBe('false');
            });

            test('interaction-type none: items have no aria-disabled (disabled prop is a no-op)', async ({ page }) => {
                await new BasePage(page, 'list--none-interaction-type-with-disabled').load();

                expect(await getAria(page, 'item-1', 'aria-disabled')).toBeNull();
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBeNull();
                expect(await getAria(page, 'item-3', 'aria-disabled')).toBeNull();
            });

            test('updates when an item\'s disabled property changes at runtime', async ({ page }) => {
                await new BasePage(page, 'list--runtime-disabled-toggle').load();
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('false');

                await page.getByTestId('btn-toggle-item-2').click();

                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('true');

                await page.getByTestId('btn-toggle-item-2').click();

                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('false');
            });
        });

        test.describe('Keyboard navigation (multi)', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'list--multi-select-with-disabled').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('Tab enters at first non-disabled item when nothing is selected', async ({ page }) => {
                await expectActiveItem(page, 'item-1');
            });

            test('ArrowDown skips over disabled items', async ({ page }) => {
                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-3');
            });

            test('ArrowDown skips multiple consecutive disabled items', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-5');
            });

            test('ArrowDown at the last enabled item with only disabled items after is a no-op', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');
                await expectActiveItem(page, 'item-5');

                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-5');
            });

            test('ArrowUp skips over disabled items', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');
                await expectActiveItem(page, 'item-5');

                await page.keyboard.press('ArrowUp');

                await expectActiveItem(page, 'item-3');
            });
        });

        test.describe('Keyboard navigation (single)', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'list--single-select-with-disabled').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('Tab enters at the selected item even though disabled items flank it', async ({ page }) => {
                await expectActiveItem(page, 'item-3');
            });

            test('ArrowDown skips disabled items and selects the next enabled one', async ({ page }) => {
                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-5');
                expect(await isSelected(page, 'item-5')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await isSelected(page, 'item-4')).toBe(false);
            });

            test('ArrowUp skips disabled items and selects the previous enabled one', async ({ page }) => {
                await page.keyboard.press('ArrowUp');

                await expectActiveItem(page, 'item-1');
                expect(await isSelected(page, 'item-1')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await isSelected(page, 'item-2')).toBe(false);
            });
        });

        test.describe('Mouse', () => {
            test('Click on a disabled item in multi mode is ignored', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-with-disabled').load();
                const events = startChangeEventCapture(page);

                // Playwright's actionability check refuses to click disabled
                // elements; bypass it with `force` so we exercise our handler.
                await page.getByTestId('item-2').click({ force: true });

                expect(await isSelected(page, 'item-2')).toBe(false);
                expect(await isActive(page, 'item-2')).toBe(false);
                expect(events).toEqual([]);
            });

            test('Click on a disabled item in single mode is ignored', async ({ page }) => {
                await new BasePage(page, 'list--single-select-with-disabled').load();
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-2').click({ force: true });

                expect(await isSelected(page, 'item-2')).toBe(false);
                expect(await isSelected(page, 'item-3')).toBe(true);
                expect(events).toEqual([]);
            });

            test('Click on an enabled item next to a disabled one still works', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-with-disabled').load();
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-3').click();

                expect(await isSelected(page, 'item-3')).toBe(true);
                expect(events).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
            });
        });

        test.describe('Dynamic and runtime changes', () => {
            test('an item appended with disabled set gets aria-disabled="true" and is skipped by arrow nav', async ({ page }) => {
                await new BasePage(page, 'list--multi-select-none-selected').load();

                // Append a disabled item between item-1 and the rest by inserting
                // at the end first, then verify it's reachable via aria + skipped.
                await page.evaluate(() => {
                    const list = document.querySelector('pie-list[data-test-id="pie-list"]');
                    if (!list) return;
                    const disabled = document.createElement('pie-list-item');
                    disabled.setAttribute('value', 'd-new');
                    disabled.setAttribute('id', 'd-new-id');
                    disabled.setAttribute('data-test-id', 'item-disabled');
                    disabled.setAttribute('disabled', '');
                    disabled.textContent = 'Disabled new';
                    list.appendChild(disabled);

                    const enabled = document.createElement('pie-list-item');
                    enabled.setAttribute('value', 'e-new');
                    enabled.setAttribute('id', 'e-new-id');
                    enabled.setAttribute('data-test-id', 'item-enabled');
                    enabled.textContent = 'Enabled new';
                    list.appendChild(enabled);
                });

                expect(await getAria(page, 'item-disabled', 'aria-disabled')).toBe('true');
                expect(await getAria(page, 'item-enabled', 'aria-disabled')).toBe('false');

                // Walk from item-4 to verify the new disabled item is skipped.
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');
                await expectActiveItem(page, 'item-4');

                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-enabled');
            });

            test('toggling an enabled item to disabled causes arrow navigation to skip it', async ({ page }) => {
                await new BasePage(page, 'list--runtime-disabled-toggle').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                await expectActiveItem(page, 'item-1');

                await page.getByTestId('btn-toggle-item-2').click();
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('true');

                // The list lost focus on click; re-enter it.
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');

                await page.keyboard.press('ArrowDown');

                await expectActiveItem(page, 'item-3');
            });

            test('toggling a disabled item to enabled lets arrow navigation reach it', async ({ page }) => {
                await new BasePage(page, 'list--runtime-disabled-toggle').load();

                // First make item-2 disabled to set up the "was disabled" precondition,
                // and confirm arrow nav skips it.
                await page.getByTestId('btn-toggle-item-2').click();
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('true');

                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                await page.keyboard.press('ArrowDown');
                await expectActiveItem(page, 'item-3');

                // Now re-enable item-2 and verify it's reachable.
                await page.getByTestId('btn-toggle-item-2').click();
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('false');

                // Re-enter the list (button click moves focus); active state is
                // preserved so ArrowUp from item-3 should now land on item-2.
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                await expectActiveItem(page, 'item-3');

                await page.keyboard.press('ArrowUp');

                await expectActiveItem(page, 'item-2');
            });
        });
    });

    test.describe('Runtime interaction-type switching: ARIA', () => {
        test('none → multi-select: list role flips to listbox, aria-multiselectable added, items get role=option + aria-selected', async ({ page }) => {
            await new BasePage(page, 'list--runtime-interaction-type-switch').load();
            expect(await getListAttr(page, 'role')).toBe('list');
            expect(await getRole(page, 'item-1')).toBe('listitem');

            await page.getByTestId('btn-set-multi').click();

            expect(await getListAttr(page, 'role')).toBe('listbox');
            expect(await getListAttr(page, 'aria-multiselectable')).toBe('true');
            expect(await getRole(page, 'item-1')).toBe('option');
            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('false');
        });

        test('multi-select → single-select: list role stays listbox, aria-multiselectable removed', async ({ page }) => {
            await new BasePage(page, 'list--runtime-interaction-type-switch').load();
            await page.getByTestId('btn-set-multi').click();
            expect(await getListAttr(page, 'aria-multiselectable')).toBe('true');

            await page.getByTestId('btn-set-single').click();

            expect(await getListAttr(page, 'role')).toBe('listbox');
            expect(await getListAttr(page, 'aria-multiselectable')).toBeNull();
            expect(await getRole(page, 'item-1')).toBe('option');
            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('false');
        });

        test('multi-select → none: list role becomes list, items become listitem, aria-selected and aria-multiselectable removed', async ({ page }) => {
            await new BasePage(page, 'list--runtime-interaction-type-switch').load();
            await page.getByTestId('btn-set-multi').click();
            expect(await getRole(page, 'item-1')).toBe('option');

            await page.getByTestId('btn-set-none').click();

            expect(await getListAttr(page, 'role')).toBe('list');
            expect(await getListAttr(page, 'aria-multiselectable')).toBeNull();
            expect(await getRole(page, 'item-1')).toBe('listitem');
            expect(await getAria(page, 'item-1', 'aria-selected')).toBeNull();
        });
    });
});
