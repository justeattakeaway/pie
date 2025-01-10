import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ModalComponent } from './pie-modal.component.ts';

export class ModalScrollLockingPage extends BasePage {
    readonly modalComponent: ModalComponent;
    readonly openModalButtonLocator: Locator;

    constructor (page: Page) {
        super(page, 'modal--scroll-locking');
        this.modalComponent = new ModalComponent(page);
        this.openModalButtonLocator = page.locator('#open-modal');
    }
}
