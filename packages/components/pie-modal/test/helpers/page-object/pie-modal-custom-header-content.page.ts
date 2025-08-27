import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ModalComponent } from './pie-modal.component.ts';

export class ModalCustomHeaderContentPage extends BasePage {
    readonly modalComponent: ModalComponent;
    readonly openModalButtonLocator: Locator;
    readonly scrollableContentSlotLocator: Locator;

    constructor (page: Page) {
        super(page, 'modal--custom-header-content');
        this.modalComponent = new ModalComponent(page);
        this.openModalButtonLocator = page.locator('#open-modal');
        this.scrollableContentSlotLocator = page.locator('pie-modal article');
    }

    /**
     * Opens the modal by clicking the open modal button.
     */
    async openModal () {
        await this.openModalButtonLocator.click();
    }
}
