import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ModalComponent } from './pie-modal.component.ts';
import {
    modal,
} from './selectors.ts';

export class ModalCustomFooterPage extends BasePage {
    readonly modalComponent: ModalComponent;
    readonly openModalButtonLocator: Locator;
    readonly footerLocator: Locator;
    readonly footerSlotLocator: Locator;

    constructor (page: Page) {
        super(page, 'modal--custom-footer');
        this.modalComponent = new ModalComponent(page);
        this.openModalButtonLocator = page.locator('#open-modal');
        this.footerLocator = page.getByTestId(modal.selectors.footer.dataTestId);
        this.footerSlotLocator = page.locator('pie-modal [slot="footer"]');
    }

    /**
     * Opens the modal by clicking the open modal button.
     */
    async openModal () {
        await this.openModalButtonLocator.click();
    }
}
