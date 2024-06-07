import {
    LitElement, html, unsafeCSS, PropertyValues, nothing,
} from 'lit';
import {
    RtlMixin,
    defineCustomElement,
    wrapNativeEvent,
    FormControlMixin,
} from '@justeattakeaway/pie-webc-core';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import styles from './checkbox.scss?inline';
import { CheckboxProps, defaultProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-checkbox';

/**
 * @tagname pie-checkbox
 * @event {CustomEvent} change - when checked state is changed.
 */
export class PieCheckbox extends FormControlMixin(RtlMixin(LitElement)) implements CheckboxProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @property({ type: String })
    public value = defaultProps.value;

    @property({ type: String })
    public label?: CheckboxProps['label'];

    @property({ type: String })
    public name?: CheckboxProps['name'];

    @property({ type: Boolean, reflect: true })
    public checked: CheckboxProps['checked'] = defaultProps.checked;

    @property({ type: Boolean, reflect: true })
    public defaultChecked: CheckboxProps['defaultChecked'] = defaultProps.defaultChecked;

    @property({ type: Boolean, reflect: true })
    public disabled?: CheckboxProps['disabled'];

    @property({ type: Boolean, reflect: true })
    public required?: CheckboxProps['required'] = defaultProps.required;

    @property({ type: Boolean, reflect: true })
    public indeterminate?: CheckboxProps['indeterminate'] = defaultProps.indeterminate;

    @property({ type: Object })
    public aria: CheckboxProps['aria'];

    @query('input[type="checkbox"]')
    public checkbox!: HTMLInputElement;

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity (): ValidityState {
        return (this.checkbox as HTMLInputElement).validity;
    }

    /**
     * Ensures that the form value is in sync with the component.
     */
    private handleFormAssociation () : void {
        const isFormAssociated = !!this.form && !!this.name;
        if (isFormAssociated) {
            this._internals.setFormValue(this.checked ? this.value : null);
        }
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

    protected firstUpdated (_changedProperties: PropertyValues<this>): void {
        super.firstUpdated(_changedProperties);

        this.handleFormAssociation();
    }

    protected updated (_changedProperties: PropertyValues<this>): void {
        super.updated(_changedProperties);

        this.handleFormAssociation();
    }

    /**
     * Captures the native change event and wraps it in a custom event.
     * @param {Event} event - This should be the change event that was listened for on an input element with `type="checkbox"`.
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
     * Called when the form that owns this component is reset.
     * Sets the checked state to the default value.
     */
    public formResetCallback () : void {
        this.checked = !!this.defaultChecked;

        this.handleFormAssociation();
    }

    render () {
        const {
            checked,
            value,
            name,
            label,
            disabled,
            required,
            indeterminate,
            aria,
        } = this;

        return html`
        <label data-test-id="checkbox-component">
            <input
                type="checkbox"
                .value=${value}
                .checked=${!!checked}
                name=${ifDefined(name)}
                ?disabled=${disabled}
                ?required=${required}
                .indeterminate=${!!indeterminate}
                aria-label=${aria?.label || nothing}
                aria-labelledby=${label ? nothing : aria?.labelledby || nothing}
                aria-describedby= ${aria?.describedby || nothing}
                @change=${this.handleChange}
                data-test-id="checkbox-input"
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
