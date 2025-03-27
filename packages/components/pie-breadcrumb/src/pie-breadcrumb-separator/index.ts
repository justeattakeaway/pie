import { LitElement } from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { componentSelector, type BreadcrumbSeparatorProps } from './defs';

/**
 * @tagname pie-option
 */
export class PieBreadcrumbSeparator extends LitElement implements BreadcrumbSeparatorProps {

}

defineCustomElement(componentSelector, PieBreadcrumbSeparator);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieBreadcrumbSeparator;
    }
}