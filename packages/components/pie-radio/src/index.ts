import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    property, query, state,
} from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';

import {
    FormControlMixin,
    requiredProperty,
    RtlMixin,
    wrapNativeEvent,
    validPropertyValues,
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';

import { type RadioProps, defaultProps, statusTypes } from './defs';
import styles from './radio.scss?inline';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-radio';

/**
 * @tagname pie-radio
 * @event {InputEvent} input - Should fire whenever a user toggles the radio.
 * @event {CustomEvent} change - Fires when the radio is checked (but not when unchecked).
 */
@safeCustomElement('pie-radio')
export class PieRadio extends FormControlMixin(RtlMixin(PieElement)) implements RadioProps {
    @state()
    private _disabledByParent = false;

    @property({ type: Boolean, reflect: true })
    public checked = defaultProps.checked;

    @property({ type: Boolean, reflect: true })
    public defaultChecked = defaultProps.defaultChecked;

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @property({ type: String, reflect: true })
    public name: RadioProps['name'];

    @property({ type: Boolean, reflect: true })
    public required = defaultProps.required;

    @property({ type: String })
    @requiredProperty(componentSelector)
    public value!: RadioProps['value'];

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, defaultProps.status)
    public status = defaultProps.status;

    @query('input[type="radio"]')
    private _radio!: HTMLInputElement;

    private _abortController!: AbortController;

    connectedCallback () : void {
        super.connectedCallback();
        this._abortController = new AbortController();
        const { signal } = this._abortController;
        this.setAttribute('role', 'radio');
        this.addEventListener('pie-radio-group-disabled', (e: CustomEventInit) => { this._disabledByParent = e.detail.disabled; }, { signal });
    }

    disconnectedCallback () : void {
        super.disconnectedCallback();
        this._abortController.abort();
    }

    /**
     * Ensures that the form value is in sync with the component.
     */
    private _handleFormAssociation () {
        if (this.form && this.name) {
            this._internals.setFormValue(this.checked ? this.value : null);
        }
    }

    /**
     * Captures the native change event and wraps it in a custom event.
     * @param {Event} event - This should be the change event that was listened for on an input element with `type="radio"`.
     */
    private _handleChange (event: Event) {
        const { checked } = event?.currentTarget as HTMLInputElement;
        this.checked = checked;
        // This is because some events set `composed` to `false`.
        // Reference: https://javascript.info/shadow-dom-events#event-composed
        const customChangeEvent = wrapNativeEvent(event);
        this.dispatchEvent(customChangeEvent);

        this._handleFormAssociation();
    }

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity () : ValidityState {
        return this._radio.validity;
    }

    /**
     * Called when the form that contains this component is reset.
     * If the current checked state is different to the default checked state,
     * the checked state is reset to the default checked state and a `change` event is emitted.
     */
    public formResetCallback () {
        if (this.checked === this.defaultChecked) {
            return;
        }

        this.checked = this.defaultChecked;

        const changeEvent = new Event('change', { bubbles: true, composed: true });
        this.dispatchEvent(changeEvent);

        this._handleFormAssociation();
    }

    updated () {
        // Ensure aria-checked reflects the checked state
        this.setAttribute('aria-checked', String(this.checked));

        this._handleFormAssociation();
    }

    render () {
        const {
            checked,
            disabled,
            _disabledByParent,
            name,
            required,
            value,
            status,
        } = this;

        const componentDisabled = disabled || _disabledByParent;

        const classes = {
            'c-radio': true,
            'is-disabled': componentDisabled,
            [`c-radio--status-${status}`]: !componentDisabled,
        };

        return html`
        <label class=${classMap(classes)} for="radioId">
            <input
                tabindex="-1"
                class="c-radio-input"
                type="radio"
                id="radioId"
                data-test-id="pie-radio-input"
                .checked="${live(checked)}"
                .value="${value}"
                name="${ifDefined(name)}"
                ?disabled="${componentDisabled}"
                ?required="${required}"
                aria-invalid=${status === 'error' ? 'true' : 'false'}
                @change="${this._handleChange}">
            <slot></slot>
        </label>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieRadio;
    }
}
