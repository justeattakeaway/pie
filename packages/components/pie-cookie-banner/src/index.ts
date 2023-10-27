import {
    LitElement, html, unsafeCSS, TemplateResult, nothing,
} from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { property, state, queryAll } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { PieSwitch } from '@justeattakeaway/pie-switch';
import styles from './cookie-banner.scss?inline';
import {
    CookieBannerProps,
    ON_COOKIE_BANNER_ACCEPT_ALL,
    ON_COOKIE_BANNER_NECESSARY_ONLY,
    ON_COOKIE_BANNER_MANAGE_PREFS,
    ON_COOKIE_BANNER_PREFS_SAVED,
    preferences,
    type Preference,
    type PreferenceIds,
    type CookieBannerLocale,
    type CustomTagEnhancers,
} from './defs';

import { localiseText, localiseRichText } from './localisation-utils';
import defaultLocale from '../locales/en-GB.json';

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
export class PieCookieBanner extends LitElement implements CookieBannerProps {
    @state()
    private _isCookieBannerHidden = false;

    @state()
    private _isModalOpen = false;

    @property({ type: Boolean })
    public hasPrimaryActionsOnly = false;

    @property({ type: Object })
    public locale:CookieBannerLocale = defaultLocale;

    @queryAll('pie-switch')
        _preferencesNodes!: NodeListOf<PieSwitch>;

    private _customTagEnhancers:CustomTagEnhancers = {
        linkStatement: (tagContent:string) => html`<pie-link variant="inverse">${tagContent}</pie-link>`,
        linkNecessaryOnly: (tagContent:string) => html`<pie-link data-test-id="body-necessary-only" tag="button" variant="inverse" @click="${this._onNecessaryOnly}">${tagContent}</pie-link>`,
        linkManagePreferences: (tagContent:string) => html`<pie-link data-test-id="body-manage-prefs" tag="button" variant="inverse" @click="${this._openManagePreferencesModal}">${tagContent}</pie-link>`,
        linkAcceptAll: (tagContent:string) => html`<pie-link data-test-id="body-accept-all" tag="button" variant="inverse" @click="${this._onAcceptAll}">${tagContent}</pie-link>`,
        linkCookieStatement: (tagContent:string) => html`<pie-link href="#" size="small" target="_blank">${tagContent}</pie-link>`,
        linkCookieTechList: (tagContent:string) => html`<pie-link href="#" size="small" target="_blank">${tagContent}</pie-link>`,
    };

    private _localiseText (key:string):string {
        return localiseText(this.locale, key);
    }

    private _localiseRichText (key:string):Array<string|TemplateResult> {
        return localiseRichText(this.locale, key, this._customTagEnhancers);
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
     * Creates a state object for the save event, indicating the isChecked status
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
        .forEach(({ id, isChecked }) => {
            state = { ...state, [id]: isChecked };
        });

        this._dispatchCookieBannerCustomEvent(ON_COOKIE_BANNER_PREFS_SAVED, state);
        this._isModalOpen = false;
        this._isCookieBannerHidden = true;
    }

    /**
     * Note: We should aim to have a shareable event helper system to allow
     * us to share this across components in-future.
     *
     * Dispatch a custom event.
     *
     * To be used whenever we have behavioral events we want to
     * bubble up through the cookie banner.
     *
     * @param {string} eventType
     * @param {any} detail
     */
    private _dispatchCookieBannerCustomEvent = (eventType: string, detail?: CustomEventInit['detail']) : void => {
        const event = new CustomEvent(eventType, {
            bubbles: true,
            composed: true,
            detail,
        });

        this.dispatchEvent(event);
    };

    /**
     * Hides the cookie banner and emits the necessary only event
     */
    private _onNecessaryOnly = () : void => {
        this._dispatchCookieBannerCustomEvent(ON_COOKIE_BANNER_NECESSARY_ONLY);
        this._isCookieBannerHidden = true;
    };

    /**
     * Hides the cookie banner and emits the accept all event
     */
    private _onAcceptAll = () : void => {
        this._dispatchCookieBannerCustomEvent(ON_COOKIE_BANNER_ACCEPT_ALL);
        this._isCookieBannerHidden = true;
    };

    /**
     * Opens the manage preferences modal and emits an event letting users know
     */
    private _openManagePreferencesModal = () : void => {
        this._isCookieBannerHidden = true;
        this._dispatchCookieBannerCustomEvent(ON_COOKIE_BANNER_MANAGE_PREFS);
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
            const isChecked = e.detail;
            this._preferencesNodes.forEach((node) => {
                node.isChecked = node.isDisabled ? node.isChecked : isChecked;
            });
        } else {
            toggleAllNode.isChecked = [...this._preferencesNodes]
            .filter(({ id }) => id !== 'all')
            .every(({ isChecked }) => isChecked);
        }
    };

    /**
     * Renders the content of the preference item.
     * @private
     */
    private renderPreference ({
        id, isChecked, isDisabled, hasDivider, hasDescription,
    }: Preference): TemplateResult {
        const title = this._localiseText(`preferencesManagement.${id}.title`);
        const descriptionLocaleKey = `preferencesManagement.${id}.description`;
        // Ensure not to display fallback text as description as its expected that some items might not have its own description
        const description = hasDescription && this._localiseText(descriptionLocaleKey);

        return html`
            <div class="c-cookieBanner-preference">
                <div>
                    <h3 class="c-cookieBanner-subheading">${title}</h3>
                     ${description ? html`<p class="c-cookieBanner-description">${description}</p>` : nothing}
                 </div>
                <pie-switch
                    id="${id}"
                    ?isChecked="${isChecked}"
                    ?isDisabled="${isDisabled}"
                    @pie-switch-changed="${this._handleSwitchStates}">
                </pie-switch>
            </div>
            ${hasDivider ? html`<pie-divider></pie-divider>` : nothing}`;
    }

    /**
     * Renders the modal content.
     * @private
     */
    private renderModalContent (): TemplateResult {
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
        const modalActionProps = {
            text: this._localiseText('preferencesManagement.cta.save.label'),
            variant: 'primary',
            ariaLabel: this._localiseText('preferencesManagement.cta.save.label'), // TODO: Replace with the appropriate "ariaLabel" as soon as the spreadsheet is updated
        };

        return html`
        <pie-modal
            .isOpen="${this._isModalOpen}"
            hasBackButton
            hasStackedActions
            isFullWidthBelowMid
            heading="${this._localiseText('preferencesManagement.title')}"
            .leadingAction="${modalActionProps}"
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
                    isBold="true">
                    ${this._localiseText('banner.cta.managePreferences')}
                </pie-link>
            </div>
        </aside>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieCookieBanner);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCookieBanner;
    }
}
