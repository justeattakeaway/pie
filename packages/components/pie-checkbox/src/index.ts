import { LitElement, html, unsafeCSS } from 'lit';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './checkbox.scss?inline';
import { CheckboxProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-checkbox';

/**
 * @tagname pie-checkbox
 */
export class PieCheckbox extends RtlMixin(LitElement) implements CheckboxProps {
    render () {
        return html`<h1 data-test-id="pie-checkbox">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieCheckbox);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCheckbox;
    }
}
