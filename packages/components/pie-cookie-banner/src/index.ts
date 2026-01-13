import {
    html,
    unsafeCSS,
    nothing,
    type PropertyValues,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    property, state, queryAll,
} from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-divider';
import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-modal';
import '@justeattakeaway/pie-switch';
import { type PieSwitch } from '@justeattakeaway/pie-switch';
import { dispatchCustomEvent, safeCustomElement } from '@justeattakeaway/pie-webc-core';
import defaultLocale from '@justeattakeaway/pie-cookie-banner/locales/en.js';

import styles from './cookie-banner.scss?inline';
import {
    ON_COOKIE_BANNER_ACCEPT_ALL,
    ON_COOKIE_BANNER_NECESSARY_ONLY,
    ON_COOKIE_BANNER_MANAGE_PREFS,
    ON_COOKIE_BANNER_PREFS_SAVED,
    defaultProps,
    preferences,
    availableLocales,
    defaultLocaleForCountry,
    type CookieBannerProps,
    type Preference,
    type PreferenceIds,
    type CookieBannerLocale,
    type CustomTagEnhancers,
    type CountryCode,
    type LanguageCode,
} from './defs';

import { localiseText, localiseRichText } from './localisation-utils';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-cookie-banner';

/**
 * @tagname pie-cookie-banner
 * @event {CustomEvent} pie-cookie-banner-accept-all - when all cookies are accepted.
 * @event {CustomEvent} pie-cookie-banner-necessary-only - when all only necessary cookies are accepted.
 * @event {CustomEvent} pie-cookie-banner-manage-prefs - when a user clicks manage preferences.
 * @event {CustomEvent} pie-cookie-banner-prefs-saved - when a user clicks save preferences.
 */
@safeCustomElement('pie-cookie-banner')
export class PieCookieBanner extends PieElement implements CookieBannerProps {
    @state()
    private _isCookieBannerHidden = false;

    @state()
    private _isModalOpen = false;

    @state()
    private _locale: CookieBannerLocale = defaultLocale;

    @property({ type: Boolean })
    public hasPrimaryActionsOnly = defaultProps.hasPrimaryActionsOnly;

    @property({ type: Object })
    public defaultPreferences = defaultProps.defaultPreferences;

    @property({ type: String })
    public cookieStatementLink = defaultProps.cookieStatementLink;

    @property({ type: String })
    public cookieTechnologiesLink = defaultProps.cookieTechnologiesLink;

    @property({ type: String })
    public country = defaultProps.country;

    @property({ type: String })
    public language = defaultProps.language;

    @property({ type: Boolean })
    public openLinksInNewTab = defaultProps.openLinksInNewTab;

    @queryAll('pie-switch')
        _preferencesNodes!: NodeListOf<PieSwitch>;

    /**
     * Returns the target attribute value for external links based on the openLinksInNewTab prop.
     * - true (default): returns '_blank' (new tab)
     * - false: returns '_self' (same tab)
     */
    private get _linkTargetAttribute () {
        return this.openLinksInNewTab ? '_blank' : '_self';
    }

    async updated (changedProperties: PropertyValues<this>) {
        // Re-fetch locale when country or language changes
        if (changedProperties.has('language') || changedProperties.has('country')) {
            await this._setLocaleBasedOnCountryAndLanguage(this.language, this.country);
        }
    }

    // Dynamically import locale JSON based on country and language
    private async _setLocaleBasedOnCountryAndLanguage (language: LanguageCode, country: CountryCode): Promise<void> {
        try {
            const localeString = this._getLocaleString(language, country);
            this._locale = (await import(`../locales/${localeString}.js`)).default;
        } catch {
            this._locale = defaultLocale;
        }
    }

    /**
     * Gets the locale string for the requested language and country.
     *
     * @param languageCode - The requested language code (e.g., 'es').
     * @param countryCode - The requested country code (e.g., 'ch').
     * @returns - The best matching/supported locale string".
     */
    private _getLocaleString = (languageCode: LanguageCode, countryCode: CountryCode): string => {
        // 1. Check for the exact locale
        let requestedLocale = `${languageCode}-${countryCode}`.toLowerCase();
        if (availableLocales.has(requestedLocale)) {
            return requestedLocale;
        }

        // 2. Check for the requested language in the available locales
        requestedLocale = `${languageCode}`.toLowerCase();
        if (availableLocales.has(requestedLocale)) {
            return requestedLocale;
        }

        // 3. Check for the requested country's default locale in the available locales
        const preferredLocaleForCountryCode = defaultLocaleForCountry.get(countryCode.toLowerCase());
        if (preferredLocaleForCountryCode && availableLocales.has(preferredLocaleForCountryCode)) {
            return preferredLocaleForCountryCode;
        }

        // 4. Fallback (e.g. 'en')
        return `${defaultProps.language}`;
    };

