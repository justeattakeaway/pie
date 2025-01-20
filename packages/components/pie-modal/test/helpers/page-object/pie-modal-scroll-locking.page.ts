import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ModalComponent } from './pie-modal.component.ts';

export class ModalScrollLockingPage extends BasePage {
    readonly modalComponent: ModalComponent;
    readonly openModalButtonLocator: Locator;
    readonly openModalButtonAtPageBottomLocator: Locator;

    constructor (page: Page) {
        super(page, 'modal--scroll-locking');
        this.modalComponent = new ModalComponent(page);
        this.openModalButtonLocator = page.locator('#open-modal');
        this.openModalButtonAtPageBottomLocator = page.locator('#open-modal-bottom');
    }

    /**
     * Opens the modal by clicking the open modal button on the bottom of the page.
     */
    async openModalFromPageBottom () {
        await this.openModalButtonAtPageBottomLocator.click();
    }
}
