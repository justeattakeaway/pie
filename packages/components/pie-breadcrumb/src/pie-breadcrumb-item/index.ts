import { LitElement } from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { componentSelector, type BreadcrumbItemProps } from './defs';

/**
 * @tagname pie-option
 */
export class PieBreadcrumbItem extends LitElement implements BreadcrumbItemProps {

}

defineCustomElement(componentSelector, PieBreadcrumbItem);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieBreadcrumbItem;
    }
}