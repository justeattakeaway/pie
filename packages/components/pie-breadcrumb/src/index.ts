import { LitElement, html, unsafeCSS } from 'lit';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';

import styles from './breadcrumb.scss?inline';
import { type BreadcrumbProps, componentSelector, componentClass } from './defs';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-breadcrumb
 */
export class PieBreadcrumb extends RtlMixin(LitElement) implements BreadcrumbProps {
    render () {
        const componentWrapperClasses = {
            [componentClass]: true,
        };

        return html`
            <nav 
                data-test-id="${componentSelector}" 
                class="${classMap(componentWrapperClasses)}">
                <ol>
                    <li><span>Previous Page</span></li>
                    <li><span>Current Page</span></li>
                </ol>
            </nav>`;
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
