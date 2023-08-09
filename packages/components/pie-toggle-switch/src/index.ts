import {
    LitElement, html, unsafeCSS, nothing, TemplateResult,
} from 'lit';
import { property } from 'lit/decorators.js';
import { RtlMixin } from '@justeattakeaway/pie-webc-core';
import styles from './toggle-switch.scss?inline';
import {
    ToggleSwitchProps,
    ON_EVENT_TOGGLE_SWITCH_CHANGED,
    type LabelProps,
} from './defs';
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
    @property({ type: Boolean, reflect: true })
    public isChecked = false;

    @property({ type: Boolean, reflect: true })
    public isDisabled = false;

    @property({ type: Object })
    public label!: LabelProps;

    static styles = unsafeCSS(styles);

    onToggleChange (event: Event) {
        const target = event?.target as HTMLInputElement;
        this.isChecked = target.checked;
        this.dispatchEvent(new CustomEvent(ON_EVENT_TOGGLE_SWITCH_CHANGED, { detail: this.isChecked }));
    }

    /**
     * Renders the label for a toggle switch if provided.
     * You can only pass in either a leading or trailing label, if you pass both in
     * as true nothing renders.
     *
     * @private
     */
    private renderToggleSwitchLabel (): TemplateResult {
        const { label } = this;

        if (label?.text && (label?.position.leading || label?.position.trailing)) {
            if (label.position.leading && label.position.trailing) {
                return html``;
            }

            return html`
                <span
                    data-test-id="toggle-switch-label"
                    class="c-toggleSwitch-label ${label.position.leading ? 'c-toggleSwitch--leading' : 'c-toggleSwitch--trailing'}">
                    ${label.text}
                </span>`;
        }

        return html``;
    }

    render () {
        const {
            isChecked,
            isDisabled,
            label,
        } = this;

        return html`
            <div class="c-toggleSwitch-wrapper">
                ${label.position.leading ? this.renderToggleSwitchLabel() : nothing}
                <label
                    data-test-id="toggle-switch-component"
                    class="c-toggleSwitch"
                    ?isChecked="${isChecked}"
                    ?isDisabled=${isDisabled}>
                    <input
                        role="switch"
                        type="checkbox"
                        class="c-toggleSwitch-input"
                        .checked="${isChecked}"
                        .disabled="${isDisabled}"
                        @change="${this.onToggleChange}">
                    <div class="c-toggleSwitch-control">
                        ${isChecked ? html`<icon-check></icon-check>` : nothing}
                    </div>
                </label>
                ${label.position.trailing ? this.renderToggleSwitchLabel() : nothing}
            </div>
        `;
    }
}

customElements.define(componentSelector, PieToggleSwitch);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieToggleSwitch;
    }
}
