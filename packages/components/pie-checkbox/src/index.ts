import { LitElement, html } from 'lit-element';
import { property } from 'lit/decorators.js';
import {
    CheckboxProps,
} from './defs';

// Valid values available to consumers
export {
    type CheckboxProps,
};

const componentSelector = 'pie-checkbox';

export class PieCheckbox extends LitElement {
    @property({ type: Boolean })
    public checked = false;

    toggleCheck (e: any) {
        console.log(e.target.checked);

        this.checked = e.target.checked;
    }

    render () {
        const {
            checked,
        } = this;
        return html`
        <div>
          <input type="checkbox" role="checkbox" .checked=${checked} @click=${this.toggleCheck}/>
        </div>`;
    }
}

customElements.define(componentSelector, PieCheckbox);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCheckbox;
    }
}
