import {
    LitElement, html, unsafeCSS, nothing, TemplateResult, PropertyValues,
} from 'lit';
import { property, query } from 'lit/decorators.js';
import {
    RtlMixin, validPropertyValues, defineCustomElement, FormControlMixin, wrapNativeEvent, PIEInputElement,
} from '@justeattakeaway/pie-webc-core';
import styles from './switch.scss?inline';
import {
    SwitchProps, AriaProps, labelPlacements, defaultProps,
} from './defs';
import 'element-internals-polyfill';
import '@justeattakeaway/pie-icons-webc/dist/IconCheck.js';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-switch';

/**
 * @tagname pie-switch
 * @event {CustomEvent} change - when the switch checked state is changed.
 */
export class PieSwitch extends FormControlMixin(RtlMixin(LitElement)) implements SwitchProps, PIEInputElement {
    @query('input[type="checkbox"]')
    private input?: HTMLInputElement;

    protected firstUpdated (_changedProperties: PropertyValues<this>): void {
        super.firstUpdated(_changedProperties);

        this.handleFormAssociation();
        // This ensures that invalid events triggered by checkValidity() are propagated to the custom element
        // for consumers to listen to: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
        this.input?.addEventListener('invalid', (event) => {
            this.dispatchEvent(new Event('invalid', event));
        });
    }

    protected updated (_changedProperties: PropertyValues<this>): void {
        super.updated(_changedProperties);
        this.handleFormAssociation();
    }

    @property({ type: String })
    public label?: string;

    @property({ type: String })
    @validPropertyValues(componentSelector, labelPlacements, defaultProps.labelPlacement)
    public labelPlacement: SwitchProps['labelPlacement'] = defaultProps.labelPlacement;

    @property({ type: Object })
    public aria!: AriaProps;

    @property({ type: Boolean, reflect: true })
    public checked = defaultProps.checked;

    @property({ type: Boolean, reflect: true })
    public required = defaultProps.required;

    @property({ type: String })
    public value = defaultProps.value;

    @property({ type: String })
    public name?: string;

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @query('label')
    public focusTarget!: HTMLElement;

    static styles = unsafeCSS(styles);

    /**
     * Ensures that the form value and validation state are in sync with the component.
     */
    private handleFormAssociation () : void {
        const isFormAssociated = !!this._internals.form && !!this.name && !!this.value;
        if (isFormAssociated) {
            if (this.disabled) {
                this._internals.setFormValue(null);
                this._internals.setValidity({});
            } else if (this.checked) {
                this._internals.setFormValue(this.value);
                this._internals.setValidity({});
            } else {
                this._internals.setFormValue(null);
                this._internals.setValidity(this.validity, this.validationMessage, this.input);
            }
        }
    }

    /**
     * The handleChange function updates the checkbox state and emits an event for consumers.
     * @param {Event} event - This should be the change event that was listened for on an input element with `type="checkbox"`.
     */
    private handleChange (event: Event) {
        const { checked } = event?.currentTarget as HTMLInputElement;
        this.checked = checked;
        const changedEvent = wrapNativeEvent(event);

        this.dispatchEvent(changedEvent);
        this.handleFormAssociation();
    }

    /**
     * Returns a boolean value which indicates validity of the value of the component. If the value is invalid, this method also fires the invalid event on the component.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
     * @returns boolean
     */
    public checkValidity (): boolean {
        return (this.input as HTMLInputElement).checkValidity();
    }

    /**
     * If the value is invalid, this method also fires the invalid event on the element, and (if the event isn't canceled) reports the problem to the user.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
     * @returns boolean
     */
    public reportValidity (): boolean {
        return (this.input as HTMLInputElement).reportValidity();
    }

    /**
     * Allows a consumer to set a custom validation message on the switch. An empty string counts as valid.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity
     */
    public setCustomValidity (message: string): void {
        this.input?.setCustomValidity(message);
        this._internals.setValidity(this.validity, this.validationMessage, this.input);
    }

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity (): ValidityState {
        return (this.input as HTMLInputElement).validity;
    }

    /**
     * (Read-only) Returns a string representing a localized message that describes the validation constraints that the control does not satisfy (if any).
     * This string is empty if the component is valid.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage
     */
    public get validationMessage (): string {
        return (this.input as HTMLInputElement).validationMessage;
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
                <span data-test-id="switch-label-${labelPlacement}">
                    ${label}
                </span>`;
        }

        return html``;
    }

    render () {
        const {
            labelPlacement,
            aria,
            checked,
            required,
            disabled,
            isRTL,
        } = this;

        const switchId = 'switch-description';

        return html`
            <label
                class="c-switch-wrapper"
                ?data-is-rtl=${isRTL}
                ?disabled=${disabled}>
                ${labelPlacement === 'leading' ? this.renderSwitchLabel() : nothing}
                <div
                    data-test-id="switch-component"
                    class="c-switch"
                    ?checked=${checked}>
                    <input
                        data-test-id="switch-input"
                        role="switch"
                        type="checkbox"
                        class="c-switch-input"
                        .required=${required}
                        .checked="${checked}"
                        .disabled="${disabled}"
                        @change="${this.handleChange}"
                        aria-label="${aria?.label || nothing}"
                        aria-describedby="${aria?.describedBy ? switchId : nothing}">
                    <div class="c-switch-control">
                        ${checked ? html`<icon-check></icon-check>` : nothing}
                    </div>
                </div>
                ${labelPlacement === 'trailing' ? this.renderSwitchLabel() : nothing}
                ${aria?.describedBy ? html`<div id="${switchId}" data-test-id="${switchId}" class="c-switch-description">${aria?.describedBy}</div>` : nothing}
            </label>
        `;
    }
}

defineCustomElement(componentSelector, PieSwitch);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieSwitch;
    }
}
