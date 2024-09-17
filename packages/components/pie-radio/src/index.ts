import { LitElement, html, unsafeCSS } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import {
    defineCustomElement, FormControlMixin, requiredProperty, RtlMixin,
} from '@justeattakeaway/pie-webc-core';

import styles from './radio.scss?inline';
import { type RadioProps, defaultProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-radio';

/**
 * @tagname pie-radio
 */
export class PieRadio extends FormControlMixin(RtlMixin(LitElement)) implements RadioProps {
    @property({ type: Boolean })
    public checked = defaultProps.checked;

    @property({ type: Boolean })
    public defaultChecked = defaultProps.defaultChecked;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: String })
    public name: RadioProps['name'];

    @property({ type: Boolean })
    public required = defaultProps.required;

    @property({ type: String })
    @requiredProperty(componentSelector)
    public value!: RadioProps['value'];

    @query('input[type="radio"]')
    private radio!: HTMLInputElement;

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity () : ValidityState {
        return this.radio.validity;
    }

    render () {
        const {
            checked, disabled, name, required, value,
        } = this;

        return html`
        <input
            type="radio"
            id="radioId"
            data-test-id="pie-radio"
            .checked="${live(checked)}"
            .value="${value}"
            name="${ifDefined(name)}"
            ?disabled="${disabled}"
            ?required="${required}">
        <label for="radioId">
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
