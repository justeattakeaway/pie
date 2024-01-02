import { LitElement, html, unsafeCSS } from 'lit';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './input.scss?inline';
import { InputProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-input';

/**
 * @tagname pie-input
 */
export class PieInput extends RtlMixin(LitElement) implements InputProps {
    render () {
        return html`<h1 data-test-id="pie-input">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieInput);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieInput;
    }
}
