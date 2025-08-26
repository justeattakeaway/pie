import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ModalComponent } from './pie-modal.component.ts';
import {
    modal,
} from './selectors.ts';

export class ModalCustomHeaderContentPage extends BasePage {
    readonly modalComponent: ModalComponent;
    readonly openModalButtonLocator: Locator;
    readonly headerLocator: Locator;
    readonly headerContentSlotLocator: Locator;

    constructor (page: Page) {
        super(page, 'modal--custom-header-content');
        this.modalComponent = new ModalComponent(page);
        this.openModalButtonLocator = page.locator('#open-modal');
        this.headerLocator = page.getByTestId(modal.selectors.header.dataTestId);
        this.headerContentSlotLocator = page.locator('pie-modal [slot="headerContent"]');
    }

    /**
     * Opens the modal by clicking the open modal button.
     */
    async openModal () {
        await this.openModalButtonLocator.click();
    }
}
