import { LitElement, html, unsafeCSS } from 'lit';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './toast-provider.scss?inline';
import { type ToastProviderProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-toast-provider';

/**
 * @tagname pie-toast-provider
 */
export class PieToastProvider extends RtlMixin(LitElement) implements ToastProviderProps {
    render () {
        return html`<h1 data-test-id="pie-toast-provider">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieToastProvider);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieToastProvider;
    }
}
