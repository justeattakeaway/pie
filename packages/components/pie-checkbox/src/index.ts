import {
    LitElement, html, unsafeCSS, nothing,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { classMap } from 'lit/directives/class-map.js';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import {
    RtlMixin,
    wrapNativeEvent,
    FormControlMixin,
    validPropertyValues,
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import '@justeattakeaway/pie-assistive-text';

import styles from './checkbox.scss?inline';
import { type CheckboxProps, defaultProps, statusTypes } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-checkbox';
const assistiveTextId = 'assistive-text';

/**
 * @tagname pie-checkbox
 * @slot - Default slot
 * @event {CustomEvent} change - when checked state is changed.
 */
@safeCustomElement('pie-checkbox')
export class PieCheckbox extends FormControlMixin(RtlMixin(PieElement)) implements CheckboxProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @state()
    private _disabledByParent = false;

    @state()
    private _visuallyHiddenError = false;

    @state()
    private _isAnimationAllowed = false;

    @property({ type: String })
    public value = defaultProps.value;

    @property({ type: String, reflect: true })
    public name: CheckboxProps['name'];

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
    private _checkbox!: HTMLInputElement;

    @property({ type: String })
    public assistiveText: CheckboxProps['assistiveText'];

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, defaultProps.status)
    public status = defaultProps.status;

    private _abortController!: AbortController;

    connectedCallback () : void {
        super.connectedCallback();

        this._abortController = new AbortController();
        const { signal } = this._abortController;

        this.addEventListener('pie-checkbox-group-disabled', (e: CustomEventInit) => { this._disabledByParent = e.detail.disabled; }, { signal });
        this.addEventListener('pie-checkbox-group-error', (e: CustomEventInit) => { this._visuallyHiddenError = e.detail.error; }, { signal });
    }

    disconnectedCallback () : void {
        super.disconnectedCallback();
        this._abortController.abort();
    }

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity (): ValidityState {
        return (this._checkbox as HTMLInputElement).validity;
    }

    /**
     * Ensures that the form value is in sync with the component.
     */
    private _handleFormAssociation () : void {
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
        this._handleFormAssociation();
    }

    /**
     * Captures the native change event and wraps it in a custom event.
     * @param {Event} event - This should be the change event that was listened for on an input element with `type="checkbox"`.
     */
    private _handleChange (event: Event) {
        const { checked } = event?.currentTarget as HTMLInputElement;
        this.checked = checked;
        if (!this._isAnimationAllowed) {
            this._isAnimationAllowed = true;
        }
        // This is because some events set `composed` to `false`.
        // Reference: https://javascript.info/shadow-dom-events#event-composed
        const customChangeEvent = wrapNativeEvent(event);
        this.dispatchEvent(customChangeEvent);

        this._handleFormAssociation();
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

        this._handleFormAssociation();
    }

    render () {
        const {
            checked,
            value,
            name,
            disabled,
            _disabledByParent,
            _visuallyHiddenError,
            _isAnimationAllowed,
            required,
            indeterminate,
            assistiveText,
            status,
            isRTL,
        } = this;

        const componentDisabled = disabled || _disabledByParent;

        const checkboxClasses = {
            'c-checkbox': true,
            [`c-checkbox--status-${status}`]: !componentDisabled,
            'is-disabled': componentDisabled,
            'c-checkbox--checked': checked,
            'c-checkbox--indeterminate': indeterminate && !checked,
        };

        const labelClasses = {
            'c-checkbox-tick': true,
            [`c-checkbox-tick--status-${status}`]: !componentDisabled,
            'is-disabled': componentDisabled,
            'c-checkbox-tick--checked': checked,
            'c-checkbox-tick--indeterminate': indeterminate && !checked,
            'c-checkbox-tick--allow-animation': _isAnimationAllowed,
            'c-checkbox-tick--rtl': isRTL,
        };

        return html`
        <div
            class="${classMap(checkboxClasses)}">
            <input
                type="checkbox"
                id="inputId"
                .value=${value}
                .checked=${live(checked)}
                name=${ifDefined(name)}
                ?disabled=${componentDisabled}
                ?required=${required}
                .indeterminate=${indeterminate}
                aria-invalid=${status === 'error' ? 'true' : 'false'}
                aria-describedby=${ifDefined(assistiveText ? assistiveTextId : undefined)}
                @change=${this._handleChange}
                data-test-id="pie-checkbox-input"
            />
            <label for="inputId" data-test-id="pie-checkbox-label">
                <span
                    class="${classMap(labelClasses)}"></span>
                <span class="c-checkbox-text">
                    <slot></slot>
                </span>
            </label>
            ${assistiveText ? html`
                <pie-assistive-text
                    id="${assistiveTextId}"
                    variant=${status}
                    ?isVisuallyHidden=${_visuallyHiddenError}
                    data-test-id="pie-checkbox-assistive-text">
                        ${assistiveText}
                </pie-assistive-text>` : nothing}
        </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCheckbox;
    }
}
