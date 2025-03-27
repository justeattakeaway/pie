import { html, LitElement } from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { componentSelector, type BreadcrumbItemProps } from './defs';

/**
 * @tagname pie-breadcrumb-item
 */
export class PieBreadcrumbItem extends LitElement implements BreadcrumbItemProps {
    render () {
        return html`
          <li><span><slot></slot></span></li>
        `;
    }
}

defineCustomElement(componentSelector, PieBreadcrumbItem);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieBreadcrumbItem;
    }
}
