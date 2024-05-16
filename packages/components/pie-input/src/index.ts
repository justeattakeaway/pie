import {
    LitElement, html, unsafeCSS, PropertyValues, nothing,
} from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import {
    validPropertyValues, RtlMixin, defineCustomElement, FormControlMixin, wrapNativeEvent, type PIEInputElement,
} from '@justeattakeaway/pie-webc-core';
import '@justeattakeaway/pie-assistive-text';

import styles from './input.scss?inline';
import {
    types, statusTypes, InputProps, InputDefaultPropertyValues,
} from './defs';
import 'element-internals-polyfill';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-input';
const assistiveTextValue = 'assistive-text';

/**
 * @tagname pie-input
 * @event {InputEvent} input - when the input value is changed.
 * @event {CustomEvent} change - when the input value is changed.
 * @slot leading - An icon or short text to display at the start of the input.
 * @slot trailing - An icon or short text to display at the end of the input.
 */
export class PieInput extends FormControlMixin(RtlMixin(LitElement)) implements InputProps, PIEInputElement {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
    @property({ type: String, reflect: true })
    @validPropertyValues(componentSelector, types, 'text')
    public type? = InputDefaultPropertyValues.type;

    @property({ type: String })
    public value = InputDefaultPropertyValues.value;

    @property({ type: String })
    public name?: InputProps['name'];

    @property({ type: Boolean, reflect: true })
    public disabled?: InputProps['disabled'];

    @property({ type: String })
    public pattern?: InputProps['pattern'];

    @property({ type: Number })
    public minlength?: InputProps['minlength'];

    @property({ type: Number })
    public maxlength?: InputProps['maxlength'];

    @property({ type: String })
    public autocomplete?: InputProps['autocomplete'];

    @property({ type: String })
    public placeholder?: InputProps['placeholder'];

    @property({ type: Boolean })
    public autoFocus?: InputProps['autoFocus'];

    @property({ type: String })
    public inputmode?: InputProps['inputmode'];

    @property({ type: Boolean })
    public readonly?: InputProps['readonly'];

    @property({ type: String })
    public defaultValue?: InputProps['defaultValue'];

    @property({ type: String })
    public assistiveText?: InputProps['assistiveText'];

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, undefined)
    public status?: InputProps['status'];

    @property({ type: Number })
    public step?: InputProps['step'];

    @property({ type: Number })
    public min?: InputProps['min'];

    @property({ type: Number })
    public max?: InputProps['max'];

    @property({ type: String })
    public size?: InputProps['size'] = InputDefaultPropertyValues.size;

    @property({ type: Boolean })
    public required?: InputProps['required'] = false;

    @query('input')
    private input?: HTMLInputElement;

    @query('input')
    public focusTarget!: HTMLElement;

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity (): ValidityState {
        return (this.input as HTMLInputElement).validity;
    }

    /**
     * Called after the disabled state of the element changes,
     * either because the disabled attribute of this element was added or removed;
     * or because the disabled state changed on a <fieldset> that's an ancestor of this element.
     * @param disabled - The latest disabled state of the input.
     */
    public formDisabledCallback (disabled: boolean): void {
        this.disabled = disabled;
    }

    /**
     * Called when the form that owns this component is reset.
     * Resets the value to the default value.
     */
    public formResetCallback (): void {
        this.value = this.defaultValue ?? InputDefaultPropertyValues.value;

        // This ensures the input value is updated when the form is reset.
        // Otherwise there is a bug where values like 'e1212' for number inputs do not correctly reset.
        if (this.input) {
            this.input.value = this.value;
        }

        this._internals.setFormValue(this.value);
    }

    protected firstUpdated (_changedProperties: PropertyValues<this>): void {
        super.firstUpdated(_changedProperties);
        this._internals.setFormValue(this.value);
    }

    protected updated (_changedProperties: PropertyValues<this>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('value')) {
            this._internals.setFormValue(this.value);
        }
    }

    /**
     * Handles data processing in response to the input event. The native input event is left to bubble up.
     * @param event - The input event.
     */
    private handleInput = (event: InputEvent) => {
        this.value = (event.target as HTMLInputElement).value;
        this._internals.setFormValue(this.value);
    };

    /**
     * Captures the native change event and wraps it in a custom event.
     * @param event - The change event.
     */
    private handleChange = (event: Event) => {
        // We have to create our own change event because the native one
        // does not penetrate the shadow boundary.

        // This is because some events set `composed` to `false`.
        // Reference: https://javascript.info/shadow-dom-events#event-composed
        const customChangeEvent = wrapNativeEvent(event);
        this.dispatchEvent(customChangeEvent);
    };

    render () {
        const {
            assistiveText,
            autocomplete,
            autoFocus,
            disabled,
            inputmode,
            maxlength,
            minlength,
            min,
            max,
            name,
            pattern,
            step,
            placeholder,
            readonly,
            status,
            type,
            value,
            size,
            required,
        } = this;

        return html`
            <div
                class="c-input"
                data-test-id="pie-input-shell"
                data-pie-size=${ifDefined(size)}
                data-pie-status=${ifDefined(status)}
                ?data-pie-disabled=${live(disabled)}
                ?data-pie-readonly=${readonly}>
                <slot name="leading"></slot>
                <input
                    type=${ifDefined(type)}
                    .value=${live(value)}
                    name=${ifDefined(name)}
                    ?disabled=${live(disabled)}
                    pattern=${ifDefined(pattern)}
                    step=${ifDefined(step)}
                    minlength=${ifDefined(minlength)}
                    maxlength=${ifDefined(maxlength)}
                    min=${ifDefined(min)}
                    max=${ifDefined(max)}
                    autocomplete=${ifDefined(autocomplete)}
                    ?autofocus=${autoFocus}
                    inputmode=${ifDefined(inputmode)}
                    placeholder=${ifDefined(placeholder)}
                    ?readonly=${readonly}
                    ?required=${required}
                    aria-describedby=${ifDefined(assistiveText ? assistiveTextValue : nothing)}
                    aria-invalid=${status === 'error' ? 'true' : 'false'}
                    aria-errormessage="${ifDefined(status === 'error' ? assistiveTextValue : nothing)}"
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                    data-test-id="pie-input">
                <slot name="trailing"></slot>
            </div>
            ${assistiveText ? html`<pie-assistive-text id="${assistiveTextValue}" variant=${ifDefined(status)} data-test-id="pie-input-assistive-text">${assistiveText}</pie-assistive-text>` : nothing}`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieInput);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieInput;
    }
}
