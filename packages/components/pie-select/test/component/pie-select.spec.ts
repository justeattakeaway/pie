import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { type SelectProps, statusTypes } from '../../src/defs.ts';
import { select } from '../helpers/page-object/selectors.ts';

test.describe('PieSelect - Component tests', () => {
    test.describe('Props', () => {
        test.describe('disabled', () => {
            test.describe('when true', () => {
                test('should disable the component', async ({ page }) => {
                    // Arrange
                    const selectPage = new BasePage(page, 'select--default');
                    const props: Partial<SelectProps> = {
                        disabled: true,
                    };

                    await selectPage.load({ ...props });

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    // Assert
                    await expect(selectElement).toBeDisabled();
                });

                test('should not be able to focus the component', async ({ page }) => {
                    // Arrange
                    const selectPage = new BasePage(page, 'select--default');
                    const props: Partial<SelectProps> = {
                        disabled: true,
                    };

                    await selectPage.load({ ...props });

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);
                    await selectElement.focus();

                    // Assert
                    await expect(selectElement).not.toBeFocused();
                });
            });

            test.describe('when false', () => {
                test('should not disable the component', async ({ page }) => {
                    // Arrange
                    const selectPage = new BasePage(page, 'select--default');
                    await selectPage.load();

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    // Assert
                    await expect(selectElement).not.toBeDisabled();
                });

                test('should be able to focus the component', async ({ page }) => {
                    // Arrange
                    const selectPage = new BasePage(page, 'select--default');
                    await selectPage.load();

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);
                    await selectElement.focus();

                    // Assert
                    await expect(selectElement).toBeFocused();
                });
            });
        });

        test.describe('name', () => {
            test('should not apply the name attribute on the select element if not provided', async ({ page }) => {
                // Arrange
                const selectPage = new BasePage(page, 'select--default');
                await selectPage.load();

                // Act
                const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                // Assert
                await expect(selectElement).not.toHaveAttribute('name');
            });

            test('should apply the name attribute on the select element', async ({ page }) => {
                // Arrange
                const props: Partial<SelectProps> = {
                    name: 'test-select',
                };

                const selectPage = new BasePage(page, 'select--default');
                await selectPage.load({ ...props });

                // Act
                const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                // Assert
                await expect(selectElement).toHaveAttribute('name', 'test-select');
            });
        });

        test.describe('assistiveText', () => {
            test('should not render the assistive text component if the prop is not provided', async ({ page }) => {
                // Arrange
                const selectPage = new BasePage(page, 'select--default');
                await selectPage.load();

                // Act
                const assistiveText = page.getByTestId(select.selectors.assistiveText.dataTestId);

                // Assert
                await expect(assistiveText).not.toBeVisible();
            });

            test('should apply the "default" variant attribute if no status is provided', async ({ page }) => {
                // Arrange
                const props: Partial<SelectProps> = {
                    assistiveText: 'Assistive text',
                };

                const selectPage = new BasePage(page, 'select--default');
                await selectPage.load({ ...props });

                // Act
                const assistiveText = page.getByTestId(select.selectors.assistiveText.dataTestId);

                // Assert
                await expect(assistiveText).toBeVisible();
                await expect(assistiveText).toHaveAttribute('variant', 'default');
                await expect(assistiveText).toHaveText('Assistive text');
            });

            test.describe('Assistive text: Status', () => {
                statusTypes.forEach((status) => {
                    test(`should render the assistive text component with the ${status} variant`, async ({ page }) => {
                        // Arrange
                        const props: Partial<SelectProps> = {
                            assistiveText: 'Assistive text',
                            status,
                        };

                        const selectPage = new BasePage(page, 'select--default');
                        await selectPage.load({ ...props });

                        // Act
                        const assistiveText = page.getByTestId(select.selectors.assistiveText.dataTestId);

                        // Assert
                        await expect(assistiveText).toBeVisible();
                        await expect(assistiveText).toHaveAttribute('variant', status);
                        await expect(assistiveText).toHaveText('Assistive text');
                    });
                });
            });

            test.describe('Assistive test ID attribute', () => {
                test('should contain an ID associated the select element for a11y', async ({ page }) => {
                    // Arrange
                    const props: Partial<SelectProps> = {
                        assistiveText: 'Assistive text',
                    };

                    const selectPage = new BasePage(page, 'select--default');
                    await selectPage.load({ ...props });

                    // Act
                    const assistiveText = page.getByTestId(select.selectors.assistiveText.dataTestId);

                    // Assert
                    await expect(assistiveText).toHaveAttribute('id', 'assistive-text');
                });
            });
        });

        test.describe('options', () => {
            test.describe('option', () => {
                test('should render option objects as native HTML option elements', async ({ page }) => {
                    // Arrange
                    const selectPage = new BasePage(page, 'select--default');
                    await selectPage.load();

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);
                    const options = selectElement.locator('option');

                    // Assert the number of options passed to the default select story
                    await expect(options).toHaveCount(4);
                });

                test('should disable the option when the disabled property is true', async ({ page }) => {
                    // Arrange
                    const selectPage = new BasePage(page, 'select--disabled-options');
                    await selectPage.load();

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);
                    const disabledOption = selectElement.locator('option:text("Option 4")');

                    // Assert
                    await expect(disabledOption).toBeDisabled();
                });

                test('should select the option with the selected property by default when provided', async ({ page }) => {
                    // Arrange
                    const selectPage = new BasePage(page, 'select--selected-options');
                    await selectPage.load();

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    // Assert
                    await expect(selectElement).toHaveValue('banana');
                });
            });

            test.describe('optgroup', () => {
                test('should render optgroup objects as native HTML optgroup elements', async ({ page }) => {
                    // Arrange
                    const selectPage = new BasePage(page, 'select--default');
                    await selectPage.load();

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);
                    const optgroups = selectElement.locator('optgroup');

                    // Assert the number of optgroups passed to the default select story
                    await expect(optgroups).toHaveCount(2);
                });

                test('should disable the option group when the disabled property is true', async ({ page }) => {
                    // Arrange
                    const selectPage = new BasePage(page, 'select--disabled-options');
                    await selectPage.load();

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);
                    const disabledOptgroup = selectElement.locator('optgroup').first();

                    // Assert
                    await expect(disabledOptgroup).toBeDisabled();
                });
            });
        });

        test.describe('value', () => {
            test.describe('an option is set as default', () => {
                test('value is not set', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form-with-selected-option');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await expect(selectElement).toHaveValue('banana');
                });
                test('value is set programatically', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form-with-selected-option');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await selectElement.evaluate((el) => { (el as HTMLSelectElement).value = 'apple'; });

                    await expect(selectElement).toHaveValue('apple');
                });
                test('an option is selected', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form-with-selected-option');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await selectElement.selectOption('apple');

                    await expect(selectElement).toHaveValue('apple');
                });
            });
            test.describe('no option is set as default', () => {
                test('value is not set', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await expect(selectElement).toHaveValue('pizza');
                });
                test('value is set programatically', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await selectElement.evaluate((el) => { (el as HTMLSelectElement).value = 'burger'; });

                    await expect(selectElement).toHaveValue('burger');
                });
                test('an option is selected', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await selectElement.selectOption('burger');

                    await expect(selectElement).toHaveValue('burger');
                });
            });
        });
    });

    test.describe('Attributes:', () => {
        test.describe('aria-describedby', () => {
            test.describe('when `assistiveText` is not defined', () => {
                test('should not render the attribute', async ({ page }) => {
                    // Arrange
                    const selectPage = new BasePage(page, 'select--default');
                    await selectPage.load();

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    // Assert
                    await expect(selectElement).not.toHaveAttribute('aria-describedby');
                });
            });

            test.describe('when `assistiveText` is defined', () => {
                test('should render the attribute correctly with the correct value', async ({ page }) => {
                    // Arrange
                    const props: Partial<SelectProps> = {
                        assistiveText: 'Some useful message',
                    };

                    const selectPage = new BasePage(page, 'select--default');
                    await selectPage.load(props);

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    // Assert
                    await expect(selectElement).toHaveAttribute('aria-describedby', 'assistive-text');
                });
            });
        });

        test.describe('aria-invalid', () => {
            test.describe('when the component status is set to `error`', () => {
                test('should render the `aria-invalid` attribute', async ({ page }) => {
                    // Arrange
                    const props: Partial<SelectProps> = {
                        status: 'error',
                    };

                    const selectPage = new BasePage(page, 'select--default');
                    await selectPage.load(props);

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    // Assert
                    await expect(selectElement).toHaveAttribute('aria-invalid', 'true');
                });
            });

            statusTypes.filter((status) => status !== 'error').forEach((status) => {
                test.describe(`when the component status is set to "${status}"`, () => {
                    test('should render the `aria-invalid` with a value of `false`', async ({ page }) => {
                        // Arrange
                        const props: Partial<SelectProps> = {
                            status,
                        };

                        const selectPage = new BasePage(page, 'select--default');
                        await selectPage.load(props);

                        // Act
                        const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                        // Assert
                        await expect(selectElement).toHaveAttribute('aria-invalid', 'false');
                    });
                });
            });
        });

        test.describe('aria-errormessage', () => {
            test.describe('when the component status is set to `error`', () => {
                test('should render the `aria-errormessage` attribute', async ({ page }) => {
                    // Arrange
                    const props: Partial<SelectProps> = {
                        status: 'error',
                    };

                    const selectPage = new BasePage(page, 'select--default');
                    await selectPage.load(props);

                    // Act
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    // Assert
                    await expect(selectElement).toHaveAttribute('aria-errormessage');
                });
            });

            statusTypes.filter((status) => status !== 'error').forEach((status) => {
                test.describe(`when the component status is set to "${status}"`, () => {
                    test('should not render the `aria-errormessage` attribute', async ({ page }) => {
                        // Arrange
                        const props: Partial<SelectProps> = {
                            status,
                        };

                        const selectPage = new BasePage(page, 'select--default');
                        await selectPage.load(props);

                        // Act
                        const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                        // Assert
                        await expect(selectElement).not.toHaveAttribute('aria-errormessage');
                    });
                });
            });
        });
    });

    test.describe('Events', () => {
        test.describe('change', () => {
            test('should emit a change event', async ({ page }) => {
                // Arrange
                const selectPage = new BasePage(page, 'select--default');
                await selectPage.load();

                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                // Act
                const selectElement = page.getByTestId(select.selectors.select.dataTestId);
                await selectElement.selectOption({ value: 'pizza' });

                // Assert
                expect(consoleMessages[0]).toEqual('change event received: value=pizza, isTrusted=false');
            });
        });
    });

    test.describe('Form integration', () => {
        test('should correctly set the value of the select in the FormData object when submitted', async ({ page }) => {
            // Arrange
            const selectFormPage = new BasePage(page, 'select--example-form');
            await selectFormPage.load();

            // Act
            const selectElement = page.getByTestId(select.selectors.select.dataTestId);
            await selectElement.selectOption({ label: 'Burger' });
            await page.locator('pie-button', { hasText: 'Submit' }).click();

            const output = page.locator('#formDataOutput');

            // Assert
            await expect(output).toHaveText('{"food":"burger"}');
        });

        test('should not submit the value for disabled select elements', async ({ page }) => {
            // Arrange
            const props: Partial<SelectProps> = { disabled: true };

            const selectFormPage = new BasePage(page, 'select--example-form');
            await selectFormPage.load({ ...props });

            // Act
            await page.locator('#food').click();
            await page.locator('pie-button', { hasText: 'Submit' }).click();

            const output = page.locator('#formDataOutput');

            // Assert
            await expect(output).toHaveText('{}');
        });

        test('should reset to the first option when no option is marked as selected', async ({ page }) => {
            // Arrange
            const selectFormPage = new BasePage(page, 'select--example-form');
            await selectFormPage.load();

            // Act
            const selectElement = page.getByTestId(select.selectors.select.dataTestId);
            await selectElement.selectOption('pizza');
            await expect(selectElement).toHaveValue('pizza');

            await page.locator('pie-button', { hasText: 'Reset' }).click();

            // Assert
            await expect(selectElement).toHaveValue('pizza');
        });

        test('should reset to the option marked as selected if provided', async ({ page }) => {
            // Arrange
            const selectFormPage = new BasePage(page, 'select--example-form-with-selected-option');
            await selectFormPage.load();
            // Act
            const selectElement = page.getByTestId(select.selectors.select.dataTestId);
            await selectElement.selectOption('apple');
            await expect(selectElement).toHaveValue('apple');

            await page.locator('pie-button', { hasText: 'Reset' }).click();

            // Assert
            await expect(selectElement).toHaveValue('banana');
        });

        test.describe('should reset to the expected option when the form is reset', async () => {
            test.describe('an option is set as default', () => {
                test('value is not set', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form-with-selected-option');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await expect(selectElement).toHaveValue('banana');

                    await page.locator('pie-button', { hasText: 'Reset' }).click();

                    // Assert
                    await expect(selectElement).toHaveValue('banana');
                });
                test('value is set programatically', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form-with-selected-option');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await selectElement.evaluate((el) => { (el as HTMLSelectElement).value = 'apple'; });

                    await expect(selectElement).toHaveValue('apple');

                    await page.locator('pie-button', { hasText: 'Reset' }).click();

                    // Assert
                    await expect(selectElement).toHaveValue('banana');
                });
                test('an option is selected', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form-with-selected-option');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await selectElement.selectOption('apple');

                    await expect(selectElement).toHaveValue('apple');

                    await page.locator('pie-button', { hasText: 'Reset' }).click();

                    // Assert
                    await expect(selectElement).toHaveValue('banana');
                });
            });
            test.describe('no option is set as default', () => {
                test('value is not set', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await expect(selectElement).toHaveValue('pizza');

                    await page.locator('pie-button', { hasText: 'Reset' }).click();

                    // Assert
                    await expect(selectElement).toHaveValue('pizza');
                });
                test('value is set programatically', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await selectElement.evaluate((el) => { (el as HTMLSelectElement).value = 'burger'; });

                    await expect(selectElement).toHaveValue('burger');

                    await page.locator('pie-button', { hasText: 'Reset' }).click();

                    // Assert
                    await expect(selectElement).toHaveValue('pizza');
                });
                test('an option is selected', async ({ page }) => {
                    const selectFormPage = new BasePage(page, 'select--example-form');
                    const selectElement = page.getByTestId(select.selectors.select.dataTestId);

                    await selectFormPage.load();
                    await selectElement.selectOption('burger');

                    await expect(selectElement).toHaveValue('burger');

                    await page.locator('pie-button', { hasText: 'Reset' }).click();

                    // Assert
                    await expect(selectElement).toHaveValue('pizza');
                });
            });
        });
    });
});
