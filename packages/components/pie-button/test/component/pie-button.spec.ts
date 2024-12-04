import { test, expect } from '@playwright/test';
import { ButtonComponent } from '../helpers/page-object/pie-button.page.ts';
import { FormIntegrationPage, type FormInput } from '../helpers/page-object/pie-button-form-integration.page.ts';
import type { ButtonProps } from '../../src/index.ts';

const formInput: FormInput = {
    userName: 'John Doe',
    userEmail: 'john.doe@example.com',
    userPassword: 'password',
    userPaymentCardType: 'mastercard',
    userPaymentCardNumber: '4921111111111111',
    userPaymentCardExpiration: '12/24',
};

type SizeResponsiveSize = {
    sizeName: ButtonProps['size'];
    responsiveSize: string;
};

const sizes: Array<SizeResponsiveSize> = [
    { sizeName: 'xsmall', responsiveSize: '--btn-height--small' },
    { sizeName: 'small-expressive', responsiveSize: '--btn-height--medium' },
    { sizeName: 'small-productive', responsiveSize: '--btn-height--medium' },
    { sizeName: 'medium', responsiveSize: '--btn-height--large' },
    { sizeName: 'large', responsiveSize: '--btn-height--large' },
];

test('should correctly work with native click events', async ({ page }) => {
    const buttonComponent = new ButtonComponent(page, 'button--primary');
    await buttonComponent.load();

    // Set up a listener for console messages
    const consoleMessages: string[] = [];
    page.on('console', (message) => {
        if (message.type() === 'log') {
            consoleMessages.push(message.text());
        }
    });

    await buttonComponent.click();

    // Assert that the expected message was logged
    expect(consoleMessages).toContain('Button clicked!');
});

