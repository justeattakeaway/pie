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
    @property({ type: Boolean, reflect: true })
    public disabled = optionDefaultProps.disabled;

    @property({ type: Boolean, reflect: true })
    public selected = optionDefaultProps.selected;

    @property({ type: String, reflect: true })
    public value = optionDefaultProps.value;
}

defineCustomElement(componentSelector, PieOption);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieOption;
    }
}
