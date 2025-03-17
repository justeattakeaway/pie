import { LitElement } from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { type OptionProps } from './defs';

const componentSelector = 'pie-option';

/**
 * @tagname pie-option
 */
export class PieOption extends LitElement implements OptionProps {

}

defineCustomElement(componentSelector, PieOption);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieOption;
    }
}
