import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './spinner.scss?inline';
import { SpinnerProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-spinner';

/**
 * @tagname pie-spinner
 */
export class PieSpinner extends LitElement implements SpinnerProps {
    render () {
        return html`<h1 data-test-id="pie-spinner">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieSpinner);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieSpinner;
    }
}
