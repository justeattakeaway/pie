import { test, expect } from '@playwright/test';
import { CheckboxDefaultPage } from '../helpers/page-object/pie-checkbox-default.page.ts';
import { CheckboxFormPage } from '../helpers/page-object/pie-checkbox-form.page.ts';
import { CheckboxFieldsetFormPage } from '../helpers/page-object/pie-checkbox-fieldset-form.page.ts';
import type { PieCheckbox } from '../../src/index.ts';
import type { CheckboxProps } from '../../src/defs.ts';

test.describe('PieCheckbox - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const checkboxDefaultPage = new CheckboxDefaultPage(page);
        await checkboxDefaultPage.load();

        // Assert
        await expect(checkboxDefaultPage.checkboxComponent.componentLocator).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('value', () => {
            test('should default to "on" string if no value prop provided', async ({ page }) => {
                // Arrange
                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load();

                // Assert
                await expect(checkboxDefaultPage.checkboxComponent.inputLocator).toHaveValue('on');
            });

            test('should apply the value attr to the checkbox', async ({ page }) => {
                // Arrange
                const props: CheckboxProps = {
                    value: 'test',
                };

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load({ ...props });

                // Assert
                await expect(checkboxDefaultPage.checkboxComponent.inputLocator).toHaveValue('test');
            });
        });

        test.describe('name', () => {
            test('should not render a name attr on the checkbox element if no name provided', async ({ page }) => {
                // Arrange
                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load();

                // Act - Manually remove the attribute as Storybook control causes it to be set, even though default value is '';
                await page.evaluate(async () => {
                    const checkbox = document.querySelector('pie-checkbox');
                    if (!checkbox) {
                        throw new Error('Checkbox not found');
                    }
                    return checkbox.removeAttribute('name');
                });

                // Assert
                await expect(checkboxDefaultPage.checkboxComponent.inputLocator).not.toHaveAttribute('name');
            });

            test('should apply the name attr to the checkbox', async ({ page }) => {
                // Arrange
                const props: CheckboxProps = {
                    name: 'test',
                };

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load({ ...props });

                // Assert
                await expect(checkboxDefaultPage.checkboxComponent.inputLocator).toHaveAttribute('name', 'test');
            });
        });

        test.describe('checked', () => {
            test('should default to false', async ({ page }) => {
                // Arrange
                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load();

                // Assert
                await expect(checkboxDefaultPage.checkboxComponent.inputLocator).not.toBeChecked();
            });

            test('should be unchecked if the checked prop is false', async ({ page }) => {
                // Arrange
                const props: CheckboxProps = {
                    checked: false,
                };

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load({ ...props });

                // Assert
                await expect(checkboxDefaultPage.checkboxComponent.inputLocator).not.toBeChecked();
            });

            test('should be checked if the checked prop is true', async ({ page }) => {
                // Arrange
                const props: CheckboxProps = {
                    checked: true,
                };

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load({ ...props });

                // Assert
                await expect(checkboxDefaultPage.checkboxComponent.inputLocator).toBeChecked();
            });
        });

        test.describe('disabled', () => {
            test.describe('when true', () => {
                test('should disable the component', async ({ page }) => {
                    // Arrange
                    const props: CheckboxProps = {
                        disabled: true,
                    };

                    const checkboxDefaultPage = new CheckboxDefaultPage(page);
                    await checkboxDefaultPage.load({ ...props });

                    // Assert
                    await expect(checkboxDefaultPage.checkboxComponent.inputLocator).toBeDisabled();
                });

                test('should not be able to focus the component', async ({ page }) => {
                    // Arrange
                    const props: CheckboxProps = {
                        disabled: true,
                    };

                    const checkboxDefaultPage = new CheckboxDefaultPage(page);
                    await checkboxDefaultPage.load({ ...props });

                    // Act
                    await checkboxDefaultPage.checkboxComponent.inputLocator.focus();

                    // Assert
                    await expect(checkboxDefaultPage.checkboxComponent.inputLocator).not.toBeFocused();
                });
            });

            test.describe('when not provided', () => {
                test('should not disable the component', async ({ page }) => {
                    // Arrange
                    const checkboxDefaultPage = new CheckboxDefaultPage(page);
                    await checkboxDefaultPage.load();

                    // Assert
                    await expect(checkboxDefaultPage.checkboxComponent.inputLocator).not.toBeDisabled();
                });

                test('should be able to focus the component', async ({ page }) => {
                    // Arrange
                    const checkboxDefaultPage = new CheckboxDefaultPage(page);
                    await checkboxDefaultPage.load();

                    // Act
                    await checkboxDefaultPage.checkboxComponent.inputLocator.focus();

                    // Assert
                    await expect(checkboxDefaultPage.checkboxComponent.inputLocator).toBeFocused();
                });
            });
        });

        test.describe('required', () => {
            test('should not render a required attribute if the required prop isn\'t provided', async ({ page }) => {
                // Arrange
                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load();

                // Assert
                await expect(checkboxDefaultPage.checkboxComponent.inputLocator).not.toHaveAttribute('required');
            });

            test('should apply the required prop to the HTML input rendered', async ({ page }) => {
                // Arrange
                const props: CheckboxProps = {
                    required: true,
                };

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load({ ...props });

                // Assert
                await expect(checkboxDefaultPage.checkboxComponent.inputLocator).toHaveAttribute('required');
            });

            test('should be in a valid state if the checkbox is required and checked', async ({ page }) => {
                // Arrange
                const props: CheckboxProps = {
                    checked: true,
                    required: true,
                };

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load({ ...props });

                // Assert
                const isValid = await checkboxDefaultPage.checkboxComponent.isValid();
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the checkbox is required and checked manually', async ({ page }) => {
                // Arrange
                const props: CheckboxProps = {
                    required: true,
                    checked: false,
                };

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load({ ...props });

                // Act
                await checkboxDefaultPage.checkboxComponent.labelLocator.click();

                // Assert
                const isValid = await checkboxDefaultPage.checkboxComponent.isValid();
                expect(isValid).toBe(true);
            });

            test('should be in an invalid state if the checkbox is required but unchecked', async ({ page }) => {
                // Arrange
                const props: CheckboxProps = {
                    required: true,
                    checked: false,
                };

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load({ ...props });

                // Assert
                const isValid = await checkboxDefaultPage.checkboxComponent.isValid();
                expect(isValid).toBe(false);
            });

            test('should be in an invalid state if the checkbox is required and unchecked manually', async ({ page }) => {
                // Arrange
                const props: CheckboxProps = {
                    required: true,
                    checked: true,
                };

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load({ ...props });

                // Act
                await checkboxDefaultPage.checkboxComponent.labelLocator.click();

                // Assert
                const isValid = await checkboxDefaultPage.checkboxComponent.isValid();
                expect(isValid).toBe(false);
            });

            test('should be in a valid state if the checkbox is checked but not required', async ({ page }) => {
                // Arrange
                const props: CheckboxProps = {
                    required: false,
                    checked: true,
                };

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load({ ...props });

                // Assert
                const isValid = await checkboxDefaultPage.checkboxComponent.isValid();
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the checkbox is unchecked and not required', async ({ page }) => {
                // Arrange
                const props: CheckboxProps = {
                    required: false,
                    checked: false,
                };

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load({ ...props });

                // Assert
                const isValid = await checkboxDefaultPage.checkboxComponent.isValid();
                expect(isValid).toBe(true);
            });
        });

        test.describe('assistiveText', () => {
            test('should not render the assistive text component if the prop is not provided', async ({ page }) => {
                // Arrange
                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load();

                // Assert
                await expect(checkboxDefaultPage.checkboxComponent.assistiveTextLocator).not.toBeVisible();
            });

            test.describe('Assistive test ID attribute', () => {
                test('should contain an ID associated with the checkbox element for a11y', async ({ page }) => {
                    // Arrange
                    const props: CheckboxProps = {
                        assistiveText: 'Assistive text',
                    };

                    const checkboxDefaultPage = new CheckboxDefaultPage(page);
                    await checkboxDefaultPage.load({ ...props });

                    // Act
                    const checkbox = checkboxDefaultPage.checkboxComponent.inputLocator;
                    const assistiveText = checkboxDefaultPage.checkboxComponent.assistiveTextLocator;

                    // Assert
                    await expect(assistiveText).toHaveAttribute('id', 'assistive-text');
                    await expect(checkbox).toHaveAttribute('aria-describedby', 'assistive-text');
                });
            });
        });
    });

    test.describe('Attributes:', () => {
        test.describe('aria-describedby', () => {
            test.describe('when `assistiveText` is not defined', () => {
                test('should not render the attribute', async ({ page }) => {
                    // Arrange
                    const checkboxDefaultPage = new CheckboxDefaultPage(page);
                    await checkboxDefaultPage.load();

                    // Act
                    const checkbox = checkboxDefaultPage.checkboxComponent.inputLocator;

                    // Assert
                    await expect(checkbox).not.toHaveAttribute('aria-describedby');
                });
            });

            test.describe('when `assistiveText` is defined', () => {
                test('should render the attribute correctly with the correct value', async ({ page }) => {
                    // Arrange
                    const props: CheckboxProps = {
                        assistiveText: 'Assistive text',
                    };

                    const checkboxDefaultPage = new CheckboxDefaultPage(page);
                    await checkboxDefaultPage.load({ ...props });

                    // Act
                    const checkbox = checkboxDefaultPage.checkboxComponent.inputLocator;

                    // Assert
                    await expect(checkbox).toHaveAttribute('aria-describedby', 'assistive-text');
                });
            });
        });
    });

    test.describe('Events', () => {
        test.describe('change', () => {
            test('should dispatch a change event when checkbox is clicked that contains the original native event', async ({ page }) => {
                // Arrange
                const expectedMessages = [{ isTrusted: false }];

                const checkboxDefaultPage = new CheckboxDefaultPage(page);
                await checkboxDefaultPage.load();

                // Set up a listener for console messages
                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                // Act
                await checkboxDefaultPage.checkboxComponent.labelLocator.check();

                // Assert
                expect(consoleMessages.length).toEqual(1);
                const parsedMessages = consoleMessages.map((msg) => JSON.parse(msg));
                expect(parsedMessages).toStrictEqual(expectedMessages);
            });

            test('should dispatch a change event when inside a form which is reset', async ({ page }) => {
                // Arrange
                const expectedMessage = { isTrusted: false };
                const checkboxFormPage = new CheckboxFormPage(page);
                await checkboxFormPage.load();

                // Set up a listener for console messages
                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                // Act
                await checkboxFormPage.checkboxComponent.labelLocator.check();
                await checkboxFormPage.resetButton.click();

                // Assert
                expect(consoleMessages).toHaveLength(2);
                const parsedMessages = consoleMessages.map((msg) => JSON.parse(msg));
                expect(parsedMessages[0]).toStrictEqual(expectedMessage);
            });

            test('should not dispatch a change event when inside a form which is reset if the value has not changed', async ({ page }) => {
                // Arrange
                const checkboxFormPage = new CheckboxFormPage(page);
                await checkboxFormPage.load();

                // Set up a listener for console messages
                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                // Act
                await checkboxFormPage.resetButton.click();

                // Assert
                expect(consoleMessages).toHaveLength(0);
            });
        });
    });

    test.describe('Form integration', () => {
        test('should correctly set the name and value of the checkbox in the FormData object when submitted', async ({ page }) => {
            // Arrange
            const props: CheckboxProps = {
                name: 'testName',
            };

            const checkboxFormPage = new CheckboxFormPage(page);
            await checkboxFormPage.load({ ...props });

            // Act
            await checkboxFormPage.checkboxComponent.labelLocator.check();
            await checkboxFormPage.submitButton.click();

            // Assert
            const expectedFormData = { testName: 'on' };
            await expect(checkboxFormPage.formData).toHaveText(JSON.stringify(expectedFormData));
        });

        test('should submit the updated checked state if the checked attribute is changed programmatically', async ({ page }) => {
            // Arrange
            const props: CheckboxProps = {
                name: 'testName',
            };

            const checkboxFormPage = new CheckboxFormPage(page);
            await checkboxFormPage.load({ ...props });

            // Act
            await checkboxFormPage.checkboxComponent.labelLocator.check();

            await page.evaluate(() => {
                const checkbox = document.querySelector('pie-checkbox') as PieCheckbox;
                checkbox.checked = false;
                return checkbox;
            });

            await checkboxFormPage.submitButton.click();

            // Assert
            await expect(checkboxFormPage.formData).toHaveText('{}');
        });

        test('should not submit the value if checkbox is disabled', async ({ page }) => {
            // Arrange
            const props: CheckboxProps = {
                name: 'testName',
                disabled: true,
            };

            const checkboxFormPage = new CheckboxFormPage(page);
            await checkboxFormPage.load({ ...props });

            // Act
            await checkboxFormPage.submitButton.click();

            // Assert
            await expect(checkboxFormPage.formData).toHaveText('{}');
        });

        test('should not submit the value if checkbox is disabled, even if checked', async ({ page }) => {
            // Arrange
            const props: CheckboxProps = {
                name: 'testName',
                disabled: true,
                checked: true,
            };

            const checkboxFormPage = new CheckboxFormPage(page);
            await checkboxFormPage.load({ ...props });

            // Act
            await checkboxFormPage.submitButton.click();

            // Assert
            await expect(checkboxFormPage.formData).toHaveText('{}');
        });

        test('should not submit the value inside a disabled fieldset', async ({ page }) => {
            // Arrange
            const props: CheckboxProps = {
                name: 'testName',
            };

            const checkboxFieldsetFormPage = new CheckboxFieldsetFormPage(page);
            await checkboxFieldsetFormPage.load({ ...props });

            // Act
            await checkboxFieldsetFormPage.submitButton.click();

            // Assert
            await expect(checkboxFieldsetFormPage.formData).toHaveText('{}');
        });

        test.describe('when the form is reset', () => {
            test.describe('and defaultChecked is true', () => {
                test('should reset the checkbox to a checked state', async ({ page }) => {
                    // Arrange
                    const props: CheckboxProps = {
                        name: 'testName',
                        defaultChecked: true,
                    };

                    const checkboxFormPage = new CheckboxFormPage(page);
                    await checkboxFormPage.load({ ...props });

                    await expect(checkboxFormPage.checkboxComponent.inputLocator).not.toBeChecked();

                    // Act
                    await checkboxFormPage.resetButton.click();

                    // Assert
                    await expect(checkboxFormPage.checkboxComponent.inputLocator).toBeChecked();
                });
            });

            test.describe('and defaultChecked is false', () => {
                test('should reset the checkbox to its default state', async ({ page }) => {
                    // Arrange
                    const props: CheckboxProps = {
                        name: 'testName',
                        checked: true,
                        defaultChecked: false,
                    };

                    const checkboxFormPage = new CheckboxFormPage(page);
                    await checkboxFormPage.load({ ...props });

                    await expect(checkboxFormPage.checkboxComponent.inputLocator).toBeChecked();

                    // Act
                    await checkboxFormPage.resetButton.click();

                    // Assert
                    await expect(checkboxFormPage.checkboxComponent.inputLocator).not.toBeChecked();
                });
            });
        });
    });
});
