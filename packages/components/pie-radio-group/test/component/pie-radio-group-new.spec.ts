import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';

// The structure of this object reflects the structure of our test Story
const selectors = {
    button1: 'btn-1',
    radioGroup1: {
        self: 'radio-group-1',
        radios: {
            1: 'radio-1',
            2: 'radio-2',
            3: 'radio-3',
            4: 'radio-4',
            5: 'radio-5',
        },
    },
    button2: 'btn-2',
    button3: 'btn-3',
    radioGroup2: {
        self: 'radio-group-2',
        radios: {
            1: 'radio-6',
            2: 'radio-7',
            3: 'radio-8',
            4: 'radio-9',
            5: 'radio-10',
        },
    },
    button4: 'btn-4',
};

test.describe('PieRadioGroup - Component tests new', () => {
    let pageObject;

    test.describe('Keyboard navigation', () => {
        test.describe('Tab', () => {
            test.beforeEach(async ({ page }) => {
                pageObject = new BasePage(page, 'radio-group');
                await pageObject.load();
            });

            test('Tab and no option selected focuses the first radio', async ({ page }) => {
                // Tab 2 times to go button 1 -> Radio group 1
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                const radio = page.getByTestId(selectors.radioGroup1.radios[1]).locator('input');

                await expect(radio).toBeFocused();
            });

            test('Tab and an option selected focuses the selected', async ({ page }) => {
                // Tab 5 times to go button 1 -> Radio group 1 -> Button 2 -> Button 3 -> Radio group 2 (Where the focused option is)
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                const radio = page.getByTestId(selectors.radioGroup2.radios[4]).locator('input');

                await expect(radio).toBeFocused();
            });

            test('Second Tab leaves the radio group', async ({ page }) => {
                // Tab 3 times to go button 1 -> Radio group 1 -> Button 2
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                const button = page.getByTestId(selectors.button2);

                await expect(button).toBeFocused();
            });
        });

        test.describe('Shift + Tab', () => {
            test.beforeEach(async ({ page }) => {
                pageObject = new BasePage(page, 'radio-group');
                await pageObject.load();
            });

            test('Shift + Tab and no option selected focuses the last radio', async ({ page }) => {
                // First Tab 3 times to go button 1 -> Radio group 1 -> button 2
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await page.keyboard.press('Shift+Tab');

                const radio = page.getByTestId(selectors.radioGroup1.radios[5]).locator('input');

                await expect(radio).toBeFocused();
            });

            test('Shift + Tab and an option selected focuses the selected', async ({ page }) => {
                // First Tab 6 times to go button 1 -> Radio group 1 -> button 2 -> Button 3 -> Radio group 2 -> Button 4
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await page.keyboard.press('Shift+Tab');

                const radio = page.getByTestId(selectors.radioGroup2.radios[4]).locator('input');

                await expect(radio).toBeFocused();
            });

            test('Second Shift + Tab leaves the radio group', async ({ page }) => {
                // First Tab 3 times to go button 1 -> Radio group 1 -> button 2
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await page.keyboard.press('Shift+Tab');
                await page.keyboard.press('Shift+Tab');

                const button = page.getByTestId(selectors.button1);

                await expect(button).toBeFocused();
            });
        });

        test.describe('Arrow Keys', () => {
            test.beforeEach(async ({ page }) => {
                pageObject = new BasePage(page, 'radio-group');
                await pageObject.load();
            });

            test('Left Arrow goes backwards through radios and loops', async ({ page }) => {
                // Tab 2 times to go button 1 -> Radio group 1
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await page.keyboard.press('ArrowLeft');

                // Ensure it's gone backwards and selected the last radio
                const lastRadio = page.getByTestId(selectors.radioGroup1.radios[5]).locator('input');
                await expect(lastRadio).toBeFocused();
                await expect(lastRadio).toBeChecked();

                // Ensure it's gone backwards once more and selected the second to last radio
                await page.keyboard.press('ArrowLeft');
                const secondToLastRadio = page.getByTestId(selectors.radioGroup1.radios[4]).locator('input');
                await expect(secondToLastRadio).toBeFocused();
                await expect(secondToLastRadio).toBeChecked();
            });

            test('Up Arrow goes backwards through radios and loops', async ({ page }) => {
                // Tab 2 times to go button 1 -> Radio group 1
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await page.keyboard.press('ArrowUp');

                // Ensure it's gone backwards and selected the last radio
                const lastRadio = page.getByTestId(selectors.radioGroup1.radios[5]).locator('input');
                await expect(lastRadio).toBeFocused();
                await expect(lastRadio).toBeChecked();

                // Ensure it's gone backwards once more and selected the second to last radio
                await page.keyboard.press('ArrowUp');
                const secondToLastRadio = page.getByTestId(selectors.radioGroup1.radios[4]).locator('input');
                await expect(secondToLastRadio).toBeFocused();
                await expect(secondToLastRadio).toBeChecked();
            });

            test('Right Arrow goes forwards through radios and loops', async ({ page }) => {
                // Tab 2 times to go button 1 -> Radio group 1
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                // Press Arrow Right 4 times to get to the last radio
                await page.keyboard.press('ArrowRight');
                await page.keyboard.press('ArrowRight');
                await page.keyboard.press('ArrowRight');
                await page.keyboard.press('ArrowRight');

                // Ensure we are on the last radio
                const lastRadio = page.getByTestId(selectors.radioGroup1.radios[5]).locator('input');
                await expect(lastRadio).toBeFocused();
                await expect(lastRadio).toBeChecked();

                // Press Arrow Right 1 more time to get back to the first radio
                await page.keyboard.press('ArrowRight');

                const firstRadio = page.getByTestId(selectors.radioGroup1.radios[1]).locator('input');
                await expect(firstRadio).toBeFocused();
                await expect(firstRadio).toBeChecked();
            });

            test('Down Arrow goes forwards through radios and loops', async ({ page }) => {
                // Tab 2 times to go button 1 -> Radio group 1
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                // Press Arrow Down 4 times to get to the last radio
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');
                await page.keyboard.press('ArrowDown');

                // Ensure we are on the last radio
                const lastRadio = page.getByTestId(selectors.radioGroup1.radios[5]).locator('input');
                await expect(lastRadio).toBeFocused();
                await expect(lastRadio).toBeChecked();

                // Press Arrow Down 1 more time to get back to the first radio
                await page.keyboard.press('ArrowDown');

                const firstRadio = page.getByTestId(selectors.radioGroup1.radios[1]).locator('input');
                await expect(firstRadio).toBeFocused();
                await expect(firstRadio).toBeChecked();
            });

            test('Arrow key selection in one Group does not affect the other', async ({ page }) => {
                // Tab 2 times to go button 1 -> Radio group 1
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                await page.keyboard.press('ArrowRight');

                // Ensure it's gone forwards and selected the second radio
                const secondRadioButtonGroup1 = page.getByTestId(selectors.radioGroup1.radios[2]).locator('input');
                await expect(secondRadioButtonGroup1).toBeFocused();
                await expect(secondRadioButtonGroup1).toBeChecked();

                // Move to next radio group
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');
                await page.keyboard.press('Tab');

                // Press right to move from the selected radio to the next
                await page.keyboard.press('ArrowRight');
                const lastRadioButtonGroup2 = page.getByTestId(selectors.radioGroup2.radios[5]).locator('input');
                await expect(lastRadioButtonGroup2).toBeFocused();
                await expect(lastRadioButtonGroup2).toBeChecked();

                // Press Shift + Tab 3 times to get back into the first radio group
                await page.keyboard.press('Shift+Tab');
                await page.keyboard.press('Shift+Tab');
                await page.keyboard.press('Shift+Tab');

                // Ensure the previously selected radio in the first group is focused and still selected
                await expect(secondRadioButtonGroup1).toBeFocused();
                await expect(secondRadioButtonGroup1).toBeChecked();
            });
        });

        test.describe('RTL (Right-to-left)', () => {
            test.beforeEach(async ({ page }) => {
                pageObject = new BasePage(page, 'radio-group');
                await pageObject.load({}, { writingDirection: 'rtl' });
            });

            test.describe('Arrow Keys', () => {
                test('Left Arrow goes forwards through radios and loops', async ({ page }) => {
                    // Tab 2 times to go button 1 -> Radio group 1
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    // Press Arrow Left 4 times to get to the last radio
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('ArrowLeft');

                    // Ensure we are on the last radio
                    const lastRadio = page.getByTestId(selectors.radioGroup1.radios[5]).locator('input');
                    await expect(lastRadio).toBeFocused();
                    await expect(lastRadio).toBeChecked();

                    // Press Arrow Left 1 more time to get back to the first radio
                    await page.keyboard.press('ArrowLeft');

                    const firstRadio = page.getByTestId(selectors.radioGroup1.radios[1]).locator('input');
                    await expect(firstRadio).toBeFocused();
                    await expect(firstRadio).toBeChecked();
                });

                test('Up Arrow goes backwards through radios and loops', async ({ page }) => {
                    // Tab 2 times to go button 1 -> Radio group 1
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    await page.keyboard.press('ArrowUp');

                    // Ensure it's gone backwards and selected the last radio
                    const lastRadio = page.getByTestId(selectors.radioGroup1.radios[5]).locator('input');
                    await expect(lastRadio).toBeFocused();
                    await expect(lastRadio).toBeChecked();

                    // Ensure it's gone backwards once more and selected the second to last radio
                    await page.keyboard.press('ArrowUp');
                    const secondToLastRadio = page.getByTestId(selectors.radioGroup1.radios[4]).locator('input');
                    await expect(secondToLastRadio).toBeFocused();
                    await expect(secondToLastRadio).toBeChecked();
                });

                test('Right Arrow goes backwards through radios and loops', async ({ page }) => {
                    // Tab 2 times to go button 1 -> Radio group 1
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    await page.keyboard.press('ArrowRight');

                    // Ensure it's gone backwards and selected the last radio
                    const lastRadio = page.getByTestId(selectors.radioGroup1.radios[5]).locator('input');
                    await expect(lastRadio).toBeFocused();
                    await expect(lastRadio).toBeChecked();

                    // Ensure it's gone backwards once more and selected the second to last radio
                    await page.keyboard.press('ArrowRight');
                    const secondToLastRadio = page.getByTestId(selectors.radioGroup1.radios[4]).locator('input');
                    await expect(secondToLastRadio).toBeFocused();
                    await expect(secondToLastRadio).toBeChecked();
                });

                test('Down Arrow goes forwards through radios and loops', async ({ page }) => {
                    // Tab 2 times to go button 1 -> Radio group 1
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    // Press Arrow Down 4 times to get to the last radio
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');

                    // Ensure we are on the last radio
                    const lastRadio = page.getByTestId(selectors.radioGroup1.radios[5]).locator('input');
                    await expect(lastRadio).toBeFocused();
                    await expect(lastRadio).toBeChecked();

                    // Press Arrow Down 1 more time to get back to the first radio
                    await page.keyboard.press('ArrowDown');

                    const firstRadio = page.getByTestId(selectors.radioGroup1.radios[1]).locator('input');
                    await expect(firstRadio).toBeFocused();
                    await expect(firstRadio).toBeChecked();
                });
            });
        });
    });
});

