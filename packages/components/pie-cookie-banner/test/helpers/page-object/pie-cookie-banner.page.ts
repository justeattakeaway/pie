import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import {
    cookieBanner,
} from './selectors.ts';

export class PieCookieBannerComponent extends BasePage {
    readonly page: Page;
    readonly componentLocator: Locator;
    readonly descriptionLocator: Locator;
    readonly acceptAllButtonLocator: Locator;
    readonly necessaryOnlyButtonLocator: Locator;
    readonly managePrefsLinkLocator: Locator;
    readonly bodyAcceptAllLinkLocator: Locator;
    readonly bodyNecessaryOnlyLinkLocator;
    readonly bodyManagePreferencesLinkLocator: Locator;
    readonly bodyCookieStatementLinkLocator: Locator;
    readonly bodyCookieTechnologiesLinkLocator: Locator;
    readonly modalDescriptionLocator: Locator;

    constructor (page: Page) {
        super(page);
        this.page = page;
        this.componentLocator = page.getByTestId(cookieBanner.selectors.container.dataTestId);
        this.descriptionLocator = page.getByTestId(cookieBanner.selectors.description.dataTestId);
        this.acceptAllButtonLocator = page.getByTestId(cookieBanner.selectors.acceptAllButton.dataTestId);
        this.necessaryOnlyButtonLocator = page.getByTestId(cookieBanner.selectors.necessaryOnlyButton.dataTestId);
        this.managePrefsLinkLocator = page.getByTestId(cookieBanner.selectors.managePreferencesLink.dataTestId);
        this.bodyAcceptAllLinkLocator = page.getByTestId(cookieBanner.selectors.bodyAcceptAllLink.dataTestId);
        this.bodyNecessaryOnlyLinkLocator = page.getByTestId(cookieBanner.selectors.bodyNecessaryOnlyLink.dataTestId);
        this.bodyManagePreferencesLinkLocator = page.getByTestId(cookieBanner.selectors.bodyManagePreferencesLink.dataTestId);
        this.bodyCookieStatementLinkLocator = page.getByTestId(cookieBanner.selectors.bodyCookieStatementLink.dataTestId);
        this.bodyCookieTechnologiesLinkLocator = page.getByTestId(cookieBanner.selectors.bodyCookieTechnologiesLink.dataTestId);
        this.modalDescriptionLocator = page.getByTestId(cookieBanner.selectors.modalDescription.dataTestId);
    }

    async isCookieBannerVisible () {
        return this.componentLocator.isVisible();
    }

    async clickAcceptAllButton () {
        await this.acceptAllButtonLocator.click();
    }

    async clickBodyAcceptAllLink () {
        await this.bodyAcceptAllLinkLocator.click();
    }

    async clickAcceptAll (elementLevel: string) {
        await (elementLevel === 'action' ? this.clickAcceptAllButton() : this.clickBodyAcceptAllLink());
    }

    async getAcceptAllAttribute (attribute: string) {
        return this.acceptAllButtonLocator.getAttribute(attribute);
    }

    async clickNecessaryOnlyButton () {
        await this.necessaryOnlyButtonLocator.click();
    }

    async getNecessaryOnlyButtonAttribute (attribute: string) {
        return this.necessaryOnlyButtonLocator.getAttribute(attribute);
    }

    async clickNecessaryOnlyLink () {
        await this.bodyNecessaryOnlyLinkLocator.click();
    }

    async clickNecessaryOnlyAll (elementLevel: string) {
        await (elementLevel === 'action' ? this.clickNecessaryOnlyButton() : this.clickNecessaryOnlyLink());
    }

    async clickManagePreferencesAction () {
        await this.managePrefsLinkLocator.click();
    }

    async clickManagePreferencesLink () {
        await this.bodyManagePreferencesLinkLocator.click();
    }

    async clickManagePreferencesAll (elementLevel: string) {
        await (elementLevel === 'action' ? this.clickManagePreferencesAction() : this.clickManagePreferencesLink());
    }

    async clickPreferenceToggle (preferenceIds: string) {
        const preferenceToggle = this.page.locator(preferenceIds);
        return preferenceToggle.click();
    }

    async isPreferenceToggleChecked (preferenceIds: string) {
        const preferenceToggle = this.page.locator(preferenceIds);
        return preferenceToggle.isChecked();
    }

    async isPreferenceToggleDisabled (preferenceIds: string) {
        const preferenceToggle = this.page.locator(preferenceIds);
        return preferenceToggle.isChecked();
    }

    async getAcceptAllTextContent () {
        const acceptAllText = await this.acceptAllButtonLocator.textContent();
        return String(acceptAllText).trim();
    }

    async getNecessaryOnlyTextContent () {
        const necessaryOnlyText = await this.necessaryOnlyButtonLocator.textContent();
        return String(necessaryOnlyText).trim();
    }

    async getManagePreferencesTextContent () {
        const managePreferencesText = await this.managePrefsLinkLocator.textContent();
        return String(managePreferencesText).trim();
    }

    async getcomponentDescriptionTextContent () {
        const componentDescriptionText = await this.descriptionLocator.textContent();
        return String(componentDescriptionText).trim();
    }

    async getBannerCookieStatementLinkAttribute (attribute: string) {
        return this.descriptionLocator.locator(this.bodyCookieStatementLinkLocator).getAttribute(attribute);
    }

    async getModalCookieStatementLinkAttribute (attribute: string) {
        return this.modalDescriptionLocator.locator(this.bodyCookieStatementLinkLocator).getAttribute(attribute);
    }

    async getBannerCookieTechnologiesLinkAttribute (attribute: string) {
        return this.descriptionLocator.locator(this.bodyCookieTechnologiesLinkLocator).getAttribute(attribute);
    }

    async getModalCookieTechnologiesLinkAttribute (attribute: string) {
        return this.modalDescriptionLocator.locator(this.bodyCookieTechnologiesLinkLocator).getAttribute(attribute);
    }
}
