import {
    LitElement, html, unsafeCSS, nothing, TemplateResult,
} from 'lit';
import { property } from 'lit/decorators.js';
import { RtlMixin, validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './switch.scss?inline';
import {
    SwitchProps, ON_SWITCH_CHANGED_EVENT, AriaProps, labelPlacements,
} from './defs';
import 'element-internals-polyfill';
import '@justeattakeaway/pie-icons-webc/IconCheck';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-switch';

/**
 * @tagname pie-switch
 * @event {CustomEvent} change - when the switch checked state is changed.
 */

export class PieSwitch extends RtlMixin(LitElement) implements SwitchProps {
    // TODO - we may want to consider making the element internals code reusable for other form controls.
    static formAssociated = true;

    private readonly _internals: ElementInternals;

    constructor () {
        super();
        this._internals = this.attachInternals();
    }

    @property({ type: String })
    public label?: string;

    @property({ type: String })
    @validPropertyValues(componentSelector, labelPlacements, 'leading')
    public labelPlacement: SwitchProps['labelPlacement'] = 'leading';

    @property({ type: Object })
    public aria!: AriaProps;

    @property({ type: Boolean, reflect: true })
    public isChecked = false;

    @property({ type: String })
    public value = 'on';

    @property({ type: String })
    public name?: string;

    /**
     * This getter wraps the `isChecked` property to mimic native behaviour for the `change` event.
     * You can access this with `event.target.checked` when listening to the `change` event.
     * @returns The value of the property `isChecked`.
     */
    public get checked () {
        return this.isChecked;
    }

    @property({ type: Boolean, reflect: true })
    public isDisabled = false;

    static styles = unsafeCSS(styles);

    /**
     * The onChange function updates the checkbox state and emits an event for consumers.
     * @param {Event} event - This should be the change event that was listened for on an input element with `type="checkbox"`.
     */
    onChange (event: Event) {
        const { checked } = event?.currentTarget as HTMLInputElement;
        this.isChecked = checked;
        const changedEvent = new CustomEvent(
            ON_SWITCH_CHANGED_EVENT,
            {
                bubbles: true,
                composed: true,
            },
        );

        this.dispatchEvent(changedEvent);

        // name attribute required for this to work
        // combine checked and isChecked
        if (this._internals.form) {
            if (this.checked) {
                this._internals.setFormValue(this.value);
            } else {
                this._internals.setFormValue(null);
            }
        }
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
