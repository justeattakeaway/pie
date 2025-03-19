import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { optionDefaultProps, type OptionProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-option';

/**
 * @tagname pie-option
 */
export class PieOption extends LitElement implements OptionProps {
    @property({ type: Boolean })
    public disabled = optionDefaultProps.disabled;

    @property({ type: Boolean })
    public selected = optionDefaultProps.selected;

    @property({ type: String })
    public value = optionDefaultProps.value;
}

defineCustomElement(componentSelector, PieOption);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieOption;
    }
}
