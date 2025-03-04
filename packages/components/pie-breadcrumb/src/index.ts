import { LitElement, html, unsafeCSS } from 'lit';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './breadcrumb.scss?inline';
import { type BreadcrumbProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-breadcrumb';

/**
 * @tagname pie-breadcrumb
 */
export class PieBreadcrumb extends RtlMixin(LitElement) implements BreadcrumbProps {
    render () {
        return html`<h1 data-test-id="pie-breadcrumb">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieBreadcrumb);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieBreadcrumb;
    }
}
