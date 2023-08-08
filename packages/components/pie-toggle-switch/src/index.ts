import {
    LitElement, html, unsafeCSS, nothing,
} from 'lit';
import { property } from 'lit/decorators.js';
import { RtlMixin } from '@justeattakeaway/pie-webc-core';
import styles from './toggle-switch.scss?inline';
import { ToggleSwitchProps, EVENT_TOGGLE_SWITCH_CHANGED, AriaProps } from './defs';
import '@justeattakeaway/pie-icons-webc/dist/icons/IconCheck.js';

// Valid values available to consumers
export {
    type ToggleSwitchProps,
};

const componentSelector = 'pie-toggle-switch';

/**
 * @event {CustomEvent} pie-toggle-switch-changed - when the toggle switch checked state is changed.
 */

export class PieToggleSwitch extends RtlMixin(LitElement) implements ToggleSwitchProps {
    @property({ type: Object })
    public aria!: AriaProps;

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
            aria,
            isChecked,
            isDisabled,
        } = this;

        const toggleSwitchId = 'toggle-switch-description';

        return html`
            <label
                data-test-id="toggle-switch-component"
                class="c-toggleSwitch"
                ?isChecked="${isChecked}"
                ?isDisabled=${isDisabled}
                aria-label="${aria?.label || nothing}">
                <input
                    data-test-id="toggle-switch-input"
                    role="switch"
                    type="checkbox"
                    class="c-toggleSwitch-input"
                    .checked="${isChecked}"
                    .disabled="${isDisabled}"
                    @change="${this.onToggleChange}"
                    aria-describedby="${aria?.describedBy ? toggleSwitchId : nothing}">

                <div class="c-toggleSwitch-control">
                    ${isChecked ? html`<icon-check></icon-check>` : nothing}
                </div>
            </label>
            ${aria?.describedBy ? html`<div id="${toggleSwitchId}" data-test-id="${toggleSwitchId}" class="c-toggleSwitch-description">${aria?.describedBy}</div>` : nothing}
        `;
    }
}

customElements.define(componentSelector, PieToggleSwitch);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieToggleSwitch;
    }
}
