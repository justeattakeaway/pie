import {
    test, expect, type Page, type Expect,
} from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type PieRadio } from '@justeattakeaway/pie-radio';
import { radio } from '@justeattakeaway/pie-radio/test/helpers/page-object/selectors.ts';
import { radioGroup } from '../helpers/page-object/selectors.ts';
import { type RadioGroupProps, statusTypes } from '../../src/defs.ts';
import { EXPECTED_CHANGE_EVENT_MESSAGE } from '../helpers/constants.ts';

// The structure of this object reflects the structure of our test Story
const keyboardNavigationStorySelectors = {
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

const dynamicSlotsStorySelectors = {
    radioGroup1: {
        self: 'radio-group-1',
    },
    addOptionBtn: 'add-option',
};

const disabledRadioStorySelectors = {
    radioGroup: {
        self: 'pie-radio-group',
        radios: {
            1: 'radio-1',
            2: 'radio-2',
            3: 'radio-3',
            4: 'radio-4',
        },
    },
};

// Returns the checked state of the currently focused pie-radio on the page
// Will error if the active element on the page is not a pie-radio instance
const expectFocusedRadioToBeChecked = async (page: Page, expect: Expect): Promise<void> => {
    const result = await page.evaluate(() => {
        const queryResult: { checked: boolean, error?: boolean } = {
            checked: false,
        };

        if (document.activeElement?.nodeName === 'PIE-RADIO') {
            queryResult.checked = (document.activeElement as PieRadio)?.checked;
        } else {
            queryResult.error = true;
        }

        return queryResult;
    });

    if (result.error) {
        throw new Error('The currently focused element was not an instance of PIE-RADIO.');
    }

    await expect(result.checked).toBe(true);
};

test.describe('PieRadioGroup - Component tests new', () => {
    let pageObject;

    test.describe('props', () => {
        test.describe('disabled', () => {
            test.describe('when true', () => {
                test('should disable the slotted radio component', async ({ page }) => {
                    // Arrange
                    const props: RadioGroupProps = {
                        disabled: true,
                    };

                    const radioGroupPage = new BasePage(page, 'radio-group--default');
                    await radioGroupPage.load({ ...props });

                    const radioElements = await page.getByTestId(radio.selectors.input.dataTestId).all();

                    // Assert
                    radioElements.forEach(async (radio) => {
                        await expect(radio).toBeDisabled();
                    });
                });
            });

            test.describe('when false', () => {
                test('should keep the slotted radio component enabled', async ({ page }) => {
                    // Arrange
                    const props: RadioGroupProps = {
                        disabled: false,
                    };

                    const radioGroupPage = new BasePage(page, 'radio-group--default');
                    await radioGroupPage.load({ ...props });

                    const radioElements = await page.getByTestId(radio.selectors.input.dataTestId).all();

                    // Assert
                    radioElements.forEach(async (radio) => {
                        await expect(radio).not.toBeDisabled();
                    });
                });

                test('should disable the radio component if it has the `disabled` attribute', async ({ page }) => {
                    // Arrange
                    const disabledRadioPage = new BasePage(page, 'radio-group--disabled-radio');
                    await disabledRadioPage.load();

                    const firstRadio = page.getByTestId(radio.selectors.input.dataTestId).first();
                    const secondRadio = page.getByTestId(radio.selectors.input.dataTestId).nth(1);

                    // Assert
                    await expect(firstRadio).not.toBeDisabled();
                    await expect(secondRadio).toBeDisabled();
                });
            });

            test.describe('Name', () => {
                test('Name prop is passed down to all slotted radio buttons', async ({ page }) => {
                    const expectedName = 'radio-group-1';
                    pageObject = new BasePage(page, 'radio-group--keyboard-navigation');
                    await pageObject.load();

                    const radioSelectors = Object.keys(keyboardNavigationStorySelectors.radioGroup1.radios).map(Number) as Array<keyof typeof keyboardNavigationStorySelectors.radioGroup1.radios>;

                    await Promise.all(radioSelectors.map(async (radioSelectorKey) => {
                        const selector = keyboardNavigationStorySelectors.radioGroup1.radios[radioSelectorKey];
                        const radio = page.getByTestId(selector);

                        await expect(radio).toHaveAttribute('name', expectedName);
                    }));
                });

                test('Name prop is passed down to any dynamically added radio buttons', async ({ page }) => {
                    const expectedName = 'radio-group-1';

                    pageObject = new BasePage(page, 'radio-group--dynamic-slots');
                    await pageObject.load();

                    const addOptionsBtn = page.getByTestId(dynamicSlotsStorySelectors.addOptionBtn);

                    // Create 3 new options
                    await addOptionsBtn.click();
                    await addOptionsBtn.click();
                    await addOptionsBtn.click();

                    // Ensure correct number of radios
                    const radioButtons = page.getByTestId(dynamicSlotsStorySelectors.radioGroup1.self).locator('pie-radio');
                    await expect(radioButtons).toHaveCount(4);

                    const radioButtonsCount = await radioButtons.count();

                    const validateRadioButtonName = async (index: number) => {
                        const radio = radioButtons.nth(index);
                        await expect(radio).toHaveAttribute('name', expectedName);
                    };

                    await Promise.all(Array.from({ length: radioButtonsCount }, (_, i) => validateRadioButtonName(i)));
                });
            });
        });

        test.describe('value', () => {
            test('should select the radio matching the `value` prop', async ({ page }) => {
                // Arrange
                const props: RadioGroupProps = {
                    value: 'radio-two',
                };

                const radioGroupPage = new BasePage(page, 'radio-group--default');
                await radioGroupPage.load({ ...props });

                // Act
                const firstRadio = page.getByTestId(radio.selectors.input.dataTestId).first();
                const secondRadio = page.getByTestId(radio.selectors.input.dataTestId).nth(1);

                // Assert
                await expect(firstRadio).not.toBeChecked();
                await expect(secondRadio).toBeChecked();
            });
        });

        test.describe('assistiveText', () => {
            test('should not render the assistive text component if the prop is not provided', async ({ page }) => {
                // Arrange
                const radioGroupPage = new BasePage(page, 'radio-group--default');
                await radioGroupPage.load();

                const assistiveText = page.getByTestId(radioGroup.selectors.assistiveText.dataTestId);
                // Assert
                await expect(assistiveText).not.toBeVisible();
            });

            test('should render the "default" assistive variant if no status is provided', async ({ page }) => {
                // Arrange
                const props: RadioGroupProps = {
                    assistiveText: 'Assistive text',
                };

                const radioGroupPage = new BasePage(page, 'radio-group--default');
                await radioGroupPage.load({ ...props });

                // Act
                const assistiveText = page.getByTestId(radioGroup.selectors.assistiveText.dataTestId);

                // Assert
                await expect(assistiveText).toBeVisible();
                await expect(assistiveText).toHaveAttribute('variant', 'default');
                await expect(assistiveText).toHaveText('Assistive text');
            });

            test.describe('Assistive text & Status', () => {
                statusTypes.forEach((status) => {
                    test(`should render the assistive text component with the ${status} variant`, async ({ page }) => {
                        // Arrange
                        const props: RadioGroupProps = {
                            assistiveText: 'Assistive text',
                            status,
                        };
                        const radioGroupPage = new BasePage(page, 'radio-group--default');
                        await radioGroupPage.load({ ...props });

                        // Act
                        const assistiveText = page.getByTestId(radioGroup.selectors.assistiveText.dataTestId);

                        // Assert
                        await expect(assistiveText).toBeVisible();
                        await expect(assistiveText).toHaveAttribute('variant', status);
                        await expect(assistiveText).toHaveText('Assistive text');
                    });
                });
            });

            test('should contain an ID associated with the radio group element for a11y', async ({ page }) => {
                // Arrange
                const props: RadioGroupProps = {
                    assistiveText: 'Assistive text',
                };
                const radioGroupPage = new BasePage(page, 'radio-group--default');
                await radioGroupPage.load({ ...props });

                // Act
                const radioGroupFieldset = page.getByTestId(radioGroup.selectors.fieldset.dataTestId);
                const assistiveText = page.getByTestId(radioGroup.selectors.assistiveText.dataTestId);

                // Assert
                await expect(assistiveText).toHaveAttribute('id', 'assistive-text');
                await expect(radioGroupFieldset).toHaveAttribute('aria-describedby', 'assistive-text');
            });
        });

        test.describe('Keyboard navigation', () => {
            test.beforeEach(async ({ page }) => {
                pageObject = new BasePage(page, 'radio-group--keyboard-navigation');
                await pageObject.load();
            });

            test.describe('Tab', () => {
                test('Tab and no option selected focuses the first radio', async ({ page }) => {
                    // Tab 2 times to go button 1 -> Radio group 1
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    const radio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[1]);
                    await expect(radio).toBeFocused();
                });

                test('Tab and an option selected focuses the selected', async ({ page }) => {
                    // Tab 5 times to go button 1 -> Radio group 1 -> Button 2 -> Button 3 -> Radio group 2 (Where the focused option is)
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    const radio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup2.radios[4]);

                    await expect(radio).toBeFocused();
                });

                test('Second Tab leaves the radio group', async ({ page }) => {
                    // Tab 3 times to go button 1 -> Radio group 1 -> Button 2
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    const button = page.getByTestId(keyboardNavigationStorySelectors.button2);

                    await expect(button).toBeFocused();
                });
            });

            test.describe('Shift + Tab', () => {
                test.beforeEach(async ({ page }) => {
                    pageObject = new BasePage(page, 'radio-group--keyboard-navigation');
                    await pageObject.load();
                });

                test('Shift + Tab and no option selected focuses the last radio', async ({ page }) => {
                    // First Tab 3 times to go button 1 -> Radio group 1 -> button 2
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    await page.keyboard.press('Shift+Tab');

                    const radio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[5]);

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

                    const radio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup2.radios[4]);

                    await expect(radio).toBeFocused();
                });

                test('Second Shift + Tab leaves the radio group', async ({ page }) => {
                    // First Tab 3 times to go button 1 -> Radio group 1 -> button 2
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    await page.keyboard.press('Shift+Tab');
                    await page.keyboard.press('Shift+Tab');

                    const button = page.getByTestId(keyboardNavigationStorySelectors.button1);

                    await expect(button).toBeFocused();
                });
            });

            test.describe('Arrow Keys', () => {
                test.beforeEach(async ({ page }) => {
                    pageObject = new BasePage(page, 'radio-group--keyboard-navigation');
                    await pageObject.load();
                });

                test('Left Arrow goes backwards through radios and loops', async ({ page }) => {
                    // Tab 2 times to go button 1 -> Radio group 1
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    await page.keyboard.press('ArrowLeft');

                    // Ensure it's gone backwards and selected the last radio
                    const lastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[5]);
                    await expect(lastRadio).toBeFocused();
                    await expectFocusedRadioToBeChecked(page, expect);

                    // Ensure it's gone backwards once more and selected the second to last radio
                    await page.keyboard.press('ArrowLeft');
                    const secondToLastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[4]);
                    await expect(secondToLastRadio).toBeFocused();
                    await expectFocusedRadioToBeChecked(page, expect);
                });

                test('Up Arrow goes backwards through radios and loops', async ({ page }) => {
                    // Tab 2 times to go button 1 -> Radio group 1
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    await page.keyboard.press('ArrowUp');

                    // Ensure it's gone backwards and selected the last radio
                    const lastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[5]);
                    await expect(lastRadio).toBeFocused();
                    await expectFocusedRadioToBeChecked(page, expect);

                    // Ensure it's gone backwards once more and selected the second to last radio
                    await page.keyboard.press('ArrowUp');
                    const secondToLastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[4]);
                    await expect(secondToLastRadio).toBeFocused();
                    await expectFocusedRadioToBeChecked(page, expect);
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
                    const lastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[5]);
                    await expect(lastRadio).toBeFocused();
                    await expectFocusedRadioToBeChecked(page, expect);

                    // Press Arrow Right 1 more time to get back to the first radio
                    await page.keyboard.press('ArrowRight');

                    const firstRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[1]);
                    await expect(firstRadio).toBeFocused();
                    await expectFocusedRadioToBeChecked(page, expect);
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
                    const lastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[5]);
                    await expect(lastRadio).toBeFocused();
                    await expectFocusedRadioToBeChecked(page, expect);

                    // Press Arrow Down 1 more time to get back to the first radio
                    await page.keyboard.press('ArrowDown');

                    const firstRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[1]);
                    await expect(firstRadio).toBeFocused();
                    await expectFocusedRadioToBeChecked(page, expect);
                });

                test('Arrow key selection in one Group does not affect the other', async ({ page }) => {
                    // Tab 2 times to go button 1 -> Radio group 1
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    await page.keyboard.press('ArrowRight');

                    // Ensure it's gone forwards and selected the second radio
                    const secondRadioButtonGroup1 = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[2]);
                    await expect(secondRadioButtonGroup1).toBeFocused();
                    await expectFocusedRadioToBeChecked(page, expect);

                    // Move to next radio group
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    // Press right to move from the selected radio to the next
                    await page.keyboard.press('ArrowRight');
                    const lastRadioButtonGroup2 = page.getByTestId(keyboardNavigationStorySelectors.radioGroup2.radios[5]);
                    await expect(lastRadioButtonGroup2).toBeFocused();
                    await expectFocusedRadioToBeChecked(page, expect);

                    // Press Shift + Tab 3 times to get back into the first radio group
                    await page.keyboard.press('Shift+Tab');
                    await page.keyboard.press('Shift+Tab');
                    await page.keyboard.press('Shift+Tab');

                    // Ensure the previously selected radio in the first group is focused and still selected
                    await expect(secondRadioButtonGroup1).toBeFocused();
                    await expectFocusedRadioToBeChecked(page, expect);
                });

                test.describe('When a radio-button is disabled', () => {
                    test('Down Arrow bypasses disabled radios', async ({ page }) => {
                        // Use disabled-radio test story
                        pageObject = new BasePage(page, 'radio-group--disabled-radio');
                        await pageObject.load();

                        const firstRadio = page.getByTestId(disabledRadioStorySelectors.radioGroup.radios[1]);
                        const thirdRadio = page.getByTestId(disabledRadioStorySelectors.radioGroup.radios[3]);
                        const fourthRadio = page.getByTestId(disabledRadioStorySelectors.radioGroup.radios[4]);

                        // Tab to Radio group
                        await page.keyboard.press('Tab');
                        await expect(firstRadio).toBeFocused();

                        // Press Arrow Down once to get to the third radio since the second is disabled
                        await page.keyboard.press('ArrowDown');

                        // Ensure we are on the third radio
                        await expect(thirdRadio).toBeFocused();
                        await expectFocusedRadioToBeChecked(page, expect);

                        // Ensure we are on the third radio
                        await page.keyboard.press('ArrowDown');
                        await expect(fourthRadio).toBeFocused();

                        // Ensure two ArrowUp presses gets the focus back to the first radio
                        await page.keyboard.press('ArrowUp');
                        await page.keyboard.press('ArrowUp');
                        await expect(firstRadio).toBeFocused();
                        await expectFocusedRadioToBeChecked(page, expect);
                    });
                });
            });

            test.describe('RTL (Right-to-left)', () => {
                test.beforeEach(async ({ page }) => {
                    pageObject = new BasePage(page, 'radio-group--keyboard-navigation');
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
                        const lastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[5]);
                        await expect(lastRadio).toBeFocused();
                        await expectFocusedRadioToBeChecked(page, expect);

                        // Press Arrow Left 1 more time to get back to the first radio
                        await page.keyboard.press('ArrowLeft');

                        const firstRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[1]);
                        await expect(firstRadio).toBeFocused();
                        await expectFocusedRadioToBeChecked(page, expect);
                    });

                    test('Up Arrow goes backwards through radios and loops', async ({ page }) => {
                        // Tab 2 times to go button 1 -> Radio group 1
                        await page.keyboard.press('Tab');
                        await page.keyboard.press('Tab');

                        await page.keyboard.press('ArrowUp');

                        // Ensure it's gone backwards and selected the last radio
                        const lastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[5]);
                        await expect(lastRadio).toBeFocused();
                        await expectFocusedRadioToBeChecked(page, expect);

                        // Ensure it's gone backwards once more and selected the second to last radio
                        await page.keyboard.press('ArrowUp');
                        const secondToLastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[4]);
                        await expect(secondToLastRadio).toBeFocused();
                        await expectFocusedRadioToBeChecked(page, expect);
                    });

                    test('Right Arrow goes backwards through radios and loops', async ({ page }) => {
                        // Tab 2 times to go button 1 -> Radio group 1
                        await page.keyboard.press('Tab');
                        await page.keyboard.press('Tab');

                        await page.keyboard.press('ArrowRight');

                        // Ensure it's gone backwards and selected the last radio
                        const lastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[5]);
                        await expect(lastRadio).toBeFocused();
                        await expectFocusedRadioToBeChecked(page, expect);

                        // Ensure it's gone backwards once more and selected the second to last radio
                        await page.keyboard.press('ArrowRight');
                        const secondToLastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[4]);
                        await expect(secondToLastRadio).toBeFocused();
                        await expectFocusedRadioToBeChecked(page, expect);
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
                        const lastRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[5]);
                        await expect(lastRadio).toBeFocused();
                        await expectFocusedRadioToBeChecked(page, expect);

                        // Press Arrow Down 1 more time to get back to the first radio
                        await page.keyboard.press('ArrowDown');

                        const firstRadio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[1]);
                        await expect(firstRadio).toBeFocused();
                        await expectFocusedRadioToBeChecked(page, expect);
                    });
                });
            });
        });
    });

    test.describe('Radio group behaviour', () => {
        test('should only allow one radio to be selected at a time', async ({ page }) => {
            // Arrange
            const radioGroupPage = new BasePage(page, 'radio-group--default');
            await radioGroupPage.load();

            // Act
            const firstRadio = page.getByTestId(radio.selectors.input.dataTestId).first();
            const secondRadio = page.getByTestId(radio.selectors.input.dataTestId).nth(1);

            await firstRadio.click();

            // Assert
            await expect(firstRadio).toBeChecked();
            await expect(secondRadio).not.toBeChecked();
        });

        test('should trigger change event when a radio is selected', async ({ page }) => {
            // Arrange
            const radioGroupPage = new BasePage(page, 'radio-group--default');
            await radioGroupPage.load();

            // Set up a listener for console messages
            const consoleMessages: string[] = [];
            page.on('console', (message) => {
                if (message.type() === 'info') {
                    consoleMessages.push(message.text());
                }
            });

            // Act
            const firstRadio = page.getByTestId(radio.selectors.input.dataTestId).first();
            await firstRadio.click();

            // Assert
            expect(consoleMessages).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
        });
    });
});
