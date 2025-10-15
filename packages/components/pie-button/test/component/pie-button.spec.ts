import { test, expect } from '@playwright/test';
import { ButtonDefaultPage } from '../helpers/page-object/pie-button-default.page.ts';
import { ButtonAnchorPage } from '../helpers/page-object/pie-button-anchor.page.ts';
import { ButtonAnchorWithDownloadPage } from '../helpers/page-object/pie-button-anchor-download.page.ts';
import { ButtonAnchorWithDownloadFilenamePage } from '../helpers/page-object/pie-button-anchor-download-filename.page.ts';
import { FormIntegrationPage, type FormInput } from '../helpers/page-object/pie-button-form-integration.page.ts';
import { FormAttributesPage } from '../helpers/page-object/pie-button-form-attributes.page.ts';
import { FormSubmissionPage } from '../helpers/page-object/pie-button-form-submission.page.ts';
import type { ButtonProps } from '../../src/index.ts';

const formInputData: FormInput = {
    userName: 'John Doe',
    userEmail: 'john.doe@example.com',
    userPassword: 'password',
    userPaymentCardType: 'mastercard',
    userPaymentCardNumber: '4921111111111111',
    userPaymentCardExpiration: '12/24',
};

test('should correctly work with native click events', async ({ page }) => {
    // Arrange
    const buttonDefaultPage = new ButtonDefaultPage(page);
    await buttonDefaultPage.load();

    // Set up a listener for console messages
    const consoleMessages: string[] = [];
    page.on('console', (message) => {
        if (message.type() === 'info') {
            consoleMessages.push(message.text());
        }
    });

    // Act
    await buttonDefaultPage.clickButtonWithText('Label');

    // Assert
    expect(consoleMessages).toContain('Button clicked!');
});