    private _customTagEnhancers: CustomTagEnhancers = {
        linkStatement: (tagContent: string) => html`<pie-link href="${this.cookieStatementLink}" variant="inverse" target="${this._linkTargetAttribute}" data-test-id="cookie-statement-link">${tagContent}</pie-link>`,
        linkNecessaryOnly: (tagContent: string) => html`<pie-link data-test-id="body-necessary-only" tag="button" variant="inverse" @click="${this._onNecessaryOnly}">${tagContent}</pie-link>`,
        linkManagePreferences: (tagContent: string) => html`<pie-link data-test-id="body-manage-prefs" tag="button" variant="inverse" @click="${this._openManagePreferencesModal}">${tagContent}</pie-link>`,
        linkAcceptAll: (tagContent: string) => html`<pie-link data-test-id="body-accept-all" tag="button" variant="inverse" @click="${this._onAcceptAll}">${tagContent}</pie-link>`,
        linkCookieStatement: (tagContent: string) => html`<pie-link href="${this.cookieStatementLink}" size="small" target="${this._linkTargetAttribute}" data-test-id="cookie-statement-link">${tagContent}</pie-link>`,
        linkCookieTechList: (tagContent: string) => html`<pie-link href="${this.cookieTechnologiesLink}" size="small" target="${this._linkTargetAttribute}" data-test-id="cookie-technology-link">${tagContent}</pie-link>`,
    };

    private _localiseText (key: string) {
        return localiseText(this._locale, key);
    }

    private _localiseRichText (key: string) {
        return localiseRichText(this._locale, key, this._customTagEnhancers);
    }

    /**
     * Handles closing the modal and re-displaying the cookie banner
     * and making the cookie banner visible
     */
    private _displayCookieBanner () : void {
        this._isModalOpen = false;
        this._isCookieBannerHidden = false;
    }

    /**
     * Handles saving the user cookie preferences, closing the modal and the cookie banner
     * Creates a state object for the save event, indicating the checked status
     * of each preference except for the `all` preference.
     * @example {
     *  functional: false,
     *  necessary: true
     * }
     */
    private _handlePreferencesSaved () : void {
        let state: Partial<{ [x in PreferenceIds]: boolean }> = {};

        [...this._preferencesNodes]
        .filter(({ id }) => id !== 'all')
        .forEach(({ id, checked }) => {
            state = { ...state, [id]: checked };
        });

        dispatchCustomEvent(this, ON_COOKIE_BANNER_PREFS_SAVED, state);
        this._isModalOpen = false;
        this._isCookieBannerHidden = true;
    }

    /**
     * Hides the cookie banner and emits the necessary only event
     */
    private _onNecessaryOnly = () : void => {
        dispatchCustomEvent(this, ON_COOKIE_BANNER_NECESSARY_ONLY);
        this._isCookieBannerHidden = true;
    };

    /**
     * Hides the cookie banner and emits the accept all event
     */
    private _onAcceptAll = () : void => {
        dispatchCustomEvent(this, ON_COOKIE_BANNER_ACCEPT_ALL);
        this._isCookieBannerHidden = true;
    };

    /**
     * Opens the manage preferences modal and emits an event letting users know
     */
    private _openManagePreferencesModal = () : void => {
        this._isCookieBannerHidden = true;
        dispatchCustomEvent(this, ON_COOKIE_BANNER_MANAGE_PREFS);
        this._isModalOpen = true;
    };

