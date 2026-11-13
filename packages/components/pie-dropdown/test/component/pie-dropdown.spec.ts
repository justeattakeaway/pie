import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { DropdownFormPage } from '../helpers/page-object/pie-dropdown-form.page.ts';
import { dropdown } from '../helpers/page-object/selectors.ts';

const trigger = dropdown.selectors.trigger.dataTestId;
const popover = dropdown.selectors.popover.dataTestId;
const option = dropdown.selectors.option.dataTestId;
const valueText = dropdown.selectors.value.dataTestId;

test.describe('PieDropdown - Component tests', () => {
    test.describe('Field', () => {
        test('should render a disclosure button with correct ARIA wiring', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            const triggerEl = page.getByTestId(trigger);

            await expect(triggerEl).toHaveAttribute('aria-expanded', 'false');
            await expect(triggerEl).toHaveAttribute('aria-haspopup', 'listbox');
            await expect(triggerEl).toBeEnabled();
        });

        test('should reach the clear button on the second tab when a selection exists', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-selected');
            await dropdownPage.load();

            // Tab 1: the field opens the popover and keeps focus.
            await page.keyboard.press('Tab');
            await expect(page.getByTestId(trigger)).toBeFocused();
            await expect(page.getByTestId(popover)).toBeVisible();

            // Tab 2: the clear button (it was unreachable going forwards
            // when focus-open used to move focus into the option list).
            await page.keyboard.press('Tab');
            await expect(page.getByTestId(dropdown.selectors.clear.dataTestId)).toBeFocused();
            await expect(page.getByTestId(popover)).toBeVisible();

            // Tab 3: out of the component, which closes the popover.
            await page.keyboard.press('Tab');
            await expect(page.getByTestId(popover)).toBeHidden();
        });

        test('should be disabled when the disabled prop is set', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--disabled-state');
            await dropdownPage.load();

            await expect(page.getByTestId(trigger)).toBeDisabled();
        });
    });

    test.describe('Popover', () => {
        test('should open when the field is clicked and render a listbox of options', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();

            const popoverEl = page.getByTestId(popover);
            await expect(popoverEl).toBeVisible();
            await expect(popoverEl).toHaveAttribute('role', 'listbox');
            await expect(page.getByTestId(trigger)).toHaveAttribute('aria-expanded', 'true');
            await expect(page.getByTestId(option)).toHaveCount(6);
        });

        test('should toggle the popover when the chevron area of a non-searchable field is clicked', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            // The chevron is decorative in non-searchable variants: it never
            // receives the click itself (pointer-events: none), so the field
            // beneath it — chevron zone included — toggles the popover.
            const fieldEl = page.getByTestId(dropdown.selectors.field.dataTestId);
            const fieldWidth = (await fieldEl.boundingBox())?.width ?? 256;
            const chevronZone = { x: fieldWidth - 26, y: 24 };

            await fieldEl.click({ position: chevronZone });

            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(option).filter({ hasText: 'Pizza' })).toBeFocused();

            await fieldEl.click({ position: chevronZone });

            await expect(page.getByTestId(popover)).toBeHidden();
        });

        test('should focus the selected option when opened', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-selected');
            await dropdownPage.load();

            // Click near the start of the field: with a selection present the
            // clear button sits between the text and the chevron.
            await page.getByTestId(trigger).click({ position: { x: 10, y: 24 } });

            const selectedOption = page.getByTestId(option).filter({ hasText: 'Burger' });
            await expect(selectedOption).toBeFocused();
            await expect(selectedOption).toHaveAttribute('aria-selected', 'true');
        });

        test('should use the brand colour for the selected option tick', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-selected');
            await dropdownPage.load();

            await page.getByTestId(trigger).click({ position: { x: 10, y: 24 } });

            const colors = await page.evaluate(() => {
                const root = document.querySelector('pie-dropdown')?.shadowRoot;
                const icon = root?.querySelector('.c-dropdown-option icon-check');
                const probe = document.createElement('span');
                probe.style.color = 'var(--dt-color-content-brand-solid)';
                root?.appendChild(probe);
                const iconColor = icon ? getComputedStyle(icon).color : '';
                const tokenColor = getComputedStyle(probe).color;
                probe.remove();
                return { iconColor, tokenColor };
            });

            expect(colors.iconColor).toBe(colors.tokenColor);
        });

        test('should close when an option is selected, and update the field', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();
            await page.getByTestId(option).filter({ hasText: 'Pasta' }).click();

            await expect(page.getByTestId(popover)).toBeHidden();
            await expect(page.getByTestId(valueText)).toHaveText('Pasta');
        });

        test('should close when Escape is pressed and return focus to the field', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();
            await page.keyboard.press('Escape');

            // The focus that returns to the field must not reopen the
            // popover (the refocus is suppressed), so it stays closed.
            await expect(page.getByTestId(popover)).toBeHidden();
            await expect(page.getByTestId(trigger)).toBeFocused();
        });

        test('should close when clicking outside the component', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();
            await page.click('body', { position: { x: 5, y: 5 } });

            await expect(page.getByTestId(popover)).toBeHidden();
        });
    });

    test.describe('Keyboard (single select)', () => {
        test('should open the popover when the field receives keyboard focus and keep focus on the field', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).focus();

            // Focus-open never moves focus: the popover opens while focus
            // stays on the field (the arrow keys are what enter the option
            // list, which is never tabbable — the combobox pattern).
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(trigger)).toHaveAttribute('aria-expanded', 'true');
            await expect(page.getByTestId(trigger)).toBeFocused();
        });

        test('should open the popover with ArrowDown and focus the first option', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            // Focus is on the closed field without the popover being open
            // (the focus that returns after an Escape close is suppressed),
            // so ArrowDown is the surface that opens the popover here.
            const triggerEl = page.getByTestId(trigger);
            await triggerEl.click();
            await page.keyboard.press('Escape');
            await expect(page.getByTestId(popover)).toBeHidden();

            await page.keyboard.press('ArrowDown');

            await expect(page.getByTestId(popover)).toBeVisible();
            const firstOption = page.getByTestId(option).filter({ hasText: 'Pizza' });
            await expect(firstOption).toBeFocused();
            await expect(firstOption).toHaveAttribute('tabindex', '-1');
        });

        test('should open the popover with ArrowUp and focus the selected option', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-selected');
            await dropdownPage.load();

            // Focus on the closed field (the focus that returns after an
            // Escape close is suppressed), so ArrowUp opens the popover.
            const triggerEl = page.getByTestId(trigger);
            await triggerEl.click();
            await page.keyboard.press('Escape');
            await expect(page.getByTestId(popover)).toBeHidden();

            await page.keyboard.press('ArrowUp');

            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(option).filter({ hasText: 'Burger' })).toBeFocused();
        });

        test('should enter the option list with the arrow keys when the field is focused and open', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            // Focus-open keeps focus on the field; the arrows are the
            // keyboard's way into the (never tabbable) option list.
            await page.getByTestId(trigger).focus();
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(trigger)).toBeFocused();

            await page.keyboard.press('ArrowDown');

            await expect(page.getByTestId(option).filter({ hasText: 'Pizza' })).toBeFocused();
        });

        test('should jump between the ends of the list with End and Home', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();
            await expect(page.getByTestId(option).filter({ hasText: 'Pizza' })).toBeFocused();

            await page.keyboard.press('End');
            await expect(page.getByTestId(option).filter({ hasText: 'Ramen' })).toBeFocused();

            await page.keyboard.press('Home');
            await expect(page.getByTestId(option).filter({ hasText: 'Pizza' })).toBeFocused();
        });

        test('should select the focused option with Space and close the popover', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();
            await expect(page.getByTestId(option).filter({ hasText: 'Pizza' })).toBeFocused();

            await page.keyboard.press('ArrowDown');
            await expect(page.getByTestId(option).filter({ hasText: 'Burger' })).toBeFocused();

            await page.keyboard.press(' ');

            await expect(page.getByTestId(popover)).toBeHidden();
            await expect(page.getByTestId(valueText)).toHaveText('Burger');
            await expect(page.getByTestId(trigger)).toBeFocused();
        });

        test('should move focus to the first matching option when typing (type-ahead)', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();
            await expect(page.getByTestId(option).filter({ hasText: 'Pizza' })).toBeFocused();

            await page.keyboard.type('cu');

            // Type-ahead jumps to the first option whose text starts with the
            // typed string, without selecting it (the select-only pattern).
            await expect(page.getByTestId(option).filter({ hasText: 'Curry' })).toBeFocused();
            await expect(page.getByTestId(valueText)).toHaveCount(0);
        });

        test('should restart type-ahead from a new character when nothing matches', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();
            await expect(page.getByTestId(option).filter({ hasText: 'Pizza' })).toBeFocused();

            // 'z' matches nothing; the next character must restart the buffer
            // rather than being swallowed by the stale 'z' prefix.
            await page.keyboard.type('zb');

            await expect(page.getByTestId(option).filter({ hasText: 'Burger' })).toBeFocused();
        });

        test('should skip the option list when tabbing from the field while the popover is open', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).focus();
            await expect(page.getByTestId(popover)).toBeVisible();

            await page.keyboard.press('Tab');

            // Tab moves past the popover entirely (options are not tab
            // stops), which closes it as focus leaves the component.
            await expect(page.getByTestId(popover)).toBeHidden();
        });

        test('should show a focus ring on the closed field after a keyboard close', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            const triggerEl = page.getByTestId(trigger);
            await triggerEl.focus();
            await page.keyboard.press('Escape');

            // The focus that returns to the field must not reopen the
            // popover, but the field is still the keyboard focus, so the
            // container shows the focus ring.
            await expect(page.getByTestId(popover)).toBeHidden();
            await expect(triggerEl).toBeFocused();

            const boxShadow = await page.getByTestId(dropdown.selectors.field.dataTestId)
                .evaluate((el) => getComputedStyle(el).boxShadow);

            expect(boxShadow).not.toBe('none');
        });

        test('should move focus between options with arrow keys without selecting', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();
            await page.keyboard.press('ArrowDown');
            await page.keyboard.press('ArrowDown');

            // First ArrowDown is consumed by opening; the next two move focus
            // past Pizza and Burger (disabled Salad is skipped) onto Pasta.
            const pastaOption = page.getByTestId(option).filter({ hasText: 'Pasta' });
            await expect(pastaOption).toBeFocused();
            await expect(page.getByTestId(valueText)).toHaveCount(0);
        });

        test('should skip disabled options when navigating', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();
            await page.keyboard.press('ArrowDown');
            await page.keyboard.press('ArrowDown');

            // Burger is disabled-adjacent: Salad (disabled) must never receive focus.
            const saladOption = page.getByTestId(option).filter({ hasText: 'Salad' });
            await expect(saladOption).toHaveAttribute('aria-disabled', 'true');
            await expect(saladOption).not.toBeFocused();
        });

        test('should select the focused option with Enter and close the popover', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();
            await page.keyboard.press('Enter');

            await expect(page.getByTestId(popover)).toBeHidden();
            await expect(page.getByTestId(valueText)).toHaveText('Pizza');
            await expect(page.getByTestId(trigger)).toBeFocused();
        });
    });

    test.describe('Multi select', () => {
        test('should render a checkbox group that stays open while selecting', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            // Click near the start of the field: the count chip's close button
            // sits in the middle and clears the selection instead.
            await page.getByTestId(dropdown.selectors.field.dataTestId).click({ position: { x: 10, y: 24 } });

            const popoverEl = page.getByTestId(popover);
            await expect(popoverEl).toBeVisible();
            await expect(popoverEl.locator('pie-checkbox')).toHaveCount(6);

            const burgerCheckbox = popoverEl.locator('pie-checkbox').nth(1);
            await burgerCheckbox.click();

            // The popover stays open and the field's count chip updates.
            await expect(popoverEl).toBeVisible();
            await expect(page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip')).toHaveText(/2 selected/);
        });

        test('should not re-sort the open list when options are selected mid-session, sorting selected options to the top on reopen', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            // Click near the field's start: the chip's close button sits in the middle and would clear the selection.
            await page.getByTestId(dropdown.selectors.field.dataTestId).click({ position: { x: 10, y: 24 } });

            // The popover opens with the selected option (Pizza) first, the rest alphabetically.
            const rows = page.getByTestId(option);
            await expect(rows).toHaveCount(6);
            await expect(rows.nth(0)).toContainText('Pizza');
            await expect(rows.nth(1)).toContainText('Burger');
            await expect(rows.nth(2)).toContainText('Curry');

            // Ticking a mid-list option never re-sorts the live list (the chip assertion waits for the re-render).
            await page.getByTestId(popover).locator('pie-checkbox').nth(1).click();
            await expect(page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip')).toHaveText(/2 selected/);
            await expect(rows.nth(0)).toContainText('Pizza');
            await expect(rows.nth(1)).toContainText('Burger');
            await expect(rows.nth(2)).toContainText('Curry');

            // Escape refocuses the field, ArrowDown reopens: both selections sort to the top alphabetically.
            await page.keyboard.press('Escape');
            await page.keyboard.press('ArrowDown');
            await expect(rows.nth(0)).toContainText('Burger');
            await expect(rows.nth(1)).toContainText('Pizza');
            await expect(rows.nth(2)).toContainText('Curry');
        });

        test('should toggle a checkbox with Space', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            await page.getByTestId(dropdown.selectors.field.dataTestId).click({ position: { x: 10, y: 24 } });

            const burgerCheckbox = page.getByTestId(popover).locator('pie-checkbox').nth(1);
            await burgerCheckbox.focus();
            await page.keyboard.press(' ');

            // The popover stays open and the count chip updates.
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip')).toHaveText(/2 selected/);
        });

        test('should enter the option list with the arrow keys when the chip is focused and open', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            // Focus-open on the chip keeps focus there; the arrows are the
            // keyboard's way into the list.
            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await chipClose.focus();
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(chipClose).toBeFocused();

            await page.keyboard.press('ArrowDown');

            await expect(page.getByTestId(popover).locator('pie-checkbox').first()).toBeFocused();
        });

        test('should close when Escape is pressed and return focus to the field', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            await page.getByTestId(dropdown.selectors.field.dataTestId).click({ position: { x: 10, y: 24 } });
            await page.keyboard.press('Escape');

            await expect(page.getByTestId(popover)).toBeHidden();
            await expect(page.getByTestId(trigger)).toBeFocused();
        });

        test('should open the popover when the field receives keyboard focus and keep focus on the field', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            // Multi-select with a selection: the first tabbable is the chip's
            // close button. (The trigger is programmatically focused here —
            // it is not in the tab sequence while the chip is shown, but it
            // still opens on focus and keeps focus.)
            await page.getByTestId(trigger).focus();

            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(trigger)).toHaveAttribute('aria-expanded', 'true');
            await expect(page.getByTestId(trigger)).toBeFocused();
        });

        test('should keep focus on the trigger when the popover opens on focus without a selection', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.value = [];
                return dropdown.updateComplete;
            });

            // Without a selection there is no chip, so the trigger is the
            // field's first tab stop: it opens on focus and keeps focus.
            await page.getByTestId(trigger).focus();

            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(trigger)).toBeFocused();
        });

        test('should focus the count chip close button on first tab and still open the popover', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            // The chip renders as a sibling of the trigger, never nested
            // inside the trigger button, and the trigger is removed from the
            // tab sequence while the chip is shown.
            await expect(page.getByTestId(trigger).locator('pie-chip')).toHaveCount(0);
            await expect(page.getByTestId(trigger)).toHaveAttribute('tabindex', '-1');

            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await chipClose.focus();

            // The popover opens but focus stays on the chip close button.
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(chipClose).toBeFocused();
        });

        test('should focus the first option when tabbing from the chip close button', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await chipClose.focus();
            await expect(page.getByTestId(popover)).toBeVisible();

            await page.keyboard.press('Tab');

            // The trigger is not a tab stop while the chip is shown, so Tab
            // moves from the chip close button straight to the first option.
            await expect(page.getByTestId(popover).locator('pie-checkbox').first()).toBeFocused();
            await expect(page.getByTestId(popover)).toBeVisible();
        });

        test('should clear every selection when the chip close button is activated with the keyboard', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await chipClose.focus();
            await page.keyboard.press('Enter');

            await expect(page.locator('pie-chip')).toHaveCount(0);
            await expect(page.getByTestId(trigger)).toBeFocused();
        });

        test('should announce the field name with the chip close button for screen reader context', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            // The chip close button is the field's first tab stop: its name
            // includes the field's accessible name so it is never announced
            // without the context of the dropdown it belongs to.
            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await expect(chipClose).toHaveAttribute('aria-label', 'Clear all 1 selections, Meal');
        });

        test('should append the field name to a consumer-provided chip close name', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await expect(chipClose).toHaveAttribute('aria-label', 'Clear all 1 selections, Meal');

            // A consumer-provided name still gets the field context appended,
            // so the context guarantee is unconditional.
            await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.aria = { clearAllSelections: 'Deselect all meals' };
                return dropdown.updateComplete;
            });

            await expect(chipClose).toHaveAttribute('aria-label', 'Deselect all meals, Meal');
        });

        test('should not append a field name to the chip close button when the field has none', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.label = '';
                dropdown.placeholder = '';
                dropdown.aria = { clearAllSelections: 'Clear all {count} selections' };
                return dropdown.updateComplete;
            });

            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await expect(chipClose).toHaveAttribute('aria-label', 'Clear all 1 selections');
        });

        test('should deselect all options when the count chip is dismissed', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            const chip = page.locator('pie-chip');
            await expect(chip).toHaveText(/1 selected/);

            await chip.locator('button').click();

            await expect(page.locator('pie-chip')).toHaveCount(0);
        });

        test('should disable the count chip close button when the dropdown is disabled', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--disabled-multiselect-state');
            await dropdownPage.load();

            // The chip stays visible (the selection is still shown) but its
            // close button is disabled, so a disabled field's selections
            // cannot be cleared.
            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await expect(chipClose).toBeDisabled();
        });

        test('should never show a clear button (the chip close icon clears all)', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            // Even with a selection made.
            await page.getByTestId(dropdown.selectors.field.dataTestId).click({ position: { x: 10, y: 24 } });
            await page.getByTestId(popover).locator('pie-checkbox').nth(2).click();

            await expect(page.getByTestId(dropdown.selectors.clear.dataTestId)).toHaveCount(0);
        });
    });

    test.describe('Search', () => {
        test('should not open the popover on focus alone, opening instead when the user types', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);

            // Focus alone does not open the popover: the `aria-expanded`
            // state change chasing the focus announcement interrupts screen
            // readers mid-announcement, so the open happens on the first
            // keystroke instead.
            await input.focus();
            await expect(input).toBeFocused();
            await expect(page.getByTestId(popover)).toBeHidden();

            // The first keystroke opens the popover and filters, with the
            // caret staying in the field.
            await page.keyboard.type('Pas');
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(input).toBeFocused();
            await expect(page.getByTestId(option)).toHaveCount(1);
            await expect(page.getByTestId(option)).toHaveText('Pasta');
        });

        test('should open the popover when the search field is clicked', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.click();

            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(input).toBeFocused();
        });

        test('should open the popover when the chevron is clicked on a closed searchable dropdown', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            // Focus alone does not open a searchable field (typing does), so
            // the chevron is the pointer user's way to see the full list.
            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.focus();
            await expect(page.getByTestId(popover)).toBeHidden();

            await page.getByTestId(dropdown.selectors.chevron.dataTestId).click();

            // The full, unfiltered list is shown...
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(option)).toHaveCount(6);
            // ...and the caret stays in the search field (the combobox
            // contract: opening never steals the caret).
            await expect(input).toBeFocused();
        });

        test('should close and reopen the popover when the chevron is clicked while open', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            // Open by typing, so the list is filtered down to one option.
            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.fill('Pas');
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(option)).toHaveCount(1);

            await page.getByTestId(dropdown.selectors.chevron.dataTestId).click();
            await expect(page.getByTestId(popover)).toBeHidden();

            // Reopening starts from the full list: the discarded search text
            // is never committed, and the caret stays in the field.
            await page.getByTestId(dropdown.selectors.chevron.dataTestId).click();
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(option)).toHaveCount(6);
            await expect(input).toBeFocused();
        });

        test('should move focus into the option list with ArrowDown, and Escape should not reopen the popover', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.focus();
            await page.keyboard.press('ArrowDown');

            const firstOption = page.getByTestId(option).filter({ hasText: 'Pizza' });
            await expect(firstOption).toBeFocused();

            // Focus is in the list, so closing with Escape genuinely moves
            // focus back to the field — which must not re-trigger the open.
            await page.keyboard.press('Escape');

            await expect(page.getByTestId(popover)).toBeHidden();
            await expect(input).toBeFocused();
        });

        test('should open the popover with ArrowUp from the closed search field', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.focus();
            await page.keyboard.press('Escape');
            await expect(page.getByTestId(popover)).toBeHidden();

            await page.keyboard.press('ArrowUp');

            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(option).filter({ hasText: 'Pizza' })).toBeFocused();
        });

        test('should move focus between options with the arrow keys in the filtered list', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.focus();
            await page.keyboard.press('ArrowDown');
            await expect(page.getByTestId(option).filter({ hasText: 'Pizza' })).toBeFocused();

            await page.keyboard.press('ArrowDown');

            // Salad (disabled) is skipped.
            await expect(page.getByTestId(option).filter({ hasText: 'Burger' })).toBeFocused();
        });

        test('should skip the option list when tabbing from the search field while the popover is open', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            // Reach the open state with focus in the field: typing opens the
            // popover without moving focus.
            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.fill('Pas');
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(input).toBeFocused();

            await page.keyboard.press('Tab');

            // The popover is never tabbable: Tab moves past it entirely
            // (arrow keys navigate the list), which closes it as focus
            // leaves the component.
            await expect(page.getByTestId(popover)).toBeHidden();
        });

        test('should not open the popover on focus in multi-select searchable variants, with ArrowDown opening the list', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);

            // Focus alone does not open the popover (screen reader focus
            // announcements must not be interrupted by the expanded state
            // change); the arrow keys open it and move into the list.
            await input.focus();
            await expect(input).toBeFocused();
            await expect(page.getByTestId(popover)).toBeHidden();

            await page.keyboard.press('ArrowDown');

            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(popover).locator('pie-checkbox').first()).toBeFocused();
        });

        test('should enter the option list with ArrowDown from the search field (multi select)', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);

            // Focus does not open the popover; ArrowDown opens it and moves
            // into the list.
            await input.focus();
            await expect(page.getByTestId(popover)).toBeHidden();

            await page.keyboard.press('ArrowDown');

            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(popover).locator('pie-checkbox').first()).toBeFocused();
        });

        test('should open the popover when the chevron is clicked on a closed multi-select searchable dropdown', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.focus();
            await expect(page.getByTestId(popover)).toBeHidden();

            await page.getByTestId(dropdown.selectors.chevron.dataTestId).click();

            // The full list is shown (the count chip keeps its selection) and
            // the caret stays in the search field.
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(popover).locator('pie-checkbox')).toHaveCount(6);
            await expect(input).toBeFocused();
        });

        test('should open the popover when the chip receives keyboard focus after an Escape close (multi select)', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select-searchable');
            await dropdownPage.load();

            // Open by typing so focus stays in the field, then Escape: the
            // field is still focused, so the close's refocus is a no-op — no
            // focus event may arm the focus-open suppression that would
            // otherwise block the chip from opening on its next focus.
            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.fill('Pas');
            await expect(page.getByTestId(popover)).toBeVisible();
            await page.keyboard.press('Escape');
            await expect(page.getByTestId(popover)).toBeHidden();

            await page.keyboard.press('Shift+Tab');

            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await expect(chipClose).toBeFocused();
            await expect(page.getByTestId(popover)).toBeVisible();
        });

        test('should open the popover when the chip receives keyboard focus after a pointer close (multi select)', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select-searchable');
            await dropdownPage.load();

            // Clicking the field while open arms the pointer-focus
            // suppression but (focus already being in the field) no focus
            // event consumes it; the click itself must consume it, so the
            // chip's keyboard focus is never blocked.
            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.fill('Pas');
            await expect(page.getByTestId(popover)).toBeVisible();
            await input.click();
            await page.keyboard.press('Escape');
            await expect(page.getByTestId(popover)).toBeHidden();

            await page.keyboard.press('Shift+Tab');

            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await expect(chipClose).toBeFocused();
            await expect(page.getByTestId(popover)).toBeVisible();
        });

        test('should return to the search field and filter when typing while an option is focused', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.focus();
            await page.keyboard.press('ArrowDown');
            await expect(page.getByTestId(option).filter({ hasText: 'Pizza' })).toBeFocused();

            // The first character is intercepted: it appends to the search
            // text, focus returns to the field and the list filters; the
            // remaining characters land in the input naturally.
            await page.keyboard.type('pas');

            await expect(input).toBeFocused();
            await expect(input).toHaveValue('pas');
            await expect(page.getByTestId(option)).toHaveCount(1);
            await expect(page.getByTestId(option)).toHaveText('Pasta');
        });

        test('should append to the existing search text when typing while an option is focused', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.fill('Pas');
            await page.keyboard.press('ArrowDown');
            await expect(page.getByTestId(option).filter({ hasText: 'Pasta' })).toBeFocused();

            // The search context is preserved while navigating the filtered
            // list, so typing appends rather than starting fresh.
            await page.keyboard.type('t');

            await expect(input).toBeFocused();
            await expect(input).toHaveValue('Past');
            await expect(page.getByTestId(option)).toHaveCount(1);
            await expect(page.getByTestId(option)).toHaveText('Pasta');
        });

        test('should return to the search field when typing while a checkbox is focused (multi select)', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.focus();
            await page.keyboard.press('ArrowDown');
            await expect(page.getByTestId(popover).locator('pie-checkbox').first()).toBeFocused();

            await page.keyboard.type('bur');

            await expect(input).toBeFocused();
            await expect(input).toHaveValue('bur');
            await expect(page.getByTestId(popover).locator('pie-checkbox')).toHaveCount(1);
        });

        test('should show the selected option in the field immediately after selecting from filtered results', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.focus();
            await input.fill('Cu');
            await page.keyboard.press('ArrowDown');
            await page.keyboard.press('Enter');

            // The input's value must already show the selection the moment
            // focus returns to it — screen readers announce a field's value
            // at focus time, before any async render commits. `inputValue()`
            // reads without retrying, so this asserts synchronousness too.
            expect(await input.inputValue()).toBe('Curry');
            await expect(input).toBeFocused();
            await expect(page.getByTestId(popover)).toBeHidden();
        });

        test('should reopen from the full list after selecting from filtered results', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.focus();
            await input.fill('Cu');
            await page.keyboard.press('ArrowDown');
            await page.keyboard.press('Enter');
            await expect(page.getByTestId(popover)).toBeHidden();

            // The search is never committed: the next open starts from the
            // full list. Focus never left the field after the selection, so
            // a focus event cannot fire — the arrow keys reopen it.
            await page.keyboard.press('ArrowDown');

            await expect(page.getByTestId(option)).toHaveCount(6);
            await expect(page.getByTestId(option).filter({ hasText: 'Curry' })).toBeFocused();
            await expect(input).toHaveValue('Curry');
        });

        test('should open the popover and filter options as the user types', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.click();
            await input.fill('Pas');

            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(option)).toHaveCount(1);
            await expect(page.getByTestId(option)).toHaveText('Pasta');
        });

        test('should filter options by secondary text', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--complex-options-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.click();
            await input.fill('Wood');

            // No primary text starts with "Wood": Pizza matches via its secondary text ("Wood-fired, with a crisp base").
            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(option)).toHaveCount(1);
            await expect(page.getByTestId(option)).toContainText('Pizza');
            await expect(page.getByTestId(dropdown.selectors.status.dataTestId)).toHaveText('1 option available');
        });

        test('should match secondary text case-insensitively', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--complex-options-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.click();
            await input.fill('SLOW');

            // Curry's secondary text starts with "Slow-cooked" (case-insensitively).
            await expect(page.getByTestId(option)).toHaveCount(1);
            await expect(page.getByTestId(option)).toContainText('Curry');
        });

        test('should match text from the middle of an option\'s text', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--complex-options-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.click();
            await input.fill('fired');

            // Pizza's secondary text contains "fired" mid-text ("Wood-fired, with a crisp base").
            await expect(page.getByTestId(option)).toHaveCount(1);
            await expect(page.getByTestId(option)).toContainText('Pizza');
        });

        test('should match a multi-word search within the text', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--complex-options-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.click();
            await input.fill('crisp base');

            // Pizza's secondary text contains "crisp base" mid-text.
            await expect(page.getByTestId(option)).toHaveCount(1);
            await expect(page.getByTestId(option)).toContainText('Pizza');
        });

        test('should announce the number of matching options', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.click();
            await input.fill('Pas');

            await expect(page.getByTestId(dropdown.selectors.status.dataTestId)).toHaveText('1 option available');
        });

        test('should show a no-results message when nothing matches', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.click();
            await input.fill('zzz');

            await expect(page.getByTestId(dropdown.selectors.noResults.dataTestId)).toBeVisible();
        });

        test('should restore the previous selection when the user abandons a search', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            // Make a selection first
            await page.getByTestId(dropdown.selectors.input.dataTestId).click();
            await page.getByTestId(option).filter({ hasText: 'Burger' }).click();
            await expect(page.getByTestId(dropdown.selectors.input.dataTestId)).toHaveValue('Burger');

            // Then search for something and abandon it
            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.click();
            await input.fill('Curry');
            await page.keyboard.press('Escape');

            await expect(page.getByTestId(popover)).toBeHidden();
            await expect(input).toHaveValue('Burger');
        });
    });

    test.describe('Selection icon', () => {
        const slotIconFor = (page: Parameters<Parameters<typeof test>[2]>[0]['page'], value: string) => page.evaluate((optionValue) => {
            const dropdown = document.querySelector('pie-dropdown');
            const icon = document.createElement('icon-check');
            icon.setAttribute('slot', `icon-${optionValue}`);
            dropdown.appendChild(icon);
            return dropdown.updateComplete;
        }, value);

        // Locators cannot follow slot projection (the icon stays a light-DOM
        // child of the host), so the icon's whereabouts are asserted through
        // the slot it is assigned to.
        const iconState = (page: Parameters<Parameters<typeof test>[2]>[0]['page'], value: string) => page.evaluate((optionValue) => {
            const dropdown = document.querySelector('pie-dropdown');
            const slot = dropdown?.shadowRoot?.querySelector(`slot[name="icon-${optionValue}"]`);

            if (!slot) return { location: 'none', assigned: 0 };

            let location = 'other';
            if (slot.closest('.c-dropdown-selectionIcon')) {
                location = 'field';
            } else if (slot.closest('.c-dropdown-popover')) {
                location = 'row';
            }

            return { location, assigned: slot.assignedElements().length };
        }, value);

        // The row shows clones (rendered nodes), so its icon cannot be asserted through slot assignment like the field's.
        const rowIconState = (page: Parameters<Parameters<typeof test>[2]>[0]['page'], value: string) => page.evaluate((optionValue) => {
            const dropdown = document.querySelector('pie-dropdown');
            const row = dropdown?.shadowRoot?.querySelector(`#pie-dropdown-option-${optionValue}`);
            const clone = row?.querySelector('.c-dropdown-rowIcon') ?? null;

            return {
                hasRow: !!row,
                rowIconCount: row?.querySelectorAll('.c-dropdown-rowIcon').length ?? 0,
                cloneTag: clone?.tagName.toLowerCase() ?? '',
            };
        }, value);

        // The clones are captured asynchronously, so their presence is polled in the browser.
        const waitForRowIcon = (page: Parameters<Parameters<typeof test>[2]>[0]['page'], value: string) => page.waitForFunction((optionValue) => {
            const dropdown = document.querySelector('pie-dropdown');
            const row = dropdown?.shadowRoot?.querySelector(`#pie-dropdown-option-${optionValue}`);

            return (row?.querySelectorAll('.c-dropdown-rowIcon').length ?? 0) > 0;
        }, value);

        test('should show the selected option\'s leading icon in the field', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-selected');
            await dropdownPage.load();

            await slotIconFor(page, 'burger');

            // The icon projects into the field: the field's slot comes first
            // in the shadow tree, so it wins the projection over the row.
            expect(await iconState(page, 'burger')).toEqual({ location: 'field', assigned: 1 });
        });

        test('should show the selected option\'s icon in both the field and its row while the popover is open', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-selected');
            await dropdownPage.load();

            await slotIconFor(page, 'burger');

            // Click near the start of the field: the clear button sits
            // between the text and the chevron with a selection present.
            await page.getByTestId(trigger).click({ position: { x: 10, y: 24 } });

            expect(await iconState(page, 'burger')).toEqual({ location: 'field', assigned: 1 });
            await waitForRowIcon(page, 'burger');
            expect(await rowIconState(page, 'burger')).toEqual({ hasRow: true, rowIconCount: 1, cloneTag: 'icon-check' });
        });

        test('should show the selected option\'s icon in both the search field and its row while the popover is open', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.value = 'burger';
                return dropdown.updateComplete;
            });
            await slotIconFor(page, 'burger');

            // Clicking the search field opens the popover without moving the caret.
            await page.getByTestId(dropdown.selectors.input.dataTestId).click();

            expect(await iconState(page, 'burger')).toEqual({ location: 'field', assigned: 1 });
            await waitForRowIcon(page, 'burger');
            expect(await rowIconState(page, 'burger')).toEqual({ hasRow: true, rowIconCount: 1, cloneTag: 'icon-check' });
        });

        test('should keep the selected option\'s icon in the search field and its row while searching', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.value = 'burger';
                return dropdown.updateComplete;
            });
            await slotIconFor(page, 'burger');

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            // 'Bur' keeps the selected option's row in the filtered list.
            await input.fill('Bur');

            expect(await iconState(page, 'burger')).toEqual({ location: 'field', assigned: 1 });
            await waitForRowIcon(page, 'burger');
            expect(await rowIconState(page, 'burger')).toEqual({ hasRow: true, rowIconCount: 1, cloneTag: 'icon-check' });
            await expect(page.getByTestId(option)).toHaveCount(1);
        });

        test('should render the selected option\'s row icon at the same size as the other rows\' icons', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--complex-options');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();
            await expect(page.getByTestId(popover)).toBeVisible();

            // Pizza's row renders the clone; Burger's renders its original.
            const sizes = await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                const selectedRow = dropdown?.shadowRoot?.querySelector('#pie-dropdown-option-pizza');
                const clone = selectedRow?.querySelector('.c-dropdown-rowIcon') ?? null;
                const original = dropdown?.querySelector('[slot="icon-burger"]') ?? null;

                return {
                    clone: clone ? getComputedStyle(clone).width : '',
                    original: original ? getComputedStyle(original).width : '',
                };
            });

            expect(sizes.clone).toBeTruthy();
            expect(sizes.original).toBeTruthy();
            expect(sizes.clone).toBe(sizes.original);
        });

        test('should render no icon in the field or the row when the selected option has none', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            // Only Burger's option has a slotted icon; Pizza does not.
            await slotIconFor(page, 'burger');

            await page.getByTestId(trigger).click();
            await page.getByTestId(option).filter({ hasText: 'Pizza' }).click();
            await expect(page.getByTestId(popover)).toBeHidden();

            // Pizza's field slot exists but nothing projects into it...
            expect(await iconState(page, 'pizza')).toEqual({ location: 'field', assigned: 0 });

            // ...and its row renders no clones when it is next shown.
            await page.getByTestId(trigger).click();
            await expect(page.getByTestId(popover)).toBeVisible();
            expect(await rowIconState(page, 'pizza')).toEqual({ hasRow: true, rowIconCount: 0, cloneTag: '' });
        });

        test('should remove the field icon when the selection is cleared', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-selected');
            await dropdownPage.load();

            await slotIconFor(page, 'burger');
            expect(await iconState(page, 'burger')).toEqual({ location: 'field', assigned: 1 });

            await page.getByTestId(dropdown.selectors.clear.dataTestId).click();

            expect(await iconState(page, 'burger')).toEqual({ location: 'none', assigned: 0 });

            // With no field slot, the icon returns to Burger's (unselected) row, which renders its own slot again.
            await page.getByTestId(trigger).click();
            await expect(page.getByTestId(popover)).toBeVisible();
            expect(await iconState(page, 'burger')).toEqual({ location: 'row', assigned: 1 });
        });
    });

    test.describe('Copy props', () => {
        test('should render a custom selection count text with the count substituted', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.selectedCountText = '{count} picked';
                return dropdown.updateComplete;
            });

            // The story has one selection ('pizza').
            await expect(page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip')).toHaveText('1 picked');
        });

        test('should announce a custom options available message with the count substituted', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.optionsAvailableText = 'Options available: {count}';
                return dropdown.updateComplete;
            });

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.click();
            await input.fill('Pas');

            await expect(page.getByTestId(dropdown.selectors.status.dataTestId)).toHaveText('Options available: 1');
        });

        test('should block submission with an empty validation message when noSelectionText is unset', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            const result = await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.required = true;
                return dropdown.updateComplete.then(() => ({
                    message: dropdown._internals.validationMessage,
                    isValid: dropdown.checkValidity(),
                }));
            });

            // No copy prop, no message (a bare space satisfies the API's non-empty rule): the missing selection still blocks submission.
            expect(result.message.trim()).toBe('');
            expect(result.isValid).toBe(false);
        });

        test('should use a custom validation message when required and empty', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            const message = await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.required = true;
                dropdown.noSelectionText = 'Choose something to eat';
                return dropdown.updateComplete.then(() => dropdown._internals.validationMessage);
            });

            expect(message).toBe('Choose something to eat');
        });

        test('should not use the assistive text as the validation message', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            const message = await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.required = true;
                dropdown.assistiveText = 'Pick a meal for your order';
                return dropdown.updateComplete.then(() => dropdown._internals.validationMessage);
            });

            // The assistive text is the helper text below the field, never
            // the validation message (which stays effectively empty when noSelectionText is unset).
            expect(message.trim()).toBe('');
        });

        test('should announce the assistive text as the field description', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.assistiveText = 'Pick a meal for your order';
                return dropdown.updateComplete;
            });

            // The description the field points at must be a plain text
            // element containing the assistive text: screen readers skip live
            // regions as descriptions, so the pie-assistive-text (role=status)
            // cannot carry it.
            const description = await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                const describedBy = dropdown.shadowRoot.querySelector('[data-test-id="pie-dropdown-trigger"]')?.getAttribute('aria-describedby');
                const target = describedBy ? dropdown.shadowRoot.getElementById(describedBy) : null;
                return {
                    tag: target?.tagName?.toLowerCase(),
                    role: target?.getAttribute('role'),
                    text: target?.textContent,
                };
            });

            expect(description.tag).toBe('span');
            expect(description.role).toBeNull();
            expect(description.text).toBe('Pick a meal for your order');
        });
    });

    test.describe('Loading', () => {
        test('should show a loading state in place of the options list', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--loading-state');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();

            await expect(page.getByTestId(dropdown.selectors.loading.dataTestId)).toBeVisible();
            await expect(page.getByTestId(option)).toHaveCount(0);
        });

        test('should show the spinner without text when loadingText is unset', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--loading-state');
            await dropdownPage.load();

            await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.loadingText = '';
                return dropdown.updateComplete;
            });

            await page.getByTestId(trigger).click();

            // No copy prop, no text: the spinner alone communicates the loading state.
            await expect(page.getByTestId(dropdown.selectors.loading.dataTestId)).toBeVisible();
            await expect(page.getByTestId(dropdown.selectors.loading.dataTestId).locator('span')).toHaveCount(0);
        });

        test('should render asynchronously loaded options set while the popover is open', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            // The README's async flow: on search, set the fetched options while the popover is open.
            await page.evaluate(() => {
                const dropdown = document.querySelector('pie-dropdown');
                dropdown.addEventListener('pie-dropdown-search', () => {
                    dropdown.isLoading = true;
                    setTimeout(() => {
                        dropdown.options = [
                            { value: 'sushi-platter', primaryText: 'Sushi platter' },
                            { value: 'sushi-rolls', primaryText: 'Sushi rolls' },
                        ];
                        dropdown.isLoading = false;
                    }, 0);
                });
            });

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            await input.click();
            // No story option starts with "Sushi": only the fetched options can match.
            await input.fill('Sushi');

            await expect(page.getByTestId(popover)).toBeVisible();
            await expect(page.getByTestId(option)).toHaveCount(2);
            await expect(page.getByTestId(option).filter({ hasText: 'Sushi platter' })).toBeVisible();
            await expect(page.getByTestId(dropdown.selectors.noResults.dataTestId)).toBeHidden();
        });
    });

    test.describe('Clear', () => {
        test('should remove the selection when the clear button is clicked', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-selected');
            await dropdownPage.load();

            await page.getByTestId(dropdown.selectors.clear.dataTestId).click();

            await expect(page.getByTestId(valueText)).toHaveCount(0);
            await expect(page.getByTestId(dropdown.selectors.placeholder.dataTestId)).toBeVisible();
            await expect(page.getByTestId(trigger)).toBeFocused();
        });

        test('should fully disable the clear button when the dropdown is disabled with a selection', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--disabled-state');
            await dropdownPage.load();

            const clear = page.getByTestId(dropdown.selectors.clear.dataTestId);

            await expect(clear).toBeDisabled();

            // Hovering offers no interactive affordance: the icon keeps the
            // disabled content colour (rather than the hover colour) and the
            // cursor does not suggest a click target.
            await clear.hover();

            const styles = await page.evaluate(() => {
                const root = document.querySelector('pie-dropdown')?.shadowRoot;
                const clearEl = root?.querySelector('.c-dropdown-clear');
                const probe = document.createElement('span');
                probe.style.color = 'var(--dt-color-content-disabled)';
                root?.appendChild(probe);
                const clearColor = clearEl ? getComputedStyle(clearEl).color : '';
                const tokenColor = getComputedStyle(probe).color;
                const cursor = clearEl ? getComputedStyle(clearEl).cursor : '';
                probe.remove();
                return { clearColor, tokenColor, cursor };
            });

            expect(styles.clearColor).toBe(styles.tokenColor);
            expect(styles.cursor).not.toBe('pointer');
        });

        test('should announce the field name with the clear button for screen reader context', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-selected');
            await dropdownPage.load();

            await expect(page.getByTestId(dropdown.selectors.clear.dataTestId))
                .toHaveAttribute('aria-label', 'Clear selection, Meal');
        });

        test('should never show a clear button in searchable variants, even once something has been typed', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-searchable');
            await dropdownPage.load();

            const input = page.getByTestId(dropdown.selectors.input.dataTestId);
            const clear = page.getByTestId(dropdown.selectors.clear.dataTestId);

            // Nothing typed: no clear button, even after making a selection.
            await input.click();
            await page.getByTestId(option).filter({ hasText: 'Burger' }).click();
            await expect(clear).toHaveCount(0);

            // Once the user types, it still never appears — typed search
            // text is cleared by backspacing.
            await input.click();
            await input.fill('Cur');
            await expect(clear).toHaveCount(0);
        });
    });

    test.describe('Sizing', () => {
        test('should not change the field width when a single selection is made', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            const field = page.getByTestId(dropdown.selectors.field.dataTestId);
            const widthBefore = (await field.boundingBox())?.width;

            await page.getByTestId(trigger).click();
            await page.getByTestId(option).filter({ hasText: 'Ramen' }).click();

            const widthAfter = (await field.boundingBox())?.width;

            expect(widthAfter).toBe(widthBefore);
        });

        test('should not change the field width when a multi selection is made', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            const field = page.getByTestId(dropdown.selectors.field.dataTestId);
            const widthBefore = (await field.boundingBox())?.width;

            await field.click({ position: { x: 10, y: 24 } });
            await page.getByTestId(popover).locator('pie-checkbox').nth(2).click();

            const widthAfter = (await field.boundingBox())?.width;

            expect(widthAfter).toBe(widthBefore);
        });

        test('should size the popover to the full width of the field', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            const field = page.getByTestId(dropdown.selectors.field.dataTestId);
            await page.getByTestId(trigger).click();

            const fieldWidth = (await field.boundingBox())?.width;
            const popoverWidth = (await page.getByTestId(popover).boundingBox())?.width;

            expect(popoverWidth).toBe(fieldWidth);
        });

        test('should position the popover below the field even when there is no room left below', async ({ page }) => {
            // A viewport too short to fit the popover below the field: the
            // popover must still open below it — it never flips above the
            // dropdown, even if that means being clipped by the viewport.
            await page.setViewportSize({ width: 1280, height: 220 });

            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            const field = page.getByTestId(dropdown.selectors.field.dataTestId);
            await page.getByTestId(trigger).click();

            const fieldBox = await field.boundingBox();
            const popoverY = (await page.getByTestId(popover).boundingBox())?.y;
            const fieldBottom = (fieldBox?.y ?? 0) + (fieldBox?.height ?? 0);

            expect(popoverY).toBeGreaterThanOrEqual(fieldBottom);
            expect(popoverY).toBeLessThan(fieldBottom + 20);
        });
    });

    test.describe('Events', () => {
        test('should dispatch a change event when a selection is made', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await page.evaluate(() => {
                window.__eventsArray = [];
                document.querySelector('pie-dropdown')?.addEventListener('change', () => window.__eventsArray.push('change'));
            });

            await page.getByTestId(trigger).click();
            await page.getByTestId(option).filter({ hasText: 'Pasta' }).click();

            await page.waitForFunction(() => window.__eventsArray?.includes('change'));
        });
    });
});

