import {
    LitElement, html, unsafeCSS, nothing, TemplateResult,
} from 'lit';
import { property } from 'lit/decorators.js';
import { RtlMixin, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './toggle-switch.scss?inline';
import {
    ToggleSwitchProps, ON_TOGGLE_SWITCH_CHANGED_EVENT, AriaProps, labelPlacements,
} from './defs';
import '@justeattakeaway/pie-icons-webc/dist/icons/IconCheck.js';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-toggle-switch';

/**
 * @event {CustomEvent} pie-toggle-switch-changed - when the toggle switch checked state is changed.
 */

export class PieToggleSwitch extends RtlMixin(LitElement) implements ToggleSwitchProps {
    @property({ type: String })
    public label?: string;

    @property({ type: String })
    @validPropertyValues(componentSelector, labelPlacements, 'leading')
    public labelPlacement: ToggleSwitchProps['labelPlacement'] = 'leading';

    @property({ type: Object })
    public aria!: AriaProps;

    @property({ type: Boolean, reflect: true })
    public isChecked = false;

    @property({ type: Boolean, reflect: true })
    public isDisabled = false;

    static styles = unsafeCSS(styles);

    onToggleChange (event: Event) {
        const { checked } = event?.currentTarget as HTMLInputElement;
        this.isChecked = checked;
        const changedEvent = new CustomEvent(ON_TOGGLE_SWITCH_CHANGED_EVENT, { detail: this.isChecked });
        this.dispatchEvent(changedEvent);
    }

    /**
     * Renders the label for a toggle switch if provided.
     * if invalid value is passed, nothing gets rendered
     *
     * @private
     */
    private renderToggleSwitchLabel (): TemplateResult {
        const { label, labelPlacement } = this;

        if (label && labelPlacement && (labelPlacements.includes(labelPlacement))) {
            return html`
                <label
                    for="toggle-switch"
                    data-test-id="toggle-switch-label"
                    class="c-toggleSwitch-label c-toggleSwitch--${labelPlacement}">
                    ${label}
                </label>`;
        }

        return html``;
    }

    render () {
        const {
            labelPlacement,
            aria,
            isChecked,
            isDisabled,
        } = this;

        const toggleSwitchId = 'toggle-switch-description';

        return html`
            <div class="c-toggleSwitch-wrapper">
                ${labelPlacement === 'leading' ? this.renderToggleSwitchLabel() : nothing}
                <label
                    data-test-id="toggle-switch-component"
                    class="c-toggleSwitch"
                    ?isChecked="${isChecked}"
                    ?isDisabled=${isDisabled}>
                    <input
                        id="toggle-switch"
                        data-test-id="toggle-switch-input"
                        role="switch"
                        type="checkbox"
                        class="c-toggleSwitch-input"
                        .checked="${isChecked}"
                        .disabled="${isDisabled}"
                        @change="${this.onToggleChange}"
                        aria-label="${aria?.label || nothing}"
                        aria-describedby="${aria?.describedBy ? toggleSwitchId : nothing}">
                    <div class="c-toggleSwitch-control">
                        ${isChecked ? html`<icon-check></icon-check>` : nothing}
                    </div>
                </label>
                ${aria?.describedBy ? html`<div id="${toggleSwitchId}" data-test-id="${toggleSwitchId}" class="c-toggleSwitch-description">${aria?.describedBy}</div>` : nothing}
                ${labelPlacement === 'trailing' ? this.renderToggleSwitchLabel() : nothing}
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
