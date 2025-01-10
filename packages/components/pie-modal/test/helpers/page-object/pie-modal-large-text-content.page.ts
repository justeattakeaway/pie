import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ModalComponent } from './pie-modal.component.ts';

export class ModalLargeTextContentPage extends BasePage {
    readonly modalComponent: ModalComponent;
    readonly openModalButtonLocator: Locator;

    constructor (page: Page) {
        super(page, 'modal--large-text-content');
        this.modalComponent = new ModalComponent(page);
        this.openModalButtonLocator = page.locator('#open-modal');
    }

    /**
     * Opens the modal by clicking the open modal button.
     */
    async openModal () {
        await this.openModalButtonLocator.click();
    }
}
