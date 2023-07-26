import { LitElement, html, unsafeCSS } from 'lit-element';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './form-selector.scss?inline';
import {
    FormSelectorProps, inputTypes,
} from './defs';

// Valid values available to consumers
export {
    type FormSelectorProps,
    inputTypes,
};

const componentSelector = 'pie-form-selector';

export class PieFormSelector extends LitElement {
    @property({ type: Boolean })
    public checked = false;

    @property({ type: Boolean })
    public disabled = false;

    @property({ type: Boolean })
    public hasError = false;

    @property()
    @validPropertyValues(componentSelector, inputTypes, 'checkbox')
    public inputType: FormSelectorProps['inputType'] = 'checkbox';

    render () {
        const {
            checked,
            disabled,
            inputType,
            hasError,
        } = this;
        return html`
        <div>
            <input 
                class="c-formSelector"
                ?hasError=${hasError}
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

customElements.define(componentSelector, PieFormSelector);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieFormSelector;
    }
}