test.describe('Form Actions', () => {
    test.describe('Submit', () => {
        test('should correctly submit an HTML form when type is `submit`', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page);
            await formIntegrationPage.load();

            // Act
            await formIntegrationPage.fillForm(formInputData);
            await formIntegrationPage.clickButtonWithText('Submit');

            // Assert
            await expect(formIntegrationPage.formSubmittedFlag).toHaveCount(1);
            await expect(formIntegrationPage.formSubmittedFlag).toBeHidden();
        });

        test('should trigger native HTML form validation for required fields and submit after correcting when type is `submit`', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page);
            await formIntegrationPage.load();

            // Act
            await formIntegrationPage.clickButtonWithText('Submit');

            // Assert
            await expect.soft(formIntegrationPage.formSubmittedFlag).toHaveCount(0);

            await formIntegrationPage.fillForm(formInputData);
            await formIntegrationPage.clickButtonWithText('Submit');

            // Assert
            await expect(formIntegrationPage.formSubmittedFlag).toHaveCount(1);
        });

        test('should not submit the form when button is disabled and type is `submit`', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page);
            await formIntegrationPage.load({ disabled: true });

            // Act
            await formIntegrationPage.clickButtonWithText('Submit');

            // Assert
            await expect(formIntegrationPage.formSubmittedFlag).toHaveCount(0);
        });

        test('should not submit the form when button has isLoading set and type is `submit`', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page);
            await formIntegrationPage.load({ isLoading: true });

            // Act
            await formIntegrationPage.clickButtonWithText('Submit');

            // Assert
            await expect(formIntegrationPage.formSubmittedFlag).toHaveCount(0);
        });

        test('should include pie-button\'s name and value in the form submission data when it triggers submission', async ({ page }) => {
            // Arrange
            const formSubmissionPage = new FormSubmissionPage(page);
            await formSubmissionPage.load();

            // Act
            const requestPromise = page.waitForRequest(/submit-endpoint/);
            await page.fill('input[name="username"]', 'testUser');

            await formSubmissionPage.clickButtonWithText('Submit');

            const request = await requestPromise;
            const formData = request.postData();

            // Assert
            expect(formData).toContain('submitButton=submitValue');
        });

        test('should respect all form-related attributes on the pie-button', async ({ page }) => {
            // Arrange
            const formAttributesPage = new FormAttributesPage(page);
            await formAttributesPage.load();

            // Act
            const requestPromise = page.waitForRequest(/custom-endpoint/);
            await page.fill('input[name="username"]', 'testUser');
            await formAttributesPage.clickButtonWithText('Submit');

            const request = await requestPromise;

            const postData = request.postData();
            const method = request.method();
            const headers = request.headers();

            // Assert
            expect(postData).not.toBeNull();
            const submitButtonDisposition = 'Content-Disposition: form-data; name="submitButton"';
            const submitButtonValuePosition = (postData as string).indexOf(submitButtonDisposition) + submitButtonDisposition.length;
            expect((postData as string).includes(submitButtonDisposition)).toBeTruthy();
            expect((postData as string).substring(submitButtonValuePosition)).toContain('submitValue');
            expect(headers['content-type']).toMatch(/^multipart\/form-data;/);
            expect(method).toBe('POST');
        });

        const submitTestCases = [
            { titlePrefix: 'should submit', showSubmitButton: true, expectedFormSubmittedFlagCount: 1 },
            { titlePrefix: 'should not submit', showSubmitButton: false, expectedFormSubmittedFlagCount: 0 },
        ];

        submitTestCases.forEach((testCase) => {
            test(` ${testCase.titlePrefix} the form when pressing Enter with pie-button type 'submit': ${testCase.showSubmitButton}`, async ({ page }) => {
                // Arrange
                const formIntegrationPage = new FormIntegrationPage(page);
                await formIntegrationPage.load({ showSubmitButton: testCase.showSubmitButton });

                // Act
                await formIntegrationPage.fillForm(formInputData);
                await formIntegrationPage.userPasswordInput.focus();
                await formIntegrationPage.userPasswordInput.press('Enter');

                // Assert
                await expect(formIntegrationPage.formSubmittedFlag).toHaveCount(testCase.expectedFormSubmittedFlagCount);
            });
        });

        test('should NOT submit the form when pressing Enter on a pie-button that is not type of submit', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page);
            await formIntegrationPage.load();

            // Fill out the form
            await formIntegrationPage.fillForm(formInputData);

            // Act
            await page.keyboard.press('Tab');
            await page.keyboard.press('Enter');

            // Assert
            await expect(formIntegrationPage.formSubmittedFlag).toHaveCount(0);
        });

        test('should NOT submit the form when pressing Enter on a native non-submit button', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page);
            await formIntegrationPage.load({ showNativeResetButton: true });

            await formIntegrationPage.fillForm(formInputData);

            // Act
            await formIntegrationPage.resetNativeButton.focus();
            await formIntegrationPage.resetNativeButton.press('Enter');

            // Assert
            await expect(formIntegrationPage.formSubmittedFlag).toHaveCount(0);
        });
    });

    test.describe('Reset', () => {
        test('should reset the form by clicking the reset button when type is `reset`', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page);
            await formIntegrationPage.load();

            await formIntegrationPage.fillForm(formInputData);

            // Act
            await formIntegrationPage.clickButtonWithText('Reset');

            // Assert
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
            const formIntegrationPage = new FormIntegrationPage(page);
            await formIntegrationPage.load({ disabled: true });

            await formIntegrationPage.fillForm(formInputData);

            // Act
            await formIntegrationPage.clickButtonWithText('Reset');

            // Assert
            const formFieldValues = await formIntegrationPage.getFormFieldValues();
            expect(formFieldValues).toEqual(formInputData);
        });

        test('should not reset the form when button has `isLoading` set and type is `reset`', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page);
            await formIntegrationPage.load({ isLoading: true });

            await formIntegrationPage.fillForm(formInputData);

            // Act
            await formIntegrationPage.clickButtonWithText('Reset');

            // Assert
            const formFieldValues = await formIntegrationPage.getFormFieldValues();
            expect(formFieldValues).toEqual(formInputData);
        });
    });

    test.describe('Association', () => {
        test('should correctly associate with its containing form and not with other forms', async ({ page }) => {
            // Arrange
            const formIntegrationPage = new FormIntegrationPage(page);
            await formIntegrationPage.load({ renderIncorrectForm: true });

            // Act
            const associatedFormId = await formIntegrationPage.getAssociatedFormIdForButton('pie-button-submit');

            // Assert
            expect(associatedFormId).toBe('testForm');
        });
    });
});

