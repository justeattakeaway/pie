/* eslint-disable vitest/no-commented-out-tests */
import { test, expect } from '@playwright/test';
import { HeadlessRadioGroupPage } from '../helpers/page-objects/pie-headless-radio-group.page';

test.describe('PieHeadlessRadioGroup - Component tests', () => {
    test.describe('General Functionality', () => {
        test('should select a radio button when it is clicked', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');

            // Act
            await expect(headlessRadioGroupPage.radio1).not.toHaveAttribute('checked');
            await headlessRadioGroupPage.radio1.click();

            // Assert
            await expect(headlessRadioGroupPage.radio1).toHaveAttribute('checked');
        });

        test('should update the group\'s value when a radio button is selected', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            const radioGroupHandle = await headlessRadioGroupPage.radioGroup.elementHandle();

            // Act
            let valueProperty = await radioGroupHandle?.evaluate((el: any) => el.value);
            expect(valueProperty).toBe('2');

            await headlessRadioGroupPage.radio4.click();

            // Assert
            valueProperty = await radioGroupHandle?.evaluate((el: any) => el.value);
            expect(valueProperty).toBe('4');
        });

        test('should dispatch a "change" event when the selection is changed by a click', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            await headlessRadioGroupPage.listenForEvent('change');

            // Act
            await headlessRadioGroupPage.radio1.click();
            const capturedEvents = await headlessRadioGroupPage.getCapturedEvents();

            // Assert
            expect(capturedEvents).toEqual(['change']);
        });

        test('should dispatch a "change" event when the selection is changed by the keyboard', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            await headlessRadioGroupPage.listenForEvent('change');
            await headlessRadioGroupPage.radio2.focus();

            // Act
            await page.keyboard.press('ArrowLeft');
            const capturedEvents = await headlessRadioGroupPage.getCapturedEvents();

            // Assert
            expect(capturedEvents).toEqual(['change']);
        });

        test('should not change selection when a disabled radio button is clicked', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            const radioGroupHandle = await headlessRadioGroupPage.radioGroup.elementHandle();

            // Act
            // Note: Playwright's click action might fail if the element is truly disabled,
            // so we use force: true to bypass the actionability checks and simulate the click.
            await headlessRadioGroupPage.radio3.click({ force: true });

            // Assert
            await expect(headlessRadioGroupPage.radio3).not.toHaveAttribute('checked');
            const valueProperty = await radioGroupHandle?.evaluate((el: any) => el.value);
            expect(valueProperty).toBe('2'); // Initial value
        });
    });

    test.describe('Keyboard Navigation (LTR)', () => {
        test('should move focus to the next radio button when the "ArrowDown" key is pressed', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            await headlessRadioGroupPage.radio2.click();
            await expect(headlessRadioGroupPage.radio2).toBeFocused();
            await expect(headlessRadioGroupPage.radio2).toBeChecked();

            // Act
            await headlessRadioGroupPage.radio2.press('ArrowDown');

            // Assert
            await expect(headlessRadioGroupPage.radio4).toBeFocused();
            await expect(headlessRadioGroupPage.radio4).toBeChecked();
        });

        test('should move focus to the next radio button when the "ArrowRight" key is pressed', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            await headlessRadioGroupPage.radio2.click();
            await expect(headlessRadioGroupPage.radio2).toBeFocused();
            await expect(headlessRadioGroupPage.radio2).toBeChecked();

            // Act
            await headlessRadioGroupPage.radio2.press('ArrowRight');

            // Assert
            await expect(headlessRadioGroupPage.radio4).toBeFocused();
            await expect(headlessRadioGroupPage.radio4).toBeChecked();
        });

        test('should move focus to the previous radio button when the "ArrowUp" key is pressed', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            await headlessRadioGroupPage.radio2.click();
            await expect(headlessRadioGroupPage.radio2).toBeFocused();
            await expect(headlessRadioGroupPage.radio2).toBeChecked();

            // Act
            await page.keyboard.press('ArrowUp');

            // Assert
            await expect(headlessRadioGroupPage.radio1).toBeFocused();
            await expect(headlessRadioGroupPage.radio1).toBeChecked();
        });

        test('should move focus to the previous radio button when the "ArrowLeft" key is pressed', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            await headlessRadioGroupPage.radio2.click();
            await expect(headlessRadioGroupPage.radio2).toBeFocused();
            await expect(headlessRadioGroupPage.radio2).toBeChecked();

            // Act
            await page.keyboard.press('ArrowLeft');

            // Assert
            await expect(headlessRadioGroupPage.radio1).toBeFocused();
            await expect(headlessRadioGroupPage.radio1).toBeChecked();
        });

        test('should wrap focus from the last to the first radio button when navigating forwards', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            await headlessRadioGroupPage.radio4.click();
            await expect(headlessRadioGroupPage.radio4).toBeFocused();
            await expect(headlessRadioGroupPage.radio4).toBeChecked();

            // Act
            await headlessRadioGroupPage.radio4.press('ArrowRight');

            // Assert
            await expect(headlessRadioGroupPage.radio1).toBeFocused();
            await expect(headlessRadioGroupPage.radio1).toBeChecked();
        });

        test('should wrap focus from the first to the last radio button when navigating backwards', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            await headlessRadioGroupPage.radio1.click();
            await expect(headlessRadioGroupPage.radio1).toBeFocused();
            await expect(headlessRadioGroupPage.radio1).toBeChecked();

            // Act
            await headlessRadioGroupPage.radio1.press('ArrowLeft');

            // Assert
            await expect(headlessRadioGroupPage.radio4).toBeFocused();
            await expect(headlessRadioGroupPage.radio4).toBeChecked();
        });

        test('should select the focused radio button when the "Space" key is pressed', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            await headlessRadioGroupPage.radio1.focus();

            // Act
            await page.keyboard.press('Space');

            // Assert
            await expect(headlessRadioGroupPage.radio1).toBeFocused();
            await expect(headlessRadioGroupPage.radio1).toBeChecked();
        });

        test('should skip disabled radio buttons during keyboard navigation', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');
            await headlessRadioGroupPage.radio2.focus();

            // Act
            await page.keyboard.press('ArrowRight'); // Should skip radio 3

            // Assert
            await expect(headlessRadioGroupPage.radio4).toBeFocused();
            await expect(headlessRadioGroupPage.radio4).toBeChecked();
        });
    });

    test.describe('Keyboard Navigation (RTL)', () => {
        test('should move focus to the next radio button when the "ArrowLeft" key is pressed', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('rtl'); // Load RTL story
            await headlessRadioGroupPage.radio2.click();
            await expect(headlessRadioGroupPage.radio2).toBeFocused();
            await expect(headlessRadioGroupPage.radio2).toBeChecked();

            // Act
            await headlessRadioGroupPage.radio2.press('ArrowLeft');

            // Assert
            await expect(headlessRadioGroupPage.radio4).toBeFocused(); // Note: radio3 is disabled
            await expect(headlessRadioGroupPage.radio4).toBeChecked();
        });

        test('should move focus to the previous radio button when the "ArrowRight" key is pressed', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('rtl'); // Load RTL story
            await headlessRadioGroupPage.radio2.click();
            await expect(headlessRadioGroupPage.radio2).toBeFocused();
            await expect(headlessRadioGroupPage.radio2).toBeChecked();

            // Act
            await headlessRadioGroupPage.radio2.press('ArrowRight');

            // Assert
            await expect(headlessRadioGroupPage.radio1).toBeFocused();
            await expect(headlessRadioGroupPage.radio1).toBeChecked();
        });

        test('should still move focus correctly with "ArrowUp" and "ArrowDown"', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('rtl'); // Load RTL story
            await headlessRadioGroupPage.radio2.click();
            await expect(headlessRadioGroupPage.radio2).toBeFocused();
            await expect(headlessRadioGroupPage.radio2).toBeChecked();

            // Act & Assert for ArrowUp
            await headlessRadioGroupPage.radio2.press('ArrowUp');
            await expect(headlessRadioGroupPage.radio1).toBeFocused();
            await expect(headlessRadioGroupPage.radio1).toBeChecked();

            // Act & Assert for ArrowDown
            await headlessRadioGroupPage.radio1.press('ArrowDown');
            await expect(headlessRadioGroupPage.radio2).toBeFocused();
            await expect(headlessRadioGroupPage.radio2).toBeChecked();
        });

        test('should wrap focus from the first to the last radio button when navigating backwards in RTL', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('rtl');
            await headlessRadioGroupPage.radio1.click();
            await expect(headlessRadioGroupPage.radio1).toBeFocused();
            await expect(headlessRadioGroupPage.radio1).toBeChecked();

            // Act
            await headlessRadioGroupPage.radio1.press('ArrowRight'); // Backwards in RTL

            // Assert
            await expect(headlessRadioGroupPage.radio4).toBeFocused();
            await expect(headlessRadioGroupPage.radio4).toBeChecked();
        });
    });

    test.describe('Accessibility', () => {
        test('should have the correct "role" attributes for the group and buttons', async ({ page }) => {
        // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');

            // Act & Assert
            await expect(headlessRadioGroupPage.radioGroup).toHaveAttribute('role', 'radiogroup');
            await expect(headlessRadioGroupPage.radio1).toHaveAttribute('role', 'radio');
            await expect(headlessRadioGroupPage.radio2).toHaveAttribute('role', 'radio');
        });

        test('should set the "aria-label" on the group when the "label" prop is provided', async ({ page }) => {
        // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');

            // Act & Assert
            // The label is provided in the default story arguments.
            await expect(headlessRadioGroupPage.radioGroup).toHaveAttribute('aria-label', 'Test Radio Group');
        });

        test('should set "aria-disabled" to true on a disabled radio button', async ({ page }) => {
        // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');

            // Act & Assert
            // radio3 is disabled by default in the 'ltr' story.
            await expect(headlessRadioGroupPage.radio3).toHaveAttribute('aria-disabled', 'true');
        });

        test('should correctly update the "aria-checked" state on radio buttons when the selection changes', async ({ page }) => {
        // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');

            // Assert initial state (value="2" is default)
            await expect(headlessRadioGroupPage.radio1).toHaveAttribute('aria-checked', 'false');
            await expect(headlessRadioGroupPage.radio2).toHaveAttribute('aria-checked', 'true');
            await expect(headlessRadioGroupPage.radio4).toHaveAttribute('aria-checked', 'false');

            // Act
            await headlessRadioGroupPage.radio4.click();

            // Assert final state
            await expect(headlessRadioGroupPage.radio2).toHaveAttribute('aria-checked', 'false');
            await expect(headlessRadioGroupPage.radio4).toHaveAttribute('aria-checked', 'true');
        });

        test('should correctly manage roving tabindex, ensuring only one radio is in the tab order', async ({ page }) => {
        // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr');

            // Assert initial state (checked radio is focusable)
            await expect(headlessRadioGroupPage.radio1).toHaveAttribute('tabindex', '-1');
            await expect(headlessRadioGroupPage.radio2).toHaveAttribute('tabindex', '0');
            await expect(headlessRadioGroupPage.radio4).toHaveAttribute('tabindex', '-1');

            // Act
            await headlessRadioGroupPage.radio4.click();

            // Assert final state (newly checked radio is focusable)
            await expect(headlessRadioGroupPage.radio2).toHaveAttribute('tabindex', '-1');
            await expect(headlessRadioGroupPage.radio4).toHaveAttribute('tabindex', '0');
        });

        test('should make the next available radio focusable if the currently checked one becomes disabled', async ({ page }) => {
        // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('dynamic'); // Use the dynamic story
            const radioToDisable = page.getByTestId('radio-to-disable');
            const radioToRemove = page.getByTestId('radio-to-remove');
            const disableButton = page.getByTestId('btn-disable');

            // Assert initial state (the first radio is checked and focusable)
            await expect(radioToDisable).toHaveAttribute('tabindex', '0');
            await expect(radioToRemove).toHaveAttribute('tabindex', '-1');
            await expect(radioToDisable).toHaveAttribute('aria-checked', 'true');

            // Act
            await disableButton.click();

            // Assert that the radio is now disabled and no longer focusable
            await expect(radioToDisable).toBeDisabled();
            await expect(radioToDisable).toHaveAttribute('tabindex', '-1');

            // Assert that focus has moved to the next available radio button
            await expect(radioToRemove).toHaveAttribute('tabindex', '0');
        });
    });

    test.describe('Disabled States', () => {
        test('should prevent all interaction when the entire group is disabled', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            // Load the story where the entire group is disabled.
            await headlessRadioGroupPage.loadStory('disabled-group');

            // Assert initial state: radio2 should be checked but not focusable via click.
            await expect(headlessRadioGroupPage.radio2).toBeChecked();

            // Act: Try to click another radio button.
            // We use { force: true } because Playwright would otherwise wait indefinitely
            // for an element that is not 'hittable' due to pointer-events: none.
            await headlessRadioGroupPage.radio4.click({ force: true });

            // Assert: The selection should not have changed.
            await expect(headlessRadioGroupPage.radio2).toBeChecked();
            await expect(headlessRadioGroupPage.radio4).not.toBeChecked();

            // Assert: The radio button should not be focusable.
            await expect(headlessRadioGroupPage.radio4).not.toBeFocused();
        });

        test('should apply the "disabled" attribute to all child radios when the group is disabled', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('disabled-group');

            // Act & Assert: Check that each radio button is disabled.
            await expect(headlessRadioGroupPage.radio1).toBeDisabled();
            await expect(headlessRadioGroupPage.radio2).toBeDisabled();
            // radio3 is also disabled in the markup, but the group's disabled state enforces it.
            await expect(headlessRadioGroupPage.radio3).toBeDisabled();
            await expect(headlessRadioGroupPage.radio4).toBeDisabled();
        });

        test('should still allow individual radio buttons to be disabled when the group is enabled', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('ltr'); // The group is enabled here.

            // Assert that the individually disabled radio (radio3) cannot be interacted with.
            await expect(headlessRadioGroupPage.radio3).toBeDisabled();
            await headlessRadioGroupPage.radio3.click({ force: true });
            await expect(headlessRadioGroupPage.radio3).not.toBeChecked();

            // Assert that other radio buttons in the group remain interactive.
            await expect(headlessRadioGroupPage.radio1).toBeEnabled();
            await headlessRadioGroupPage.radio1.click();
            await expect(headlessRadioGroupPage.radio1).toBeChecked();
            await expect(headlessRadioGroupPage.radio1).toBeFocused();
        });
    });

    test.describe('Form Integration', () => {
        test('should correctly submit the group\'s value when the form is submitted', async ({ page }) => {
        // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('form');
            const submitButton = page.getByRole('button', { name: 'Submit' });
            const output = page.locator('#form-output');

            // Assert initial state of the second group
            const radioD = page.getByTestId('form-radio-d');
            await expect(radioD).toBeChecked();

            // Act: Click a different radio and submit the form
            await page.getByTestId('form-radio-c').click();
            await submitButton.click();

            // Assert: The output should contain the submitted values for both groups
            await expect(output).toHaveText('{"group1":"b","group2":"c"}');
        });

        test('should reset the group\'s value to its initial state when the form is reset', async ({ page }) => {
        // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('form');
            const resetButton = page.getByRole('button', { name: 'Reset' });
            const radioA = page.getByTestId('form-radio-a');
            const radioB = page.getByTestId('form-radio-b');

            // Assert initial state (radio 'b' is checked)
            await expect(radioB).toBeChecked();

            // Act: Select a different radio, then reset the form
            await radioA.click();
            await expect(radioA).toBeChecked();
            await resetButton.click();

            // Assert: The selection should revert to the initial state ('b')
            await expect(radioA).not.toBeChecked();
            await expect(radioB).toBeChecked();
        });

        test('should reset the disabled state of individual radios to their initial state when the form is reset', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('dynamic'); // Use the dynamic story for this behavior
            const radioToDisable = page.getByTestId('radio-to-disable');
            const disableButton = page.getByTestId('btn-disable');

            // This test requires a form and reset button to be present.
            // We'll add them dynamically for this test case.
            await page.evaluate(() => {
                const group = document.querySelector('#dynamic-group');
                if (group) {
                    const form = document.createElement('form');
                    const resetButton = document.createElement('button');
                    resetButton.type = 'reset';
                    resetButton.textContent = 'Reset';
                    resetButton.dataset.testId = 'btn-reset';
                    form.appendChild(group);
                    form.appendChild(resetButton);
                    document.body.appendChild(form);
                }
            });

            const resetButton = page.getByTestId('btn-reset');

            // Assert initial state: the radio is enabled.
            await expect(radioToDisable).toBeEnabled();

            // Act: Disable the radio, then reset the form.
            await disableButton.click();
            await expect(radioToDisable).toBeDisabled();
            await resetButton.click();

            // Assert: The radio's disabled state should be reset to its initial enabled state.
            await expect(radioToDisable).toBeEnabled();
        });
    });

    test.describe('Dynamic Children', () => {
        test('should correctly handle a new radio button being added to the group', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('dynamic');
            const addButton = page.getByTestId('btn-add');

            // Act: Add a new radio button to the group.
            await addButton.click();
            const newRadio = page.getByTestId('radio-new');

            // Assert: The new radio button should be present and interactive.
            await expect(newRadio).toBeVisible();
            await newRadio.click();
            await expect(newRadio).toBeChecked();
            await expect(newRadio).toHaveAttribute('aria-checked', 'true');
        });

        test('should correctly handle a radio button being removed from the group', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('dynamic');
            const removeButton = page.getByTestId('btn-remove');
            const radioToRemove = page.getByTestId('radio-to-remove');

            // Assert that the radio is initially visible.
            await expect(radioToRemove).toBeVisible();

            // Act: Remove the radio button.
            await removeButton.click();

            // Assert: The radio button should no longer be in the DOM.
            await expect(radioToRemove).not.toBeVisible();
        });

        test('should correctly update keyboard navigation when radio buttons are added or removed', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('dynamic');
            const addButton = page.getByTestId('btn-add');
            const removeButton = page.getByTestId('btn-remove');
            const radio1 = page.getByTestId('radio-to-disable');

            // Act 1: Navigate from the first radio. Should go to the second.
            await radio1.focus();
            await radio1.press('ArrowDown');
            await expect(page.getByTestId('radio-to-remove')).toBeFocused();

            // Act 2: Remove the second radio and add a new one at the end.
            await removeButton.click();
            await addButton.click();

            // Assert: Navigation should now skip from the first to the new, last radio.
            await radio1.focus();
            await radio1.press('ArrowDown');
            await expect(page.getByTestId('radio-new')).toBeFocused();
        });

        test('should ensure the roving tabindex is correctly managed when radio buttons are added or removed', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('dynamic');
            const removeButton = page.getByTestId('btn-remove');
            const radio1 = page.getByTestId('radio-to-disable');
            const radio2 = page.getByTestId('radio-to-remove');

            // Assert initial tabindex state (radio 1 is selected).
            await expect(radio1).toHaveAttribute('tabindex', '0');
            await expect(radio2).toHaveAttribute('tabindex', '-1');

            // Act: Click the second radio to move the tabindex.
            await radio2.click();
            await expect(radio1).toHaveAttribute('tabindex', '-1');
            await expect(radio2).toHaveAttribute('tabindex', '0');

            // Act: Remove the second (now focused) radio.
            await removeButton.click();

            // Assert: The roving tabindex should move back to the first available radio.
            await expect(radio1).toHaveAttribute('tabindex', '0');
        });

        test('should not lose the current selection if a non-selected radio is removed', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('dynamic');
            const removeButton = page.getByTestId('btn-remove');
            const radio1 = page.getByTestId('radio-to-disable');

            // Assert initial state (radio 1 is selected).
            await expect(radio1).toBeChecked();

            // Act: Remove the other, non-selected radio.
            await removeButton.click();

            // Assert: The first radio should remain checked.
            await expect(radio1).toBeChecked();
        });

        test('should correctly reset focus to the first available option if the selected radio is removed', async ({ page }) => {
            // Arrange
            const headlessRadioGroupPage = new HeadlessRadioGroupPage(page);
            await headlessRadioGroupPage.loadStory('dynamic');
            const removeButton = page.getByTestId('btn-remove');
            const radio1 = page.getByTestId('radio-to-disable');
            const radio2 = page.getByTestId('radio-to-remove');

            // Act: Select and focus the second radio, then remove it.
            await radio2.click();
            await expect(radio2).toBeChecked();
            await removeButton.click();

            // Assert: The first radio should now be the focusable element (`tabindex="0"`),
            // and nothing should be checked.
            await expect(radio1).toHaveAttribute('tabindex', '0');
            await expect(radio1).not.toBeChecked();
        });
    });
});

