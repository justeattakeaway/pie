import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { selectOptionDefaultProps, type SelectOptionProps } from './defs';

const componentSelector = 'pie-select-option';

/**
 * @tagname pie-select-option
 */
export class PieSelectOption extends LitElement implements SelectOptionProps {
    @property({ type: Boolean })
    public disabled = selectOptionDefaultProps.disabled;

    @property({ type: String })
    public value = selectOptionDefaultProps.value;
}

defineCustomElement(componentSelector, PieSelectOption);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieSelectOption;
    }
}
