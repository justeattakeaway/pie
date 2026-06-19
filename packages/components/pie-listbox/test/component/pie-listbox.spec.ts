import {
    test, expect, type Page,
} from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

const EXPECTED_CHANGE_EVENT_MESSAGE = 'Change event dispatched';
const componentSelector = '[data-test-id="pie-listbox"]';

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

const getOptionId = (page: Page, testId: string) => page.getByTestId(testId).getAttribute('id');

const getListboxAttr = (page: Page, attr: string) => page.locator(componentSelector).getAttribute(attr);

const isSelected = (page: Page, testId: string) => page.getByTestId(testId).evaluate((el) => (el as HTMLElement & { selected: boolean }).selected);

const isActive = (page: Page, testId: string) => page.getByTestId(testId).getAttribute('data-active').then((v) => v !== null);

const expectActiveOption = async (page: Page, testId: string) => {
    // The listbox container holds DOM focus; the active option is identified
    // visually via data-active and to AT via aria-activedescendant.
    await expect(page.locator(componentSelector)).toBeFocused();
    expect(await isActive(page, testId)).toBe(true);
    expect(await getListboxAttr(page, 'aria-activedescendant')).toBe(await getOptionId(page, testId));
};

const getSelectedValues = (page: Page) => page.locator(componentSelector).evaluate((listbox) => Array.from(listbox.querySelectorAll('pie-listbox-option'))
    .filter((el) => (el as HTMLElement & { selected: boolean }).selected)
    .map((el) => (el as HTMLElement & { value: string }).value));

const focusBeforeButton = async (page: Page) => {
    const before = page.getByTestId('btn-before');
    await expect(before).toBeVisible();
    await before.focus();
};

