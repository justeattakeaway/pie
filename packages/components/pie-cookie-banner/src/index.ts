import {
    LitElement, html, unsafeCSS, TemplateResult, nothing,
} from 'lit';
import { state, queryAll } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { PieToggleSwitch } from '@justeattakeaway/pie-toggle-switch';
import styles from './cookie-banner.scss?inline';
import {
    CookieBannerProps,
    ON_COOKIE_BANNER_ACCEPT_ALL,
    ON_COOKIE_BANNER_NECESSARY_ONLY,
    ON_COOKIE_BANNER_MANAGE_PREFS,
    ON_COOKIE_BANNER_PREFS_SAVED,
    PREFERENCES,
    Preference,
    type PreferenceIds,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-cookie-banner';

/**
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

    @queryAll('pie-toggle-switch')
        _preferencesNodes!: NodeListOf<PieToggleSwitch>;

    /**
     * Handles closing the modal and re-displaying the cookie banner
     * and making the cookie banner visible
     */
    private _displayCookieBanner () : void {
        this._isModalOpen = false;
        this._isCookieBannerHidden = false;
    }

    /**
     * Handles saving the user cookie preferences,
     * closing the modal and the cookie banner
     */
    private _handlePreferencesSaved () : void {
        let state: { [x in PreferenceIds]: boolean } | Record<string, never> = {};

        [...this._preferencesNodes]
        .filter(({ id }) => id !== 'all')
        .forEach(({ id, isChecked }) => {
            state = { ...state, [id]: isChecked };
        });

        this._dispatchCookieBannerCustomEvent(ON_COOKIE_BANNER_PREFS_SAVED, state);
        this._isModalOpen = false;
        this._isCookieBannerHidden = true;
        console.info('Cookie Preferences saved', state);
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
     */
    private _dispatchCookieBannerCustomEvent = (eventType: string, detail?: CustomEventInit<unknown>) : void => {
        const event = new CustomEvent(eventType, {
            bubbles: true,
            composed: true,
            detail,
        });

        this.dispatchEvent(event);
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
     * Handles the logic of the toggle switch nodes (preferences).
     * Clicking the “all” toggle switch should turn on all preferences.
     * When the “all” toggle is checked, and one of the other preferences is clicked,
     * then the “all” toggle should be unchecked.
     */
    private _handlePreferencesToggled = (e: CustomEvent) : void => {
        const { id } = e?.currentTarget as HTMLInputElement;
        if (id === 'all') {
            const isChecked = e.detail;
            this._preferencesNodes.forEach((node) => {
                node.isChecked = node.isDisabled ? node.isChecked : isChecked;
            });
        } else {
            [...this._preferencesNodes].find(({ id }) => id === 'all').isChecked = false;
        }
    };

    /**
     * Renders the content of the preference item.
     * @private
     */
    private renderPreference ({
        id, title, description, isChecked, isDisabled, hasDivider,
    }: Preference): TemplateResult {
        return html`
            <div class="c-cookieBanner-preferences-item">
                <div>
                    <h2 class="c-cookieBanner-title">${title}</h2>
                     ${description ? html`<p class="c-cookieBanner-preferences-description">${description}</p>` : nothing}
                 </div>
                <pie-toggle-switch 
                    id="${id}"
                    ?isChecked="${isChecked}" 
                    ?isDisabled="${isDisabled}"
                    @pie-toggle-switch-changed="${this._handlePreferencesToggled}"/>
                </div>
            ${hasDivider ? html`<pie-divider></pie-divider>` : nothing}`;
    }

    /**
     * Renders the modal content.
     * @private
     */
    private renderModalContent (): TemplateResult {
        return html`
            <p class="c-cookieBanner-preferences-description">You can find all the information in the 
                <pie-link href="#" size="small" target="_blank">Cookie Statement</pie-link> and 
                <pie-link href="#" size="small" target="_blank">Cookie technology list</pie-link>.
            </p>
            ${repeat(
            PREFERENCES,
            ({ id }) => id,
            (preference) => this.renderPreference(preference),
        )}`;
    }

    render () {
        const modalActionProps = {
            text: 'Save',
            variant: 'primary',
            ariaLabel: 'Save your cookie preferences',
        };

        return html`
        <pie-modal
            .isOpen="${this._isModalOpen}"
            hasBackButton
            hasStackedActions
            size="large"
            heading="Manage your preferences"
            .leadingAction="${modalActionProps}"
            @pie-modal-leading-action-click="${this._handlePreferencesSaved}"
            @pie-modal-back="${this._displayCookieBanner}">
                ${this.renderModalContent()}
            </pie-modal>
        <aside data-test-id="pie-cookie-banner" class="c-cookieBanner" ?isCookieBannerHidden=${this._isCookieBannerHidden}>
            <h2 class="c-cookieBanner-title">Cookies</h2>
            <div class="c-cookieBanner-body">
                <p>We use our own and third party cookies and other tech to enhance and personalise your user experience,
                optimize analytics, and show ads with third parties
                (read our <pie-link variant="inverse">Statement</pie-link>).
                Necessary cookies are always set. Click <pie-link variant="inverse">Necessary only</pie-link>
                to continue without accepting more. Click <pie-link variant="inverse">Manage preferences</pie-link>
                to share your preferences or <pie-link variant="inverse">Accept all</pie-link>.</p>
            </div>

            <div class="c-cookieBanner-actions">
                <pie-button
                    data-test-id="accept-all"
                    @click="${() => { this._dispatchCookieBannerCustomEvent(ON_COOKIE_BANNER_ACCEPT_ALL); this._isCookieBannerHidden = true; }}"
                    variant="primary"
                    isFullWidth
                    size="small-expressive">
                    Accept all
                </pie-button>
                <pie-button
                    data-test-id="necessary-only"
                    @click="${() => { this._dispatchCookieBannerCustomEvent(ON_COOKIE_BANNER_NECESSARY_ONLY); this._isCookieBannerHidden = true; }}"
                    variant="outline-inverse"
                    isFullWidth
                    size="small-expressive">
                    Necessary only
                </pie-button>
                <pie-link
                    data-test-id="manage-prefs"
                    @click="${this._openManagePreferencesModal}"
                    tag="button"
                    variant="inverse"
                    isBold="true">
                    Manage preferences
                </pie-link>
            </div>
        </aside>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieCookieBanner);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCookieBanner;
    }
}
