import type { Locator, Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import type { PieButton } from '../../../src/index.ts';
import { form } from './pie-button-form-integration-selectors.ts';

// Define the FormInput type with specific options for userPaymentCardType
export type FormInput = {
    userName: string;
    userEmail: string;
    userPassword: string;
    userPaymentCardType: 'visa' | 'mastercard' | 'amex';
    userPaymentCardNumber: string;
    userPaymentCardExpiration: string;
};

export type FormButtonType = 'pie-button-submit' | 'pie-button-reset' | 'native-reset';

export class FormIntegrationPage extends BasePage {
    readonly formLocator: Locator;
    readonly userNameInput: Locator;
    readonly userEmailInput: Locator;
    readonly userPasswordInput: Locator;
    readonly userPaymentCardTypeSelect: Locator;
    readonly userPaymentCardNumberInput: Locator;
    readonly userPaymentCardExpirationInput: Locator;
    readonly resetPieButton: Locator;
    readonly resetNativeButton: Locator;
    readonly submitPieButton: Locator;
    readonly formSubmittedFlag: Locator;

    constructor (page: Page) {
        super(page, 'button--form-integration');

        this.formLocator = page.getByTestId(form.selectors.container.dataTestId);
        this.userNameInput = this.formLocator.getByTestId(form.selectors.name.dataTestId);
        this.userEmailInput = this.formLocator.getByTestId(form.selectors.email.dataTestId);
        this.userPasswordInput = this.formLocator.getByTestId(form.selectors.password.dataTestId);
        this.userPaymentCardTypeSelect = this.formLocator.getByTestId(form.selectors.userPaymentCardType.dataTestId);
        this.userPaymentCardNumberInput = this.formLocator.getByTestId(form.selectors.userPaymentCardNumber.dataTestId);
        this.userPaymentCardExpirationInput = this.formLocator.getByTestId(form.selectors.userPaymentCardExpiration.dataTestId);

        this.resetPieButton = this.formLocator.locator(`[data-test-id="${form.selectors.pieButtonReset.dataTestId}"]`);
        this.resetNativeButton = this.formLocator.locator(`[data-test-id="${form.selectors.nativeButtonReset.dataTestId}"]`);
        this.submitPieButton = this.formLocator.locator(`[data-test-id="${form.selectors.pieButtonSubmit.dataTestId}"]`);

        this.formSubmittedFlag = this.page.getByTestId(form.selectors.formSubmittedFlag.dataTestId);
    }

    /**
     * Fills out the form with the provided input data.
     *
     * @param {FormInput} inputData - The data to fill the form with.
     * @returns {Promise<void>} A Promise that resolves once the form has been filled.
     */
    async fillForm (inputData: FormInput): Promise<void> {
        await this.userNameInput.fill(inputData.userName);
        await this.userEmailInput.fill(inputData.userEmail);
        await this.userPasswordInput.fill(inputData.userPassword);
        await this.userPaymentCardTypeSelect.selectOption(inputData.userPaymentCardType);
        await this.userPaymentCardNumberInput.fill(inputData.userPaymentCardNumber);
        await this.userPaymentCardExpirationInput.fill(inputData.userPaymentCardExpiration);
    }

    /**
     * Gets the values of the form fields.
     *
     * @returns {Promise<FormInput>} A Promise that resolves with the form field values.
     */
    async getFormFieldValues (): Promise<FormInput> {
        const formFieldValues: FormInput = {
            userName: await this.userNameInput.inputValue(),
            userEmail: await this.userEmailInput.inputValue(),
            userPassword: await this.userPasswordInput.inputValue(),
            userPaymentCardType: await this.userPaymentCardTypeSelect.inputValue() as 'visa' | 'mastercard' | 'amex',
            userPaymentCardNumber: await this.userPaymentCardNumberInput.inputValue(),
            userPaymentCardExpiration: await this.userPaymentCardExpirationInput.inputValue(),
        };

        return formFieldValues;
    }

    /**
     * Gets the associated form ID for the specified button.
     *
     * @param {FormButtonType} buttonType - The type of the button.
     * @returns {Promise<string | null>} A Promise that resolves with the associated form ID or null if no form is found.
     */
    async getAssociatedFormIdForButton (buttonType: FormButtonType): Promise<string | null> {
        let selector: string;

        switch (buttonType) {
            case 'pie-button-submit':
                selector = form.selectors.pieButtonSubmit.dataTestId;
                break;
            case 'pie-button-reset':
                selector = form.selectors.pieButtonReset.dataTestId;
                break;
            case 'native-reset':
                selector = form.selectors.nativeButtonReset.dataTestId;
                break;
            default:
                throw new Error(`Invalid button type: ${buttonType}`);
        }

        const associatedFormId = await this.page.evaluate((selector) => {
            const button = document.querySelector(`[data-test-id="${selector}"]`) as PieButton;
            return button.form ? button.form.id : null;
        }, selector);

        return associatedFormId;
    }
}
