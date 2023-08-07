import { LitElement, html, unsafeCSS } from 'lit';

import styles from './divider.scss?inline';
import { DividerProps } from './defs';

// Valid values available to consumers
export {
    type DividerProps,
};

const componentSelector = 'pie-divider';

export class PieDivider extends LitElement implements DividerProps {
    render () {
        return html`<h1 data-test-id="pie-divider">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieDivider);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDivider;
    }
}
