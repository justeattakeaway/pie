import { type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ModalComponent } from './pie-modal.component.ts';

export class ModalFocusToSpecifiedElementPage extends BasePage {
    readonly modalComponent: ModalComponent;

    constructor (page: Page) {
        super(page, 'modal--focus-to-specified-element');
        this.modalComponent = new ModalComponent(page);
    }
}
