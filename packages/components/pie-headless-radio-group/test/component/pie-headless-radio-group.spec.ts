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

    // test.describe('Keyboard Navigation (LTR)', () => {
    //     test('should move focus to the next radio button when the "ArrowDown" key is pressed', async ({ page }) => {});
    //     test('should move focus to the next radio button when the "ArrowRight" key is pressed', async ({ page }) => {});
    //     test('should move focus to the previous radio button when the "ArrowUp" key is pressed', async ({ page }) => {});
    //     test('should move focus to the previous radio button when the "ArrowLeft" key is pressed', async ({ page }) => {});
    //     test('should wrap focus from the last to the first radio button when navigating forwards', async ({ page }) => {});
    //     test('should wrap focus from the first to the last radio button when navigating backwards', async ({ page }) => {});
    //     test('should select the focused radio button when the "Space" key is pressed', async ({ page }) => {});
    //     test('should skip disabled radio buttons during keyboard navigation', async ({ page }) => {});
    // });

    // test.describe('Keyboard Navigation (RTL)', () => {
    //     test('should move focus to the next radio button when the "ArrowLeft" key is pressed in an RTL layout', async ({ page }) => {});
    //     test('should move focus to the previous radio button when the "ArrowRight" key is pressed in an RTL layout', async ({ page }) => {});
    //     test('should still move focus correctly with "ArrowUp" and "ArrowDown" in an RTL layout', async ({ page }) => {});
    // });

    // test.describe('Accessibility', () => {
    //     test('should have the correct "role" attributes for the group and buttons', async ({ page }) => {});
    //     test('should set the "aria-label" on the group when the "label" prop is provided', async ({ page }) => {});
    //     test('should correctly update the "aria-checked" state on radio buttons when the selection changes', async ({ page }) => {});
    //     test('should correctly manage roving tabindex, ensuring only one radio is in the tab order', async ({ page }) => {});
    //     test('should make the next available radio focusable if the currently focused one becomes disabled', async ({ page }) => {});
    // });

    // test.describe('Disabled States', () => {
    //     test('should prevent all interaction when the entire group is disabled', async ({ page }) => {});
    //     test('should apply the "disabled" attribute to all child radios when the group is disabled', async ({ page }) => {});
    //     test('should still allow individual radio buttons to be disabled when the group is enabled', async ({ page }) => {});
    // });

    // test.describe('Form Integration', () => {
    //     test('should correctly submit the group\'s value when the form is submitted', async ({ page }) => {});
    //     test('should reset the group\'s value to its initial state when the form is reset', async ({ page }) => {});
    //     test('should reset the disabled state of individual radios to their initial state when the form is reset', async ({ page }) => {});
    // });

    // test.describe('Dynamic Children', () => {
    //     test('should correctly handle a new radio button being added to the group', async ({ page }) => {});
    //     test('should correctly handle a radio button being removed from the group', async ({ page }) => {});
    //     test('should correctly update keyboard navigation when radio buttons are added or removed', async ({ page }) => {});
    //     test('should ensure the roving tabindex is correctly managed when radio buttons are added or removed', async ({ page }) => {});
    //     test('should not lose the current selection if a non-selected radio is removed', async ({ page }) => {});
    //     test('should correctly reset focus to the first available option if the selected radio is removed', async ({ page }) => {});
    // });
});

