import { type Locator, type Page } from '@playwright/test';
import { ModalComponent } from '@justeattakeaway/pie-modal/test/helpers/page-object/pie-modal.component.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { cookieBanner } from './selectors.ts';
import { type PreferenceIds } from '../../../src/defs.ts';

const getPreferenceItemSelector = (id: PreferenceIds) => `#${id} [data-test-id="switch-component"]`;

export type Level = 'action' | 'body';

export class CookieBannerComponent extends BasePage {
    private readonly componentLocator: Locator;
    private readonly descriptionLocator: Locator;
    private readonly acceptAllButtonLocator: Locator;
    private readonly necessaryOnlyButtonLocator: Locator;
    private readonly managePrefsLinkLocator: Locator;
    private readonly bodyAcceptAllLinkLocator: Locator;
    private readonly bodyNecessaryOnlyLinkLocator;
    private readonly bodyManagePreferencesLinkLocator: Locator;
    private readonly bodyCookieStatementLinkLocator: Locator;
    private readonly bodyCookieTechnologiesLinkLocator: Locator;
    private readonly modalDescriptionLocator: Locator;
    readonly modalComponent: ModalComponent;

    constructor (page: Page) {
        super(page, 'cookie-banner');
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
        this.modalComponent = new ModalComponent(page);
    }

    /**
     * Checks whether the cookie banner is currently visible on the page.
     *
     * @returns {Promise<boolean>} A Promise that resolves to a boolean value indicating
     *                             whether the cookie banner is visible (`true`) or not (`false`).
     */
    async isCookieBannerVisible () : Promise<boolean> {
        return this.componentLocator.isVisible();
    }

    /**
     * Clicks the "Accept All" button.
     *
     * @returns {Promise<void>} A Promise that resolves once the "Accept All" button
     *                          has been successfully clicked.
     */
    async clickAcceptAllButton () : Promise<void> {
        await this.acceptAllButtonLocator.click();
    }

    /**
     * Clicks the "Accept All" link within the body.
     *
     * @returns {Promise<void>} A Promise that resolves once the "Accept All" link
     *                          within the body has been successfully clicked.
     */
    async clickBodyAcceptAllLink () : Promise<void> {
        await this.bodyAcceptAllLinkLocator.click();
    }

    /**
 * Clicks the "Accept All" button based on the specified element level.
    *
    * @param {Level} elementLevel The level of the element to click, either 'action' or 'body'.
    * @returns {Promise<void>} A Promise that resolves once the appropriate element has been successfully clicked.
    */
    async clickAcceptAll (elementLevel: Level) : Promise<void> {
        await (elementLevel === 'action' ? this.clickAcceptAllButton() : this.clickBodyAcceptAllLink());
    }

    /**
     * Retrieves the value of the specified attribute from the "Accept All" button.
     *
     * @param {string} attribute The name of the attribute to retrieve.
     * @returns {Promise<string | null>} A Promise that resolves to the value of the specified attribute
     *                                   on the "Accept All" button, or `null` if the attribute does not exist.
     */
    async getAcceptAllVariant () : Promise<string | null> {
        return this.acceptAllButtonLocator.getAttribute('variant');
    }

    /**
     * Clicks the "Necessary Only" button.
     *
     * @returns {Promise<void>} A Promise that resolves once the "Necessary Only" button
     *                          has been successfully clicked.
     */
    async clickNecessaryOnlyButton () : Promise<void> {
        await this.necessaryOnlyButtonLocator.click();
    }

    /**
     * Retrieves the value of the specified attribute from the "Necessary Only" button.
     *
     * @param {string} attribute The name of the attribute to retrieve.
     * @returns {Promise<string | null>} A Promise that resolves to the value of the specified attribute
     *                                   on the "Necessary Only" button, or `null` if the attribute does not exist.
     */
    async getNecessaryOnlyButtonVariant () : Promise<string | null> {
        return this.necessaryOnlyButtonLocator.getAttribute('variant');
    }

    /**
     * Clicks the "Necessary Only" link within the body.
     *
     * @returns {Promise<void>} A Promise that resolves once the "Necessary Only" link
     *                          within the body has been successfully clicked.
     */
    async clickNecessaryOnlyLink () : Promise<void> {
        await this.bodyNecessaryOnlyLinkLocator.click();
    }