test.describe('props', () => {
    test.describe('tag', () => {
        test.describe('when set to "button"', () => {
            test('should render a button element', async ({ page }) => {
                // Arrange
                const props: ButtonProps = {
                    tag: 'button',
                };

                const buttonDefaultPage = new ButtonDefaultPage(page);
                await buttonDefaultPage.load({ ...props });

                // Assert
                await expect(buttonDefaultPage.buttonComponent.componentLocator.locator('button')).toBeVisible();
            });

            test('should not render anchor-specific attributes', async ({ page }) => {
                // Arrange
                const props: ButtonProps = {
                    tag: 'button',
                    // Anchor-specific props
                    href: '/test',
                    rel: 'noopener noreferrer',
                    target: '_blank',
                };
                const buttonDefaultPage = new ButtonDefaultPage(page);
                await buttonDefaultPage.load({ ...props });

                const buttonShadowElement = buttonDefaultPage.buttonComponent.componentLocator.locator('button');

                // Assert
                await expect(buttonShadowElement).not.toHaveAttribute('rel', props.rel as string);
                await expect(buttonShadowElement).not.toHaveAttribute('target', props.target as string);
                await expect(buttonShadowElement).not.toHaveAttribute('href', props.href as string);
            });
        });

        test.describe('when set to "a"', () => {
            test('should render an anchor element', async ({ page }) => {
                // Arrange
                const buttonAnchorPage = new ButtonAnchorPage(page);
                await buttonAnchorPage.load();

                const anchor = buttonAnchorPage.buttonComponent.componentLocator.locator('a');

                // Assert
                await expect(anchor).toBeVisible();
            });

            test('should not render button-specific attributes', async ({ page }) => {
                // Arrange
                const props: ButtonProps = {
                    tag: 'a',
                    // Button-specific props
                    disabled: true,
                    isLoading: true,
                    type: 'submit',
                };

                const buttonAnchorPage = new ButtonAnchorPage(page);
                await buttonAnchorPage.load({ ...props });

                // Assert
                const anchor = buttonAnchorPage.buttonComponent.componentLocator.locator('a');
                const spinner = anchor.locator('pie-spinner');

                await expect.soft(anchor).not.toHaveClass(/is-loading/);
                await expect.soft(anchor).not.toHaveAttribute('disabled');
                await expect.soft(anchor).not.toHaveAttribute('type');
                await expect(spinner).not.toBeVisible();
            });

            test('should correctly download files when download is an empty string', async ({ page }) => {
                // Arrange
                const buttonAnchorPage = new ButtonAnchorWithDownloadPage(page);
                await buttonAnchorPage.load();

                // Act
                const anchor = buttonAnchorPage.buttonComponent.componentLocator;
                const downloadPromise = page.waitForEvent('download');
                await anchor.click();
                const download = await downloadPromise;

                // Assert
                expect(download.suggestedFilename()).toBe('logo--pie--dark.svg');
                expect(download.url()).toContain('/static/images/logo--pie--dark.svg');
            });

            test('should correctly download files with custom filename when download is a non-empty string', async ({ page }) => {
                // Arrange
                const buttonAnchorPage = new ButtonAnchorWithDownloadFilenamePage(page);
                await buttonAnchorPage.load();

                // Act
                const anchor = buttonAnchorPage.buttonComponent.componentLocator;
                const downloadPromise = page.waitForEvent('download');
                await anchor.click();
                const download = await downloadPromise;

                // Assert
                expect(download.suggestedFilename()).toBe('pie-logo.svg');
                expect(download.url()).toContain('/static/images/logo--pie--dark.svg');
            });
        });
    });
});