test.describe('Form Actions', () => {
    test.describe('Submit', () => {
        test('should correctly submit an HTML form when type is `submit`', async ({ page }) => {
        // Arrange
            const formIntegrationPage = new FormIntegrationPage(page, 'button--form-integration');
            await formIntegrationPage.load();

            // Act
            await formIntegrationPage.fillForm(formInput);

            await formIntegrationPage.clickFormButton('pie-button-submit');

            // Assert
            // Check if the hidden span was appended, indicating the form was submitted
            expect(await formIntegrationPage.formSubmittedFlag).toHaveCount(1);
            expect(await formIntegrationPage.formSubmittedFlag).toBeHidden();
        });

        test('should trigger native HTML form validation for required fields and submit after correcting when type is `submit`', async ({ page }) => {
        // Arrange
            const formIntegrationPage = new FormIntegrationPage(page, 'button--form-integration');
            await formIntegrationPage.load();

            // Act & Assert
            // Attempt to click the submit button without filling out required fields
            await formIntegrationPage.clickFormButton('pie-button-submit');

            // Check if the form was not submitted (indicated by the absence of the span)
            expect.soft(await formIntegrationPage.formSubmittedFlag).toHaveCount(0);

            // Fill out the form
            await formIntegrationPage.fillForm(formInput);

            // Attempt to submit the form again
            await formIntegrationPage.clickFormButton('pie-button-submit');

            // Check if the form was submitted this time (indicated by the presence of the span)
            expect(await formIntegrationPage.formSubmittedFlag).toHaveCount(1);
        });

        test('should not submit the form when button is disabled and type is `submit`', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page, 'button--form-integration');
            await formIntegrationPage.load({ disabled: true });

            // Act
            await formIntegrationPage.clickFormButton('pie-button-submit');

            // Assert
            expect(await formIntegrationPage.formSubmittedFlag).toHaveCount(0);
        });

        test('should not submit the form when button has isLoading set and type is `submit`', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page, 'button--form-integration');
            await formIntegrationPage.load({ isLoading: true });

            // Act
            await formIntegrationPage.clickFormButton('pie-button-submit');

            // Assert
            expect(await formIntegrationPage.formSubmittedFlag).toHaveCount(0);
        });

        /* eslint-disable vitest/no-commented-out-tests */
        // test('NEED TO REFACTOR should include pie-button\'s name and value in the form submission data when it triggers submission', async ({ page }) => {
        //     // Arrange
        //     // Inject the test form into the page with pie-button having name and value attributes
        //     await page.evaluate(() => {
        //         const formHTML = `
        //         <form id="testForm" action="/submit-endpoint" method="POST">
        //             <input type="text" name="username">
        //             <pie-button id="testButton" type="submit" name="submitButton" value="submitValue">Submit</pie-button>
        //         </form>
        //     `;
        //         document.body.innerHTML = formHTML;
        //     });

        //     // Intercept form submissions
        //     const [request] = await Promise.all([
        //         page.waitForRequest('/submit-endpoint'),
        //         page.fill('input[name="username"]', 'testUser'),
        //         page.click('#testButton'),
        //     ]);

        //     const formData = request.postData();

        //     // Assert
        //     expect(formData).toContain('submitButton=submitValue');
        // });

        // test('NEED TO REFACTOR - should respect all form-related attributes on the pie-button', async ({ page }) => {
        //     // Arrange
        //     // Inject the test form into the page with pie-button having multiple form attributes
        //     await page.evaluate(() => {
        //         const formHTML = `
        //             <form id="testForm" action="/default-endpoint" method="GET">
        //                 <input type="text" name="username" required>
        //                 <pie-button id="testButton"
        //                             type="submit"
        //                             name="submitButton"
        //                             value="submitValue"
        //                             formaction="/custom-endpoint"
        //                             formenctype="multipart/form-data"
        //                             formmethod="POST"
        //                             formnovalidate
        //                             formtarget="_self">Submit</pie-button>
        //             </form>
        //         `;
        //         document.body.innerHTML = formHTML;
        //     });

        //     // Act
        //     // Intercept form submissions
        //     const [request] = await Promise.all([
        //         page.waitForRequest('/custom-endpoint'),
        //         page.fill('input[name="username"]', 'testUser'),
        //         page.click('#testButton'),
        //     ]);

        //     const postData = request.postData();
        //     const method = request.method();
        //     const headers = request.headers();

        //     // Assert
        //     expect(postData).toBeTruthy();
        //     const submitButtonDisposition = 'Content-Disposition: form-data; name="submitButton"';
        //     const submitButtonValuePosition = (postData as string).indexOf(submitButtonDisposition) + submitButtonDisposition.length;
        //     expect((postData as string).includes(submitButtonDisposition)).toBeTruthy();
        //     expect((postData as string).substring(submitButtonValuePosition)).toContain('submitValue');
        //     expect(headers['content-type']).toMatch(/^multipart\/form-data;/);
        //     expect(method).toBe('POST');
        // });

        /* eslint-enable vitest/no-commented-out-tests */

        const submitTestCases = [
            { titlePrefix: 'should submit', showSubmitButton: true, expectedFormSubmittedFlagCount: 1 },
            { titlePrefix: 'should not submit', showSubmitButton: false, expectedFormSubmittedFlagCount: 0 },
        ];

        submitTestCases.forEach((testCase) => {
            test(` ${testCase.titlePrefix} the form when pressing Enter with pie-button type other than 'submit'`, async ({ page }) => {
            // Arrange
                const formIntegrationPage = new FormIntegrationPage(page, 'button--form-integration');
                await formIntegrationPage.load({ showSubmitButton: testCase.showSubmitButton });

                // Fill out the form
                await formIntegrationPage.fillForm(formInput);

                // Act
                // Press Enter in the password field
                await formIntegrationPage.focusField('userPassword').then((locator) => locator.press('Enter'));

                // Assert
                expect(await formIntegrationPage.formSubmittedFlag).toHaveCount(testCase.expectedFormSubmittedFlagCount);
            });
        });

        test('should NOT submit the form when pressing Enter on a pie-button that is not type of submit', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page, 'button--form-integration');
            await formIntegrationPage.load();

            // Fill out the form
            await formIntegrationPage.fillForm(formInput);

            // Act
            await page.keyboard.press('Tab');
            await page.keyboard.press('Enter');

            // Assert
            expect(await formIntegrationPage.formSubmittedFlag).toHaveCount(0);
        });

        test('should NOT submit the form when pressing Enter on a native non-submit button', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page, 'button--form-integration');
            await formIntegrationPage.load({ showNativeResetButton: true });

            await formIntegrationPage.fillForm(formInput);

            // Act
            // Press Enter on the native button with type reset
            await formIntegrationPage.focusButton('native-reset').then((locator) => locator.press('Enter'));

            // Assert
            expect(await formIntegrationPage.formSubmittedFlag).toHaveCount(0);
        });
    });

    test.describe('Reset', () => {
        test('should reset the form by clicking the reset button when type is `reset`', async ({ page }) => {
        // Arrange
            const formIntegrationPage = new FormIntegrationPage(page, 'button--form-integration');
            await formIntegrationPage.load();

            await formIntegrationPage.fillForm(formInput);

            // Act
            await formIntegrationPage.clickFormButton('pie-button-reset');

            // Assert - Check if the form fields have been reset
            const formFieldValues = await formIntegrationPage.getFormFieldValues();

            const expectedFormFieldValues: FormInput = {
                userName: '',
                userEmail: '',
                userPassword: '',
                userPaymentCardType: 'visa',
                userPaymentCardNumber: '',
                userPaymentCardExpiration: '',
            };

            expect(formFieldValues).toEqual(expectedFormFieldValues);
        });

        test('should not reset the form when button is disabled and type is `reset`', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page, 'button--form-integration');
            await formIntegrationPage.load({ disabled: true });

            await formIntegrationPage.fillForm(formInput);

            // Act
            await formIntegrationPage.clickFormButton('pie-button-reset');

            // Assert
            const formFieldValues = await formIntegrationPage.getFormFieldValues();
            expect(formFieldValues).toEqual(formInput);
        });

        test('should not reset the form when button has `isLoading` set and type is `reset`', async ({ page }) => {
        // Arrange
            const formIntegrationPage = new FormIntegrationPage(page, 'button--form-integration');
            await formIntegrationPage.load({ isLoading: true });

            await formIntegrationPage.fillForm(formInput);

            // Act
            await formIntegrationPage.clickFormButton('pie-button-reset');

            // Assert
            const formFieldValues = await formIntegrationPage.getFormFieldValues();
            expect(formFieldValues).toEqual(formInput);
        });
    });

    test.describe('Association', () => {
        test('should correctly associate with its containing form and not with other forms', async ({ page }) => {
            // Arrange
            // Inject two forms into the page
            const formIntegrationPage = new FormIntegrationPage(page, 'button--form-integration');
            await formIntegrationPage.load({ renderIncorrectForm: true });

            // Act
            const associatedFormId = await formIntegrationPage.getAssociatedFormIdForButton('pie-button-submit');

            // Assert
            expect(associatedFormId).toBe('testForm');
        });
    });
});

