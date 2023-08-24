import {
    LitElement, html, unsafeCSS,
} from 'lit';
import { state } from 'lit/decorators.js';
import styles from './cookie-banner.scss?inline';
import {
    CookieBannerProps,
    ON_COOKIE_BANNER_ACCEPT_ALL,
    ON_COOKIE_BANNER_NECESSARY_ONLY,
    ON_COOKIE_BANNER_MANAGE_PREFS,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-cookie-banner';

export class PieCookieBanner extends LitElement implements CookieBannerProps {
    @state()
    private _hideCookieBanner = false;

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
    private _dispatchCookieBannerCustomEvent = (eventType: string) : void => {
        const event = new CustomEvent(eventType, {
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(event);
    };

    private _openManagePreferencesModal = () : void => {
        this._hideCookieBanner = true;
        this._dispatchCookieBannerCustomEvent(ON_COOKIE_BANNER_MANAGE_PREFS);
    };

    render () {
        const modalActionProps = {
            text: 'Save',
            variant: 'primary',
            ariaLabel: 'Save changes',
        };

        return html`
        <pie-modal
            hasBackButton
            size="large"
            heading="Manage your preferences"
            .leadingAction="${modalActionProps}"
        ></pie-modal>
        <aside data-test-id="pie-cookie-banner" class="c-cookieBanner" ?hideCookieBanner=${this._hideCookieBanner}>
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
                    @click="${() => this._dispatchCookieBannerCustomEvent(ON_COOKIE_BANNER_ACCEPT_ALL)}"
                    variant="primary"
                    isFullWidth
                    size="small-expressive">
                    Accept all
                </pie-button>
                <pie-button
                    @click="${() => this._dispatchCookieBannerCustomEvent(ON_COOKIE_BANNER_NECESSARY_ONLY)}"
                    variant="outline"
                    isFullWidth
                    size="small-expressive">
                    Necessary only
                </pie-button>
                <pie-link
                    @click="${() => this._openManagePreferencesModal()}"
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
