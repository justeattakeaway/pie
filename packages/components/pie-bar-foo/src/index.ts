import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './bar-foo.scss?inline';
import { type BarFooProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-bar-foo';

/**
 * @tagname pie-bar-foo
 */
export class PieBarFoo extends LitElement implements BarFooProps {
    render () {
        return html`<h1 data-test-id="pie-bar-foo">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieBarFoo);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieBarFoo;
    }
}
