import { type Locator, type Page } from '@playwright/test';
import {
    modal,
} from './selectors.ts';

export class PieModalPage {
    readonly page: Page;
    readonly componentLocator: Locator;
    readonly backButtonLocator: Locator;
    readonly closeButtonLocator: Locator;
    readonly headerLocator: Locator;
    readonly contentLocator: Locator;
    readonly leadingButtonLocator: Locator;
    readonly supportingButtonLocator: Locator;

    constructor (page: Page) {
        this.page = page;
        this.componentLocator = page.getByTestId(modal.selectors.container.dataTestId);
        this.backButtonLocator = page.getByTestId(modal.selectors.backButton.dataTestId);
        this.closeButtonLocator = page.getByTestId(modal.selectors.closeButton.dataTestId);
        this.headerLocator = page.getByTestId(modal.selectors.header.dataTestId);
        this.contentLocator = page.getByTestId(modal.selectors.content.dataTestId);
        this.leadingButtonLocator = page.getByTestId(modal.selectors.leadingButton.dataTestId);
        this.supportingButtonLocator = page.getByTestId(modal.selectors.supportingButton.dataTestId);
    }

    async isModalVisible () {
        return this.componentLocator.isVisible();
    }

    async getModalAriaLabel () {
        return this.componentLocator.getAttribute('aria-label');
    }

    async getModalAriaBusy () {
        return this.componentLocator.getAttribute('aria-busy');
    }

    async closeModal () {
        await this.closeButtonLocator.click();
    }

    async isCloseButtonVisible () {
        await this.closeButtonLocator.isVisible();
    }

    async getCloseButtonAriaLabel () {
        return this.closeButtonLocator.getAttribute('aria-label');
    }

    async backModal () {
        await this.backButtonLocator.click();
    }

    async isBackButtonVisible () {
        await this.backButtonLocator.isVisible();
    }

    async getBackButtonAriaLabel () {
        return this.backButtonLocator.getAttribute('aria-label');
    }

    async leadingButtonClick () {
        await this.leadingButtonLocator.click();
    }

    async supportingButtonClick () {
        await this.supportingButtonLocator.click();
    }

    async headingByTagExists (expectedHeadingType: string) {
        return this.headerLocator.locator(expectedHeadingType).isVisible();
    }

    async getContentText () {
        await this.contentLocator.innerText();
    }

    async clickBackdrop () {
        await this.componentLocator.click({ position: { x: -10, y: -10 } });
    }

    async clickButtonWithText (buttonText: string) {
        await this.componentLocator.locator('pie-button', { hasText: buttonText }).click();
    }
}