test.describe('props', () => {
    test.describe('isResponsive', () => {
        test.describe('when not set', () => {
            test('the button should not have the attribute', async ({ page }) => {
                const buttonComponent = new ButtonComponent(page, 'button--primary');
                await buttonComponent.load({ isResponsive: false });

                await expect(buttonComponent.componentLocator.locator('button'))
                    .not.toHaveClass(/o-btn--responsive/);
            });
        });

        test.describe('when set to true', () => {
            test('the button should have the attribute', async ({ page }) => {
                const buttonComponent = new ButtonComponent(page, 'button--primary');
                await buttonComponent.load({ isResponsive: true });

                expect(await buttonComponent.isResponsive()).toBe(true);
            });

            sizes.forEach(({ sizeName, responsiveSize }) => {
                test(`a "${sizeName}" size button height should be equivalent to "${responsiveSize}"`, async ({ page }) => {
                    const buttonComponent = new ButtonComponent(page, 'button--primary');
                    await buttonComponent.load({ isResponsive: true, size: sizeName });

                    const [currentHeight, expectedHeight] = await buttonComponent.getShadowElementStylePropValues(['--btn-height', responsiveSize]);

                    await expect(currentHeight).toBe(expectedHeight);
                });
            });
        });
    });

    test.describe('responsiveSize', () => {
        test.describe('when not set', () => {
            test('the button should not have the attribute', async ({ page }) => {
                const buttonComponent = new ButtonComponent(page, 'button--primary');
                await buttonComponent.load();

                await expect(buttonComponent.componentLocator.locator('button')).not.toHaveClass([/o-btn--productive/, /o-btn--responsive/]);
            });
        });

        const responsiveSizeTestCases = [
            { size: 'xsmall', responsiveSize: 'expressive', expectedClass: [/o-btn--expressive/] },
            { size: 'xsmall', responsiveSize: 'productive', expectedClass: [/o-btn--productive/] },
        ];

        responsiveSizeTestCases.forEach(({ size, responsiveSize, expectedClass }) => {
            test.describe('when "isResponsive" is true', () => {
                test.describe(`when "responsiveSize" is "${responsiveSize}"`, () => {
                    test('the button should have the expected attribute', async ({ page }) => {
                        const buttonComponent = new ButtonComponent(page, 'button--primary');
                        await buttonComponent.load({ size, isResponsive: true, responsiveSize });

                        await expect(buttonComponent.componentLocator.locator('button'))
                        .toHaveClass(expectedClass);
                    });
                });
            });
        });
    });

    test.describe('tag', () => {
        test.describe('when set to "button"', () => {
            test('should render a button element', async ({ page }) => {
                // Arrange
                const buttonComponent = new ButtonComponent(page, 'button--primary');
                await buttonComponent.load({ tag: 'button' });

                // Assert
                expect(buttonComponent.componentLocator.locator('button')).toBeVisible();
            });

            /* eslint-disable vitest/no-commented-out-tests */

            //     test('should not render anchor-specific attributes', async ({ page }) => {
            //         // Arrange
            //         const props: ButtonProps = {
            //             tag: 'button',
            //             // Anchor-specific props
            //             href: '/test',
            //             rel: 'noopener noreferrer',
            //             target: '_blank',
            //         };
            //         const buttonComponent = new ButtonComponent(page, 'button--primary');
            //         await buttonComponent.load({...props });

            //         const buttonShadowElement = buttonComponent.componentLocator.locator('button');

        //         // Assert
        //         expect(buttonShadowElement).toHaveAttribute('rel', props.rel as string);
        //         expect(buttonShadowElement).toHaveAttribute('target', props.target as string);
        //         expect(buttonShadowElement).toHaveAttribute('href', props.href as string);
        //     });
        });

        // test.describe('when set to "a"', () => {
        //     test('should render an anchor element', async ({ page }) => {
        //         // Arrange
        //         const props: ButtonProps = {
        //             tag: 'a',
        //         };

        //         // Act
        //         const buttonComponent = new ButtonComponent(page, 'button--primary');
        //         await buttonComponent.load({});

        //         const anchor = buttonComponent.componentLocator.locator('a');

        //         // Assert
        //         expect(anchor).toBeVisible();
        //     });

        //     test('should not render button-specific attributes', async ({ mount }) => {
        //         // Arrange
        //         const props: ButtonProps = {
        //             tag: 'a',
        //             // Button-specific props
        //             disabled: true,
        //             isLoading: true,
        //             type: 'submit',
        //         };

        //         // Act
        //         const component = await mount(PieButton, {
        //             props,
        //             slots: {
        //                 default: 'Click me!',
        //             },
        //         });

        //         const anchor = component.locator('a');

        //         // Assert
        //         const disabled = await anchor.getAttribute('disabled');
        //         const type = await anchor.getAttribute('type');
        //         const spinner = component.locator('pie-spinner');

        //         expect.soft(anchor).not.toHaveClass(/is-loading/);
        //         expect.soft(disabled).toBeNull();
        //         expect.soft(type).toBeNull();
        //         expect(spinner).not.toBeVisible();
        //     });
        // });

        /* eslint-enable vitest/no-commented-out-tests */
    });
});
