import {
    LitElement, html, unsafeCSS, PropertyValues, nothing,
} from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import {
    RtlMixin,
    defineCustomElement,
    wrapNativeEvent,
    FormControlMixin,
    validPropertyValues,
} from '@justeattakeaway/pie-webc-core';
import '@justeattakeaway/pie-assistive-text';

import styles from './checkbox.scss?inline';
import { CheckboxProps, defaultProps, statusTypes } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-checkbox';
const assistiveTextIdValue = 'assistive-text';

/**
 * @tagname pie-checkbox
 * @event {CustomEvent} change - when checked state is changed.
 */
export class PieCheckbox extends FormControlMixin(RtlMixin(LitElement)) implements CheckboxProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @state()
    private disabledByParent = false;

    @property({ type: String })
    public value = defaultProps.value;

    @property({ type: String })
    public label?: CheckboxProps['label'];

    @property({ type: String })
    public name?: CheckboxProps['name'];

    @property({ type: Boolean, reflect: true })
    public checked = defaultProps.checked;

    @property({ type: Boolean, reflect: true })
    public defaultChecked = defaultProps.defaultChecked;

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @property({ type: Boolean, reflect: true })
    public required = defaultProps.required;

    @property({ type: Boolean, reflect: true })
    public indeterminate = defaultProps.indeterminate;

    @query('input[type="checkbox"]')
    private checkbox!: HTMLInputElement;

    @property({ type: String })
    public assistiveText?: CheckboxProps['assistiveText'];

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, defaultProps.status)
    public status = defaultProps.status;

    connectedCallback () : void {
        super.connectedCallback();

        this.addEventListener('pie-checkbox-group-disabled', (e: CustomEventInit) => { this.disabledByParent = e.detail.disabled; });
    }

    disconnectedCallback () : void {
        super.disconnectedCallback();

        this.removeEventListener('pie-checkbox-group-disabled', (e: CustomEventInit) => { this.disabledByParent = e.detail.disabled; });
    }

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

    protected updated (): void {
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
     * Called when the form that contains this component is reset.
     * If the current checked state is different to the default checked state,
     * the checked state is reset to the default checked state and a `change` event is emitted.
     */
    public formResetCallback () : void {
        if (this.checked === this.defaultChecked) {
            return;
        }

        this.checked = this.defaultChecked;

        const changeEvent = new Event('change', { bubbles: true, composed: true });
        this.dispatchEvent(changeEvent);

        this.handleFormAssociation();
    }

    render () {
        const {
            checked,
            value,
            name,
            label,
            disabled,
            disabledByParent,
            required,
            indeterminate,
            assistiveText,
            status,
        } = this;

        const componentDisabled = disabled || disabledByParent;

        return html`
        <div
            class="c-checkbox"
            data-pie-status=${!componentDisabled && status}
            ?data-pie-disabled=${componentDisabled}
            ?data-pie-checked=${checked}
            ?data-pie-indeterminate=${indeterminate && !checked}>
            <input
                type="checkbox"
                id="inputId"
                .value=${value}
                .checked=${live(checked)}
                name=${ifDefined(name)}
                ?disabled=${componentDisabled}
                ?required=${required}
                .indeterminate=${indeterminate}
                aria-describedby=${ifDefined(assistiveText ? assistiveTextIdValue : undefined)}
                @change=${this.handleChange}
                data-test-id="checkbox-input"
            />
            <label for="inputId" data-test-id="checkbox-component">
                <span
                    class="c-checkbox-tick"
                    ?data-pie-checked=${checked}
                    ?data-pie-disabled=${componentDisabled}
                    data-pie-status=${!componentDisabled && status}
                    ?data-pie-indeterminate=${indeterminate && !checked}></span>
                <span class="c-checkbox-text">${label}</span>
            </label>
            ${assistiveText ? html`
                <pie-assistive-text
                    id="${assistiveTextIdValue}"
                    variant=${status}
                    data-test-id="pie-checkbox-assistive-text">
                        ${assistiveText}
                </pie-assistive-text>` : nothing}
        </div>`;
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
