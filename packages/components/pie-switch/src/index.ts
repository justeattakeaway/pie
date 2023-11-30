import {
    LitElement, html, unsafeCSS, nothing, TemplateResult,
} from 'lit';
import { property } from 'lit/decorators.js';
import { RtlMixin, validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './switch.scss?inline';
import {
    SwitchProps, ON_SWITCH_CHANGED_EVENT, AriaProps, labelPlacements,
} from './defs';
import '@justeattakeaway/pie-icons-webc/dist/IconCheck';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-switch';

/**
 * @tagname pie-switch
 * @event {CustomEvent} pie-switch-changed - when the switch checked state is changed.
 */

export class PieSwitch extends RtlMixin(LitElement) implements SwitchProps {
    @property({ type: String })
    public label?: string;

    @property({ type: String })
    @validPropertyValues(componentSelector, labelPlacements, 'leading')
    public labelPlacement: SwitchProps['labelPlacement'] = 'leading';

    @property({ type: Object })
    public aria!: AriaProps;

    @property({ type: Boolean, reflect: true })
    public isChecked = false;

    @property({ type: Boolean, reflect: true })
    public isDisabled = false;

    static styles = unsafeCSS(styles);

    onChange (event: Event) {
        const { checked } = event?.currentTarget as HTMLInputElement;
        this.isChecked = checked;
        const changedEvent = new CustomEvent(
            ON_SWITCH_CHANGED_EVENT,
            {
                bubbles: true,
                composed: true,
                detail: this.isChecked,
            },
        );
        this.dispatchEvent(changedEvent);
    }

    /**
     * Renders the label for a switch if provided.
     * if invalid value is passed, nothing gets rendered
     *
     * @private
     */
    private renderSwitchLabel (): TemplateResult {
        const { label, labelPlacement } = this;

        if (label) {
            return html`
                <label
                    for="switch"
                    data-test-id="switch-label-${labelPlacement}">
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
            isRTL,
        } = this;

        const switchId = 'switch-description';

        return html`
            <div
                class="c-switch-wrapper"
                ?isRTL=${isRTL}
                ?isDisabled=${isDisabled}>
                ${labelPlacement === 'leading' ? this.renderSwitchLabel() : nothing}
                <label
                    data-test-id="switch-component"
                    class="c-switch"
                    ?isChecked=${isChecked}>
                    <input
                        id="switch"
                        data-test-id="switch-input"
                        role="switch"
                        type="checkbox"
                        class="c-switch-input"
                        .checked="${isChecked}"
                        .disabled="${isDisabled}"
                        @change="${this.onChange}"
                        aria-label="${aria?.label || nothing}"
                        aria-describedby="${aria?.describedBy ? switchId : nothing}">
                    <div class="c-switch-control">
                        ${isChecked ? html`<icon-check></icon-check>` : nothing}
                    </div>
                </label>
                ${aria?.describedBy ? html`<div id="${switchId}" data-test-id="${switchId}" class="c-switch-description">${aria?.describedBy}</div>` : nothing}
                ${labelPlacement === 'trailing' ? this.renderSwitchLabel() : nothing}
            </div>
        `;
    }
}

defineCustomElement(componentSelector, PieSwitch);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieSwitch;
    }
}
