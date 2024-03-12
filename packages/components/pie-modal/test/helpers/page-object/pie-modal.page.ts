import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import {
    modal,
} from './selectors.ts';

export class PieModalPage extends BasePage {
    readonly page: Page;
    readonly componentLocator: Locator;
    readonly backButtonLocator: Locator;
    readonly closeButtonLocator: Locator;
    readonly headerLocator: Locator;
    readonly contentLocator: Locator;

    constructor (page: Page) {
        super(page);
        this.page = page;
        this.componentLocator = page.getByTestId(modal.selectors.container.dataTestId);
        this.backButtonLocator = page.getByTestId(modal.selectors.backButton.dataTestId);
        this.closeButtonLocator = page.getByTestId(modal.selectors.closeButton.dataTestId);
        this.headerLocator = page.getByTestId(modal.selectors.header.dataTestId);
        this.contentLocator = page.getByTestId(modal.selectors.content.dataTestId);
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

    async clickCloseModal () {
        await this.closeButtonLocator.click();
    }

    async isCloseButtonVisible () {
        return this.closeButtonLocator.isVisible();
    }

    async getCloseButtonAriaLabel () {
        return this.closeButtonLocator.getAttribute('aria-label');
    }

    async clickBackModal () {
        await this.backButtonLocator.click();
    }

    async isBackButtonVisible () {
        return this.backButtonLocator.isVisible();
    }

    async getBackButtonAriaLabel () {
        return this.backButtonLocator.getAttribute('aria-label');
    }

    async headingByTagExists (expectedHeadingType: string) {
        return this.headerLocator.locator(expectedHeadingType).isVisible();
    }

    async clickBackdrop () {
        await this.componentLocator.click({ position: { x: -10, y: -10 } });
    }
}
