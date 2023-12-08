import {
    LitElement, html, unsafeCSS, nothing, TemplateResult, PropertyValues,
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

    protected firstUpdated (_changedProperties: PropertyValues<this>): void {
        super.firstUpdated(_changedProperties);
        if (this.checked) {
            this._internals.setFormValue(this.value);
        } else {
            this._internals.setFormValue(null);
        }
    }

    @property({ type: String })
    public label?: string;

    @property({ type: String })
    @validPropertyValues(componentSelector, labelPlacements, 'leading')
    public labelPlacement: SwitchProps['labelPlacement'] = 'leading';

    @property({ type: Object })
    public aria!: AriaProps;

    @property({ type: Boolean, reflect: true })
    public checked = false;

    @property({ type: String })
    public value = 'on';

    @property({ type: String })
    public name?: string;

    @property({ type: Boolean, reflect: true })
    public isDisabled = false;

    static styles = unsafeCSS(styles);

    /**
     * The onChange function updates the checkbox state and emits an event for consumers.
     * @param {Event} event - This should be the change event that was listened for on an input element with `type="checkbox"`.
     */
    onChange (event: Event) {
        const { checked } = event?.currentTarget as HTMLInputElement;
        this.checked = checked;
        const changedEvent = new CustomEvent(
            ON_SWITCH_CHANGED_EVENT,
            {
                bubbles: true,
                composed: true,
            },
        );

        this.dispatchEvent(changedEvent);

        // If we do not have a form, name and value, we cannot set the form value.
        const isFormAssociated = this._internals.form && this.name && this.value;

        if (isFormAssociated) {
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
            checked,
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
                    ?checked=${checked}>
                    <input
                        id="switch"
                        data-test-id="switch-input"
                        role="switch"
                        type="checkbox"
                        class="c-switch-input"
                        .checked="${checked}"
                        .disabled="${isDisabled}"
                        @change="${this.onChange}"
                        aria-label="${aria?.label || nothing}"
                        aria-describedby="${aria?.describedBy ? switchId : nothing}">
                    <div class="c-switch-control">
                        ${checked ? html`<icon-check></icon-check>` : nothing}
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
