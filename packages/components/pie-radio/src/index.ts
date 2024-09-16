import { LitElement, html, unsafeCSS } from 'lit';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './radio.scss?inline';
import { type RadioProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-radio';

/**
 * @tagname pie-radio
 */
export class PieRadio extends RtlMixin(LitElement) implements RadioProps {
    render () {
        return html`<h1 data-test-id="pie-radio">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieRadio);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieRadio;
    }
}