test.describe('PieListbox - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        const basePage = new BasePage(page, 'listbox--default');
        await basePage.load();
        await expect(page.locator(componentSelector)).toBeVisible();
    });

    test.describe('selection-mode="multiple"', () => {
        test.describe('Initial state', () => {
            test('listbox is the single tab stop (tabindex="0"); options have no tabindex', async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();

                expect(await getListboxAttr(page, 'tabindex')).toBe('0');
                expect(await getTabindex(page, 'item-1')).toBeNull();
                expect(await getTabindex(page, 'item-2')).toBeNull();
                expect(await getTabindex(page, 'item-3')).toBeNull();
                expect(await getTabindex(page, 'item-4')).toBeNull();
            });

            test('no option is marked active until the listbox is engaged', async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();

                expect(await isActive(page, 'item-1')).toBe(false);
                expect(await isActive(page, 'item-2')).toBe(false);
                expect(await isActive(page, 'item-3')).toBe(false);
                expect(await isActive(page, 'item-4')).toBe(false);
            });
        });

        test.describe('Tab / Shift+Tab', () => {
            test('Tab from preceding focusable enters at the first selected option', async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expectActiveOption(page, 'item-2');
            });

            test('Second Tab leaves the listbox and lands on the next focusable', async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await expect(page.getByTestId('btn-after')).toBeFocused();
            });

            test('with no options selected, Tab enters at the first option', async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-none-selected').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expectActiveOption(page, 'item-1');
            });

            test('Shift+Tab from following focusable enters at the first selected option', async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();
                await page.getByTestId('btn-after').focus();

                await page.keyboard.press('Shift+Tab');

                await expectActiveOption(page, 'item-2');
            });
        });

        test.describe('Arrow keys', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('ArrowDown moves active to the next option without changing selection', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-3');
                expect(await isSelected(page, 'item-2')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(events).toEqual([]);
            });

            test('ArrowUp moves active to the previous option without changing selection', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowUp');

                await expectActiveOption(page, 'item-1');
                expect(await isSelected(page, 'item-2')).toBe(true);
                expect(await isSelected(page, 'item-1')).toBe(false);
                expect(events).toEqual([]);
            });

            test('ArrowDown at the last option keeps active on the last option', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-4');

                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-4');
            });

            test('ArrowUp at the first option keeps active on the first option', async ({ page }) => {
                await page.keyboard.press('ArrowUp');

                await expectActiveOption(page, 'item-1');

                await page.keyboard.press('ArrowUp');

                await expectActiveOption(page, 'item-1');
            });
        });

        test.describe('Space', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-none-selected').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('Space on an unselected active option selects it and emits change', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('Space');

                expect(await isSelected(page, 'item-1')).toBe(true);
                expect(events).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
            });

            test('Space on a selected active option deselects it and emits change', async ({ page }) => {
                await page.keyboard.press('Space');
                const events = startChangeEventCapture(page);

                await page.keyboard.press('Space');

                expect(await isSelected(page, 'item-1')).toBe(false);
                expect(events).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
            });

            test('Space across multiple options toggles them independently', async ({ page }) => {
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
                await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            ['Home', 'End', 'Enter', 'a'].forEach((key) => {
                test(`${key} does not change active option or selection or emit change`, async ({ page }) => {
                    const events = startChangeEventCapture(page);

                    await page.keyboard.press(key);

                    await expectActiveOption(page, 'item-2');
                    expect(await getSelectedValues(page)).toEqual(['m2', 'm4']);
                    expect(events).toEqual([]);
                });
            });
        });

        test.describe('Mouse', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-none-selected').load();
            });

            test('Click on an option selects it, makes it active, and emits change', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-3').click();

                expect(await isSelected(page, 'item-3')).toBe(true);
                await expectActiveOption(page, 'item-3');
                expect(events).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
            });

            test('Click on a selected option deselects it and emits change', async ({ page }) => {
                await page.getByTestId('item-3').click();
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-3').click();

                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(events).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
            });
        });

        test.describe('Focus restoration', () => {
            test('after Tab away and back, the previously active option is still active', async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-3');

                await page.keyboard.press('Tab');
                await expect(page.getByTestId('btn-after')).toBeFocused();

                await page.keyboard.press('Shift+Tab');

                await expectActiveOption(page, 'item-3');
            });
        });
    });

    test.describe('selection-mode="single"', () => {
        test.describe('Initial state', () => {
            test('listbox is the single tab stop (tabindex="0"); options have no tabindex', async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-keyboard-navigation').load();

                expect(await getListboxAttr(page, 'tabindex')).toBe('0');
                expect(await getTabindex(page, 'item-1')).toBeNull();
                expect(await getTabindex(page, 'item-2')).toBeNull();
                expect(await getTabindex(page, 'item-3')).toBeNull();
                expect(await getTabindex(page, 'item-4')).toBeNull();
            });

            test('no option is marked active until the listbox is engaged', async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-none-selected').load();

                expect(await isActive(page, 'item-1')).toBe(false);
                expect(await isActive(page, 'item-2')).toBe(false);
            });
        });

        test.describe('Tab / Shift+Tab', () => {
            test('Tab from preceding focusable enters at the selected option', async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expectActiveOption(page, 'item-3');
            });

            test('Second Tab leaves the listbox and lands on the next focusable', async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-keyboard-navigation').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await expect(page.getByTestId('btn-after')).toBeFocused();
            });

            test('with no option selected, Tab enters at the first option', async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-none-selected').load();
                await focusBeforeButton(page);

                await page.keyboard.press('Tab');

                await expectActiveOption(page, 'item-1');
            });
        });

        test.describe('Arrow keys', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('ArrowDown moves active AND selects the next option, deselecting the previous', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-4');
                expect(await isSelected(page, 'item-4')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await getSelectedValues(page)).toEqual(['s4']);
                expect(events.length).toBe(2);
            });

            test('ArrowUp moves active AND selects the previous option, deselecting the previous selection', async ({ page }) => {
                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowUp');

                await expectActiveOption(page, 'item-2');
                expect(await isSelected(page, 'item-2')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await getSelectedValues(page)).toEqual(['s2']);
                expect(events.length).toBe(2);
            });

            test('ArrowDown at the last option is a no-op (active stays, selection unchanged, no change event)', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await expectActiveOption(page, 'item-4');

                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-4');
                expect(await getSelectedValues(page)).toEqual(['s4']);
                expect(events).toEqual([]);
            });

            test('ArrowUp at the first option is a no-op (active stays, selection unchanged, no change event)', async ({ page }) => {
                await page.keyboard.press('ArrowUp');
                await page.keyboard.press('ArrowUp');
                await expectActiveOption(page, 'item-1');

                const events = startChangeEventCapture(page);

                await page.keyboard.press('ArrowUp');

                await expectActiveOption(page, 'item-1');
                expect(await getSelectedValues(page)).toEqual(['s1']);
                expect(events).toEqual([]);
            });

            test('After arrow navigation, exactly one option remains selected', async ({ page }) => {
                await page.keyboard.press('ArrowUp');
                await page.keyboard.press('ArrowUp');
                await page.keyboard.press('ArrowDown');

                expect((await getSelectedValues(page)).length).toBe(1);
            });
        });

        test.describe('Space', () => {
            test('Space is a no-op (no change event, selection unchanged)', async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-keyboard-navigation').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                const events = startChangeEventCapture(page);

                await page.keyboard.press('Space');

                await expectActiveOption(page, 'item-3');
                expect(await getSelectedValues(page)).toEqual(['s3']);
                expect(events).toEqual([]);
            });
        });

        test.describe('Mouse', () => {
            test('Click on an option selects it, deselects previous, makes it active, emits a change event per option state change', async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-keyboard-navigation').load();
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-1').click();

                expect(await isSelected(page, 'item-1')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await getSelectedValues(page)).toEqual(['s1']);
                await expectActiveOption(page, 'item-1');
                expect(events.length).toBe(2);
            });

            test('Click on the already-selected option does not emit a change event', async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-keyboard-navigation').load();
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-3').click();

                expect(await isSelected(page, 'item-3')).toBe(true);
                expect(events).toEqual([]);
            });
        });
    });

    test.describe('Slot changes', () => {
        test('Appending an option does not engage the listbox before focus', async ({ page }) => {
            await new BasePage(page, 'listbox--dynamic-slots').load();

            // No option is active before the listbox has been engaged.
            expect(await isActive(page, 'item-1')).toBe(false);
            expect(await getListboxAttr(page, 'aria-activedescendant')).toBeNull();

            await page.getByTestId('btn-add').click();

            expect(await isActive(page, 'item-1')).toBe(false);
            expect(await isActive(page, 'item-2')).toBe(false);
        });

        test('Adding an option to an empty listbox does not preemptively set an active descendant', async ({ page }) => {
            await new BasePage(page, 'listbox--empty-listbox').load();
            await page.locator(componentSelector).waitFor({ state: 'attached' });

            const optionCount = await page.evaluate(() => {
                const listbox = document.querySelector('pie-listbox[data-test-id="pie-listbox"]');
                if (!listbox) return -1;
                const option = document.createElement('pie-listbox-option');
                option.setAttribute('value', 'new1');
                option.setAttribute('id', 'new-1-id');
                option.setAttribute('data-test-id', 'item-1');
                option.textContent = 'New Option';
                listbox.appendChild(option);
                return listbox.querySelectorAll('pie-listbox-option').length;
            });
            expect(optionCount).toBe(1);

            expect(await getListboxAttr(page, 'aria-activedescendant')).toBeNull();
            expect(await isActive(page, 'item-1')).toBe(false);
        });

        test('Removing the active option clears the stale active descendant', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-none-selected').load();

            // Engage the listbox so item-1 becomes the active descendant.
            await focusBeforeButton(page);
            await page.keyboard.press('Tab');
            await expectActiveOption(page, 'item-1');

            await page.evaluate(() => {
                const listbox = document.querySelector('pie-listbox[data-test-id="pie-listbox"]');
                const item1 = listbox?.querySelector('[data-test-id="item-1"]');
                item1?.remove();
            });

            await expect(page.locator(componentSelector)).not.toHaveAttribute('aria-activedescendant', /.+/);
        });
    });

    test.describe('Runtime selection-mode switching', () => {
        test('single → multiple: aria-multiselectable toggled on; tabindex unchanged', async ({ page }) => {
            await new BasePage(page, 'listbox--runtime-selection-mode-switch').load();

            expect(await getListboxAttr(page, 'tabindex')).toBe('0');
            expect(await getListboxAttr(page, 'aria-multiselectable')).toBeNull();

            await page.getByTestId('btn-set-multi').click();

            expect(await getListboxAttr(page, 'tabindex')).toBe('0');
            expect(await getListboxAttr(page, 'aria-multiselectable')).toBe('true');
        });

        test('multiple → single: strategy swaps; Tab still enters the listbox at the active option', async ({ page }) => {
            await new BasePage(page, 'listbox--runtime-selection-mode-switch').load();
            await page.getByTestId('btn-set-multi').click();
            await page.getByTestId('item-2').click();
            expect(await isSelected(page, 'item-2')).toBe(true);

            await page.getByTestId('btn-set-single').click();

            expect(await getListboxAttr(page, 'tabindex')).toBe('0');
            expect(await getListboxAttr(page, 'aria-multiselectable')).toBeNull();
            await page.getByTestId('btn-before').focus();
            await page.keyboard.press('Tab');
            await expectActiveOption(page, 'item-2');
        });
    });

    test.describe('ARIA roles', () => {
        test('selection-mode="multiple": listbox has role="listbox", options have role="option"', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();

            expect(await getListboxAttr(page, 'role')).toBe('listbox');
            expect(await getRole(page, 'item-1')).toBe('option');
            expect(await getRole(page, 'item-2')).toBe('option');
            expect(await getRole(page, 'item-3')).toBe('option');
            expect(await getRole(page, 'item-4')).toBe('option');
        });

        test('selection-mode="single": listbox has role="listbox", options have role="option"', async ({ page }) => {
            await new BasePage(page, 'listbox--single-select-keyboard-navigation').load();

            expect(await getListboxAttr(page, 'role')).toBe('listbox');
            expect(await getRole(page, 'item-1')).toBe('option');
            expect(await getRole(page, 'item-2')).toBe('option');
            expect(await getRole(page, 'item-3')).toBe('option');
            expect(await getRole(page, 'item-4')).toBe('option');
        });
    });

    test.describe('aria-multiselectable', () => {
        test('selection-mode="multiple": listbox has aria-multiselectable="true"', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();
            expect(await getListboxAttr(page, 'aria-multiselectable')).toBe('true');
        });

        test('selection-mode="single": listbox has no aria-multiselectable', async ({ page }) => {
            await new BasePage(page, 'listbox--single-select-keyboard-navigation').load();
            expect(await getListboxAttr(page, 'aria-multiselectable')).toBeNull();
        });
    });

    test.describe('aria-selected', () => {
        test('selection-mode="multiple": options reflect their selected state', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();

            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('false');
            expect(await getAria(page, 'item-2', 'aria-selected')).toBe('true');
            expect(await getAria(page, 'item-3', 'aria-selected')).toBe('false');
            expect(await getAria(page, 'item-4', 'aria-selected')).toBe('true');
        });

        test('selection-mode="single": options reflect their selected state', async ({ page }) => {
            await new BasePage(page, 'listbox--single-select-keyboard-navigation').load();

            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('false');
            expect(await getAria(page, 'item-2', 'aria-selected')).toBe('false');
            expect(await getAria(page, 'item-3', 'aria-selected')).toBe('true');
            expect(await getAria(page, 'item-4', 'aria-selected')).toBe('false');
        });

        test('updates to "true" when an option is toggled on (multi)', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-none-selected').load();
            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('false');

            await page.getByTestId('item-1').click();

            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('true');
        });

        test('updates to "false" when an option is toggled off (multi)', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-none-selected').load();
            await page.getByTestId('item-1').click();
            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('true');

            await page.getByTestId('item-1').click();

            expect(await getAria(page, 'item-1', 'aria-selected')).toBe('false');
        });

        test('moves with selection on single-select arrow navigation', async ({ page }) => {
            await new BasePage(page, 'listbox--single-select-keyboard-navigation').load();
            await focusBeforeButton(page);
            await page.keyboard.press('Tab');

            await page.keyboard.press('ArrowDown');

            expect(await getAria(page, 'item-3', 'aria-selected')).toBe('false');
            expect(await getAria(page, 'item-4', 'aria-selected')).toBe('true');
        });
    });

    test.describe('aria-activedescendant', () => {
        test('absent on the listbox before any focus or click', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();
            expect(await getListboxAttr(page, 'aria-activedescendant')).toBeNull();
        });

        test('set to the active option id when the listbox receives focus via Tab', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();
            await focusBeforeButton(page);

            await page.keyboard.press('Tab');

            expect(await getListboxAttr(page, 'aria-activedescendant')).toBe(await getOptionId(page, 'item-2'));
        });

        test('updates as active moves via arrow keys', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();
            await focusBeforeButton(page);
            await page.keyboard.press('Tab');

            await page.keyboard.press('ArrowDown');

            expect(await getListboxAttr(page, 'aria-activedescendant')).toBe(await getOptionId(page, 'item-3'));
        });

        test('set to the clicked option id on click', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-none-selected').load();
            expect(await getListboxAttr(page, 'aria-activedescendant')).toBeNull();

            await page.getByTestId('item-3').click();

            expect(await getListboxAttr(page, 'aria-activedescendant')).toBe(await getOptionId(page, 'item-3'));
        });

        test('persists on the last active option when focus leaves the listbox', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-keyboard-navigation').load();
            await focusBeforeButton(page);
            await page.keyboard.press('Tab');
            const optionId = await getOptionId(page, 'item-2');

            await page.keyboard.press('Tab');
            await expect(page.getByTestId('btn-after')).toBeFocused();

            expect(await getListboxAttr(page, 'aria-activedescendant')).toBe(optionId);
        });

        test('kept when selection-mode switches between multiple and single', async ({ page }) => {
            await new BasePage(page, 'listbox--runtime-selection-mode-switch').load();
            await page.getByTestId('btn-set-multi').click();
            await page.getByTestId('item-2').click();
            const optionId = await getOptionId(page, 'item-2');
            expect(await getListboxAttr(page, 'aria-activedescendant')).toBe(optionId);

            await page.getByTestId('btn-set-single').click();

            expect(await getListboxAttr(page, 'aria-activedescendant')).toBe(optionId);
        });

        test('not set when the clicked option has no id (consumer owns id assignment)', async ({ page }) => {
            await new BasePage(page, 'listbox--dynamic-slots').load();
            expect(await getOptionId(page, 'item-1')).toBeNull();

            await page.getByTestId('item-1').click();

            expect(await getListboxAttr(page, 'aria-activedescendant')).toBeNull();
        });
    });

    test.describe('aria-activedescendant set in markup', () => {
        test('the referenced option is marked active without engaging the listbox', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-with-active-descendant').load();

            expect(await isActive(page, 'item-1')).toBe(false);
            expect(await isActive(page, 'item-2')).toBe(false);
            expect(await isActive(page, 'item-3')).toBe(true);
            expect(await isActive(page, 'item-4')).toBe(false);
        });

        test('Tab from preceding focusable enters the listbox with that option still active', async ({ page }) => {
            await new BasePage(page, 'listbox--multi-select-with-active-descendant').load();
            await focusBeforeButton(page);

            await page.keyboard.press('Tab');

            await expectActiveOption(page, 'item-3');
        });
    });

    test.describe('Disabled options', () => {
        test.describe('aria-disabled', () => {
            test('selection-mode="multiple": options reflect their disabled state', async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-with-disabled').load();

                expect(await getAria(page, 'item-1', 'aria-disabled')).toBe('false');
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('true');
                expect(await getAria(page, 'item-3', 'aria-disabled')).toBe('false');
                expect(await getAria(page, 'item-4', 'aria-disabled')).toBe('true');
                expect(await getAria(page, 'item-5', 'aria-disabled')).toBe('false');
            });

            test('selection-mode="single": options reflect their disabled state', async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-with-disabled').load();

                expect(await getAria(page, 'item-1', 'aria-disabled')).toBe('false');
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('true');
                expect(await getAria(page, 'item-3', 'aria-disabled')).toBe('false');
                expect(await getAria(page, 'item-4', 'aria-disabled')).toBe('true');
                expect(await getAria(page, 'item-5', 'aria-disabled')).toBe('false');
            });

            test('updates when an option\'s disabled property changes at runtime', async ({ page }) => {
                await new BasePage(page, 'listbox--runtime-disabled-toggle').load();
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('false');

                await page.getByTestId('btn-toggle-item-2').click();

                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('true');

                await page.getByTestId('btn-toggle-item-2').click();

                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('false');
            });
        });

        test.describe('Keyboard navigation (multi)', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-with-disabled').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('Tab enters at first non-disabled option when nothing is selected', async ({ page }) => {
                await expectActiveOption(page, 'item-1');
            });

            test('ArrowDown skips over disabled options', async ({ page }) => {
                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-3');
            });

            test('ArrowDown skips multiple consecutive disabled options', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-5');
            });

            test('ArrowDown at the last enabled option with only disabled options after is a no-op', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');
                await expectActiveOption(page, 'item-5');

                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-5');
            });

            test('ArrowUp skips over disabled options', async ({ page }) => {
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');
                await expectActiveOption(page, 'item-5');

                await page.keyboard.press('ArrowUp');

                await expectActiveOption(page, 'item-3');
            });
        });

        test.describe('Keyboard navigation (single)', () => {
            test.beforeEach(async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-with-disabled').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
            });

            test('Tab enters at the selected option even though disabled options flank it', async ({ page }) => {
                await expectActiveOption(page, 'item-3');
            });

            test('ArrowDown skips disabled options and selects the next enabled one', async ({ page }) => {
                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-5');
                expect(await isSelected(page, 'item-5')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await isSelected(page, 'item-4')).toBe(false);
            });

            test('ArrowUp skips disabled options and selects the previous enabled one', async ({ page }) => {
                await page.keyboard.press('ArrowUp');

                await expectActiveOption(page, 'item-1');
                expect(await isSelected(page, 'item-1')).toBe(true);
                expect(await isSelected(page, 'item-3')).toBe(false);
                expect(await isSelected(page, 'item-2')).toBe(false);
            });
        });

        test.describe('Mouse', () => {
            test('Click on a disabled option in multi mode is ignored', async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-with-disabled').load();
                const events = startChangeEventCapture(page);

                // Playwright's actionability check refuses to click disabled
                // elements; bypass it with `force` so we exercise our handler.
                await page.getByTestId('item-2').click({ force: true });

                expect(await isSelected(page, 'item-2')).toBe(false);
                expect(await isActive(page, 'item-2')).toBe(false);
                expect(events).toEqual([]);
            });

            test('Click on a disabled option in single mode is ignored', async ({ page }) => {
                await new BasePage(page, 'listbox--single-select-with-disabled').load();
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-2').click({ force: true });

                expect(await isSelected(page, 'item-2')).toBe(false);
                expect(await isSelected(page, 'item-3')).toBe(true);
                expect(events).toEqual([]);
            });

            test('Click on an enabled option next to a disabled one still works', async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-with-disabled').load();
                const events = startChangeEventCapture(page);

                await page.getByTestId('item-3').click();

                expect(await isSelected(page, 'item-3')).toBe(true);
                expect(events).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
            });
        });

        test.describe('Dynamic and runtime changes', () => {
            test('an option appended with disabled set gets aria-disabled="true" and is skipped by arrow nav', async ({ page }) => {
                await new BasePage(page, 'listbox--multi-select-none-selected').load();

                // Append a disabled option, then verify it's reachable via aria + skipped.
                await page.evaluate(() => {
                    const listbox = document.querySelector('pie-listbox[data-test-id="pie-listbox"]');
                    if (!listbox) return;
                    const disabled = document.createElement('pie-listbox-option');
                    disabled.setAttribute('value', 'd-new');
                    disabled.setAttribute('id', 'd-new-id');
                    disabled.setAttribute('data-test-id', 'item-disabled');
                    disabled.setAttribute('disabled', '');
                    disabled.textContent = 'Disabled new';
                    listbox.appendChild(disabled);

                    const enabled = document.createElement('pie-listbox-option');
                    enabled.setAttribute('value', 'e-new');
                    enabled.setAttribute('id', 'e-new-id');
                    enabled.setAttribute('data-test-id', 'item-enabled');
                    enabled.textContent = 'Enabled new';
                    listbox.appendChild(enabled);
                });

                expect(await getAria(page, 'item-disabled', 'aria-disabled')).toBe('true');
                expect(await getAria(page, 'item-enabled', 'aria-disabled')).toBe('false');

                // Walk from item-4 to verify the new disabled option is skipped.
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');
                await expectActiveOption(page, 'item-4');

                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-enabled');
            });

            test('toggling an enabled option to disabled causes arrow navigation to skip it', async ({ page }) => {
                await new BasePage(page, 'listbox--runtime-disabled-toggle').load();
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                await expectActiveOption(page, 'item-1');

                await page.getByTestId('btn-toggle-item-2').click();
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('true');

                // The listbox lost focus on click; re-enter it.
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');

                await page.keyboard.press('ArrowDown');

                await expectActiveOption(page, 'item-3');
            });

            test('toggling a disabled option to enabled lets arrow navigation reach it', async ({ page }) => {
                await new BasePage(page, 'listbox--runtime-disabled-toggle').load();

                // First make item-2 disabled to set up the "was disabled" precondition,
                // and confirm arrow nav skips it.
                await page.getByTestId('btn-toggle-item-2').click();
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('true');

                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                await page.keyboard.press('ArrowDown');
                await expectActiveOption(page, 'item-3');

                // Now re-enable item-2 and verify it's reachable.
                await page.getByTestId('btn-toggle-item-2').click();
                expect(await getAria(page, 'item-2', 'aria-disabled')).toBe('false');

                // Re-enter the listbox (button click moves focus); active state
                // is preserved so ArrowUp from item-3 should now land on item-2.
                await focusBeforeButton(page);
                await page.keyboard.press('Tab');
                await expectActiveOption(page, 'item-3');

                await page.keyboard.press('ArrowUp');

                await expectActiveOption(page, 'item-2');
            });
        });
    });
});
