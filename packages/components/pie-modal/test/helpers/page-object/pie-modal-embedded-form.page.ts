import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ModalComponent } from './pie-modal.component.ts';

export class ModalEmbeddedFormPage extends BasePage {
    readonly modalComponent: ModalComponent;
    readonly openModalButtonLocator: Locator;
    readonly submitButtonLocator: Locator;

    constructor (page: Page) {
        super(page, 'modal--embedded-form');
        this.modalComponent = new ModalComponent(page);
        this.openModalButtonLocator = page.locator('#open-modal');
        this.submitButtonLocator = page.getByTestId('submit-button');
    }

    /**
     * Opens the modal by clicking the open modal button.
     */
    async openModal () {
        await this.openModalButtonLocator.click();
    }

    /**
     * Submits the form by clicking the submit button.
     */
    async submitForm () {
        await this.submitButtonLocator.click();
    }
}
