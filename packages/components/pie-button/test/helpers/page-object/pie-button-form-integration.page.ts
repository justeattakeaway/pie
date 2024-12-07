import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
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
    private readonly formLocator: Locator;
    private readonly userNameInput: Locator;
    private readonly userEmailInput: Locator;
    private readonly userPasswordInput: Locator;
    private readonly userPaymentCardTypeSelect: Locator;
    private readonly userPaymentCardNumberInput: Locator;
    private readonly userPaymentCardExpirationInput: Locator;
    private readonly resetPieButton: Locator;
    private readonly resetNativeButton: Locator;
    private readonly submitPieButton: Locator;
    readonly formSubmittedFlag: Locator;

    constructor (page: Page, componentName: string) {
        super(page, componentName);

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
     * @returns {Promise<FormIntegrationPage>} A Promise that resolves with the current instance once the form has been filled.
     */
    async fillForm (inputData: FormInput): Promise<FormIntegrationPage> {
        await this.userNameInput.fill(inputData.userName);
        await this.userEmailInput.fill(inputData.userEmail);
        await this.userPasswordInput.fill(inputData.userPassword);
        await this.userPaymentCardTypeSelect.selectOption(inputData.userPaymentCardType);
        await this.userPaymentCardNumberInput.fill(inputData.userPaymentCardNumber);
        await this.userPaymentCardExpirationInput.fill(inputData.userPaymentCardExpiration);

        return this;
    }

    /**
     * Clicks the specified form button.
     *
     * @param {FormButtonType} buttonType - The type of the button to click.
     * @returns {Promise<void>} A Promise that resolves once the button has been clicked.
     */
    async clickFormButton (buttonType: FormButtonType): Promise<void> {
        switch (buttonType) {
            case 'pie-button-submit':
                await this.submitPieButton.click();
                break;
            case 'pie-button-reset':
                await this.resetPieButton.click();
                break;
            case 'native-reset':
                await this.resetNativeButton.click();
                break;
            default:
                throw new Error(`Invalid button type: ${buttonType}`);
        }
    }

    /**
     * Focuses on the specified field.
     *
     * @param {keyof FormInput} fieldName - The name of the field to focus on.
     * @returns {Promise<Page>} A Promise that resolves once the field has been focused.
     */
    async focusField (fieldName: keyof FormInput): Promise<Locator> {
        switch (fieldName) {
            case 'userName':
                await this.userNameInput.focus();
                return this.userNameInput;
            case 'userEmail':
                await this.userEmailInput.focus();
                return this.userEmailInput;
            case 'userPassword':
                await this.userPasswordInput.focus();
                return this.userPasswordInput;
            case 'userPaymentCardType':
                await this.userPaymentCardTypeSelect.focus();
                return this.userPaymentCardTypeSelect;
            case 'userPaymentCardNumber':
                await this.userPaymentCardNumberInput.focus();
                return this.userPaymentCardNumberInput;
            case 'userPaymentCardExpiration':
                await this.userPaymentCardExpirationInput.focus();
                return this.userPaymentCardExpirationInput;
            default:
                throw new Error(`Invalid field name: ${fieldName}`);
        }
    }

    /**
     * Focuses on the specified button.
     *
     * @param {FormButtonType} formButtonType - The type of the button to focus on.
     * @returns {Promise<Locator>} A Promise that resolves once the button has been focused.
     */
    async focusButton (buttonType: FormButtonType): Promise<Locator> {
        switch (buttonType) {
            case 'pie-button-submit':
                await this.submitPieButton.focus();
                return this.submitPieButton;
            case 'pie-button-reset':
                await this.resetPieButton.focus();
                return this.resetPieButton;
            case 'native-reset':
                await this.resetNativeButton.focus();
                return this.resetNativeButton;
            default:
                throw new Error(`Invalid button type: ${buttonType}`);
        }
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
            const button = document.querySelector(`[data-test-id="${selector}"]`) as HTMLButtonElement;
            return button.form ? button.form.id : null;
        }, selector);

        return associatedFormId;
    }
}
