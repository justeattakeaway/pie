import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { labelPlacements, type SwitchProps } from '../../src/defs';
import { pieSwitch } from '../helpers/page-objects/selectors';

test.describe('Component: `Pie switch`', () => {
    test('should have a visible input', async ({ page }) => {
        // Arrange
        const switchPage = new BasePage(page, 'switch');
        await switchPage.load();

        // Act
        const input = page.getByTestId(pieSwitch.selectors.input.dataTestId);

        // Assert
        await expect(input).toBeVisible();
    });

    test('should set `checked` to `false` by default', async ({ page }) => {
        // Arrange
        const switchPage = new BasePage(page, 'switch');
        await switchPage.load();

        // Act
        const pieSwitchComponentIsChecked = await page.getByTestId(pieSwitch.selectors.container.dataTestId).isChecked();

        // Assert
        expect(pieSwitchComponentIsChecked).toBe(false);
    });

    test('should set `disabled` to `false` by default', async ({ page }) => {
        // Arrange
        const switchPage = new BasePage(page, 'switch');
        await switchPage.load();

        // Act
        const pieSwitchComponentIsDisabled = await page.getByTestId(pieSwitch.selectors.container.dataTestId).isDisabled();

        // Assert
        expect(pieSwitchComponentIsDisabled).toBe(false);
    });

    test.describe('component interaction states', () => {
        test.describe('when the component is clicked', () => {
            test('should set `checked` to `true`', async ({ page }) => {
                // Arrange
                const switchPage = new BasePage(page, 'switch');
                const props: Partial<SwitchProps> = {
                    checked: false,
                };

                await switchPage.load({ ...props });

                // Act
                await page.getByTestId(pieSwitch.selectors.container.dataTestId).click();
                const pieSwitchComponentIsChecked = await page.getByTestId(pieSwitch.selectors.container.dataTestId).isChecked();

                // Assert
                expect(pieSwitchComponentIsChecked).toBe(true);
            });

            test('should set `checked` to `false`', async ({ page }) => {
                // Arrange
                const switchPage = new BasePage(page, 'switch');
                const props: Partial<SwitchProps> = {
                    checked: true,
                };

                await switchPage.load({ ...props });

                // Act
                await page.getByTestId(pieSwitch.selectors.container.dataTestId).click();
                const pieSwitchComponentIsChecked = await page.getByTestId(pieSwitch.selectors.container.dataTestId).isChecked();

                // Assert
                expect(pieSwitchComponentIsChecked).toBe(false);
            });

            test('should emit a "Switch clicked" console event when the switch is clicked', async ({ page }) => {
                // Arrange
                const switchPage = new BasePage(page, 'switch');
                await switchPage.load();

                const expectedEventMessage = 'Switch clicked';

                // Set up a listener for console messages
                const consoleMessages: string[] = [];
                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                // Act
                await page.getByTestId(pieSwitch.selectors.container.dataTestId).click();

                // Assert
                expect(consoleMessages).toEqual([expectedEventMessage]);
            });
        });

        test.describe('when the components label element is clicked', () => {
            test('should set `checked` to `true`', async ({ page }) => {
                // Arrange
                const switchPage = new BasePage(page, 'switch');
                const props: Partial<SwitchProps> = {
                    label: 'Label',
                    labelPlacement: 'leading',
                };

                await switchPage.load({ ...props });

                // Act
                await page.getByTestId(pieSwitch.selectors.label.leading.dataTestId).click();

                const pieSwitchComponent = await page.getByTestId(pieSwitch.selectors.container.dataTestId).isChecked();

                // Assert
                expect(pieSwitchComponent).toBe(true);
            });

            test('should set `checked` to `false`', async ({ page }) => {
                // Arrange
                const switchPage = new BasePage(page, 'switch');
                const props: Partial<SwitchProps> = {
                    label: 'Label',
                    labelPlacement: 'leading',
                    checked: true,
                };

                await switchPage.load({ ...props });

                // Act
                await page.getByTestId(pieSwitch.selectors.label.leading.dataTestId).click();

                const pieSwitchComponent = await page.getByTestId(pieSwitch.selectors.container.dataTestId).isChecked();

                // Assert
                expect(pieSwitchComponent).toBe(false);
            });

            test('should emit a "Switch clicked" console event when the switch is clicked', async ({ page }) => {
                // Arrange
                const switchPage = new BasePage(page, 'switch');
                await switchPage.load();

                const expectedEventMessage = 'Switch clicked';
                const consoleMessages: string[] = [];

                page.on('console', (message) => {
                    if (message.type() === 'info') {
                        consoleMessages.push(message.text());
                    }
                });

                // Act
                await page.getByTestId(pieSwitch.selectors.label.leading.dataTestId).click();

                // Assert
                expect(consoleMessages).toEqual([expectedEventMessage]);
            });
        });
    });

    test.describe('Props: `aria`', () => {
        test.describe('when label exist', () => {
            test('should render the component with the correct aria-labels', async ({ page }) => {
                // Arrange
                const ariaLabelText = 'Aria label';

                const switchPage = new BasePage(page, 'switch');
                const props: Partial<SwitchProps> = {
                    aria: {
                        label: ariaLabelText,
                    },
                };

                await switchPage.load({ ...props });

                // Act
                const switchInput = page.getByTestId(pieSwitch.selectors.input.dataTestId);

                // Assert
                await expect(switchInput).toHaveAttribute('aria-label', 'Aria label');
            });
        });

        test.describe('when describedBy exist', () => {
            const ariaDescriptionText = 'Aria description';

            test('should render the component with the correct description id', async ({ page }) => {
                // Arrange
                const switchPage = new BasePage(page, 'switch');
                const props: Partial<SwitchProps> = {
                    aria: {
                        describedBy: ariaDescriptionText,
                    },
                };

                await switchPage.load({ ...props });

                // Act
                const switchInput = page.getByTestId(pieSwitch.selectors.input.dataTestId);

                // Assert
                await expect(switchInput).toHaveAttribute('aria-describedBy', 'switch-description');
            });

            test('should render a description element with the correct text', async ({ page }) => {
                // Arrange
                const switchPage = new BasePage(page, 'switch');
                const props: Partial<SwitchProps> = {
                    aria: {
                        describedBy: ariaDescriptionText,
                    },
                };

                await switchPage.load({ ...props });

                // Act
                const ariaDescriptionElement = page.getByTestId(pieSwitch.selectors.ariaDescription.dataTestId);

                // Assert
                await expect(ariaDescriptionElement).toContainText(ariaDescriptionText);
            });
        });
    });

    test.describe('Props: `LabelProps`', () => {
        labelPlacements.forEach((labelPlacement) => {
            test(`should render a ${labelPlacement} label`, async ({ page }) => {
                // Arrange
                const switchPage = new BasePage(page, 'switch');
                const props: Partial<SwitchProps> = {
                    label: 'Label',
                    labelPlacement,
                };

                await switchPage.load({ ...props });

                const labelSelector = page.getByTestId(pieSwitch.selectors.label[labelPlacement].dataTestId);

                // Assert
                await expect(labelSelector).toBeVisible();
            });
        });
    });

    test.describe('Form integrations', () => {
        test('should be included in the submitted form data', async ({ page }) => {
            // Arrange
            const switchName = 'switch';
            const switchValue = 'switchValue';

            const switchPage = new BasePage(page, 'switch--test-form-integration');
            const props: Partial<SwitchProps> = {
                required: true,
            };
            await switchPage.load({ ...props });

            // Fill out the form
            await page.getByTestId(pieSwitch.selectors.container.dataTestId).click();

            // Act - Click the submit button
            await page.click('#submitButton');

            // Assert
            const formDataJson = await page.$eval('#formDataJson', (el) => el.textContent);
            const formDataObj = JSON.parse(formDataJson || '{}');

            // Check if the switch value is in the form data
            expect(switchName in formDataObj).toBe(true);
            expect(formDataObj[switchName]).toBe(switchValue);
        });

        test('form should be invalid and not submit if the switch is required but not set', async ({ page }) => {
        //     // Arrange
            const switchPage = new BasePage(page, 'switch--test-form-integration');
            const props: Partial<SwitchProps> = {
                required: true,
            };
            await switchPage.load({ ...props });

            // Act
            // Do not click the switch to leave it unset
            await page.click('#submitButton');

            // Assert
            const formDataJsonElement = await page.$('#formDataJson');
            expect(formDataJsonElement).toBeNull();
        });

        test('should not be included in the submitted form data if disabled and checked', async ({ page }) => {
            // Arrange
            const switchPage = new BasePage(page, 'switch--test-form-integration');
            const props: Partial<SwitchProps> = {
                checked: true,
                disabled: true,
            };
            await switchPage.load({ ...props });

            // Act
            await page.click('#submitButton');

            // Assert
            const formDataJson = await page.$eval('#formDataJson', (el) => el.textContent);
            const formDataObj = JSON.parse(formDataJson || '{}');

            expect(formDataObj.switch).toBeUndefined();
        });

        test('should not be included in the submitted form data if disabled and not checked', async ({ page }) => {
            // Arrange
            const switchPage = new BasePage(page, 'switch--test-form-integration');
            const props: Partial<SwitchProps> = {
                disabled: true,
            };
            await switchPage.load({ ...props });

            // Act
            await page.click('#submitButton');

            // Assert
            const formDataJson = await page.$eval('#formDataJson', (el) => el.textContent);
            const formDataObj = JSON.parse(formDataJson || '{}');

            expect(formDataObj.switch).toBeUndefined();
        });
    });
});
