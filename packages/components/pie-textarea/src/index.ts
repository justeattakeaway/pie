import {
    html, unsafeCSS, type PropertyValues, nothing,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import throttle from 'lodash.throttle';

import '@justeattakeaway/pie-assistive-text';
import {
    validPropertyValues, RtlMixin, FormControlMixin, wrapNativeEvent, type PIEInputElement,
    safeCustomElement,
    DelegatesFocusMixin,
} from '@justeattakeaway/pie-webc-core';

import styles from './textarea.scss?inline';
import {
    type TextareaProps, defaultProps, sizes, resizeModes, statusTypes,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-textarea';
const assistiveTextIdValue = 'assistive-text';

/**
 * @tagname pie-textarea
 * @event {InputEvent} input - when the textarea value is changed.
 * @event {CustomEvent} change - when the textarea value is changed.
 */
@safeCustomElement('pie-textarea')
export class PieTextarea extends FormControlMixin(RtlMixin(DelegatesFocusMixin(PieElement))) implements TextareaProps, PIEInputElement {
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

    @property({ type: String, reflect: true })
    public name: TextareaProps['name'];

    @property({ type: String })
    public autocomplete: TextareaProps['autocomplete'];

    @property({ type: String })
    public placeholder: TextareaProps['placeholder'];

    @property({ type: Object })
    public labelOptions: TextareaProps['labelOptions'];

    @query('textarea')
    private _textarea!: HTMLTextAreaElement;

    @query('textarea')
    public focusTarget!: HTMLElement;

    private _abortController!: AbortController;

    connectedCallback () {
        super.connectedCallback();
        this._abortController = new AbortController();
        const { signal } = this._abortController;
        window.addEventListener('resize', () => this.handleResize(), { signal });
    }

    public disconnectedCallback (): void {
        super.disconnectedCallback();
        this._abortController.abort();
    }

    protected firstUpdated (): void {
        const { signal } = this._abortController;
        this._textarea.addEventListener('keydown', this.handleKeyDown, { signal });
        this._internals.setFormValue(this.value);
    }

    protected updated (changedProperties: PropertyValues<this>) {
        if (changedProperties.has('value')) {
            this.handleInput(null, this.value);
        }

        if (this.resize === 'auto' && (changedProperties.has('resize') || changedProperties.has('size'))) {
            this.handleResize();
        }
    }

    private _throttledResize = throttle(() => {
        if (this.resize === 'auto') {
            this._textarea.style.height = 'auto';
            this._textarea.style.height = `${this._textarea.scrollHeight}px`;
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

    private handleResize () {
        this._throttledResize();
    }

    /**
     * Handles input events and updates the component's value based on the input event or a provided new value.
     *
     * @param {InputEvent | null} event - The input event triggered by user interaction. If null, the `newValue` is used.
     * @param {string} [newValue] - An optional new value to set if the event is not provided.
     *
     * @private
     * @returns {void}
     */
    private handleInput = (event: InputEvent | null, newValue?: string) => {
        if (event) {
            this.value = (event.target as HTMLTextAreaElement).value;
        } else if (newValue) {
            this.value = newValue;
        }

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

    private renderLabel () {
        if (!this.labelOptions) {
            return nothing;
        }

        const { text, optional, trailing } = this.labelOptions;

        return html`
            <label
                class="pie-form-label"
                for="${componentSelector}"
                data-test-id="pie-textarea-label">
                <div class="pie-form-label-leading-wrapper">
                    <span class="pie-form-label-leading" data-test-id="pie-textarea-label-leading">${text}</span>
                    ${optional ? html`<span class="pie-form-label-optional" data-test-id="pie-textarea-label-optional">${optional}</span>` : nothing}
                </div>
                ${trailing ? html`<span class="pie-form-label-trailing" data-test-id="pie-textarea-label-trailing">${trailing}</span>` : nothing}
            </label>
        `;
    }

    private renderAssistiveText () {
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
            placeholder,
            value,
            required,
            status,
            assistiveText,
        } = this;

        const classes = {
            'c-textareaWrapper': true,
            'is-disabled': disabled,
            'c-textarea--readonly': readonly,
            'c-textarea--error': status === 'error',
            [`c-textarea--resize-${resize}`]: true,
            [`c-textarea--${size}`]: true,
        };

        return html`<div>
            ${this.renderLabel()}
            <div
                class="${classMap(classes)}"
                data-test-id="pie-textarea-wrapper">
                <textarea
                    id="${componentSelector}"
                    data-test-id="${componentSelector}"
                    name=${ifDefined(name)}
                    autocomplete=${ifDefined(autocomplete)}
                    placeholder=${ifDefined(placeholder)}
                    .value=${live(value)}
                    ?autofocus=${autoFocus}
                    ?readonly=${readonly}
                    ?required=${required}
                    ?disabled=${disabled}
                    aria-describedby=${ifDefined(assistiveText ? assistiveTextIdValue : undefined)}
                    aria-invalid=${status === 'error' ? 'true' : 'false'}
                    aria-errormessage="${ifDefined(status === 'error' ? assistiveTextIdValue : undefined)}"
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                ></textarea>
            </div>
            ${this.renderAssistiveText()}
        </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTextarea;
    }
}
