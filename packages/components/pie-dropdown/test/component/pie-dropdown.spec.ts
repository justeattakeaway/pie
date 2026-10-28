import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
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

        test('should show the placeholder when no selection exists', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select');
            await dropdownPage.load();

            await expect(page.getByTestId(dropdown.selectors.placeholder.dataTestId)).toBeVisible();
        });

        test('should show the selection in the field', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--single-select-selected');
            await dropdownPage.load();

            await expect(page.getByTestId(valueText)).toHaveText('Burger');
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
            await expect(chipClose).toHaveAttribute('aria-label', 'Clear all 1 selection, Meal');
        });

        test('should append the field name to a consumer-provided chip close name', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await expect(chipClose).toHaveAttribute('aria-label', 'Clear all 1 selection, Meal');

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
                dropdown.aria = {};
                return dropdown.updateComplete;
            });

            const chipClose = page.getByTestId(dropdown.selectors.field.dataTestId).locator('pie-chip button');
            await expect(chipClose).toHaveAttribute('aria-label', 'Clear all 1 selection');
        });

        test('should deselect all options when the count chip is dismissed', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--multi-select');
            await dropdownPage.load();

            const chip = page.locator('pie-chip');
            await expect(chip).toHaveText(/1 selected/);

            await chip.locator('button').click();

            await expect(page.locator('pie-chip')).toHaveCount(0);
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

    test.describe('Loading', () => {
        test('should show a loading state in place of the options list', async ({ page }) => {
            const dropdownPage = new BasePage(page, 'dropdown--loading-state');
            await dropdownPage.load();

            await page.getByTestId(trigger).click();

            await expect(page.getByTestId(dropdown.selectors.loading.dataTestId)).toBeVisible();
            await expect(page.getByTestId(option)).toHaveCount(0);
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
