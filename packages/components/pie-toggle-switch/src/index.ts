import {
    LitElement, html, unsafeCSS, nothing,
} from 'lit';
import { property } from 'lit/decorators.js';
import styles from './toggle-switch.scss?inline';
import { ToggleSwitchProps, EVENT_TOGGLE_SWITCH_CHANGED } from './defs';
import '@justeattakeaway/pie-icons-webc/icons/IconCheck';

// Valid values available to consumers
export {
    type ToggleSwitchProps,
};

const componentSelector = 'pie-toggle-switch';

/**
 * @event {CustomEvent} pie-toggle-switch-changed - when the toggle switch checked state is changed.
 */
export class PieToggleSwitch extends LitElement implements ToggleSwitchProps {
    disabled: boolean;
    @property({ type: Boolean, reflect: true })
    public isChecked = false;

    @property({ type: Boolean, reflect: true })
    public isDisabled = false;

    static styles = unsafeCSS(styles);

    onToggleChange (event: Event) {
        const target = event?.target as HTMLInputElement;
        this.isChecked = target.checked;
        this.dispatchEvent(new CustomEvent(EVENT_TOGGLE_SWITCH_CHANGED, { detail: this.isChecked }));
    }

    render () {
        const {
            isChecked,
            isDisabled,
        } = this;

        return html`
            <label
                data-test-id="toggle-switch-component"
                class="c-toggle-switch"
                ?isChecked="${isChecked}"
                ?isDisabled=${isDisabled}>
                <input
                    role="switch"
                    type="checkbox"
                    class="c-toggle-switch-input"
                    .checked="${isChecked}"
                    .disabled="${isDisabled}"
                    @change="${this.onToggleChange}">

                <div class="c-toggle-switch-control">
                    ${isChecked ? html`<icon-check />` : nothing}
                </div>
            </label>
        `;
    }
}

customElements.define(componentSelector, PieToggleSwitch);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieToggleSwitch;
    }
}
