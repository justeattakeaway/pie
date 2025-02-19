import { LitElement, html, unsafeCSS } from 'lit';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './select.scss?inline';
import { type SelectProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-select';

/**
 * @tagname pie-select
 */
export class PieSelect extends RtlMixin(LitElement) implements SelectProps {
    render () {
        return html`<h1 data-test-id="pie-select">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieSelect);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieSelect;
    }
}
