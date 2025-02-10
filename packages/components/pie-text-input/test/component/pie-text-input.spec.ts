import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { statusTypes, type TextInputProps } from '../../src/defs.ts';
import { textInput } from '../helpers/page-object/selectors.ts';

test.describe('PieTextInput - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const textInputDefaultPage = new BasePage(page, 'text-input--default');
        await textInputDefaultPage.load();

        // Act
        const input = page.getByTestId(textInput.selectors.container.dataTestId);

        // Assert
        expect(input).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('type', () => {
            test('should default to text type if no type prop provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                expect(input).toHaveAttribute('type', 'text');
            });

            test('should apply the type prop to the HTML input rendered', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    type: 'number',
                    value: '123',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).toHaveAttribute('type', 'number');
            });
        });

        test.describe('value', () => {
            test('should default to an empty string if no value prop provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).toHaveValue('');
            });

            test('should apply the value prop to the HTML input rendered', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).toHaveValue('test');
            });
        });

        test.describe('name', () => {
            test('should not render a name attribute on the input element if no name provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).not.toHaveAttribute('name');
            });

            test('should apply the name prop to the HTML input rendered', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    name: 'test',
                    value: '123',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).toHaveAttribute('name', 'test');
            });
        });

        test.describe('pattern', () => {
            test('should not render a pattern attribute on the input element if no pattern provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).not.toHaveAttribute('pattern');
            });

            test('should be invalid state `patternMismatch` if pattern is not met', async ({ page }) => {
                // Arrange
                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load();

                const component = page.getByTestId(textInput.selectors.container.dataTestId);

                // Setting this manually due to Storybook limitations - https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
                await component.evaluate((element) => {
                    (element as HTMLInputElement).pattern = '[a-z]{4,8}';
                });

                await page.getByTestId(textInput.selectors.input.dataTestId).fill('hello world');

                const isInvalid = await component.evaluate((element) => (element as HTMLInputElement).validity.patternMismatch);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be valid state if pattern is met', async ({ page }) => {
                // Arrange
                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load();

                const component = page.getByTestId(textInput.selectors.container.dataTestId);

                // Setting this manually due to Storybook limitations - https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
                await component.evaluate((element) => {
                    (element as HTMLInputElement).pattern = '[a-z]{4,8}';
                });

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('test');

                const isValid = await page.evaluate(() => document.querySelector('pie-text-input')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });

        test.describe('minlength', () => {
            test('should not render a minlength attribute on the input element if no minlength provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).not.toHaveAttribute('minlength');
            });

            test('should be invalid state `tooShort` if the min length is not entered', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    minlength: 3,
                    value: '',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('te');

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isInvalid = await component.evaluate((element) => (element as HTMLInputElement).validity.tooShort);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be valid state if the min length is met', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    minlength: 3,
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('test');

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isValid = await component.evaluate((element) => (element as HTMLInputElement).validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });

        test.describe('maxlength', () => {
            test('should not render a maxlength attribute on the input element if no maxlength provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).not.toHaveAttribute('maxlength');
            });

            test('should not be able to input a value greater than the maxlength provided', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    maxlength: 3,
                    value: '',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('test');

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const inputValue = await component.evaluate((element) => (element as HTMLInputElement).value);

                // Assert
                expect(inputValue).toBe('tes');
            });

            test('should be invalid state `tooLong` if the maxlength is exceeded programmatically', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    maxlength: 2,
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                await page.focus('pie-text-input');
                await page.keyboard.press('ArrowRight'); // Move cursor to end of input so we don't delete the whole value
                await page.keyboard.press('Backspace'); // Delete the last character to trigger an input event - this should trigger the validity state update

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isInvalid = await component.evaluate((element) => (element as HTMLInputElement).validity.tooLong);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be valid state if the max length is not exceeded', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    maxlength: 3,
                    value: '',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('test');

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isValid = await component.evaluate((element) => (element as HTMLInputElement).validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });

        test.describe('autocomplete', () => {
            test('should not render an autocomplete attribute on the input element if no autocomplete provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).not.toHaveAttribute('autocomplete');
            });

            test('should apply the autocomplete prop to the HTML input rendered', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    autocomplete: 'on',
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).toHaveAttribute('autocomplete', 'on');
            });
        });

        test.describe('placeholder', () => {
            test('should not render a placeholder attribute on the input element if no placeholder provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).not.toHaveAttribute('placeholder');
            });

            test('should apply the placeholder prop to the HTML input rendered', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    placeholder: 'Test Placeholder',
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).toHaveAttribute('placeholder', 'Test Placeholder');
            });
        });

        test.describe('autoFocus', () => {
            test('should focus the component when autoFocus is `true`', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    autoFocus: true,
                    value: '',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).toBeFocused();
            });

            test('should not focus the component when autoFocus is not provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).not.toBeFocused();
            });
        });

        test.describe('inputmode', () => {
            test('should not render an inputmode attribute on the input element if no inputmode provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).not.toHaveAttribute('inputmode');
            });

            test('should apply the inputmode prop to the HTML input rendered', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    inputmode: 'numeric',
                    value: '',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).toHaveAttribute('inputmode', 'numeric');
            });
        });

        test.describe('readonly', () => {
            test('should be able to edit the component value when readonly is `false`', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    readonly: false,
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);
                await input.fill('another test');

                // Assert
                await expect(input).toHaveValue('another test');
            });

            test('should not be able to edit the component value when readonly is `true`', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    readonly: true,
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({ ...props });

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).not.toBeEditable();
            });
        });

        test.describe('defaultValue', () => {
            test('should correctly reset the input value to the default value if one is provided when the form is reset', async ({ page }) => {
                // Arrange
                const textInputFormPage = new BasePage(page, 'text-input--example-form');
                await textInputFormPage.load({ defaultValue: 'foo' });

                // Act & Assert
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('test');
                await expect(page.getByTestId(textInput.selectors.input.dataTestId)).toHaveValue('test');

                await page.click('button[type="reset"]');
                await expect(page.getByTestId(textInput.selectors.input.dataTestId)).toHaveValue('foo');
            });
        });

        test.describe('disabled', () => {
            test.describe('when true', () => {
                test('should disable the component', async ({ page }) => {
                    // Arrange
                    const props: TextInputProps = {
                        disabled: true,
                        value: 'test',
                    };

                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load({ ...props });

                    // Act
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);

                    // Assert
                    await expect(input).toBeDisabled();
                });

                test('should not be able to focus the component', async ({ page }) => {
                    // Arrange
                    const props: TextInputProps = {
                        disabled: true,
                        value: 'test',
                    };

                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load({ ...props });

                    // Act
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);
                    await input.focus();

                    // Assert
                    expect(input).not.toBeFocused();
                });
            });

            test.describe('when not provided', () => {
                test('should not disable the component', async ({ page }) => {
                    // Arrange
                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load();

                    // Act
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);

                    // Assert
                    await expect(input).not.toBeDisabled();
                });

                test('should still be able to focus the component', async ({ page }) => {
                    // Arrange
                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load();

                    // Act
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);
                    await input.focus();

                    // Assert
                    await expect(input).toBeFocused();
                });
            });
        });

        test.describe('assistiveText', () => {
            test('should not render the assistive text component if the prop is not provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const assistiveText = page.getByTestId(textInput.selectors.assistiveText.dataTestId);

                // Assert
                expect(assistiveText).not.toBeVisible();
            });

            test('should apply the "default" variant attribute if no status is provided', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    assistiveText: 'Assistive text',
                    value: 'test',
                };

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load({ ...props });

                // Act
                const assistiveText = page.getByTestId(textInput.selectors.assistiveText.dataTestId);

                // Assert
                await expect(assistiveText).toBeVisible();
                await expect(assistiveText).toHaveAttribute('variant', 'default');
                await expect(assistiveText).toHaveText('Assistive text');
            });

            test.describe('Assistive text: Status', () => {
                statusTypes.forEach((status) => {
                    test(`should render the assistive text component with the ${status} variant`, async ({ page }) => {
                        // Arrange
                        const props: TextInputProps = {
                            assistiveText: 'Assistive text',
                            status,
                            value: 'test',
                        };

                        const textInputDefaultPage = new BasePage(page, 'text-input--default');
                        await textInputDefaultPage.load({ ...props });

                        // Act
                        const assistiveText = page.getByTestId(textInput.selectors.assistiveText.dataTestId);

                        // Assert
                        await expect(assistiveText).toBeVisible();
                        await expect(assistiveText).toHaveAttribute('variant', status);
                        await expect(assistiveText).toHaveText('Assistive text');
                    });
                });
            });

            test.describe('Assistive test ID attribute', () => {
                test('should contain an ID associated the input element for a11y', async ({ page }) => {
                    // Arrange
                    const props: TextInputProps = {
                        assistiveText: 'Assistive text',
                        value: 'test',
                    };

                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load({ ...props });

                    // Act
                    const assistiveText = page.getByTestId(textInput.selectors.assistiveText.dataTestId);

                    // Assert
                    await expect(assistiveText).toHaveAttribute('id', 'assistive-text');
                });
            });
        });

        test.describe('step', () => {
            test.describe('when type is number', () => {
                test('should be able to increment the value by the step amount when using the up arrow', async ({ page }) => {
                    // Arrange
                    const props: TextInputProps = {
                        type: 'number',
                        value: '0',
                        step: 5,
                    };

                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load({ ...props });

                    // Act
                    await page.focus('pie-text-input');
                    await page.keyboard.press('ArrowUp');
                    await page.keyboard.press('ArrowUp');

                    // Assert
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);
                    await expect(input).toHaveValue('10');
                });

                test('should be able to decrement the value by the step amount when using the down arrow', async ({ page }) => {
                    // Arrange
                    const props: TextInputProps = {
                        type: 'number',
                        value: '0',
                        step: 5,
                    };

                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load({ ...props });

                    // Act
                    await page.focus('pie-text-input');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');

                    // Assert
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);
                    await expect(input).toHaveValue('-10');
                });
            });

            test.describe('when type is not number', () => {
                test('should not be able to increment the value by the step amount when using the up arrow', async ({ page }) => {
                    // Arrange
                    const props: TextInputProps = {
                        type: 'text',
                        value: '0',
                        step: 5,
                    };

                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load({ ...props });

                    // Act
                    await page.focus('pie-text-input');
                    await page.keyboard.press('ArrowUp');
                    await page.keyboard.press('ArrowUp');

                    // Assert
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);
                    await expect(input).toHaveValue('0');
                });

                test('should not be able to decrement the value by the step amount when using the down arrow', async ({ page }) => {
                    // Arrange
                    const props: TextInputProps = {
                        type: 'text',
                        value: '0',
                        step: 5,
                    };

                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load({ ...props });

                    // Act
                    await page.focus('pie-text-input');
                    await page.keyboard.press('ArrowDown');
                    await page.keyboard.press('ArrowDown');

                    // Assert
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);
                    await expect(input).toHaveValue('0');
                });
            });
        });

        test.describe('min', () => {
            test('should be invalid state `rangeUnderflow` if the value is lower than the min', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    type: 'number',
                    value: '0',
                    min: 5,
                };

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load({ ...props });

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('4');

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isInvalid = await component.evaluate((element) => (element as HTMLInputElement).validity.rangeUnderflow);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be valid state if the value is greater than the min', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    type: 'number',
                    value: '0',
                    min: 5,
                };

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load({ ...props });

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('6');

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isValid = await component.evaluate((element) => (element as HTMLInputElement).validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });

        test.describe('max', () => {
            test('should be invalid state `rangeOverflow` if the value is greater than the max', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    type: 'number',
                    value: '0',
                    max: 5,
                };

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load({ ...props });

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('6');

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isInvalid = await component.evaluate((element) => (element as HTMLInputElement).validity.rangeOverflow);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be valid state if the value is lower than the max', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    type: 'number',
                    value: '0',
                    max: 5,
                };

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load({ ...props });

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('4');

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isValid = await component.evaluate((element) => (element as HTMLInputElement).validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });

        test.describe('required', () => {
            test('should not render a required attribute on the input element if no required provided', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).not.toHaveAttribute('required');
            });

            test('should apply the required prop to the HTML input rendered', async ({ page }) => {
                // Arrange
                const props: TextInputProps = {
                    required: true,
                    value: 'test',
                };

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load({ ...props });

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).toHaveAttribute('required');
            });

            test('should be invalid state `valueMissing` if the input is empty and required', async ({ page }) => {
                // Arrange
                const props: Partial<TextInputProps> = {
                    required: true,
                };

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load({ ...props });

                // Act
                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isInvalid = await component.evaluate((element) => (element as HTMLInputElement).validity.valueMissing);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be valid state if the input is not empty and required', async ({ page }) => {
                // Arrange
                const props: Partial<TextInputProps> = {
                    required: true,
                };

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load({ ...props });

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('test');

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isValid = await component.evaluate((element) => (element as HTMLInputElement).validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be valid state if the input has a value prop and required', async ({ page }) => {
                // Arrange
                const props: Partial<TextInputProps> = {
                    required: true,
                    value: 'test',
                };

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load({ ...props });

                // Act
                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isValid = await component.evaluate((element) => (element as HTMLInputElement).validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be valid state if the input is empty and required but disabled', async ({ page }) => {
                // Arrange
                const props: Partial<TextInputProps> = {
                    required: true,
                    disabled: true,
                };

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load({ ...props });

                // Act
                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isValid = await component.evaluate((element) => (element as HTMLInputElement).validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });
    });

    test.describe('Events', () => {
        test.describe('input', () => {
            test('should emit an event each time the component receives input', async ({ page }) => {
                // Arrange
                const expectedMessagesLength = 2;

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Set up a listener for console messages
                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Act
                await input.fill('test');
                await page.keyboard.press('Backspace');

                // Assert
                expect(consoleMessages.length).toEqual(expectedMessagesLength);
            });

            test('should provide the event target value for event listeners', async ({ page }) => {
                // Arrange
                const expectedMessage = 'tes';

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('test');
                await page.keyboard.press('Backspace');

                const output = page.locator('#output');

                // Assert
                await expect(output).toHaveText(expectedMessage);
            });

            test('should correctly handle input including backspaces in the event.data property', async ({ page }) => {
                // Arrange
                const expectedMessage = 'tes';

                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('test');
                await page.keyboard.press('Backspace');

                // Assert
                const output = page.locator('#output');
                await expect(output).toHaveText(expectedMessage);
            });
        });

        test.describe('change', () => {
            test('should dispatch a change event when the input value changes', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                // Set up a listener for console messages
                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Act
                await input.fill('test');
                await page.keyboard.press('Tab');

                // Assert
                expect(consoleMessages).toContain('change event recieved {"isTrusted":false}');
            });

            test('should dispatch a custom event that contains the original native event', async ({ page }) => {
                // Arrange
                const textInputDefaultPage = new BasePage(page, 'text-input--default');
                await textInputDefaultPage.load();

                const consoleMessages: string[] = [];
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Set up a listener for console messages
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                // Act
                await input.fill('test');
                await page.keyboard.press('Tab'); // Change events on inputs are triggered when they lose focus after the value was changed

                // Assert
                expect(consoleMessages).toContain('change event recieved {"isTrusted":false}');
            });
        });
    });

    test.describe('Slots', () => {
        test.describe('leadingText', () => {
            test('should render the leading slot content', async ({ page }) => {
                // Arrange
                const textInputLeadingTextPage = new BasePage(page, 'text-input--leading-text');
                await textInputLeadingTextPage.load();

                // Act
                const leadingText = page.getByTestId('leadingText');

                // Assert
                await expect(leadingText).toBeVisible();
            });
        });

        test.describe('trailingText', () => {
            test('should render the trailingText slot content', async ({ page }) => {
                // Arrange
                const textInputTrailingTextPage = new BasePage(page, 'text-input--trailing-text');
                await textInputTrailingTextPage.load();

                // Act
                const trailingText = page.getByTestId('trailingText');

                // Assert
                await expect(trailingText).toBeVisible();
            });
        });

        test.describe('leadingIcon', () => {
            test('should render the leadingIcon slot content', async ({ page }) => {
                // Arrange
                const textInputLeadingIconPage = new BasePage(page, 'text-input--leading-icon');
                await textInputLeadingIconPage.load();

                // Act
                const leadingIcon = page.getByTestId('leadingIcon');

                // Assert
                await expect(leadingIcon).toBeVisible();
            });
        });

        test.describe('trailingIcon', () => {
            test('should render the trailingIcon slot content', async ({ page }) => {
                // Arrange
                const textInputTrailingIconPage = new BasePage(page, 'text-input--trailing-icon');
                await textInputTrailingIconPage.load();

                // Act
                const trailingIcon = page.getByTestId('trailingIcon');

                // Assert
                await expect(trailingIcon).toBeVisible();
            });
        });

        test.describe('leading and trailing', () => {
            test('should render both the leading and trailing text content', async ({ page }) => {
                // Arrange
                const textInputLeadingAndTrailingTextPage = new BasePage(page, 'text-input--leading-and-trailing-text');
                await textInputLeadingAndTrailingTextPage.load();

                // Act
                const leadingText = page.getByTestId('leadingText');
                const trailingText = page.getByTestId('trailingText');

                // Assert
                await expect(leadingText).toBeVisible();
                await expect(trailingText).toBeVisible();
            });

            test('should render both the leading and trailing icon content', async ({ page }) => {
                // Arrange
                const textInputLeadingAndTrailingIconPage = new BasePage(page, 'text-input--leading-and-trailing-icon');
                await textInputLeadingAndTrailingIconPage.load();

                // Act
                const leadingIcon = page.getByTestId('leadingIcon');
                const trailingIcon = page.getByTestId('trailingIcon');

                // Assert
                await expect(leadingIcon).toBeVisible();
                await expect(trailingIcon).toBeVisible();
            });
        });
    });

    test.describe('Form integration', () => {
        test('should correctly set the value of username in the FormData object when submitted', async ({ page }) => {
            // Arrange
            const textInputFormPage = new BasePage(page, 'text-input--example-form');
            await textInputFormPage.load();

            // Act
            await page.getByTestId(textInput.selectors.input.dataTestId).fill('test');
            await page.locator('pie-button', { hasText: 'Submit' }).click();

            // Assert
            const output = await page.locator('#formDataOutput');
            await expect(output).toHaveText('{"username":"test"}');
        });

        test('should submit the updated value if the value prop is changed programmatically', async ({ page }) => {
            // Arrange
            const textInputFormPage = new BasePage(page, 'text-input--example-form');
            await textInputFormPage.load();

            // Act
            await page.getByTestId(textInput.selectors.input.dataTestId).fill('test');

            const component = page.getByTestId(textInput.selectors.container.dataTestId);
            await component.evaluate((element) => {
                const input = element as HTMLInputElement;
                input.value = 'test2';
            });

            await page.locator('pie-button', { hasText: 'Submit' }).click();

            const output = page.locator('#formDataOutput');

            // Assert
            await expect(output).toHaveText('{"username":"test2"}');
        });

        test('should correctly reset the input value when the form is reset', async ({ page }) => {
            // Arrange
            const textInputFormPage = new BasePage(page, 'text-input--example-form');
            await textInputFormPage.load();

            // Act & Assert
            const component = page.getByTestId(textInput.selectors.container.dataTestId);
            const input = page.getByTestId(textInput.selectors.input.dataTestId);
            await input.fill('test');

            await component.evaluate((element) => {
                const input = element as HTMLInputElement;
                input.value = 'test';
            });

            await expect(input).toHaveValue('test');

            await page.locator('pie-button', { hasText: 'Reset' }).click();
            await expect(input).toHaveValue('');
        });

        test('should not submit the value for disabled inputs', async ({ page }) => {
            // Arrange
            const props: Partial<TextInputProps & { showEmailField?: boolean }> = {
                // Configured to only disable the username field
                disabled: true,
                showEmailField: true,
            };

            const textInputFormPage = new BasePage(page, 'text-input--example-form');
            await textInputFormPage.load({ ...props });

            // Act
            await page.locator('#email input').fill('test@test.com');
            await page.locator('pie-button', { hasText: 'Submit' }).click();

            const output = page.locator('#formDataOutput');

            // Assert
            await expect(output).toHaveText('{"email":"test@test.com"}');
        });

        test('should not submit the value inside a disabled fieldset', async ({ page }) => {
            // Arrange
            const textInputDisabledFieldsetPage = new BasePage(page, 'text-input--disabled-fieldset');
            await textInputDisabledFieldsetPage.load();

            // Act
            await page.locator('pie-button', { hasText: 'Submit' }).click();

            const output = page.locator('#formDataOutput');

            // Assert
            await expect(output).toHaveText('{"email":"included@test.com"}');
        });
    });

    test.describe('Attributes:', () => {
        test.describe('aria-describedby', () => {
            test.describe('when `assistiveText` is not defined', () => {
                test('should not render the attribute', async ({ page }) => {
                    // Arrange
                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load();

                    // Act
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);

                    // Assert
                    await expect(input).not.toHaveAttribute('aria-describedby');
                });
            });

            test.describe('when `assistiveText` is defined', () => {
                test('should render the attribute correctly with the correct value', async ({ page }) => {
                    // Arrange
                    const props: Partial<TextInputProps> = {
                        assistiveText: 'Some useful message',
                    };

                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load(props);
                    // Act
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);

                    // Assert
                    await expect(input).toHaveAttribute('aria-describedby', 'assistive-text');
                });
            });
        });

        test.describe('aria-invalid', () => {
            test.describe('when the component status is set to `error`', () => {
                test('should render the `aria-invalid` attribute', async ({ page }) => {
                    // Arrange
                    const props: Partial<TextInputProps> = {
                        status: 'error',
                    };

                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load(props);

                    // Act
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);

                    // Assert
                    await expect(input).toHaveAttribute('aria-invalid', 'true');
                });
            });

            statusTypes.filter((status) => status !== 'error').forEach((status) => {
                test.describe(`when the component status is set to "${status}"`, () => {
                    test('should render the `aria-invalid` with a value of `false`', async ({ page }) => {
                        // Arrange
                        const props: Partial<TextInputProps> = {
                            status,
                        };

                        const textInputDefaultPage = new BasePage(page, 'text-input--default');
                        await textInputDefaultPage.load(props);

                        // Act
                        const input = page.getByTestId(textInput.selectors.input.dataTestId);

                        // Assert
                        await expect(input).toHaveAttribute('aria-invalid', 'false');
                    });
                });
            });
        });

        test.describe('aria-errormessage', () => {
            test.describe('when the component status is set to `error`', () => {
                test('should render the `aria-errormessage` attribute', async ({ page }) => {
                    // Arrange
                    const props: Partial<TextInputProps> = {
                        status: 'error',
                    };

                    const textInputDefaultPage = new BasePage(page, 'text-input--default');
                    await textInputDefaultPage.load(props);

                    // Act
                    const input = page.getByTestId(textInput.selectors.input.dataTestId);

                    // Assert
                    await expect(input).toHaveAttribute('aria-errormessage');
                });
            });

            statusTypes.filter((status) => status !== 'error').forEach((status) => {
                test.describe(`when the component status is set to "${status}"`, () => {
                    test('should not render the `aria-errormessage` attribute', async ({ page }) => {
                        // Arrange
                        const props: Partial<TextInputProps> = {
                            status,
                        };

                        const textInputDefaultPage = new BasePage(page, 'text-input--default');
                        await textInputDefaultPage.load(props);

                        // Act
                        const input = page.getByTestId(textInput.selectors.input.dataTestId);

                        // Assert
                        await expect(input).not.toHaveAttribute('aria-errormessage');
                    });
                });
            });
        });
    });
});
