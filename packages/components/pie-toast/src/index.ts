import { LitElement, html, unsafeCSS } from 'lit';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './toast.scss?inline';
import { ToastProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-toast';

/**
 * @tagname pie-toast
 */
export class PieToast extends RtlMixin(LitElement) implements ToastProps {
    render () {
        return html`<h1 data-test-id="pie-toast">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieToast);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieToast;
    }
}
