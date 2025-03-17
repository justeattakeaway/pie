import { LitElement } from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { type OptionGroupProps } from './defs';

const componentSelector = 'pie-option-group';

/**
 * @tagname pie-option-group
 */
export class PieOptionGroup extends LitElement implements OptionGroupProps {

}

defineCustomElement(componentSelector, PieOptionGroup);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieOptionGroup;
    }
}
