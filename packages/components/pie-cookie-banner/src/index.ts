import { LitElement, html, unsafeCSS } from 'lit';

import styles from './cookie-banner.scss?inline';
import { CookieBannerProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-cookie-banner';

export class PieCookieBanner extends LitElement implements CookieBannerProps {
    render () {
        return html`
        <aside data-test-id="pie-cookie-banner" class="c-cookieBanner">
            <p class="c-cookieBanner-title">Cookies</p>
            <div class="c-cookieBanner-body">
                <p class="c-cookieBanner-body">We use our own and third party cookies and other tech to enhance and personalise your user experience,
                optimize analytics, and show ads with third parties
                <pie-link>(read our Statement)</pie-link>.
                Necessary cookies are always set. Click <pie-link>Necessary only</pie-link>
                to continue without accepting more. Click <pie-link>Manage preferences</pie-link>
                to share your preferences or <pie-link>Accept all</pie-link>.</p>
            </div>

            <div class="c-cookieBanner-actions">
                <pie-button variant="ghost" isFullWidth="true">
                    Manage preferences
                </pie-button>
                <pie-button variant="outline" isFullWidth="true">
                    Necessary only
                </pie-button>
                <pie-button variant="primary" isFullWidth="true">
                    Accept all
                </pie-button>
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
