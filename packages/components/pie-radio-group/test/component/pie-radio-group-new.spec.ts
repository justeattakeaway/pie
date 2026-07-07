import {
    test, expect, type Page, type Expect,
} from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type PieRadio } from '@justeattakeaway/pie-radio/src/index.ts';
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

const keyboardNavigationDisabledStorySelectors = {
    button1: 'btn-1',
    radioGroup: {
        self: 'pie-radio-group',
        radios: {
            1: 'radio-1',
            2: 'radio-2',
            3: 'radio-3',
            4: 'radio-4',
        },
    },
    button2: 'btn-2',
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

// Reads the `checked` property directly off a pie-radio host by test id.
const isRadioChecked = (page: Page, testId: string) => page.evaluate(
    (id) => (document.querySelector(`[data-test-id="${id}"]`) as PieRadio | null)?.checked ?? false,
    testId,
);

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
                    await Promise.all(radioElements.map((radioElement) => expect(radioElement).toBeDisabled()));
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
                    await Promise.all(radioElements.map((radioElement) => expect(radioElement).not.toBeDisabled()));
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

                // Explicitly focus btn-1 to ensure a deterministic starting point for keyboard tests
                const firstButton = page.getByTestId(keyboardNavigationStorySelectors.button1);
                await expect(firstButton).toBeVisible();
                await firstButton.focus();
            });

            test.describe('Tab', () => {
                test('Tab and no option selected focuses the first radio', async ({ page }) => {
                    // Tab once to go button 1 -> Radio group 1
                    await page.keyboard.press('Tab');

                    const radio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[1]);
                    await expect(radio).toBeFocused();
                });

                test('Tab and an option selected focuses the selected', async ({ page }) => {
                    // Tab 4 times to go button 1 -> Radio group 1 -> Button 2 -> Button 3 -> Radio group 2 (Where the focused option is)
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    const radio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup2.radios[4]);

                    await expect(radio).toBeFocused();
                });

                test('Second Tab leaves the radio group', async ({ page }) => {
                    // Tab 2 times to go button 1 -> Radio group 1 -> Button 2
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    const button = page.getByTestId(keyboardNavigationStorySelectors.button2);

                    await expect(button).toBeFocused();
                });

                test.describe('Radio is checked but disabled', () => {
                    test('Tab should focus the first available radio, not the selected one', async ({ page }) => {
                        pageObject = new BasePage(page, 'radio-group--keyboard-navigation-disabled-and-checked');
                        await pageObject.load();

                        const firstButton = page.getByTestId(keyboardNavigationDisabledStorySelectors.button1);
                        await firstButton.focus();

                        await page.keyboard.press('Tab');

                        const radio = page.getByTestId(keyboardNavigationDisabledStorySelectors.radioGroup.radios[1]);
                        await expect(radio).toBeFocused();
                    });
                });

                test.describe('All but one radio is disabled', () => {
                    test('Tab should focus the single enabled radio', async ({ page }) => {
                        pageObject = new BasePage(page, 'radio-group--keyboard-navigation-disabled-radios-and-checked');
                        await pageObject.load();

                        const firstButton = page.getByTestId(keyboardNavigationDisabledStorySelectors.button1);
                        await firstButton.focus();

                        await page.keyboard.press('Tab');

                        const radio = page.getByTestId(keyboardNavigationDisabledStorySelectors.radioGroup.radios[2]);
                        await expect(radio).toBeFocused();
                    });
                });
                test.describe('All radios are disabled, but one is checked', () => {
                    test('Tab should not focus the radio group', async ({ page }) => {
                        pageObject = new BasePage(page, 'radio-group--keyboard-navigation-all-disabled-and-checked');
                        await pageObject.load();

                        const firstButton = page.getByTestId(keyboardNavigationDisabledStorySelectors.button1);
                        await firstButton.focus();

                        await page.keyboard.press('Tab');

                        const button = page.getByTestId(keyboardNavigationDisabledStorySelectors.button2);
                        await expect(button).toBeFocused();
                    });
                });
                test.describe('All radios are disabled', () => {
                    test('Tab should not focus the radio group', async ({ page }) => {
                        pageObject = new BasePage(page, 'radio-group--keyboard-navigation-all-disabled');
                        await pageObject.load();

                        const firstButton = page.getByTestId(keyboardNavigationDisabledStorySelectors.button1);
                        await firstButton.focus();

                        await page.keyboard.press('Tab');

                        const button = page.getByTestId(keyboardNavigationDisabledStorySelectors.button2);
                        await expect(button).toBeFocused();
                    });
                });
            });

            test.describe('Shift + Tab', () => {
                test.beforeEach(async ({ page }) => {
                    pageObject = new BasePage(page, 'radio-group--keyboard-navigation');
                    await pageObject.load();

                    const firstButton = page.getByTestId(keyboardNavigationStorySelectors.button1);
                    await expect(firstButton).toBeVisible();
                    await firstButton.focus();
                });

                test('Shift + Tab and no option selected focuses the last radio', async ({ page }) => {
                    // First Tab 2 times to go button 1 -> Radio group 1 -> button 2
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    await page.keyboard.press('Shift+Tab');

                    const radio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[5]);

                    await expect(radio).toBeFocused();
                });

                test('Shift + Tab and an option selected focuses the selected', async ({ page }) => {
                    // First Tab 5 times to go button 1 -> Radio group 1 -> button 2 -> Button 3 -> Radio group 2 -> Button 4
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
                    // First Tab 2 times to go button 1 -> Radio group 1 -> button 2
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    await page.keyboard.press('Shift+Tab');
                    await page.keyboard.press('Shift+Tab');

                    const button = page.getByTestId(keyboardNavigationStorySelectors.button1);

                    await expect(button).toBeFocused();
                });

                test('When an option is set programatically, Shift + Tab focuses the correct radio button', async ({ page }) => {
                    // First Tab 2 times to go button 1 -> Radio group 1 -> button 2
                    await page.keyboard.press('Tab');
                    await page.keyboard.press('Tab');

                    // The radio group should have no value
                    const radioGroup1Locator = await page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.self);
                    await expect(radioGroup1Locator).not.toHaveAttribute('value');

                    // Set value to pizza (the third option)
                    await page.evaluate(() => {
                        const radioGroup = document.querySelector('pie-radio-group[name="radio-group-1"]');
                        radioGroup?.setAttribute('value', 'pizza');
                    });

                    // Ensure the correct value is set
                    await expect(radioGroup1Locator).toHaveAttribute('value', 'pizza');

                    // Ensure the correct radio is checked but not focused
                    const radio = page.getByTestId(keyboardNavigationStorySelectors.radioGroup1.radios[3]);
                    await expect(radio).not.toBeFocused();
                    await expect(radio).toBeChecked();

                    // Press shift tab, it should focus the radio now
                    await page.keyboard.press('Shift+Tab');
                    await expect(radio).toBeFocused();
                    await expect(radio).toBeChecked();

                    // Press shift tab, it should focus button 1
                    await page.keyboard.press('Shift+Tab');
                    const button = page.getByTestId(keyboardNavigationStorySelectors.button1);
                    await expect(button).toBeFocused();
                });

                test.describe('Radio is checked but disabled', () => {
                    test('Shift + Tab should focus the last available radio, not the selected one', async ({ page }) => {
                        pageObject = new BasePage(page, 'radio-group--keyboard-navigation-disabled-and-checked');
                        await pageObject.load();

                        const firstButton = page.getByTestId(keyboardNavigationDisabledStorySelectors.button1);
                        await firstButton.focus();

                        await page.keyboard.press('Tab');
                        await page.keyboard.press('Tab');

                        await page.keyboard.press('Shift+Tab');

                        const radio = page.getByTestId(keyboardNavigationDisabledStorySelectors.radioGroup.radios[4]);
                        await expect(radio).toBeFocused();
                    });
                });

                test.describe('All but one radio is disabled', () => {
                    test('Shift + Tab should focus the single enabled radio', async ({ page }) => {
                        pageObject = new BasePage(page, 'radio-group--keyboard-navigation-disabled-radios-and-checked');
                        await pageObject.load();

                        const firstButton = page.getByTestId(keyboardNavigationDisabledStorySelectors.button1);
                        await firstButton.focus();

                        await page.keyboard.press('Tab');
                        await page.keyboard.press('Tab');

                        await page.keyboard.press('Shift+Tab');

                        const radio = page.getByTestId(keyboardNavigationDisabledStorySelectors.radioGroup.radios[2]);
                        await expect(radio).toBeFocused();
                    });
                });
                test.describe('All radios are disabled, but one is checked', () => {
                    test('Shift + Tab should not focus the radio group', async ({ page }) => {
                        pageObject = new BasePage(page, 'radio-group--keyboard-navigation-all-disabled-and-checked');
                        await pageObject.load();

                        const firstButton = page.getByTestId(keyboardNavigationDisabledStorySelectors.button1);
                        await firstButton.focus();

                        await page.keyboard.press('Tab');
                        await page.keyboard.press('Shift+Tab');

                        const button = page.getByTestId(keyboardNavigationDisabledStorySelectors.button1);
                        await expect(button).toBeFocused();
                    });
                });
                test.describe('All radios are disabled', () => {
                    test('Shift + Tab should not focus the radio group', async ({ page }) => {
                        pageObject = new BasePage(page, 'radio-group--keyboard-navigation-all-disabled');
                        await pageObject.load();

                        const firstButton = page.getByTestId(keyboardNavigationDisabledStorySelectors.button1);
                        await firstButton.focus();

                        await page.keyboard.press('Tab');
                        await page.keyboard.press('Shift+Tab');

                        const button = page.getByTestId(keyboardNavigationDisabledStorySelectors.button1);
                        await expect(button).toBeFocused();
                    });
                });
            });

            test.describe('Arrow Keys', () => {
                test.beforeEach(async ({ page }) => {
                    pageObject = new BasePage(page, 'radio-group--keyboard-navigation');
                    await pageObject.load();

                    const firstButton = page.getByTestId(keyboardNavigationStorySelectors.button1);
                    await expect(firstButton).toBeVisible();
                    await firstButton.focus();
                });

                test('Left Arrow goes backwards through radios and loops', async ({ page }) => {
                    // Tab once to go button 1 -> Radio group 1
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
                    // Tab once to go button 1 -> Radio group 1
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
                    // Tab once to go button 1 -> Radio group 1
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
                    // Tab once to go button 1 -> Radio group 1
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
                    // Tab once to go button 1 -> Radio group 1
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

                        // Ensure the radio group has rendered before keyboard navigation
                        await expect(firstRadio).toBeVisible();

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

                    const firstButton = page.getByTestId(keyboardNavigationStorySelectors.button1);
                    await expect(firstButton).toBeVisible();
                    await firstButton.focus();
                });

                test.describe('Arrow Keys', () => {
                    test('Left Arrow goes forwards through radios and loops', async ({ page }) => {
                        // Tab once to go button 1 -> Radio group 1
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
                        // Tab once to go button 1 -> Radio group 1
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
                        // Tab once to go button 1 -> Radio group 1
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
                        // Tab once to go button 1 -> Radio group 1
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

    test.describe('with list items', () => {
        const selectors = {
            button1: 'btn-1',
            items: {
                1: 'item-1', 2: 'item-2', 3: 'item-3', 4: 'item-4',
            },
            radios: {
                1: 'radio-1', 2: 'radio-2', 3: 'radio-3', 4: 'radio-4',
            },
        };

        test.beforeEach(async ({ page }) => {
            pageObject = new BasePage(page, 'radio-group--with-list-items');
            await pageObject.load();
            await expect(page.getByTestId(selectors.radios[1])).toBeVisible();
        });

        test('should expose radiogroup, presentation and radio roles', async ({ page }) => {
            await expect(page.getByTestId(radioGroup.selectors.fieldset.dataTestId)).toHaveAttribute('role', 'radiogroup');
            await expect(page.getByTestId(selectors.items[1])).toHaveAttribute('role', 'presentation');
            await expect(page.getByTestId(selectors.radios[1])).toHaveAttribute('role', 'radio');
        });

        test('should mirror the item text onto the radio ARIA', async ({ page }) => {
            // primaryText always becomes the accessible name (aria-label). secondaryText and
            // metaText become the aria-description, combining when both are present.

            // Both secondary and meta text: combined with a full stop.
            const firstRadio = page.getByTestId(selectors.radios[1]);
            await expect(firstRadio).toHaveAttribute('aria-label', 'Standard');
            await expect(firstRadio).toHaveAttribute('aria-description', '3 to 5 days. Free');

            // Secondary text only.
            const secondRadio = page.getByTestId(selectors.radios[2]);
            await expect(secondRadio).toHaveAttribute('aria-label', 'Express');
            await expect(secondRadio).toHaveAttribute('aria-description', 'Next day');

            // Neither secondary nor meta text: only the label, no description.
            const thirdRadio = page.getByTestId(selectors.radios[3]);
            await expect(thirdRadio).toHaveAttribute('aria-label', 'Collection');
            await expect(thirdRadio).not.toHaveAttribute('aria-description');

            // Meta text only.
            const fourthRadio = page.getByTestId(selectors.radios[4]);
            await expect(fourthRadio).toHaveAttribute('aria-label', 'Locker');
            await expect(fourthRadio).toHaveAttribute('aria-description', '£1.99');
        });

        test('should hide the visible item text from assistive technology', async ({ page }) => {
            // item-1 has primary, secondary and meta text. The primary/secondary live in
            // `.c-listItem-text` and the meta in `.c-listItem-metaText`; both must be hidden
            // from assistive tech, since the radio now carries the name and description.
            const hidden = await page.evaluate((id) => {
                const root = document.querySelector(`[data-test-id="${id}"]`)?.shadowRoot;
                return {
                    text: root?.querySelector('.c-listItem-text')?.getAttribute('aria-hidden'),
                    meta: root?.querySelector('.c-listItem-metaText')?.getAttribute('aria-hidden'),
                };
            }, selectors.items[1]);

            expect(hidden.text).toBe('true');
            expect(hidden.meta).toBe('true');
        });

        test('should select a radio when it is clicked', async ({ page }) => {
            await page.getByTestId(selectors.radios[1]).click();

            expect(await isRadioChecked(page, selectors.radios[1])).toBe(true);
            expect(await isRadioChecked(page, selectors.radios[2])).toBe(false);
        });

        test('should select the row\'s radio when the list item is clicked', async ({ page }) => {
            // Click the row (over the text), not the radio itself.
            await page.getByTestId(selectors.items[2]).click();

            expect(await isRadioChecked(page, selectors.radios[2])).toBe(true);
            expect(await isRadioChecked(page, selectors.radios[1])).toBe(false);
        });

        test('should fire a change event when a row is clicked', async ({ page }) => {
            const consoleMessages: string[] = [];
            page.on('console', (message) => {
                if (message.type() === 'info') {
                    consoleMessages.push(message.text());
                }
            });

            await page.getByTestId(selectors.items[2]).click();

            await expect.poll(() => consoleMessages).toEqual([EXPECTED_CHANGE_EVENT_MESSAGE]);
        });

        test('should allow only one radio to be selected at a time', async ({ page }) => {
            await page.getByTestId(selectors.radios[1]).click();
            await page.getByTestId(selectors.radios[2]).click();

            expect(await isRadioChecked(page, selectors.radios[1])).toBe(false);
            expect(await isRadioChecked(page, selectors.radios[2])).toBe(true);
        });

        test('should switch selection when a different row is clicked', async ({ page }) => {
            await page.getByTestId(selectors.items[1]).click();
            expect(await isRadioChecked(page, selectors.radios[1])).toBe(true);

            // Clicking another row selects its radio and deselects the previous one.
            await page.getByTestId(selectors.items[2]).click();
            expect(await isRadioChecked(page, selectors.radios[2])).toBe(true);
            expect(await isRadioChecked(page, selectors.radios[1])).toBe(false);
        });

        test('should not select a disabled row when it is clicked', async ({ page }) => {
            await page.getByTestId(selectors.items[3]).click();

            expect(await isRadioChecked(page, selectors.radios[3])).toBe(false);
        });

        test.describe('keyboard navigation', () => {
            test('should focus the first radio when tabbing into the group', async ({ page }) => {
                await page.getByTestId(selectors.button1).focus();
                await page.keyboard.press('Tab');

                await expect(page.getByTestId(selectors.radios[1])).toBeFocused();
            });

            test('should move selection with arrow keys and skip disabled radios', async ({ page }) => {
                await page.getByTestId(selectors.button1).focus();
                await page.keyboard.press('Tab');

                // The first arrow moves to and selects the second radio.
                await page.keyboard.press('ArrowDown');
                await expect(page.getByTestId(selectors.radios[2])).toBeFocused();
                await expectFocusedRadioToBeChecked(page, expect);

                // The third radio is disabled, so the next arrow lands on the fourth.
                await page.keyboard.press('ArrowDown');
                await expect(page.getByTestId(selectors.radios[4])).toBeFocused();
                await expectFocusedRadioToBeChecked(page, expect);
            });
        });
    });

    test.describe('with list items in a disabled group', () => {
        const selectors = {
            items: {
                1: 'item-1', 4: 'item-4',
            },
            radios: {
                1: 'radio-1',
            },
        };

        test.beforeEach(async ({ page }) => {
            pageObject = new BasePage(page, 'radio-group--with-list-items-group-disabled');
            await pageObject.load();
            await expect(page.getByTestId(selectors.radios[1])).toBeVisible();
        });

        test('should not select a row when the group is disabled', async ({ page }) => {
            await page.getByTestId(selectors.items[1]).click();

            expect(await isRadioChecked(page, selectors.radios[1])).toBe(false);
        });
    });
});
