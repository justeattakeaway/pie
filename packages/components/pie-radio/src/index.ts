import { LitElement, html, unsafeCSS } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';

import {
    defineCustomElement, FormControlMixin, requiredProperty, RtlMixin, wrapNativeEvent,
} from '@justeattakeaway/pie-webc-core';

import { type RadioProps, defaultProps } from './defs';
import styles from './radio.scss?inline';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-radio';

/**
 * @tagname pie-radio
 */
export class PieRadio extends FormControlMixin(RtlMixin(LitElement)) implements RadioProps {
    @property({ type: Boolean, reflect: true })
    public checked = defaultProps.checked;

    @property({ type: Boolean, reflect: true })
    public defaultChecked = defaultProps.defaultChecked;

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @property({ type: String })
    public name: RadioProps['name'];

    @property({ type: Boolean, reflect: true })
    public required = defaultProps.required;

    @property({ type: String })
    @requiredProperty(componentSelector)
    public value!: RadioProps['value'];

    @query('input[type="radio"]')
    private radio!: HTMLInputElement;

    /**
     * Ensures that the form value is in sync with the component.
     */
    private handleFormAssociation () {
        if (this.form && this.name) {
            this._internals.setFormValue(this.checked ? this.value : null);
        }
    }

    /**
     * Captures the native change event and wraps it in a custom event.
     * @param {Event} event - This should be the change event that was listened for on an input element with `type="radio"`.
     */
    private handleChange (event: Event) {
        const { checked } = event?.currentTarget as HTMLInputElement;
        this.checked = checked;
        // This is because some events set `composed` to `false`.
        // Reference: https://javascript.info/shadow-dom-events#event-composed
        const customChangeEvent = wrapNativeEvent(event);
        this.dispatchEvent(customChangeEvent);

        this.handleFormAssociation();
    }

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity () : ValidityState {
        return this.radio.validity;
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

        this.handleFormAssociation();
    }

    updated () {
        this.handleFormAssociation();
    }

    render () {
        const {
            checked, disabled, name, required, value,
        } = this;

        const classes = {
            'c-radio': true,
            'c-radio--disabled': disabled,
        };

        return html`
        <label class=${classMap(classes)} for="radioId">
            <input
                type="radio"
                id="radioId"
                data-test-id="pie-radio"
                .checked="${live(checked)}"
                .value="${value}"
                name="${ifDefined(name)}"
                ?disabled="${disabled}"
                ?required="${required}"
                @change="${this.handleChange}">
            <slot></slot>
        </label>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieRadio);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieRadio;
    }
}
