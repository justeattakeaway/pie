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

import styles from './text-input.scss?inline';
import {
    types, statusTypes, TextInputProps, TextInputDefaultPropertyValues,
} from './defs';
import 'element-internals-polyfill';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-text-input';

/**
 * @tagname pie-text-input
 * @event {InputEvent} input - when the input value is changed.
 * @event {CustomEvent} change - when the input value is changed.
 * @slot leading - An icon or short text to display at the start of the input.
 * @slot trailing - An icon or short text to display at the end of the input.
 */
export class PieTextInput extends FormControlMixin(RtlMixin(LitElement)) implements TextInputProps, PIEInputElement {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @property({ type: String, reflect: true })
    @validPropertyValues(componentSelector, types, 'text')
    public type? = TextInputDefaultPropertyValues.type;

    @property({ type: String })
    public value = TextInputDefaultPropertyValues.value;

    @property({ type: String })
    public name?: TextInputProps['name'];

    @property({ type: Boolean, reflect: true })
    public disabled?: TextInputProps['disabled'];

    @property({ type: String })
    public pattern?: TextInputProps['pattern'];

    @property({ type: Number })
    public minlength?: TextInputProps['minlength'];

    @property({ type: Number })
    public maxlength?: TextInputProps['maxlength'];

    @property({ type: String })
    public autocomplete?: TextInputProps['autocomplete'];

    @property({ type: String })
    public placeholder?: TextInputProps['placeholder'];

    @property({ type: Boolean })
    public autoFocus?: TextInputProps['autoFocus'];

    @property({ type: String })
    public inputmode?: TextInputProps['inputmode'];

    @property({ type: Boolean })
    public readonly?: TextInputProps['readonly'];

    @property({ type: String })
    public defaultValue?: TextInputProps['defaultValue'];

    @property({ type: String })
    public assistiveText?: TextInputProps['assistiveText'];

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, undefined)
    public status?: TextInputProps['status'];

    @property({ type: Number })
    public step?: TextInputProps['step'];

    @property({ type: Number })
    public min?: TextInputProps['min'];

    @property({ type: Number })
    public max?: TextInputProps['max'];

    @property({ type: String })
    public size?: TextInputProps['size'] = TextInputDefaultPropertyValues.size;

    @property({ type: Boolean })
    public required?: TextInputProps['required'] = false;

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
        this.value = this.defaultValue ?? TextInputDefaultPropertyValues.value;

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
                class="c-textInput"
                data-test-id="pie-text-input-shell"
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
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                    data-test-id="pie-text-input">
                <slot name="trailing"></slot>
            </div>
            ${assistiveText ? html`<pie-assistive-text variant=${ifDefined(status)} data-test-id="pie-text-input-assistive-text">${assistiveText}</pie-assistive-text>` : nothing}`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieTextInput);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTextInput;
    }
}
