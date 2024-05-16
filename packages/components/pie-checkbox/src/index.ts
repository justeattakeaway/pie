import {
    LitElement, html, unsafeCSS,
} from 'lit';
import {
    RtlMixin,
    defineCustomElement,
    wrapNativeEvent,
} from '@justeattakeaway/pie-webc-core';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import styles from './checkbox.scss?inline';
import { CheckboxProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-checkbox';

/**
 * @tagname pie-checkbox
 * @slot - Default slot (checkbox label)
 */
export class PieCheckbox extends RtlMixin(LitElement) implements CheckboxProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @property({ type: String })
    public value: CheckboxProps['value'];

    @property({ type: String })
    public label?: CheckboxProps['label'];

    @property({ type: String })
    public name?: CheckboxProps['name'];

    @property({ type: Boolean })
    public checked?: CheckboxProps['checked'];

    @property({ type: Boolean, reflect: true })
    public disabled?: CheckboxProps['disabled'];

    @property({ type: Boolean, reflect: true })
    public required?: CheckboxProps['required'] = false;

    @property({ type: Boolean })
    public indeterminate?: CheckboxProps['indeterminate'] = false;

    @query('input')
    private checkbox?: HTMLInputElement;

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity (): ValidityState {
        return (this.checkbox as HTMLInputElement).validity;
    }

    /**
     * The onChange function updates the checkbox state and emits an event for consumers.
     * @param {Event} event - This should be the change event that was listened for on an input element with `type="checkbox"`.
     */
    private handleChange = (event: Event) => {
        // This is because some events set `composed` to `false`.
        // Reference: https://javascript.info/shadow-dom-events#event-composed
        const customChangeEvent = wrapNativeEvent(event);

        this.dispatchEvent(customChangeEvent);
    };

    render () {
        const {
            checked,
            value,
            name,
            label,
            disabled,
            required,
            indeterminate,
        } = this;
        return html`
        <label>
            <input
                type="checkbox"
                ?checked=${ifDefined(checked)}
                .value=${ifDefined(value)}
                name=${ifDefined(name)}
                ?disabled=${disabled}
                ?required=${required}
                .indeterminate=${indeterminate}
                @change=${this.handleChange}
                data-test-id="pie-checkbox"
            />
            ${label}
        </label>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieCheckbox);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCheckbox;
    }
}
