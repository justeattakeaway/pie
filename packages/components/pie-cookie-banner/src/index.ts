import { LitElement, html, unsafeCSS } from 'lit';

import styles from './cookie-banner.scss?inline';
import { CookieBannerProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-cookie-banner';

export class PieCookieBanner extends LitElement implements CookieBannerProps {
    render () {
        return html`<h1 data-test-id="pie-cookie-banner">Hello world!</h1>`;
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
