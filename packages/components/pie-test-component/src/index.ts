import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './test-component.scss?inline';
import { TestComponentProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-test-component';

/**
 * @tagname pie-test-component
 */
export class PieTestComponent extends LitElement implements TestComponentProps {
    render () {
        return html`<h1 data-test-id="pie-test-component">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieTestComponent);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTestComponent;
    }
}
