import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { optionGroupDefaultProps, type OptionGroupProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-option-group';

/**
 * @tagname pie-option-group
 */
export class PieOptionGroup extends LitElement implements OptionGroupProps {
    @property({ type: Boolean })
    public disabled = optionGroupDefaultProps.disabled;

    @property({ type: String })
    public label = optionGroupDefaultProps.label;
}

defineCustomElement(componentSelector, PieOptionGroup);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieOptionGroup;
    }
}
