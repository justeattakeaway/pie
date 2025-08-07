import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import type { RadioProps } from '../../src/defs.ts';
import type { PieRadio } from '../../src/index.ts';
import { radio } from '../helpers/page-object/selectors.ts';

test.describe('PieRadio - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const radioDefaultPage = new BasePage(page, 'radio--default');
        await radioDefaultPage.load();

        // Act
        const radioComponent = page.getByTestId(radio.selectors.container.dataTestId);

        // Assert
        await expect(radioComponent).toBeVisible();
    });

    test.describe('props', () => {
        test.describe('value', () => {
            test('should apply the value attribute to the input', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    value: 'testValue',
                };
                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioInput = page.getByTestId(radio.selectors.input.dataTestId);

                // Assert
                await expect(radioInput).toHaveValue('testValue');
            });
        });

        test.describe('name', () => {
            test('should not render a name attr on the radio element if no name provided', async ({ page }) => {
                // Arrange
                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ value: 'testValue' });

                // Act
                const radioInput = page.getByTestId(radio.selectors.input.dataTestId);

                // Assert
                await expect(radioInput).not.toHaveAttribute('name');
            });

            test('should apply the name attr to the radio', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    name: 'test',
                    value: 'testValue',
                };

                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioInput = page.getByTestId(radio.selectors.input.dataTestId);

                // Assert
                await expect(radioInput).toHaveAttribute('name', 'test');
            });
        });

        test.describe('checked', () => {
            test('should check the radio when true', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    checked: true,
                    value: 'testValue',
                };

                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioInput = page.getByTestId(radio.selectors.input.dataTestId);

                // Assert
                await expect(radioInput).toBeChecked();
            });

            test('should not check the radio when false', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    checked: false,
                    value: 'testValue',
                };

                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioInput = page.getByTestId(radio.selectors.input.dataTestId);

                // Assert
                await expect(radioInput).not.toBeChecked();
            });

            test('should keep aria-checked in sync with the checked prop', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    checked: false,
                    value: 'testValue',
                };

                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioComponent = page.getByTestId(radio.selectors.container.dataTestId);

                // Assert initial state
                await expect(radioComponent).toHaveAttribute('aria-checked', 'false');

                // Update checked prop to true
                await page.getByTestId(radio.selectors.input.dataTestId).check();

                // Assert updated state
                await expect(radioComponent).toHaveAttribute('aria-checked', 'true');
            });
        });

        test.describe('disabled', () => {
            test('should enable the radio when false', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    disabled: false,
                    value: 'testValue',
                };

                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioInput = page.getByTestId(radio.selectors.input.dataTestId);

                // Assert
                await expect(radioInput).not.toBeDisabled();
            });

            test('should disable the radio when true', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    disabled: true,
                    value: 'testValue',
                };

                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioInput = page.getByTestId(radio.selectors.input.dataTestId);

                // Assert
                await expect(radioInput).toBeDisabled();
            });
        });

        test.describe('required', () => {
            test('should not add a required attribute if the prop is not provided', async ({ page }) => {
                // Arrange
                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ value: 'testValue' });

                // Act
                const radioInput = page.getByTestId(radio.selectors.input.dataTestId);

                // Assert
                await expect(radioInput).not.toHaveAttribute('required');
            });

            test('should apply the required attribute to the input element', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    required: true,
                    value: 'testValue',
                };

                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioInput = page.getByTestId(radio.selectors.input.dataTestId);

                // Assert
                await expect(radioInput).toHaveAttribute('required');
            });

            test('should be in a valid state if the radio is required and checked', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    checked: true,
                    required: true,
                    name: 'radio',
                    value: 'testValue',
                };
                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioComponent = page.getByTestId(radio.selectors.container.dataTestId);
                const isValid = await radioComponent.evaluate((el) => (el as HTMLInputElement).validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the radio is required and checked manually', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    required: true,
                    checked: false,
                    name: 'radio',
                    value: 'testValue',
                };

                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioInput = page.getByTestId(radio.selectors.input.dataTestId);
                await radioInput.click();

                const radioComponent = page.getByTestId(radio.selectors.container.dataTestId);
                const isValid = await radioComponent.evaluate((el) => (el as HTMLInputElement).validity.valid);
                const isValueMissing = await radioComponent.evaluate((el) => (el as HTMLInputElement).validity.valueMissing);

                // Assert
                expect(isValid).toBe(true);
                expect(isValueMissing).toBe(false);
            });

            test('should be in an invalid state if the radio is required but unchecked', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    checked: false,
                    required: true,
                    name: 'radio',
                    value: 'testValue',
                };

                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioComponent = page.getByTestId(radio.selectors.container.dataTestId);
                const isValid = await radioComponent.evaluate((el) => (el as HTMLInputElement).validity.valid);
                const isValueMissing = await radioComponent.evaluate((el) => (el as HTMLInputElement).validity.valueMissing);

                // Assert
                expect(isValid).toBe(false);
                expect(isValueMissing).toBe(true);
            });

            test('should be in a valid state if the radio is checked but not required', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    checked: true,
                    required: false,
                    name: 'radio',
                    value: 'testValue',
                };

                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioComponent = page.getByTestId(radio.selectors.container.dataTestId);
                const isValid = await radioComponent.evaluate((el) => (el as HTMLInputElement).validity.valid);
                const isValueMissing = await radioComponent.evaluate((el) => (el as HTMLInputElement).validity.valueMissing);

                // Assert
                expect(isValid).toBe(true);
                expect(isValueMissing).toBe(false);
            });

            test('should be in a valid state if the radio is unchecked and not required', async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    required: false,
                    checked: false,
                    name: 'radio',
                    value: 'testValue',
                };

                const radioDefaultPage = new BasePage(page, 'radio--default');
                await radioDefaultPage.load({ ...props });

                // Act
                const radioComponent = page.getByTestId(radio.selectors.container.dataTestId);
                const isValid = await radioComponent.evaluate((el) => (el as HTMLInputElement).validity.valid);
                const isValueMissing = await radioComponent.evaluate((el) => (el as HTMLInputElement).validity.valueMissing);

                // Assert
                expect(isValid).toBe(true);
                expect(isValueMissing).toBe(false);
            });
        });
    });

    test.describe('Events', () => {
        test.describe('change', () => {
            test.describe('when radio is clicked', () => {
                test('should dispatch a change event that contains the original native event', async ({ page }) => {
                    // Arrange
                    const expectedMessages = [{ isTrusted: false }];

                    const radioDefaultPage = new BasePage(page, 'radio--default');
                    await radioDefaultPage.load();

                    // Set up listener for console messages
                    const consoleMessages: string[] = [];
                    page.on('console', (message) => {
                        if (message.type() === 'info') {
                            consoleMessages.push(message.text());
                        }
                    });

                    // Act
                    await page.getByTestId(radio.selectors.input.dataTestId).click();

                    // Assert
                    expect(consoleMessages).toHaveLength(1);
                    const parsedMessages = consoleMessages.map((msg) => JSON.parse(msg));
                    expect(parsedMessages).toStrictEqual(expectedMessages);
                });
            });

            test.describe('when inside a form which is reset', () => {
                test('should dispatch a change event', async ({ page }) => {
                    // Arrange
                    const props : RadioProps = {
                        checked: true,
                        value: 'testValue',
                    };

                    const radioFormPage = new BasePage(page, 'radio--example-form');
                    await radioFormPage.load({ ...props });

                    // Set up listener for console messages
                    const consoleMessages: string[] = [];
                    page.on('console', (message) => {
                        if (message.type() === 'info') {
                            consoleMessages.push(message.text());
                        }
                    });

                    // Act
                    await page.locator('pie-button', { hasText: 'Reset' }).click();

                    // Assert
                    expect(consoleMessages).toHaveLength(1);
                    expect(consoleMessages[0]).toBe('change event fired');
                });

                test('should not dispatch a change event if the value has not changed', async ({ page }) => {
                    // Arrange
                    const props : RadioProps = {
                        checked: false,
                        value: 'testValue',
                    };

                    const radioFormPage = new BasePage(page, 'radio--example-form');
                    await radioFormPage.load({ ...props });

                    // Set up listener for console messages
                    const consoleMessages: string[] = [];
                    page.on('console', (message) => {
                        if (message.type() === 'info') {
                            consoleMessages.push(message.text());
                        }
                    });

                    // Act
                    await page.locator('pie-button', { hasText: 'Reset' }).click();

                    // Assert
                    expect(consoleMessages).toHaveLength(0);
                });
            });
        });
    });

    test.describe('Form integration', () => {
        test('should correctly set the name and value of the radio in the FormData object when submitted', async ({ page }) => {
            // Arrange
            const props : RadioProps = {
                value: 'testValue',
                name: 'testName',
            };

            const radioFormPage = new BasePage(page, 'radio--example-form');
            await radioFormPage.load({ ...props });

            // Act
            await page.getByTestId(radio.selectors.input.dataTestId).click();
            await page.locator('pie-button', { hasText: 'Submit' }).click();

            // Assert
            const formDataOutput = await page.locator('#formDataOutput').textContent();
            expect(formDataOutput).toBe('{"testName":"testValue"}');
        });

        test('should submit the updated checked state if the checked attribute is changed programmatically', async ({ page }) => {
            // Arrange
            const props : RadioProps = {
                checked: false,
                value: 'testValue',
                name: 'testName',
            };

            const radioFormPage = new BasePage(page, 'radio--example-form');
            await radioFormPage.load({ ...props });

            // Act
            await page.getByTestId(radio.selectors.input.dataTestId).click();

            await page.getByTestId(radio.selectors.container.dataTestId).evaluate((el) => {
                const radio = el as PieRadio;
                radio.checked = false;
                return radio;
            });

            await page.locator('pie-button', { hasText: 'Submit' }).click();

            const formDataOutput = await page.locator('#formDataOutput').textContent();

            // Assert
            expect(formDataOutput).toStrictEqual('{}');
        });

        [true, false].forEach((checked) => {
            test(`should not submit the value if the input is disabled when checked is ${checked}`, async ({ page }) => {
                // Arrange
                const props : RadioProps = {
                    checked,
                    disabled: true,
                    value: 'testValue',
                    name: 'testName',
                };

                const radioFormPage = new BasePage(page, 'radio--example-form');
                await radioFormPage.load({ ...props });

                // Act
                await page.locator('pie-button', { hasText: 'Submit' }).click();
                const formDataOutput = await page.locator('#formDataOutput').textContent();

                // Assert
                expect(formDataOutput).toStrictEqual('{}');
            });
        });

        test.describe('when the form is reset', () => {
            test.describe('and defaultChecked is true', () => {
                [true, false].forEach((defaultChecked) => {
                    const checked = !defaultChecked;

                    test(`should reset the radio to its default state when defaultChecked is ${defaultChecked} and checked is ${checked}`, async ({ page }) => {
                        // Arrange
                        const props : RadioProps = {
                            defaultChecked,
                            checked,
                            name: 'testName',
                            value: 'testValue',
                        };

                        const radioFormPage = new BasePage(page, 'radio--example-form');
                        await radioFormPage.load({ ...props });

                        let isChecked = await page.getByTestId(radio.selectors.container.dataTestId).evaluate((el) => (el as HTMLInputElement).checked);
                        expect.soft(isChecked).toBe(checked);

                        // Act
                        await page.locator('pie-button', { hasText: 'Reset' }).click();

                        // Assert
                        isChecked = await page.getByTestId(radio.selectors.container.dataTestId).evaluate((el) => (el as HTMLInputElement).checked);
                        expect(isChecked).toBe(defaultChecked);
                    });
                });
            });
        });
    });

    test.describe('Programmatic clicks', () => {
        test('programmatic clicks on the host element check the radio', async ({ page }) => {
            // Arrange
            const radioDefaultPage = new BasePage(page, 'radio--default');
            await radioDefaultPage.load();

            // Act
            const radioComponent = page.getByTestId(radio.selectors.container.dataTestId);
            await expect.soft(radioComponent).not.toBeChecked();
            await radioComponent.click();

            // Assert
            await expect(radioComponent).toBeChecked();
        });

        test('programmatic clicks on the input element check the radio', async ({ page }) => {
            // Arrange
            const radioDefaultPage = new BasePage(page, 'radio--default');
            await radioDefaultPage.load();

            // Act
            const radioInput = page.getByTestId(radio.selectors.input.dataTestId);
            await expect.soft(radioInput).not.toBeChecked();
            await radioInput.click();

            // Assert
            await expect(radioInput).toBeChecked();
        });

        test('programmatic clicks on the label check the radio', async ({ page }) => {
            // Arrange
            const radioDefaultPage = new BasePage(page, 'radio--default');
            await radioDefaultPage.load();

            // Act
            const radioComponent = page.getByTestId(radio.selectors.container.dataTestId);
            await expect.soft(radioComponent).not.toBeChecked();
            const radioLabel = radioComponent.locator('label');
            await radioLabel.click();

            // Assert
            await expect(radioComponent).toBeChecked();
        });
    });
});
