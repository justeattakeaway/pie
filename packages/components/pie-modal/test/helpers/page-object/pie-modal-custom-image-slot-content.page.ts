import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ModalComponent } from './pie-modal.component.ts';
import { modal } from './selectors.ts';

export class ModalCustomImageSlotContentPage extends BasePage {
    readonly modalComponent: ModalComponent;
    readonly openModalButtonLocator: Locator;
    readonly scrollableContentSlotLocator: Locator;
    readonly imageLocator: Locator;
    readonly imageSlotLocator: Locator;

    constructor (page: Page) {
        super(page, 'modal--custom-image-slot-content');
        this.modalComponent = new ModalComponent(page);
        this.openModalButtonLocator = page.locator('#open-modal');
        this.scrollableContentSlotLocator = page.getByTestId('pie-modal').locator('article');
        this.imageLocator = page.getByTestId(modal.selectors.image.dataTestId);
        this.imageSlotLocator = page.locator('pie-modal [slot="image"]');
    }

    /**
     * Opens the modal by clicking the open modal button.
     */
    async openModal () {
        await this.openModalButtonLocator.click();
    }
}
