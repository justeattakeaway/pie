import { LitElement } from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { type SelectOptionGroupProps } from './defs';

const componentSelector = 'pie-option-group';

/**
 * @tagname pie-option-group
 */
export class PieOptionGroup extends LitElement implements SelectOptionGroupProps {

}

defineCustomElement(componentSelector, PieOptionGroup);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieOptionGroup;
    }
}
