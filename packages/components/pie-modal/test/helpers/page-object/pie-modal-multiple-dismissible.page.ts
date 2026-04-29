import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { ModalComponent } from './pie-modal.component.ts';

export class ModalMultipleDismissiblePage extends BasePage {
    readonly dismissibleModalComponent: ModalComponent;
    readonly openDismissibleButtonLocator: Locator;
    readonly openNonDismissibleButtonLocator: Locator;
    readonly nonDismissibleLeadingActionLocator: Locator;

    constructor (page: Page) {
        super(page, 'modal--multiple-dismissible-modals');
        this.dismissibleModalComponent = new ModalComponent(page);
        this.openDismissibleButtonLocator = page.locator('#open-dismissible');
        this.openNonDismissibleButtonLocator = page.locator('#open-non-dismissible');
        this.nonDismissibleLeadingActionLocator = page.locator('#modal-non-dismissible').getByTestId('modal-leading-action');
    }

    async openDismissibleModal () {
        await this.openDismissibleButtonLocator.click();
    }

    async openNonDismissibleModal () {
        await this.openNonDismissibleButtonLocator.click();
    }

    async closeNonDismissibleModal () {
        await this.nonDismissibleLeadingActionLocator.click();
    }
}
