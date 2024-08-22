import {
    LitElement, html, unsafeCSS, PropertyValues, nothing,
} from 'lit';

import { property, query } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import throttle from 'lodash.throttle';

import {
    validPropertyValues, RtlMixin, defineCustomElement, FormControlMixin, wrapNativeEvent,
} from '@justeattakeaway/pie-webc-core';

import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './textarea.scss?inline';
import {
    TextareaProps, defaultProps, sizes, resizeModes, statusTypes,
} from './defs';

import '@justeattakeaway/pie-form-label';
import '@justeattakeaway/pie-assistive-text';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-textarea';
const assistiveTextIdValue = 'assistive-text';

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
    public defaultValue: TextareaProps['defaultValue'];

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, resizeModes, defaultProps.resize)
    public resize = defaultProps.resize;

    @property({ type: String })
    public label = defaultProps.label;

    @property({ type: Number })
    public maxLength: TextareaProps['maxLength'];

    @property({ type: Boolean })
    public readonly = defaultProps.readonly;

    @property({ type: Boolean })
    public autoFocus = defaultProps.autoFocus;

    @property({ type: Boolean })
    public required = defaultProps.required;

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, defaultProps.status)
    public status = defaultProps.status;

    @property({ type: String })
    public assistiveText: TextareaProps['assistiveText'];

    @property({ type: String })
    public name?: TextareaProps['name'];

    @property({ type: String })
    public autocomplete?: TextareaProps['autocomplete'];

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

        this._internals.setFormValue(this.value);
    }

    protected firstUpdated (): void {
        this.restrictInputLength();
        this._internals.setFormValue(this.value);

        this._textarea.addEventListener('keydown', this.handleKeyDown);
    }

    private handleResize () {
        this._throttledResize();
    }

    private restrictInputLength () {
        if (this.label.length && this.maxLength && this.value.length > this.maxLength) {
            const trimmedValue = this.value.slice(0, this.maxLength);
            // Ensures that the internal text area is correctly trimmed and synced with our value.
            // The live() directive does not solve this for us.
            this._textarea.value = trimmedValue;
            this.value = trimmedValue;
        }
    }

    protected updated (changedProperties: PropertyValues<this>) {
        if (changedProperties.has('value')) {
            this.restrictInputLength();
            this._internals.setFormValue(this.value);
        }

        if (this.resize === 'auto' && (changedProperties.has('resize') || changedProperties.has('size'))) {
            this.handleResize();
        }
    }

    /**
     * Handles data processing in response to the input event. The native input event is left to bubble up.
     * @param event - The input event.
     */
    private handleInput = (event: InputEvent) => {
        this.value = (event.target as HTMLTextAreaElement).value;
        this.restrictInputLength();
        this._internals.setFormValue(this.value);

        this.handleResize();
    };

    private handleChange = (event: Event) => {
        // We have to create our own change event because the native one
        // does not penetrate the shadow boundary.

        // This is because some events set `composed` to `false`.
        // Reference: https://javascript.info/shadow-dom-events#event-composed
        const customChangeEvent = wrapNativeEvent(event);
        this.dispatchEvent(customChangeEvent);
    };

    private handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.stopPropagation();
        }
    };

    public disconnectedCallback (): void {
        this._textarea.removeEventListener('keydown', this.handleKeyDown);
    }

    renderLabel (label: string, maxLength?: number) {
        const characterCount = maxLength ? `${this.value.length}/${maxLength}` : undefined;

        return label?.length
            ? html`<pie-form-label for="${componentSelector}" trailing=${ifDefined(characterCount)}>${label}</pie-form-label>`
            : nothing;
    }

    renderAssistiveText () {
        if (!this.assistiveText) {
            return nothing;
        }

        return html`
            <pie-assistive-text
                id="${assistiveTextIdValue}"
                variant=${ifDefined(this.status)}
                data-test-id="pie-textarea-assistive-text">
                ${this.assistiveText}
            </pie-assistive-text>
        `;
    }

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
            label,
            maxLength,
            status,
            assistiveText,
        } = this;

        return html`
            <div
                class="c-textareaWrapper"
                data-test-id="pie-textarea-wrapper"
                data-pie-size="${size}"
                data-pie-resize="${resize}">
                ${this.renderLabel(label, maxLength)}
                <textarea
                    id="${componentSelector}"
                    data-test-id="${componentSelector}"
                    name=${ifDefined(name)}
                    autocomplete=${ifDefined(autocomplete)}
                    .value=${live(value)}
                    ?autofocus=${autoFocus}
                    ?readonly=${readonly}
                    ?required=${required}
                    ?disabled=${disabled}
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                    aria-describedby=${ifDefined(assistiveText ? assistiveTextIdValue : undefined)}
                    aria-invalid=${status === 'error' ? 'true' : 'false'}
                    aria-errormessage="${ifDefined(status === 'error' ? assistiveTextIdValue : undefined)}"
                ></textarea>
            </div>
            ${this.renderAssistiveText()}`;
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
