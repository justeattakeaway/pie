import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './chip.scss?inline';
import { ChipProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-chip';

/**
 * @tagname pie-chip
 */
export class PieChip extends LitElement implements ChipProps {
    render () {
        return html`<h1 data-test-id="pie-chip">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieChip);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieChip;
    }
}
