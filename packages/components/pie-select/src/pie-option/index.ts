import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { type OptionProps } from './defs';

const componentSelector = 'pie-option';

/**
 * @tagname pie-option
 */
@customElement('pie-option')
export class PieOption extends LitElement implements OptionProps {

}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieOption;
    }
}