    /**
     * Clicks either the "Necessary Only" button or the "Necessary Only" link within the body, based on the specified element level.
     *
     * @param {Level} elementLevel The level of the element to click, either 'action' or 'body'.
     * @returns {Promise<void>} A Promise that resolves once the appropriate element has been successfully clicked.
     */
    async clickNecessaryOnlyAll (elementLevel: Level) : Promise<void> {
        await (elementLevel === 'action' ? this.clickNecessaryOnlyButton() : this.clickNecessaryOnlyLink());
    }

    /**
     * Clicks the "Manage Preferences" link.
     *
     * @returns {Promise<void>} A Promise that resolves once the "Manage Preferences" link
     *                          has been successfully clicked.
     */
    async clickManagePreferencesAction () : Promise<void> {
        await this.managePrefsLinkLocator.click();
    }

    /**
     * Clicks the "Manage Preferences" link within the body.
     *
     * @returns {Promise<void>} A Promise that resolves once the "Manage Preferences" link
     *                          within the body has been successfully clicked.
     */
    async clickManagePreferencesLink () : Promise<void> {
        await this.bodyManagePreferencesLinkLocator.click();
    }

    /**
     * Clicks either the "Manage Preferences" action or the "Manage Preferences" link within the body, based on the specified element level.
     *
     * @param {Level} elementLevel The level of the element to click, either 'action' or 'body'.
     * @returns {Promise<void>} A Promise that resolves once the appropriate element has been successfully clicked.
     */
    async clickManagePreferencesAll (elementLevel: Level) : Promise<void> {
        await (elementLevel === 'action' ? this.clickManagePreferencesAction() : this.clickManagePreferencesLink());
    }

    /**
     * Clicks the preference toggle associated with the specified preference IDs.
     *
     * @param {PreferenceIds} preferenceIds The preference IDs used to locate the preference toggle.
     * @returns {Promise<void>} A Promise that resolves once the preference toggle has been successfully clicked.
     */
    async clickPreferenceToggle (preferenceIds: PreferenceIds) : Promise<void> {
        const preferenceToggle = this.page.locator(getPreferenceItemSelector(preferenceIds));
        return preferenceToggle.click();
    }

    /**
     * Checks whether the preference toggle associated with the specified preference IDs is checked.
     *
     * @param {PreferenceIds} preferenceIds The preference IDs used to locate the preference toggle.
     * @returns {Promise<boolean>} A Promise that resolves to a boolean value indicating whether the preference toggle is checked (`true`) or not (`false`).
     */
    async isPreferenceToggleChecked (preferenceIds: PreferenceIds) : Promise<boolean> {
        const preferenceToggle = this.page.locator(getPreferenceItemSelector(preferenceIds));
        return preferenceToggle.isChecked();
    }

    /**
     * Checks whether the preference toggle associated with the specified preference IDs is disabled.
     *
     * @param {PreferenceIds} preferenceIds The preference IDs used to locate the preference toggle.
     * @returns {Promise<boolean>} A Promise that resolves to a boolean value indicating whether the preference toggle is disabled (`true`) or not (`false`).
     */
    async isPreferenceToggleDisabled (preferenceIds: PreferenceIds) : Promise<boolean> {
        const preferenceToggle = this.page.locator(getPreferenceItemSelector(preferenceIds));
        return preferenceToggle.isDisabled();
    }

    /**
     * Retrieves the text content of the "Accept All" button and trims any leading or trailing whitespace.
     *
     * @returns {Promise<string | undefined>} A Promise that resolves to the trimmed text content of the "Accept All" button,
     *                                        or `undefined` if the button is not found.
     */
    async getAcceptAllTextContent () : Promise<string | undefined> {
        const acceptAllText = await this.acceptAllButtonLocator.textContent();
        return acceptAllText?.trim();
    }

    /**
     * Retrieves the text content of the "Necessary Only" button and trims any leading or trailing whitespace.
     *
     * @returns {Promise<string | undefined>} A Promise that resolves to the trimmed text content of the "Necessary Only" button,
     *                                        or `undefined` if the button is not found.
     */
    async getNecessaryOnlyTextContent () : Promise<string | undefined> {
        const necessaryOnlyText = await this.necessaryOnlyButtonLocator.textContent();
        return necessaryOnlyText?.trim();
    }

