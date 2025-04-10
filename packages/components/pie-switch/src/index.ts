import {
    html, unsafeCSS, nothing,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import 'element-internals-polyfill';

import {
    RtlMixin, validPropertyValues, defineCustomElement, FormControlMixin, wrapNativeEvent, type PIEInputElement,
} from '@justeattakeaway/pie-webc-core';
import '@justeattakeaway/pie-icons-webc/dist/IconCheck.js';

import styles from './switch.scss?inline';
import { type SwitchProps, labelPlacements, defaultProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-switch';

/**
 * @tagname pie-switch
 * @event {CustomEvent} change - when the switch checked state is changed.
 */
export class PieSwitch extends FormControlMixin(RtlMixin(PieElement)) implements SwitchProps, PIEInputElement {
    @property({ type: String })
    public label: SwitchProps['label'];

    @property({ type: String })
    @validPropertyValues(componentSelector, labelPlacements, defaultProps.labelPlacement)
    public labelPlacement = defaultProps.labelPlacement;

    @property({ type: Object })
    public aria: SwitchProps['aria'];

    @property({ type: Boolean, reflect: true })
    public checked = defaultProps.checked;

    @property({ type: Boolean, reflect: true })
    public required = defaultProps.required;

    @property({ type: String })
    public value = defaultProps.value;

    @property({ type: String, reflect: true })
    public name: SwitchProps['name'];

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @query('input[type="checkbox"]')
    private input!: HTMLInputElement;

    @query('label')
    public focusTarget!: HTMLElement;

    protected firstUpdated (): void {
        this.handleFormAssociation();
        // This ensures that invalid events triggered by checkValidity() are propagated to the custom element
        // for consumers to listen to: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
        this.input.addEventListener('invalid', (event) => {
            this.dispatchEvent(new Event('invalid', event));
        });
    }

    protected updated (): void {
        this.handleFormAssociation();
    }

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
        return this.input.checkValidity();
    }

    /**
     * If the value is invalid, this method also fires the invalid event on the element, and (if the event isn't canceled) reports the problem to the user.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
     * @returns boolean
     */
    public reportValidity (): boolean {
        return this.input.reportValidity();
    }

    /**
     * Allows a consumer to set a custom validation message on the switch. An empty string counts as valid.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity
     */
    public setCustomValidity (message: string): void {
        this.input.setCustomValidity(message);
        this._internals.setValidity(this.validity, this.validationMessage, this.input);
    }

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity (): ValidityState {
        return this.input.validity;
    }

    /**
     * (Read-only) Returns a string representing a localized message that describes the validation constraints that the control does not satisfy (if any).
     * This string is empty if the component is valid.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage
     */
    public get validationMessage (): string {
        return this.input.validationMessage;
    }

    /**
     * If a label is provided, renders it if `labelPlacement` matches the given position.
     * If no label is provided, or `labelPlacement` does not match the given position, nothing is rendered.
     *
     * @private
     */
    private renderSwitchLabel (placement : SwitchProps['labelPlacement']) {
        const { label, labelPlacement } = this;

        if (!label || labelPlacement !== placement) {
            return nothing;
        }

        return html`
            <span
                data-test-id="switch-label-${labelPlacement}"
                class="c-switch-label">
                ${label}
            </span>`;
    }

    private renderAriaDescription () {
        if (!this.aria?.describedBy) {
            return nothing;
        }

        return html`
            <div
                id="switch-description"
                data-test-id="switch-description"
                class="c-switch-description">
                ${this.aria.describedBy}
            </div>`;
    }

    render () {
        const {
            aria,
            checked,
            disabled,
            isRTL,
            required,
        } = this;

        const classes = {
            'c-switch-wrapper': true,
            'c-switch-wrapper--rtl': isRTL,
        };

        return html`
            <label
                class="${classMap(classes)}"
                ?disabled=${disabled}>
                ${this.renderSwitchLabel('leading')}
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
                        aria-label="${ifDefined(aria?.label)}"
                        aria-describedby="${aria?.describedBy ? 'switch-description' : nothing}">
                    <div class="c-switch-control">
                        ${checked ? html`<icon-check></icon-check>` : nothing}
                    </div>
                </div>
                ${this.renderSwitchLabel('trailing')}
                ${this.renderAriaDescription()}
            </label>`;
    }
}

defineCustomElement(componentSelector, PieSwitch);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieSwitch;
    }
}
