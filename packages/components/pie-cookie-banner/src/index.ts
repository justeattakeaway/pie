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
                <p>We use our own and third party cookies and other tech to enhance and personalise your user experience,
                optimize analytics, and show ads with third parties
                (read our <pie-link variant="inverse">Statement</pie-link>).
                Necessary cookies are always set. Click <pie-link variant="inverse">Necessary only</pie-link>
                to continue without accepting more. Click <pie-link variant="inverse">Manage preferences</pie-link>
                to share your preferences or <pie-link variant="inverse">Accept all</pie-link>.</p>
            </div>

            <div class="c-cookieBanner-actions">
                <pie-link variant="inverse" size="medium" isBold="true">
                    Manage preferences
                </pie-link>
                <pie-button variant="outline" isFullWidth="true" size="small-expressive">
                    Necessary only
                </pie-button>
                <pie-button variant="primary" isFullWidth="true" size="small-expressive">
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
