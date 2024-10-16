import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './foo.scss?inline';
import { type FooProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-foo';

/**
 * @tagname pie-foo
 */
export class PieFoo extends LitElement implements FooProps {
    render () {
        return html`<h1 data-test-id="pie-foo">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieFoo);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieFoo;
    }
}
