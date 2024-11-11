import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './foo-bar.scss?inline';
import { type FooBarProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-foo-bar';

/**
 * @tagname pie-foo-bar
 */
export class PieFooBar extends LitElement implements FooBarProps {
    render () {
        return html`<h1 data-test-id="pie-foo-bar">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieFooBar);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieFooBar;
    }
}
