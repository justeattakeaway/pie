import { setupFormDataExtraction, getFormDataObject } from '@justeattakeaway/pie-webc-testing/src/helpers/form-helpers.ts';
import { test, expect } from '@playwright/test';
import { PieTextInput } from '../../src/index.ts';
import { statusTypes, type TextInputProps, } from '../../src/defs.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { textInput } from '../helpers/page-object/selectors.ts';

const assistiveTextSelector = '[data-test-id="pie-text-input-assistive-text"]';

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
                const props : TextInputProps = {
                    type: 'number',
                    value: '123',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

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
                const props : TextInputProps = {
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

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
                const props : TextInputProps = {
                    name: 'test',
                    value: '123',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

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
                await component.evaluate((element) => (element as HTMLInputElement).pattern = '[a-z]{4,8}');


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
                await component.evaluate((element) => (element as HTMLInputElement).pattern = '[a-z]{4,8}');

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
                const props : TextInputProps = {
                    minlength: 3,
                    value: '',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('te');

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const isInvalid = await component.evaluate((element) => (element as HTMLInputElement).validity.tooShort);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be valid state if the min length is met', async ({ page }) => {
                // Arrange
                const props : TextInputProps = {
                    minlength: 3,
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

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
                const props : TextInputProps = {
                    maxlength: 3,
                    value: '',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

                // Act
                await page.getByTestId(textInput.selectors.input.dataTestId).fill('test');

                const component = page.getByTestId(textInput.selectors.container.dataTestId);
                const inputValue = await component.evaluate((element) => (element as HTMLInputElement).value);

                // Assert
                expect(inputValue).toBe('tes');
            });

            test('should be invalid state `tooLong` if the maxlength is exceeded programmatically', async ({ page }) => {
                // Arrange
                const props : TextInputProps = {
                    maxlength: 2,
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

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
                const props : TextInputProps = {
                    maxlength: 3,
                    value: '',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

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
                const props : TextInputProps = {
                    autocomplete: 'on',
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

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
                const props : TextInputProps = {
                    placeholder: 'Test Placeholder',
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).toHaveAttribute('placeholder', 'Test Placeholder');
            });
        });

        test.describe('autoFocus', () => {
            test('should focus the component when autoFocus is `true`', async ({ page }) => {
                // Arrange
                const props : TextInputProps = {
                    autoFocus: true,
                    value: '',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

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
                const props : TextInputProps = {
                    inputmode: 'numeric',
                    value: '',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).toHaveAttribute('inputmode', 'numeric');
            });
        });

        test.describe('readonly', () => {
            test('should be able to edit the component value when readonly is `false`', async ({ page }) => {
                // Arrange
                const props : TextInputProps = {
                    readonly: false,
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);
                await input.fill('another test');

                // Assert
                await expect(input).toHaveValue('another test');
            });

            test('should not be able to edit the component value when readonly is `true`', async ({ page }) => {
                // Arrange
                const props : TextInputProps = {
                    readonly: true,
                    value: 'test',
                };

                const textInputNumberPage = new BasePage(page, 'text-input--default');
                await textInputNumberPage.load({...props});

                // Act
                const input = page.getByTestId(textInput.selectors.input.dataTestId);

                // Assert
                await expect(input).not.toBeEditable();
            });
        });

        test.describe('defaultValue', () => {
            test('should correctly reset the input value to the default value if one is provided when the form is reset', async ({ page }) => {
                // Arrange
                await page.setContent(`
                    <form id="testForm" action="/foo" method="POST">
                        <pie-text-input type="text" name="username" defaultValue="foo"></pie-text-input>
                        <button type="reset">Submit</button>
                    </form>
                `);

                // Act & Assert
                await page.locator('pie-text-input').type('test');
                expect(await page.evaluate(() => document.querySelector('pie-text-input')?.value)).toBe('test');

                await page.click('button[type="reset"]');
                expect(await page.evaluate(() => document.querySelector('pie-text-input')?.value)).toBe('foo');
            });
        });

        // test.describe('disabled', () => {
        //     test.describe('when true', () => {
        //         test('should disable the component', async ({ mount }) => {
        //             // Arrange
        //             const component = await mount(PieTextInput, {
        //                 props: {
        //                     disabled: true,
        //                     value: 'test',
        //                 } as TextInputProps,
        //             });

        //             // Act
        //             const input = component.locator('input');

        //             // Assert
        //             expect(input).toBeDisabled();
        //         });

        //         test('should not be able to focus the component', async ({ page }) => {
        //             // Arrange
        //             await page.setContent('<pie-text-input type="text" disabled></pie-text-input>');

        //             // Act
        //             const input = page.locator('pie-text-input');
        //             await input.focus();

        //             // Assert
        //             expect(input).not.toBeFocused();
        //         });
        //     });

        //     test.describe('when not provided', () => {
        //         test('should not disable the component', async ({ mount }) => {
        //             // Arrange
        //             const component = await mount(PieTextInput);

        //             // Act
        //             const input = component.locator('input');

        //             // Assert
        //             expect(input).not.toBeDisabled();
        //         });

        //         test('should still be able to focus the component', async ({ page }) => {
        //             // Arrange
        //             await page.setContent('<pie-text-input type="text"></pie-text-input>');

        //             // Act
        //             const input = page.locator('pie-text-input');
        //             await input.focus();

        //             // Assert
        //             expect(input).toBeFocused();
        //         });
        //     });
        // });

        // test.describe('assistiveText', () => {
        //     test('should not render the assistive text component if the prop is not provided', async ({ mount, page }) => {
        //         // Arrange
        //         await mount(PieTextInput);

        //         // Act
        //         const assistiveText = page.locator(assistiveTextSelector);

        //         // Assert
        //         expect(assistiveText).not.toBeVisible();
        //     });

        //     test('should apply the "default" variant attribute if no status is provided', async ({ mount, page }) => {
        //         // Arrange
        //         await mount(PieTextInput, {
        //             props: {
        //                 assistiveText: 'Assistive text',
        //             } as TextInputProps,
        //         });

        //         // Act
        //         const assistiveText = page.locator(assistiveTextSelector);

        //         // Assert
        //         expect(assistiveText).toBeVisible();
        //         expect(await assistiveText.getAttribute('variant')).toBe('default');
        //         expect(assistiveText).toHaveText('Assistive text');
        //     });

        //     test.describe('Assistive text: Status', () => {
        //         statusTypes.forEach((status) => {
        //             test(`should render the assistive text component with the ${status} variant`, async ({ mount, page }) => {
        //                 // Arrange
        //                 await mount(PieTextInput, {
        //                     props: {
        //                         assistiveText: 'Assistive text',
        //                         status,
        //                     } as TextInputProps,
        //                 });

        //                 // Act
        //                 const assistiveText = page.locator(assistiveTextSelector);

        //                 // Assert
        //                 expect(assistiveText).toBeVisible();
        //                 expect(assistiveText).toHaveAttribute('variant', status);
        //                 expect(assistiveText).toHaveText('Assistive text');
        //             });
        //         });
        //     });

        //     test.describe('Assistive test ID attribute', () => {
        //         test('should contain an ID associated the input element for a11y', async ({ mount, page }) => {
        //             // Arrange
        //             await mount(PieTextInput, {
        //                 props: {
        //                     assistiveText: 'Assistive text',
        //                 } as TextInputProps,
        //             });

        //             // Act
        //             const assistiveText = page.locator(assistiveTextSelector);

        //             // Assert
        //             await expect(assistiveText).toHaveAttribute('id', 'assistive-text');
        //         });
        //     });
        // });

        // test.describe('step', () => {
        //     test.describe('when type is number', () => {
        //         test('should be able to increment the value by the step amount when using the up arrow', async ({ mount, page }) => {
        //             // Arrange
        //             await mount(PieTextInput, {
        //                 props: {
        //                     type: 'number',
        //                     value: '0',
        //                     step: 5,
        //                 } as TextInputProps,
        //             });

        //             // Act
        //             await page.focus('pie-text-input');
        //             await page.keyboard.press('ArrowUp');
        //             await page.keyboard.press('ArrowUp');

        //             // Assert
        //             expect(await page.evaluate(() => document.querySelector('pie-text-input')?.value)).toBe('10');
        //         });

        //         test('should be able to decrement the value by the step amount when using the down arrow', async ({ mount, page }) => {
        //             // Arrange
        //             await mount(PieTextInput, {
        //                 props: {
        //                     type: 'number',
        //                     value: '0',
        //                     step: 5,
        //                 } as TextInputProps,
        //             });

        //             // Act
        //             await page.focus('pie-text-input');
        //             await page.keyboard.press('ArrowDown');
        //             await page.keyboard.press('ArrowDown');

        //             // Assert
        //             expect(await page.evaluate(() => document.querySelector('pie-text-input')?.value)).toBe('-10');
        //         });
        //     });

        //     test.describe('when type is not number', () => {
        //         test('should not be able to increment the value by the step amount when using the up arrow', async ({ mount, page }) => {
        //             // Arrange
        //             await mount(PieTextInput, {
        //                 props: {
        //                     type: 'text',
        //                     value: '0',
        //                     step: 5,
        //                 } as TextInputProps,
        //             });

        //             // Act
        //             await page.focus('pie-text-input');
        //             await page.keyboard.press('ArrowUp');
        //             await page.keyboard.press('ArrowUp');

        //             // Assert
        //             expect(await page.evaluate(() => document.querySelector('pie-text-input')?.value)).toBe('0');
        //         });

        //         test('should not be able to decrement the value by the step amount when using the down arrow', async ({ mount, page }) => {
        //             // Arrange
        //             await mount(PieTextInput, {
        //                 props: {
        //                     type: 'text',
        //                     value: '0',
        //                     step: 5,
        //                 } as TextInputProps,
        //             });

        //             // Act
        //             await page.focus('pie-text-input');
        //             await page.keyboard.press('ArrowDown');
        //             await page.keyboard.press('ArrowDown');

        //             // Assert
        //             expect(await page.evaluate(() => document.querySelector('pie-text-input')?.value)).toBe('0');
        //         });
        //     });
        // });

        // test.describe('min', () => {
        //     test('should be invalid state `rangeUnderflow` if the value is lower than the min', async ({ mount, page }) => {
        //         // Arrange
        //         const component = await mount(PieTextInput, {
        //             props: {
        //                 type: 'number',
        //                 value: '0',
        //                 min: 5,
        //             } as TextInputProps,
        //         });

        //         // Act
        //         await component.type('4');

        //         const isInvalid = await page.evaluate(() => document.querySelector('pie-text-input')?.validity.rangeUnderflow);

        //         // Assert
        //         expect(isInvalid).toBe(true);
        //     });

        //     test('should be valid state if the value is greater than the min', async ({ mount, page }) => {
        //         // Arrange
        //         const component = await mount(PieTextInput, {
        //             props: {
        //                 type: 'number',
        //                 value: '0',
        //                 min: 5,
        //             } as TextInputProps,
        //         });

        //         // Act
        //         await component.type('6');

        //         const isValid = await page.evaluate(() => document.querySelector('pie-text-input')?.validity.valid);

        //         // Assert
        //         expect(isValid).toBe(true);
        //     });
        // });

        // test.describe('max', () => {
        //     test('should be invalid state `rangeOverflow` if the value is greater than the max', async ({ mount, page }) => {
        //         // Arrange
        //         const component = await mount(PieTextInput, {
        //             props: {
        //                 type: 'number',
        //                 value: '0',
        //                 max: 5,
        //             } as TextInputProps,
        //         });

        //         // Act
        //         await component.type('6');

        //         const isInvalid = await page.evaluate(() => document.querySelector('pie-text-input')?.validity.rangeOverflow);

        //         // Assert
        //         expect(isInvalid).toBe(true);
        //     });

        //     test('should be valid state if the value is lower than the max', async ({ mount, page }) => {
        //         // Arrange
        //         const component = await mount(PieTextInput, {
        //             props: {
        //                 type: 'number',
        //                 value: '0',
        //                 max: 5,
        //             } as TextInputProps,
        //         });

        //         // Act
        //         await component.type('4');

        //         const isValid = await page.evaluate(() => document.querySelector('pie-text-input')?.validity.valid);

        //         // Assert
        //         expect(isValid).toBe(true);
        //     });
        // });

        // test.describe('required', () => {
        //     test('should not render a required attribute on the input element if no required provided', async ({ mount }) => {
        //         // Arrange
        //         const component = await mount(PieTextInput);

        //         // Act
        //         const input = component.locator('input');

        //         // Assert
        //         expect((await input.getAttribute('required'))).toBe(null);
        //     });

        //     test('should apply the required prop to the HTML input rendered', async ({ mount }) => {
        //         // Arrange
        //         const component = await mount(PieTextInput, {
        //             props: {
        //                 required: true,
        //             } as TextInputProps,
        //         });

        //         // Act
        //         const input = component.locator('input');

        //         // Assert
        //         expect((await input.getAttribute('required'))).toBe('');
        //     });

        //     test('should be invalid state `valueMissing` if the input is empty and required', async ({ mount, page }) => {
        //         // Arrange
        //         await mount(PieTextInput, {
        //             props: {
        //                 required: true,
        //             } as TextInputProps,
        //         });

        //         // Act
        //         const isInvalid = await page.evaluate(() => document.querySelector('pie-text-input')?.validity.valueMissing);

        //         // Assert
        //         expect(isInvalid).toBe(true);
        //     });

        //     test('should be valid state if the input is not empty and required', async ({ mount, page }) => {
        //         // Arrange
        //         const component = await mount(PieTextInput, {
        //             props: {
        //                 required: true,
        //             } as TextInputProps,
        //         });

        //         // Act
        //         await component.type('test');

        //         const isValid = await page.evaluate(() => document.querySelector('pie-text-input')?.validity.valid);

        //         // Assert
        //         expect(isValid).toBe(true);
        //     });

        //     test('should be valid state if the input has a value prop and required', async ({ mount, page }) => {
        //         // Arrange
        //         await mount(PieTextInput, {
        //             props: {
        //                 required: true,
        //                 value: 'test',
        //             } as TextInputProps,
        //         });

        //         // Act
        //         const isValid = await page.evaluate(() => document.querySelector('pie-text-input')?.validity.valid);

        //         // Assert
        //         expect(isValid).toBe(true);
        //     });

        //     test('should be valid state if the input is empty and required but disabled', async ({ mount, page }) => {
        //         // Arrange
        //         await mount(PieTextInput, {
        //             props: {
        //                 required: true,
        //                 disabled: true,
        //             } as TextInputProps,
        //         });

        //         // Act
        //         const isValid = await page.evaluate(() => document.querySelector('pie-text-input')?.validity.valid);

        //         // Assert
        //         expect(isValid).toBe(true);
        //     });
        });
    });

    // test.describe('Events', () => {
    //     test.describe('input', () => {
    //         test('should emit an event each time the component receives input', async ({ mount, page }) => {
    //             // Arrange
    //             const messages: InputEvent[] = [];
    //             const expectedMessagesLength = 5;

    //             const component = await mount(PieTextInput, {
    //                 on: {
    //                     input: (data: InputEvent) => {
    //                         messages.push(data);
    //                     },
    //                 },
    //             });

    //             const input = component.locator('input');

    //             // Act
    //             await input.type('test');
    //             await page.keyboard.press('Backspace');

    //             // Assert
    //             expect(messages.length).toEqual(expectedMessagesLength);
    //         });

    //         test('should provide the event target value for event listeners', async ({ page }) => {
    //             // Arrange
    //             const expectedMessage = 'tes';

    //             await page.setContent(`
    //                 <pie-text-input type="text"></pie-text-input>
    //                 <div id="output"></div>
    //             `);

    //             await page.evaluate(() => {
    //                 const output = (document.getElementById('output') as HTMLDivElement);
    //                 const input = document.querySelector('pie-text-input');

    //                 input?.addEventListener('input', (event: Event) => {
    //                     const currentValue = (event.target as HTMLInputElement).value;
    //                     output.innerText = currentValue;
    //                 });
    //             });

    //             const input = page.locator('pie-text-input');

    //             // Act
    //             await input.type('test');
    //             await page.keyboard.press('Backspace');

    //             const output = page.locator('#output');

    //             // Assert
    //             expect(await output.innerText()).toEqual(expectedMessage);
    //         });

    //         test('should correctly handle input including backspaces in the event.data property', async ({ page }) => {
    //             // Arrange
    //             const expectedMessage = 'tes';

    //             await page.setContent(`
    //                 <pie-text-input type="text"></pie-text-input>
    //                 <div id="output"></div>
    //             `);

    //             await page.evaluate(() => {
    //                 const output = document.getElementById('output') as HTMLDivElement;
    //                 const input = document.querySelector('pie-text-input');

    //                 input?.addEventListener('input', (event) => {
    //                     const { data } = event as InputEvent;
    //                     const currentValue = (event.target as HTMLInputElement).value;

    //                     // If data is null, it's a deletion, so update the output to match the input's value
    //                     if (data === null) {
    //                         output.innerText = currentValue;
    //                     } else {
    //                         // For additions, append the data character
    //                         output.innerText += data;
    //                     }
    //                 });
    //             });

    //             const input = page.locator('pie-text-input');

    //             // Act
    //             await input.type('test');
    //             await page.keyboard.press('Backspace');

    //             // Assert
    //             expect(await page.locator('#output').innerText()).toEqual(expectedMessage);
    //         });
    //     });

    //     test.describe('change', () => {
    //         test('should dispatch a change event when the input value changes', async ({ mount, page }) => {
    //             // Arrange
    //             const messages: CustomEvent[] = [];

    //             await mount(PieTextInput, {
    //                 on: {
    //                     change: (data: CustomEvent) => {
    //                         messages.push(data);
    //                     },
    //                 },
    //             });

    //             const input = page.locator('pie-text-input');

    //             // Act
    //             await input.type('test');
    //             await page.keyboard.press('Tab');

    //             // Assert
    //             expect(messages.length).toEqual(1);
    //         });

    //         test('should dispatch a custom event that contains the original native event', async ({ mount, page }) => {
    //             // Arrange
    //             const messages: CustomEvent[] = [];
    //             const expectedMessages = [{ sourceEvent: { isTrusted: true } }];

    //             await mount(PieTextInput, {
    //                 on: {
    //                     change: (data: CustomEvent) => {
    //                         messages.push(data);
    //                     },
    //                 },
    //             });

    //             const input = page.locator('pie-text-input');

    //             // Act
    //             await input.type('test');
    //             await page.keyboard.press('Tab'); // Change events on inputs are triggered when they lose focus after the value was changed

    //             // Assert
    //             expect(messages).toStrictEqual(expectedMessages);
    //         });
    //     });
    // });

    // test.describe('Slots', () => {
    //     test.describe('leadingText', () => {
    //         test('should render the leading slot content', async ({ mount }) => {
    //             // Arrange
    //             const component = await mount(PieTextInput, {
    //                 slots: {
    //                     leadingText: '<icon-placeholder id="leadingText"></icon-placeholder>',
    //                 },
    //             });

    //             // Act
    //             const leadingSlot = component.locator('#leadingText');

    //             // Assert
    //             expect(leadingSlot).toBeVisible();
    //         });
    //     });

    //     test.describe('trailingText', () => {
    //         test('should render the trailingText slot content', async ({ mount }) => {
    //             // Arrange
    //             const component = await mount(PieTextInput, {
    //                 slots: {
    //                     trailingText: '<icon-placeholder id="trailingText"></icon-placeholder>',
    //                 },
    //             });

    //             // Act
    //             const trailingSlot = component.locator('#trailingText');

    //             // Assert
    //             expect(trailingSlot).toBeVisible();
    //         });
    //     });

    //     test.describe('leadingIcon', () => {
    //         test('should render the leadingIcon slot content', async ({ mount }) => {
    //             // Arrange
    //             const component = await mount(PieTextInput, {
    //                 slots: {
    //                     leadingIcon: '<icon-placeholder id="leadingIcon"></icon-placeholder>',
    //                 },
    //             });

    //             // Act
    //             const leadingSlot = component.locator('#leadingIcon');

    //             // Assert
    //             expect(leadingSlot).toBeVisible();
    //         });
    //     });

    //     test.describe('trailingIcon', () => {
    //         test('should render the trailingIcon slot content', async ({ mount }) => {
    //             // Arrange
    //             const component = await mount(PieTextInput, {
    //                 slots: {
    //                     trailingIcon: '<icon-placeholder id="trailingIcon"></icon-placeholder>',
    //                 },
    //             });

    //             // Act
    //             const trailingSlot = component.locator('#trailingIcon');

    //             // Assert
    //             expect(trailingSlot).toBeVisible();
    //         });
    //     });

    //     test.describe('leading and trailing', () => {
    //         test('should render both the leading and trailing slot content', async ({ mount }) => {
    //             // Arrange
    //             const component = await mount(PieTextInput, {
    //                 slots: {
    //                     leadingIcon: '<icon-placeholder id="leadingIcon"></icon-placeholder>',
    //                     trailingText: '<span id="trailingText">#</span>',
    //                 },
    //             });

    //             // Act
    //             const leadingSlot = component.locator('#leadingIcon');
    //             const trailingSlot = component.locator('#trailingText');

    //             // Assert
    //             expect(leadingSlot).toBeVisible();
    //             expect(trailingSlot).toBeVisible();
    //         });
    //     });
    // });

    // test.describe('Form integration', () => {
    //     test('should correctly set the value of username in the FormData object when submitted', async ({ page }) => {
    //         // Arrange
    //         await page.setContent(`
    //             <form id="testForm" action="/foo" method="POST">
    //                 <pie-text-input type="text" name="username"></pie-text-input>
    //                 <button type="submit">Submit</button>
    //             </form>
    //             <div id="formDataJson""></div>
    //         `);

    //         await setupFormDataExtraction(page, '#testForm', '#formDataJson');

    //         // Act
    //         await page.locator('pie-text-input').type('test');
    //         await page.click('button[type="submit"]');
    //         const formDataObj = await getFormDataObject(page, '#formDataJson');

    //         // Assert
    //         expect(formDataObj.username).toBe('test');
    //     });

    //     test('should submit the updated value if the value prop is changed programmatically', async ({ page }) => {
    //         // Arrange
    //         await page.setContent(`
    //             <form id="testForm" action="/foo" method="POST">
    //                 <pie-text-input type="text" name="username"></pie-text-input>
    //                 <button type="submit">Submit</button>
    //             </form>
    //             <div id="formDataJson""></div>
    //         `);

    //         await setupFormDataExtraction(page, '#testForm', '#formDataJson');

    //         // Act
    //         await page.locator('pie-text-input').type('test');

    //         await page.evaluate(() => {
    //             const input = document.querySelector('pie-text-input') as PieTextInput;
    //             input.value = 'test2';
    //         });

    //         await page.click('button[type="submit"]');

    //         const formDataObj = await getFormDataObject(page, '#formDataJson');

    //         // Assert
    //         expect(formDataObj.username).toBe('test2');
    //     });

    //     test('should correctly reset the input value when the form is reset', async ({ page }) => {
    //         // Arrange
    //         await page.setContent(`
    //             <form id="testForm" action="/foo" method="POST">
    //                 <pie-text-input type="text" name="username"></pie-text-input>
    //                 <button type="reset">Reset</button>
    //             </form>
    //         `);

    //         // Act & Assert
    //         await page.locator('pie-text-input').type('test');
    //         expect(await page.evaluate(() => document.querySelector('pie-text-input')?.value)).toBe('test');

    //         await page.click('button[type="reset"]');
    //         expect(await page.evaluate(() => document.querySelector('pie-text-input')?.value)).toBe('');
    //     });

    //     test('should not submit the value for disabled inputs', async ({ page }) => {
    //         // Arrange
    //         await page.setContent(`
    //             <form id="testForm" action="/foo" method="POST">
    //                 <pie-text-input type="text" name="username" value="excluded" disabled></pie-text-input>
    //                 <pie-text-input type="text" name="email" value="test@test.com"></pie-text-input>
    //                 <button type="submit">Submit</button>
    //             </form>
    //             <div id="formDataJson""></div>
    //         `);

    //         await setupFormDataExtraction(page, '#testForm', '#formDataJson');

    //         // Act
    //         await page.click('button[type="submit"]');

    //         const formDataObj = await getFormDataObject(page, '#formDataJson');

    //         // Assert
    //         expect(formDataObj).toStrictEqual({ email: 'test@test.com' });
    //     });

    //     test('should not submit the value inside a disabled fieldset', async ({ page }) => {
    //         // Arrange
    //         await page.setContent(`
    //             <form id="testForm" action="/foo" method="POST">
    //                 <fieldset disabled>
    //                     <pie-text-input type="text" name="username" value="excluded"></pie-text-input>
    //                 </fieldset>
    //                 <pie-text-input type="text" name="email" value="included@test.com"></pie-text-input>
    //                 <button type="submit">Submit</button>
    //             </form>
    //             <div id="formDataJson""></div>
    //         `);

    //         await setupFormDataExtraction(page, '#testForm', '#formDataJson');

    //         // Act
    //         await page.click('button[type="submit"]');

    //         const formDataObj = await getFormDataObject(page, '#formDataJson');

    //         // Assert
    //         expect(formDataObj).toStrictEqual({
    //             email: 'included@test.com',
    //         });
    //     });
    // });

    // test.describe('Attributes:', () => {
    //     test.describe('aria-describedby', () => {
    //         test.describe('when `assistiveText` is not defined', () => {
    //             test('should not render the attribute', async ({ mount }) => {
    //                 // Arrange
    //                 const component = await mount(PieTextInput);

    //                 // Act
    //                 const input = component.locator('input');

    //                 const componentAttribute = await input.getAttribute('aria-describedby');

    //                 // Assert
    //                 expect(componentAttribute).toBeNull();
    //             });
    //         });

    //         test.describe('when `assistiveText` is defined', () => {
    //             test('should render the attribute correctly with the correct value', async ({ mount }) => {
    //                 // Arrange
    //                 const component = await mount(PieTextInput, {
    //                     props: {
    //                         assistiveText: 'Some useful message',
    //                     } as TextInputProps,
    //                 });

    //                 // Act
    //                 const input = component.locator('input');

    //                 const componentAttribute = await input.getAttribute('aria-describedby');

    //                 // Assert
    //                 expect(componentAttribute).toBe('assistive-text');
    //             });
    //         });
    //     });

    //     test.describe('aria-invalid', () => {
    //         test.describe('when the component status is set to `error`', () => {
    //             test('should render the `aria-invalid` attribute', async ({ mount }) => {
    //                 // Arrange
    //                 const component = await mount(PieTextInput, {
    //                     props: {
    //                         status: 'error',
    //                     } as TextInputProps,
    //                 });

    //                 // Act
    //                 const input = component.locator('input');

    //                 const componentAttribute = await input.getAttribute('aria-invalid');

    //                 // Assert
    //                 expect(componentAttribute).toBeDefined();
    //             });
    //         });

    //         statusTypes.filter((status) => status !== 'error').forEach((status) => {
    //             test.describe(`when the component status is set to "${status}"`, () => {
    //                 test('should render the `aria-invalid` with a value of `false`', async ({ mount }) => {
    //                     // Arrange
    //                     const component = await mount(PieTextInput, {
    //                         props: { status } as TextInputProps,
    //                     });

    //                     // Act
    //                     const input = component.locator('input');

    //                     const componentAttribute = await input.getAttribute('aria-invalid');

    //                     // Assert
    //                     expect(componentAttribute).toBe('false');
    //                 });
    //             });
    //         });
    //     });

    //     test.describe('aria-errormessage', () => {
    //         test.describe('when the component status is set to `error`', () => {
    //             test('should render the `aria-errormessage` attribute', async ({ mount }) => {
    //                 // Arrange
    //                 const component = await mount(PieTextInput, {
    //                     props: {
    //                         status: 'error',
    //                     } as TextInputProps,
    //                 });

    //                 // Act
    //                 const input = component.locator('input');

    //                 const componentAttribute = await input.getAttribute('aria-errormessage');

    //                 // Assert
    //                 expect(componentAttribute).toBeDefined();
    //             });
    //         });

    //         statusTypes.filter((status) => status !== 'error').forEach((status) => {
    //             test.describe(`when the component status is set to "${status}"`, () => {
    //                 test('should not render the `aria-errormessage` attribute', async ({ mount }) => {
    //                     // Arrange
    //                     const component = await mount(PieTextInput, {
    //                         props: { status } as TextInputProps,
    //                     });

    //                     // Act
    //                     const input = component.locator('input');

    //                     const componentAttribute = await input.getAttribute('aria-errormessage');

    //                     // Assert
    //                     expect(componentAttribute).toBeNull();
    //                 });
    //             });
    //         });
    //     });
    // });