    /**
     * Retrieves the text content of the "Manage Preferences" link and trims any leading or trailing whitespace.
     *
     * @returns {Promise<string | undefined>} A Promise that resolves to the trimmed text content of the "Manage Preferences" link,
     *                                        or `undefined` if the link is not found.
     */
    async getManagePreferencesTextContent () : Promise<string | undefined> {
        const managePreferencesText = await this.managePrefsLinkLocator.textContent();
        return managePreferencesText?.trim();
    }

    /**
     * Retrieves the text content of the component's description and trims any leading or trailing whitespace.
     *
     * @returns {Promise<string | undefined>} A Promise that resolves to the trimmed text content of the component's description,
     *                                        or `undefined` if the description is not found.
     */
    async getComponentDescriptionTextContent () : Promise<string | undefined> {
        const componentDescriptionText = await this.descriptionLocator.textContent();
        return componentDescriptionText?.trim();
    }

    /**
     * Retrieves the value of the specified attribute from the banner cookie statement link.
     *
     * @param {string} attribute The name of the attribute to retrieve.
     * @returns {Promise<string | null>} A Promise that resolves to the value of the specified attribute
     *                                   on the banner cookie statement link, or `null` if the attribute does not exist.
     */
    async getBannerCookieStatementLinkAttribute (attribute: string) : Promise<string | null> {
        return this.descriptionLocator.locator(this.bodyCookieStatementLinkLocator).getAttribute(attribute);
    }

    /**
     * Retrieves the value of the specified attribute from the modal cookie statement link.
     *
     * @param {string} attribute The name of the attribute to retrieve.
     * @returns {Promise<string | null>} A Promise that resolves to the value of the specified attribute
     *                                   on the modal cookie statement link, or `null` if the attribute does not exist.
     */
    async getModalCookieStatementLinkAttribute (attribute: string) : Promise<string | null> {
        return this.modalDescriptionLocator.locator(this.bodyCookieStatementLinkLocator).getAttribute(attribute);
    }

    /**
     * Retrieves the value of the specified attribute from the banner cookie technologies link.
     *
     * @param {string} attribute The name of the attribute to retrieve.
     * @returns {Promise<string | null>} A Promise that resolves to the value of the specified attribute
     *                                   on the banner cookie technologies link, or `null` if the attribute does not exist.
     */
    async getBannerCookieTechnologiesLinkAttribute (attribute: string) : Promise<string | null> {
        return this.descriptionLocator.locator(this.bodyCookieTechnologiesLinkLocator).getAttribute(attribute);
    }

    /**
     * Retrieves the value of the specified attribute from the modal cookie technologies link.
     *
     * @param {string} attribute The name of the attribute to retrieve.
     * @returns {Promise<string | null>} A Promise that resolves to the value of the specified attribute
     *                                   on the modal cookie technologies link, or `null` if the attribute does not exist.
     */
    async getModalCookieTechnologiesLinkAttribute (attribute: string) : Promise<string | null> {
        return this.modalDescriptionLocator.locator(this.bodyCookieTechnologiesLinkLocator).getAttribute(attribute);
    }

    /**
     * Checks whether the preference toggle associated with the specified preference IDs is checked.
     *
     * @param {Object[]} preferences An array of preference objects.
     * @param {string} preferences[].id The preference IDs used to locate the preference toggle.
     * @returns {Promise<Object[]>} A promise that resolves to an array of objects for prefernece ID and
     *                              whether the preference toggle is checked (`true`) or not (`false`).
     */
    async getAllCheckedPreferences (preferences: { id: string }[]): Promise<{ id: string; isChecked: boolean }[]> {
        const elements = preferences.map(async ({ id }) => ({
            id,
            isChecked: await this.isPreferenceToggleChecked(id as PreferenceIds),
        }));
        return Promise.all(elements);
    }

    async setProperty (property: string, value: string) {
        await this.page.evaluate(([prop, val]) => {
            const component = document.querySelector('pie-cookie-banner');
            if (component) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (component as any)[prop as keyof any] = val;
            }
        }, [property, value]);
    }

    async waitForLocaleUpdate () {
        await this.page.waitForFunction(() => {
            const component = document.querySelector('pie-cookie-banner');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return component && component._locale && Object.keys(component._locale).length > 0;
        });
    }
}
