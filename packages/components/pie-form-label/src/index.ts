import { LitElement, html, unsafeCSS } from 'lit';

import styles from './form-label.scss?inline';
import { FormLabelProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-form-label';

export class PieFormLabel extends LitElement implements FormLabelProps {
    render () {
        return html`<h1 data-test-id="pie-form-label">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieFormLabel);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieFormLabel;
    }
}