    /**
     * Handles the logic of the switch nodes (preferences).
     * Clicking the “all” switch should turn on all preferences.
     * When the “all” switch is checked, and one of the other preferences is clicked,
     * then the “all” switch should be unchecked.
     * if all switches are checked, the `all` switch should
     * be turned on automatically
     */
    private _handleSwitchStates = (e: CustomEvent) : void => {
        const { id } = e?.currentTarget as HTMLInputElement;
        const toggleAllNode = [...this._preferencesNodes].find(({ id }) => id === 'all') as PieSwitch;

        if (id === toggleAllNode.id) {
            const { checked } = e.target as HTMLInputElement;
            this._preferencesNodes.forEach((node) => {
                node.checked = node.disabled ? node.checked : checked;
            });
        } else {
            toggleAllNode.checked = [...this._preferencesNodes]
            .filter(({ id }) => id !== 'all')
            .every(({ checked }) => checked);
        }
    };

    /**
     * Renders the content of the preference item.
     * @private
     */
    private renderPreference ({
        id, checked, disabled, hasDivider, hasDescription,
    }: Preference) {
        const title = this._localiseText(`preferencesManagement.${id}.title`);
        const descriptionLocaleKey = `preferencesManagement.${id}.description`;
        // Ensure not to display fallback text as description as its expected that some items might not have its own description
        const description = hasDescription && this._localiseText(descriptionLocaleKey);
        const requiredToggleAllKeys = ['functional', 'personalized', 'analytical'];

        const shouldToggleAll =
            requiredToggleAllKeys.every((key) => this.defaultPreferences?.[key as PreferenceIds] === true);

        return html`
            <div class="c-cookieBanner-preference">
                <div>
                    <h3 class="c-cookieBanner-subheading">${title}</h3>
                     ${description ? html`<p class="c-cookieBanner-description">${description}</p>` : nothing}
                 </div>
                <pie-switch
                    id="${id}"
                    ?checked="${this.defaultPreferences?.[id] || shouldToggleAll || checked}"
                    ?disabled="${disabled}"
                    @change="${this._handleSwitchStates}">
                </pie-switch>
            </div>
            ${hasDivider ? html`<pie-divider></pie-divider>` : nothing}`;
    }

    /**
     * Renders the modal content.
     * @private
     */
    private renderModalContent () {
        return html`
            <p class="c-cookieBanner-description" data-test-id="modal-description">
                ${this._localiseRichText('preferencesManagement.description')}
            </p>
            ${repeat(
            preferences,
            ({ id }) => id,
            (preference) => this.renderPreference(preference),
        )}`;
    }

    render () {
        const modalLeadingActionProps = {
            text: this._localiseText('preferencesManagement.cta.save.label'),
            ariaLabel: this._localiseText('preferencesManagement.cta.save.label'),
        };

        return html`
        <pie-modal
            .isOpen="${this._isModalOpen}"
            hasBackButton
            hasStackedActions
            isFullWidthBelowMid
            heading="${this._localiseText('preferencesManagement.title')}"
            .leadingAction=${modalLeadingActionProps}
            @pie-modal-leading-action-click="${this._handlePreferencesSaved}"
            @pie-modal-back="${this._displayCookieBanner}">
                ${this.renderModalContent()}
        </pie-modal>
        <aside data-test-id="pie-cookie-banner" class="c-cookieBanner" ?isCookieBannerHidden=${this._isCookieBannerHidden}>
            <h2 class="c-cookieBanner-title">${this._localiseText('banner.title')}</h2>
            <div class="c-cookieBanner-body" data-test-id="banner-description">
                <p>${this._localiseRichText('banner.description')}</p>
            </div>

            <div class="c-cookieBanner-actions">
                <pie-button
                    data-test-id="actions-accept-all"
                    @click="${this._onAcceptAll}"
                    variant="primary"
                    isFullWidth
                    size="small-expressive">
                    ${this._localiseText('banner.cta.acceptAll')}
                </pie-button>
                <pie-button
                    data-test-id="actions-necessary-only"
                    @click="${this._onNecessaryOnly}"
                    variant="${this.hasPrimaryActionsOnly ? 'primary' : 'outline-inverse'}"
                    isFullWidth
                    size="small-expressive">
                    ${this._localiseText('banner.cta.necessaryOnly')}
                </pie-button>
                <pie-link
                    data-test-id="actions-manage-prefs"
                    @click="${this._openManagePreferencesModal}"
                    tag="button"
                    variant="inverse"
                    isBold>
                    ${this._localiseText('banner.cta.managePreferences')}
                </pie-link>
            </div>
        </aside>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCookieBanner;
    }
}
