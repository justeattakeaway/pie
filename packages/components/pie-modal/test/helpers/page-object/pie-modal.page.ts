import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import {
    modal,
} from './selectors.ts';

export class ModalComponent extends BasePage {
    private readonly componentLocator: Locator;
    private readonly backButtonLocator: Locator;
    private readonly closeButtonLocator: Locator;
    private readonly headerLocator: Locator;
    private readonly descriptionLocator: Locator;

    constructor (page: Page) {
        super(page);
        this.componentLocator = page.getByTestId(modal.selectors.container.dataTestId);
        this.backButtonLocator = page.getByTestId(modal.selectors.backButton.dataTestId);
        this.closeButtonLocator = page.getByTestId(modal.selectors.closeButton.dataTestId);
        this.headerLocator = page.getByTestId(modal.selectors.header.dataTestId);
        this.descriptionLocator = page.getByTestId(modal.selectors.description.dataTestId);
    }

    /**
     * Checks whether the modal is currently visible.
     *
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the modal is visible, and `false` otherwise.
     */
    async isModalVisible (): Promise<boolean> {
        return this.componentLocator.isVisible();
    }

    /**
     * Retrieves the ARIA label of the modal.
     *
     * @returns {Promise<string | null>} A Promise that resolves to the ARIA label of the modal, or `null` if the ARIA label attribute is not found.
     */
    async getModalAriaLabel (): Promise<string | null> {
        return this.componentLocator.getAttribute('aria-label');
    }

    /**
     * Retrieves the value of the ARIA busy attribute of the modal.
     *
     * @returns {Promise<string | null>} A Promise that resolves to the value of the ARIA busy attribute of the modal,
     *                                   or `null` if the attribute is not found.
     */
    async getModalAriaBusy (): Promise<string | null> {
        return this.componentLocator.getAttribute('aria-busy');
    }

    /**
     * Clicks the close button of the modal.
     *
     * @returns {Promise<void>} A Promise that resolves once the close button of the modal has been successfully clicked.
     */
    async clickCloseModal (): Promise<void> {
        await this.closeButtonLocator.click();
    }

    /**
     * Checks whether the close button of the modal is currently visible.
     *
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the close button of the modal is visible, and `false` otherwise.
     */
    async isCloseButtonVisible (): Promise<boolean> {
        return this.closeButtonLocator.isVisible();
    }

    /**
     * Retrieves the ARIA label of the close button of the modal.
     *
     * @returns {Promise<string | null>} A Promise that resolves to the ARIA label of the close button of the modal, or `null` if the ARIA label attribute is not found.
     */
    async getCloseButtonAriaLabel (): Promise<string | null> {
        return this.closeButtonLocator.getAttribute('aria-label');
    }

    /**
     * Clicks the back button of the modal.
     *
     * @returns {Promise<void>} A Promise that resolves once the back button of the modal has been successfully clicked.
     */
    async clickBackModal (): Promise<void> {
        await this.backButtonLocator.click();
    }

    /**
     * Checks whether the back button of the modal is currently visible.
     *
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the back button of the modal is visible, and `false` otherwise.
     */
    async isBackButtonVisible (): Promise<boolean> {
        return this.backButtonLocator.isVisible();
    }

    /**
     * Retrieves the ARIA label of the back button of the modal.
     *
     * @returns {Promise<string | null>} A Promise that resolves to the ARIA label of the back button of the modal, or `null` if the ARIA label attribute is not found.
     */
    async getBackButtonAriaLabel (): Promise<string | null> {
        return this.backButtonLocator.getAttribute('aria-label');
    }

    /**
     * Checks if a heading with the specified tag exists.
     *
     * @param {string} expectedHeadingType The HTML tag of the heading to check for (e.g., 'h1', 'h2', etc.).
     * @returns {Promise<boolean>} A Promise that resolves to `true` if a heading with the specified tag exists, and `false` otherwise.
     */
    async headingByTagExists (expectedHeadingType: string): Promise<boolean> {
        return this.headerLocator.locator(expectedHeadingType).isVisible();
    }

    /**
     * Clicks on the backdrop of the modal.
     *
     * @returns {Promise<void>} A Promise that resolves once the backdrop of the modal has been successfully clicked.
     */
    async clickBackdrop (): Promise<void> {
        await this.componentLocator.click({ position: { x: -10, y: -10 } });
    }

    async getDescriptionTextContent () {
        const descriptionText = await this.descriptionLocator.textContent();
        return descriptionText?.trim();
    }
}
