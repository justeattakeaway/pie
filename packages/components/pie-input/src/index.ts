import {
    LitElement, html, unsafeCSS, PropertyValues,
} from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import {
    validPropertyValues, RtlMixin, defineCustomElement, FormControlMixin, wrapNativeEvent,
} from '@justeattakeaway/pie-webc-core';

import styles from './input.scss?inline';
import { types, InputProps, InputDefaultPropertyValues } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-input';

/**
 * @tagname pie-input
 * @event {InputEvent} input - when the input value is changed.
 * @event {CustomEvent} change - when the input value is changed.
 */
export class PieInput extends FormControlMixin(RtlMixin(LitElement)) implements InputProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @property({ type: String, reflect: true })
    @validPropertyValues(componentSelector, types, 'text')
    public type?: InputProps['type'] = 'text';

    @property({ type: String })
    public value? = InputDefaultPropertyValues.value;

    @property({ type: String })
    public name? = InputDefaultPropertyValues.name;

    @property({ type: String })
    public pattern? = InputDefaultPropertyValues.pattern;

    @property({ type: Number })
    public minlength?: InputProps['minlength'];

    @property({ type: Number })
    public maxlength?: InputProps['maxlength'];

    protected firstUpdated (_changedProperties: PropertyValues<this>): void {
        super.firstUpdated(_changedProperties);
        this._internals.setFormValue(this.value as string);
    }

    protected updated (_changedProperties: PropertyValues<this>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('value')) {
            this._internals.setFormValue(this.value as string);
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

    // TODO - move into pie-webc-core for other components to use
    /**
     * Returns the string value if it is not empty, otherwise returns undefined.
     * @param value - The string value to check.
     */
    private nonEmptyString (value: string | undefined) : string | undefined {
        if (value !== undefined && value !== '') {
            return value;
        }

        return undefined;
    }

    render () {
        const {
            type, value, name, pattern, minlength, maxlength,
        } = this;

        return html`<input
            type=${ifDefined(type)}
            .value=${live(value || InputDefaultPropertyValues.value)}
            name=${ifDefined(this.nonEmptyString(name))}
            pattern=${ifDefined(this.nonEmptyString(pattern))}
            minlength=${ifDefined(minlength)}
            maxlength=${ifDefined(maxlength)}
            @input=${this.handleInput}
            @change=${this.handleChange}
            data-test-id="pie-input">`;
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
