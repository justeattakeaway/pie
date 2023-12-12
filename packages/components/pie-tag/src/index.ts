import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './tag.scss?inline';
import { TagProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-tag';

/**
 * @tagname pie-tag
 */
export class PieTag extends LitElement implements TagProps {
    render () {
        return html`<h1 data-test-id="pie-tag">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieTag);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTag;
    }
}
