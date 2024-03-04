import { type Locator, type Page } from '@playwright/test';
import {
    PIE_MODAL,
    BACK_MODAL_BUTTON,
    CLOSE_MODAL_BUTTON,
} from './selectors.ts';

export class PieModalPage {
    readonly page: Page;
    readonly componentSelector: Locator;
    readonly backButtonSelector: Locator;
    readonly closeButtonSelector: Locator;

    constructor (page: Page) {
        this.page = page;
        this.componentSelector = page.getByTestId(PIE_MODAL);
        this.backButtonSelector = page.getByTestId(BACK_MODAL_BUTTON);
        this.closeButtonSelector = page.getByTestId('modal-close-button');
    }

    async closeModal () {
        await this.closeButtonSelector.click();
    }

    async backModal () {
        await this.backButtonSelector.click();
    }
}
