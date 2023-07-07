import { LitElement, html, unsafeCSS } from 'lit-element';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './button.scss?inline';
import {
    CheckboxProps, inputTypes,
} from './defs';

// Valid values available to consumers
export {
    type CheckboxProps,
    inputTypes,
};

const componentSelector = 'pie-checkbox';

export class PieCheckbox extends LitElement {
    @property({ type: Boolean })
    public checked = false;

    @property({ type: Boolean })
    public disabled = false;

    @property()
    @validPropertyValues(componentSelector, inputTypes, 'checkbox')
    public inputType: CheckboxProps['inputType'] = 'checkbox';

    render () {
        const {
            checked,
            disabled,
            inputType,
        } = this;
        return html`
        <div>
            <input 
                class="c-formSelector" 
                type=${inputType} 
                role="checkbox" 
                .checked=${checked} 
                isChecked=${checked} 
                @change=${this._handleInputChange} 
                ?disabled=${disabled} 
            >
            <label 
                class="label"
            >
                <span 
                    class="text"
                >
                    <slot></slot>
                </span>
            </label>
        </div>`;
    }

    private _handleInputChange (event: Event) {
        event.stopPropagation();

        this.checked = (event.target as HTMLInputElement).checked;

        this.dispatchEvent(new CustomEvent('change', { detail: this.checked }));
    }

    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieCheckbox);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCheckbox;
    }
}
