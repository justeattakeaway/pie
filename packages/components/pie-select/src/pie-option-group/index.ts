import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { type OptionGroupProps } from './defs';

const componentSelector = 'pie-option-group';

/**
 * @tagname pie-option-group
 */
@customElement('pie-option-group')
export class PieOptionGroup extends LitElement implements OptionGroupProps {

}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieOptionGroup;
    }
}
