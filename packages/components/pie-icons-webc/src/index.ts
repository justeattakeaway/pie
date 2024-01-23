import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './icon.scss?inline';
import { IconCloseProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'icon-close';

/**
 * @tagname icon-close
 */
export class IconClose extends LitElement implements IconCloseProps {
    render () {
        return html`<h1 data-test-id="icon-close">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, IconClose);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: IconClose;
    }
}
