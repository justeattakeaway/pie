import {
    LitElement, html, unsafeCSS, PropertyValues,
} from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import throttle from 'lodash.throttle';

import {
    validPropertyValues, RtlMixin, defineCustomElement, FormControlMixin, wrapNativeEvent,
} from '@justeattakeaway/pie-webc-core';

import styles from './textarea.scss?inline';
import {
    TextareaProps, defaultProps, sizes, resizeModes,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-textarea';

/**
 * @tagname pie-textarea
 * @event {InputEvent} input - when the textarea value is changed.
 * @event {CustomEvent} change - when the textarea value is changed.
 */
export class PieTextarea extends FormControlMixin(RtlMixin(LitElement)) implements TextareaProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @property({ type: String })
    public value = defaultProps.value;

    @property({ type: String })
    public name?: TextareaProps['name'];

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, resizeModes, defaultProps.resize)
    public resize = defaultProps.resize;

    @property({ type: String })
    public autocomplete?: TextareaProps['autocomplete'];

    @property({ type: Boolean })
    public autoFocus?: TextareaProps['autoFocus'];

    @property({ type: Boolean })
    public readonly?: TextareaProps['readonly'];

    @property({ type: String })
    public defaultValue?: TextareaProps['defaultValue'];

    @property({ type: Boolean })
    public required?: TextareaProps['required'] = false;

    @query('textarea')
    private _textarea!: HTMLTextAreaElement;

    private _throttledResize = throttle(() => {
        if (this.resize === 'auto') {
            this._textarea.style.height = 'auto';
            this._textarea.style.height = `${this._textarea.scrollHeight + 2}px`; // +2 for border thicknesses
        }
    }, 100);

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity (): ValidityState {
        return (this._textarea as HTMLTextAreaElement).validity;
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
        this.value = this.defaultValue ?? defaultProps.value;

        // This ensures the input value is updated when the form is reset.
        // Otherwise, there is a bug where values like 'e1212' for number inputs do not correctly reset.
        if (this._textarea) {
            this._textarea.value = this.value;
        }

        this._internals.setFormValue(this.value);
    }

    protected firstUpdated (_changedProperties: PropertyValues<this>): void {
        super.firstUpdated(_changedProperties);
        this._internals.setFormValue(this.value);
    }

    private handleResize () {
        this._throttledResize();
    }

    protected updated (changedProperties: PropertyValues<this>) {
        if (this.resize === 'auto' && (changedProperties.has('resize') || changedProperties.has('size'))) {
            this.handleResize();
        }

        if (changedProperties.has('value')) {
            this._internals.setFormValue(this.value);
        }
    }

    /**
     * Handles data processing in response to the input event. The native input event is left to bubble up.
     * @param event - The input event.
     */
    private handleInput = (event: InputEvent) => {
        this.value = (event.target as HTMLTextAreaElement).value;
        this._internals.setFormValue(this.value);
    };

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
            disabled,
            resize,
            size,
            autocomplete,
            autoFocus,
            name,
            readonly,
            value,
            required,
        } = this;

        return html`
            <div
                class="c-textareaWrapper"
                data-test-id="pie-textarea-wrapper"
                data-pie-size="${size}"
                data-pie-resize="${resize}">
                <textarea
                    name=${ifDefined(name)}
                    autocomplete=${ifDefined(autocomplete)}
                    .value=${live(value)}
                    ?autofocus=${autoFocus}
                    ?readonly=${readonly}
                    ?required=${required}
                    ?disabled=${disabled}
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                    data-test-id="pie-textarea"
                ></textarea>
            </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieTextarea);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTextarea;
    }
}
