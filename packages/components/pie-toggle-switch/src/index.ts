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
    @property({ type: Boolean, reflect: true })
    public checked = false;

    static styles = unsafeCSS(styles);

    toggleOption (event: Event) {
        const target = event?.target as HTMLInputElement;
        this.checked = target.checked;
        this.dispatchEvent(new CustomEvent(EVENT_TOGGLE_SWITCH_CHANGED, { detail: this.checked }));
    }

    render () {
        return html`
            <label
                data-test-id="toggle-switch-component"
                class="c-toggle-switch">
                <input
                    role="switch"
                    type="checkbox"
                    class="c-toggle-switch-input"
                    .checked="${this.checked}"
                    @change="${this.toggleOption}">

                <div class="c-toggle-switch-control">
                    ${this.checked ? html`<icon-check></icon-check>` : nothing}
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
