import { type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ModalComponent } from './pie-modal.component.ts';

export class ModalFocusToFirstMatchingElementPage extends BasePage {
    readonly modalComponent: ModalComponent;

    constructor (page: Page) {
        super(page, 'modal--focus-to-first-matching-element');
        this.modalComponent = new ModalComponent(page);
    }
}
