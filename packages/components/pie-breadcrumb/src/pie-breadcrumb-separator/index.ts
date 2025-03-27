import { html, LitElement } from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { componentSelector, type BreadcrumbSeparatorProps } from './defs';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';

/**
 * @tagname pie-breadcrumb-separator
 */
export class PieBreadcrumbSeparator extends LitElement implements BreadcrumbSeparatorProps {
    protected render () {
        return html`
            <icon-chevron-right></icon-chevron-right>
        `;
    }
}

defineCustomElement(componentSelector, PieBreadcrumbSeparator);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieBreadcrumbSeparator;
    }
}
