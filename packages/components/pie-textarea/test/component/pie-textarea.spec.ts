import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type PieTextarea, type TextareaProps } from '../../src/index.ts';

import { textArea } from '../helpers/page-objects/selectors.ts';

import { statusTypes } from '../../src/defs.ts';

test.describe.skip('PieTextarea - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const textAreaPage = new BasePage(page, 'textarea');
        await textAreaPage.load();

        // Act
        const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

        // Assert
        await expect(textarea).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('disabled', () => {
            test.describe('when true', () => {
                test('should disable the component', async ({ page }) => {
                    // Arrange
                    const textAreaPage = new BasePage(page, 'textarea');
                    const props: Partial<TextareaProps> = {
                        disabled: true,
                    };

                    await textAreaPage.load({ ...props });

                    // Act
                    const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                    // Assert
                    await expect(textarea).toBeDisabled();
                });

                test('should not be able to focus the component', async ({ page }) => {
                    // Arrange
                    const textAreaPage = new BasePage(page, 'textarea');
                    const props: Partial<TextareaProps> = {
                        disabled: true,
                    };

                    await textAreaPage.load({ ...props });

                    // Act
                    const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
                    await textarea.focus();

                    // Assert
                    await expect(textarea).not.toBeFocused();
                });
            });

            test.describe('when false', () => {
                test('should not disable the component', async ({ page }) => {
                    // Arrange
                    const textAreaPage = new BasePage(page, 'textarea');
                    await textAreaPage.load();

                    // Act
                    const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                    // Assert
                    await expect(textarea).not.toBeDisabled();
                });

                test('should still be able to focus the component', async ({ page }) => {
                    // Arrange
                    const textAreaPage = new BasePage(page, 'textarea');
                    await textAreaPage.load();

                    // Act
                    const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
                    await textarea.focus();

                    // Assert
                    await expect(textarea).toBeFocused();
                });
            });
        });

        test.describe('value', () => {
            test('should default to an empty string if no value property is provided', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).toHaveValue('');
            });

            test('the value property should be applied to the rendered HTML textarea element', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    value: 'testValue',
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).toHaveValue('testValue');
            });
        });

        test.describe('name', () => {
            test('textarea element should not include a name attribute if no name is provided', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).not.toHaveAttribute('name');
            });

            test('should apply the name property to the rendered HTML textarea element', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    name: 'testName',
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).toHaveAttribute('name', 'testName');
            });
        });

        test.describe('defaultValue', () => {
            test('should apply the `defaultValue` property to the rendered HTML textarea element', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    defaultValue: 'testDefaultValue',
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.locator(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).toHaveAttribute('defaultValue', 'testDefaultValue');
            });
        });

        test.describe('autocomplete', () => {
            test('should not render an autocomplete attribute on the textarea element if no autocomplete is provided', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).not.toHaveAttribute('autocomplete');
            });

            test('autocomplete property should be applied to the rendered HTML textarea element', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    autocomplete: 'on',
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).toHaveAttribute('autocomplete', 'on');
            });
        });

        test.describe('autoFocus', () => {
            test('should focus the component when the autoFocus property is `true`', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    autoFocus: true,
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).toBeFocused();
            });

            test('should not focus the component when the autoFocus property is not provided', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).not.toBeFocused();
            });
        });

        test.describe('readonly', () => {
            test('should be able to edit the component value when readonly property is set to `false`', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    readonly: false,
                    value: 'testValue',
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
                await textarea.pressSequentially(' newValue');

                // Assert
                await expect(textarea).toHaveValue('testValue newValue');
            });

            test('should not be able to edit the component value when readonly property is set to `true`', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    readonly: true,
                    value: 'testValue',
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
                await textarea.pressSequentially('newValue');

                // Assert
                await expect(textarea).toHaveValue('testValue');
            });
        });

        test.describe('required', () => {
            test('should not render the required property on the textarea element if no required property is provided', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).not.toHaveAttribute('required');
            });

            test('should apply the property property to the HTML textarea rendered', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    required: true,
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).toHaveAttribute('required', '');
            });

            test('should be in an invalid `valueMissing` state if the textarea is empty and required property is set to `true`', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    required: true,
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
                const isInvalid = await textarea.evaluate((el) => (el as HTMLInputElement).validity.valueMissing);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be in a valid state if the textarea is not empty and required property is set to `true`', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    required: true,
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
                await textarea.pressSequentially('test');

                const isValid = await textarea.evaluate((el) => (el as HTMLInputElement).validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the textarea has a value property and required property is set to `true`', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    required: true,
                    value: 'testValue',
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
                const isValid = await textarea.evaluate((el) => (el as HTMLInputElement).validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the textarea is empty and required property is set to `true`, but textarea is disabled', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    required: true,
                    disabled: true,
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
                const isValid = await textarea.evaluate((el) => (el as HTMLInputElement).validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });

        test.describe('assistiveText', () => {
            test('should NOT render the assistive-text component if this property is not provided', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                // Act
                const assistiveText = page.getByTestId(textArea.selectors.assistiveText.dataTestId);

                // Assert
                expect(assistiveText).not.toBeVisible();
            });

            test('should apply the `default` variant attribute if no status is provided', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    assistiveText: 'Assistive text',
                };

                await textAreaPage.load({ ...props });

                // Act
                const assistiveText = page.getByTestId(textArea.selectors.assistiveText.dataTestId);

                // Assert
                await expect(assistiveText).toBeVisible();
                await expect(assistiveText).toHaveAttribute('variant', 'default');
                await expect(assistiveText).toHaveText('Assistive text');
            });

            test.describe('Assistive text: Status', () => {
                statusTypes.forEach((status) => {
                    test(`should render the assistive-text component with the ${status} variant`, async ({ page }) => {
                        // Arrange
                        const textAreaPage = new BasePage(page, 'textarea');
                        const props: Partial<TextareaProps> = {
                            assistiveText: 'Assistive text',
                            status,
                        };

                        await textAreaPage.load({ ...props });

                        // Act
                        const assistiveText = page.getByTestId(textArea.selectors.assistiveText.dataTestId);

                        // Assert
                        await expect(assistiveText).toBeVisible();
                        await expect(assistiveText).toHaveAttribute('variant', status);
                        await expect(assistiveText).toHaveText('Assistive text');
                    });
                });
            });

            test.describe('Assistive text: ID attribute', () => {
                test('should contain an ID associated the textarea element for a11y', async ({ page }) => {
                    // Arrange
                    const textAreaPage = new BasePage(page, 'textarea');
                    const props: Partial<TextareaProps> = {
                        assistiveText: 'Assistive text',
                    };

                    await textAreaPage.load({ ...props });

                    // Act
                    const assistiveText = page.getByTestId(textArea.selectors.assistiveText.dataTestId);

                    // Assert
                    await expect(assistiveText).toHaveAttribute('id', 'assistive-text');
                });
            });
        });

        test.describe('placeholder', () => {
            test('should not render a placeholder attribute on the textarea element if no placeholder provided', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).toHaveAttribute('placeholder', '');
            });

            test('should apply the placeholder prop to the HTML textarea rendered', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                const props: Partial<TextareaProps> = {
                    placeholder: 'Test Placeholder',
                };

                await textAreaPage.load({ ...props });

                // Act
                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Assert
                await expect(textarea).toHaveAttribute('placeholder', 'Test Placeholder');
            });
        });
    });

    test.describe('Form integration', () => {
        test('should correctly set the value of a description field in the FormData object when the form is submitted', async ({ page }) => {
            // Arrange
            const textAreaPage = new BasePage(page, 'textarea--example-form');
            const props: Partial<TextareaProps> = {
                placeholder: 'Test Placeholder',
            };

            await textAreaPage.load({ ...props });

            // Act
            const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
            await textarea.fill('testValue');
            await page.locator('pie-button', { hasText: 'Submit' }).click();

            // Assert
            const output = page.locator('#formDataOutput');
            await expect(output).toHaveText('{"description":"testValue"}');
        });

        test('should submit the updated value if the value property is changed programmatically', async ({ page }) => {
            // Arrange
            const textAreaPage = new BasePage(page, 'textarea--example-form');
            await textAreaPage.load();

            // Act
            const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
            await textarea.fill('testValue');

            await page.evaluate(() => {
                const textarea = document.querySelector('pie-textarea') as PieTextarea;
                textarea.value = 'newTestValue';
            });

            await page.locator('pie-button', { hasText: 'Submit' }).click();

            // Assert
            const output = page.locator('#formDataOutput');
            await expect(output).toHaveText('{"description":"newTestValue"}');
        });

        test('should correctly reset the textarea value when the form is reset', async ({ page }) => {
            // Arrange
            const textAreaPage = new BasePage(page, 'textarea--example-form');
            await textAreaPage.load();

            const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

            // Act & Assert
            await textarea.fill('testValue');
            await expect(textarea).toHaveValue('testValue');

            await page.locator('pie-button', { hasText: 'Reset' }).click();
            await expect(textarea).toHaveValue('');
        });

        test('should correctly reset the textarea value to the `defaultValue` if one is provided when the form is reset', async ({ page }) => {
            // Arrange
            const textAreaPage = new BasePage(page, 'textarea--example-form');
            const props: Partial<TextareaProps> = {
                defaultValue: 'foo',
            };

            await textAreaPage.load({ ...props });

            // Act & Assert
            const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
            await textarea.fill('test');

            await page.locator('pie-button', { hasText: 'Reset' }).click();
            await expect(textarea).toHaveValue('foo');
        });

        test('should NOT submit the value for disabled textarea elements', async ({ page }) => {
            // Arrange
            const textAreaPage = new BasePage(page, 'textarea--example-form');
            const props: Partial<TextareaProps & { showAdditionalField?: boolean }> = {
                disabled: true,
                showAdditionalField: true,
            };

            await textAreaPage.load({ ...props });

            // Act
            await page.locator('pie-button', { hasText: 'Submit' }).click();

            // Assert
            const output = page.locator('#formDataOutput');
            await expect(output).toHaveText('{"comment":"commentsTextareaValue"}');
        });

        test('should NOT submit form when pressing Enter on a textarea element', async ({ page }) => {
            // Arrange
            const textAreaPage = new BasePage(page, 'textarea--example-form');
            await textAreaPage.load();

            // Act
            const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);
            await textarea.pressSequentially('testValue');

            await page.keyboard.press('Enter');

            // Assert
            const output = page.locator('#formDataOutput');
            await expect(output).toBeHidden();
        });
    });

    test.describe('Events', () => {
        test.describe('input', () => {
            test('should emit an event each time the component receives input value', async ({ page }) => {
                // Arrange
                const consoleMessages: string[] = [];
                const expectedMessagesLength = 2;

                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                // Set up a listener for console messages
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Act
                await textarea.fill('testValue');
                await page.keyboard.press('Backspace');

                // Assert
                expect(consoleMessages.length).toEqual(expectedMessagesLength);
            });

            test('should provide the event target value for event listeners', async ({ page }) => {
                // Arrange
                const expectedMessage = 'tes';

                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Act
                await textarea.fill('test');
                await page.keyboard.press('Backspace');

                // Assert
                const output = page.locator('#output');
                await expect(output).toHaveText(expectedMessage);
            });

            test('should correctly handle textarea including backspaces in the event.data property', async ({ page }) => {
                // Arrange
                const expectedMessage = 'tes';

                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Act
                await textarea.fill('test');
                await page.keyboard.press('Backspace');

                // Assert
                const output = page.locator('#output');
                await expect(output).toHaveText(expectedMessage);
            });
        });

        test.describe('change', () => {
            test('should dispatch a change event when the value of the textarea changes', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                // Set up a listener for console messages
                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Act
                await textarea.fill('testValue');
                await page.keyboard.press('Tab');

                // Assert
                expect(consoleMessages).toContain('input event received {"isTrusted":true}');
            });

            test('should dispatch a custom event that contains the original native event', async ({ page }) => {
                // Arrange
                const textAreaPage = new BasePage(page, 'textarea');
                await textAreaPage.load();

                const consoleMessages: string[] = [];

                // Set up a listener for console messages
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                // Act
                await textarea.fill('testValue');
                await page.keyboard.press('Tab'); // Change events on inputs are triggered when they lose focus after the value was changed

                // Assert
                expect(consoleMessages).toContain('input event received {"isTrusted":true}');
            });
        });
    });

    test.describe('Attributes', () => {
        test.describe('aria-describedby', () => {
            test.describe('when `assistiveText` is NOT defined', () => {
                test('should not render the attribute', async ({ page }) => {
                    // Arrange
                    const textAreaPage = new BasePage(page, 'textarea');
                    await textAreaPage.load();

                    // Act
                    const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                    // Assert
                    await expect(textarea).not.toHaveAttribute('aria-describedby');
                });
            });

            test.describe('when `assistiveText` is defined', () => {
                test('should render the attribute correctly with the correct value', async ({ page }) => {
                    // Arrange
                    const textAreaPage = new BasePage(page, 'textarea');
                    const props: Partial<TextareaProps> = {
                        assistiveText: 'Some useful message',
                    };
                    await textAreaPage.load({ ...props });

                    // Act
                    const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                    // Assert
                    await expect(textarea).toHaveAttribute('aria-describedby', 'assistive-text');
                });
            });
        });

        test.describe('aria-invalid', () => {
            test.describe('when the component status is set to `error`', () => {
                test('should render the `aria-invalid` attribute', async ({ page }) => {
                    // Arrange
                    const textAreaPage = new BasePage(page, 'textarea');
                    const props: Partial<TextareaProps> = {
                        status: 'error',
                    };

                    await textAreaPage.load({ ...props });

                    // Act
                    const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                    // Assert
                    await expect(textarea).toHaveAttribute('aria-invalid', 'true');
                });
            });

            statusTypes.filter((status) => status !== 'error').forEach((status) => {
                test.describe(`when the component status is set to "${status}"`, () => {
                    test('should render the `aria-invalid` with a value of `false`', async ({ page }) => {
                        // Arrange
                        const textAreaPage = new BasePage(page, 'textarea');
                        const props: Partial<TextareaProps> = {
                            status,
                        };

                        await textAreaPage.load({ ...props });

                        // Act
                        const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                        // Assert
                        await expect(textarea).toHaveAttribute('aria-invalid', 'false');
                    });
                });
            });
        });

        test.describe('aria-errormessage', () => {
            test.describe('when the component status is set to `error`', () => {
                test('should render the `aria-errormessage` attribute', async ({ page }) => {
                    // Arrange
                    const textAreaPage = new BasePage(page, 'textarea');
                    const props: Partial<TextareaProps> = {
                        status: 'error',
                    };

                    await textAreaPage.load({ ...props });

                    // Act
                    const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                    // Assert
                    await expect(textarea).toHaveAttribute('aria-errormessage');
                });
            });

            statusTypes.filter((status) => status !== 'error').forEach((status) => {
                test.describe(`when the component status is set to "${status}"`, () => {
                    test('should not render the `aria-errormessage` attribute', async ({ page }) => {
                        // Arrange
                        const textAreaPage = new BasePage(page, 'textarea');
                        const props: Partial<TextareaProps> = {
                            status,
                        };

                        await textAreaPage.load({ ...props });

                        // Act
                        const textarea = page.getByTestId(textArea.selectors.textArea.dataTestId);

                        // Assert
                        await expect(textarea).not.toHaveAttribute('aria-errormessage');
                    });
                });
            });
        });
    });
});
