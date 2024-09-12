import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './radio-group.scss?inline';
import { type RadioGroupProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-radio-group';

/**
 * @tagname pie-radio-group
 */
export class PieRadioGroup extends LitElement implements RadioGroupProps {
    render () {
        return html`<h1 data-test-id="pie-radio-group">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieRadioGroup);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieRadioGroup;
    }
}