test.describe('PieDropdown - Form integration', () => {
    test('should submit the selected value as a form entry', async ({ page }) => {
        const formPage = new DropdownFormPage(page);
        await formPage.load();

        await page.getByTestId(trigger).click();
        await page.getByTestId(option).filter({ hasText: 'Curry' }).click();

        await formPage.submitButton.click();

        await expect(formPage.formData).toHaveText(JSON.stringify([['meals', 'curry']]));
    });

    test('should submit one entry per selected option in multi-select variants', async ({ page }) => {
        const formPage = new DropdownFormPage(page, 'dropdown--example-multi-form');
        await formPage.load();

        await page.getByTestId(dropdown.selectors.field.dataTestId).click();
        await page.getByTestId(option).filter({ hasText: 'Burger' }).locator('pie-checkbox').click();
        await page.getByTestId(option).filter({ hasText: 'Curry' }).locator('pie-checkbox').click();

        // Multi-select keeps the popover open while selecting, and it
        // overlays the form's submit button, so close it first.
        await page.keyboard.press('Escape');

        await formPage.submitButton.click();

        await expect(formPage.formData).toHaveText(JSON.stringify([['meals', 'burger'], ['meals', 'curry']]));
    });

    test('should not submit an entry when there is no selection', async ({ page }) => {
        const formPage = new DropdownFormPage(page);
        await formPage.load();

        await formPage.submitButton.click();

        await expect(formPage.formData).toHaveText('[]');
    });

    test('should block submission when required and empty', async ({ page }) => {
        const formPage = new DropdownFormPage(page);
        await formPage.load();

        await page.evaluate(() => {
            const dropdownEl = document.querySelector('pie-dropdown');
            dropdownEl.required = true;
            return dropdownEl.updateComplete;
        });

        await formPage.submitButton.click();

        // Constraint validation blocks the submit handler from running, so
        // no form data is serialised.
        await expect(formPage.formData).toHaveText('');

        const isInvalid = await page.evaluate(() => document.querySelector('pie-dropdown')?.checkValidity());
        expect(isInvalid).toBe(false);
    });

    test('should restore the default value and dispatch a change event when the form is reset', async ({ page }) => {
        const formPage = new DropdownFormPage(page);
        await formPage.load();

        // Select something (the form's default value is empty).
        await page.getByTestId(trigger).click();
        await page.getByTestId(option).filter({ hasText: 'Curry' }).click();
        await expect(page.getByTestId(valueText)).toHaveText('Curry');

        // The change event the reset dispatches (custom behaviour, mirroring
        // the other PIE form controls). The listener is set up before the
        // action so it can never be missed.
        const changeReceived = page.waitForEvent(
            'console',
            (msg) => msg.type() === 'info' && msg.text().includes('"change"'),
        );
        await formPage.resetButton.click();
        await changeReceived;

        // The field shows the placeholder again.
        await expect(page.getByTestId(valueText)).toHaveCount(0);
        await expect(page.getByTestId(dropdown.selectors.placeholder.dataTestId)).toBeVisible();
    });

    test('should be disabled inside a disabled fieldset', async ({ page }) => {
        const formPage = new DropdownFormPage(page, 'dropdown--example-fieldset-form');
        await formPage.load();

        await expect(page.getByTestId(trigger)).toBeDisabled();
    });
});
