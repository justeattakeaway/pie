import { LitElement, html, unsafeCSS } from 'lit';

import styles from './link.scss?inline';
import { LinkProps } from './defs';

// Valid values available to consumers
export {
    type LinkProps,
};

const componentSelector = 'pie-link';

export class PieLink extends LitElement implements LinkProps {
    render () {
        return html`<h1 data-test-id="pie-link">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieLink);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieLink;
    }
}
