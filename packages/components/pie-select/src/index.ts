import {
    LitElement,
    html,
    nothing,
    unsafeCSS,
    type TemplateResult,
} from 'lit';
import {
    FormControlMixin,
    RtlMixin,
    defineCustomElement,
    validPropertyValues,
    wrapNativeEvent,
} from '@justeattakeaway/pie-webc-core';
import {
    property,
    query,
    queryAssignedElements,
    state,
} from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { live } from 'lit/directives/live.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronDown.js';
import '@justeattakeaway/pie-assistive-text';

import styles from './select.scss?inline';
import {
    defaultProps,
    sizes,
    statusTypes,
    type SelectProps,
} from './defs';
import { optionDefaultProps, type PieOption } from './pie-option';
import { optionGroupDefaultProps, type PieOptionGroup } from './pie-option-group';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-select';
const assistiveTextIdValue = 'assistive-text';

/**
 * @tagname pie-select
 */
export class PieSelect extends FormControlMixin(RtlMixin(LitElement)) implements SelectProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: Boolean, reflect: true })
    public required = defaultProps.required;

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, defaultProps.status)
    public status = defaultProps.status;

    @property({ type: String })
    public assistiveText: SelectProps['assistiveText'];

    @property({ type: String })
    public name: SelectProps['name'];

    @query('select')
    private select!: HTMLSelectElement;

    @query('select')
    public focusTarget!: HTMLElement;

    @queryAssignedElements({ slot: 'leadingIcon', flatten: true })
    private _leadingIconSlot!: Array<HTMLElement>;

    @state()
    private _hasLeadingIcon = false;

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity (): ValidityState {
        return this.select.validity;
    }

    /**
     * Called after the disabled state of the element changes,
     * either because the disabled attribute of this element was added or removed;
     * or because the disabled state changed on a <fieldset> that's an ancestor of this element.
     * @param disabled - The latest disabled state of the select.
     */
    public formDisabledCallback (disabled: boolean): void {
        this.disabled = disabled;
    }

    /**
     * Called when the form that owns this component is reset.
     * Resets the value to the default value.
     */
    public formResetCallback (): void {
        const selected = this.querySelector('pie-option[selected]');
        this.select.value = selected?.getAttribute('value') ?? '';
        this.select.selectedIndex = selected ? this.select.selectedIndex : 0;
        this._internals.setFormValue(this.select.value);
    }

    protected firstUpdated (): void {
        this._internals.setFormValue(this.select.value);
    }

    /**
     * Handles data processing in response to the input event. The native input event is left to bubble up.
     * @param event - The input event.
     */
    private _handleInput = (event: InputEvent) => {
        const { value } = (event.target as HTMLInputElement);
        this._internals.setFormValue(value);
    };

    /**
     * Captures the native change event and wraps it in a custom event.
     * @param event - The change event.
     */
    private _handleChange = (event: Event) => {
        // We have to create our own change event because the native one
        // does not penetrate the shadow boundary.

        // This is because some events set `composed` to `false`.
        // Reference: https://javascript.info/shadow-dom-events#event-composed
        const customChangeEvent = wrapNativeEvent(event);
        this.dispatchEvent(customChangeEvent);
    };

    private _handleDefaultSlotChange () {
        this.requestUpdate();
    }

    private _handleLeadingIconSlotchange () {
        this._hasLeadingIcon = Boolean(this._leadingIconSlot.length);
    }

    private renderChildren (child: PieSelect | PieOption | PieOptionGroup): TemplateResult {
        return html`
          ${Array.from(child.children)
            .filter((el) => el.matches('pie-option-group,pie-option'))
            .map((el) => {
                const disabled = el.hasAttribute('disabled');
                const selected = el.hasAttribute('selected');
                const value = el.getAttribute('value') ?? optionDefaultProps.value;
                const label = el.getAttribute('label') ?? optionGroupDefaultProps.label;

                return el.matches('pie-option')
                    ? html`<option
                            .value="${live(value)}"
                            ?disabled="${disabled}"
                            ?selected="${selected}">
                                ${el.textContent}
                        </option>`
                    : html`<optgroup
                            ?disabled="${disabled}"
                            label="${ifDefined(label)}">
                                ${this.renderChildren(el as PieOptionGroup)}
                        </optgroup>`;
            })}
        `;
    }

    private renderAssistiveText () {
        if (!this.assistiveText) {
            return nothing;
        }

        return html`
            <pie-assistive-text
                id="${assistiveTextIdValue}"
                variant="${ifDefined(this.status)}"
                data-test-id="pie-select-assistive-text">
                ${this.assistiveText}
            </pie-assistive-text>
        `;
    }

    render () {
        const {
            assistiveText,
            disabled,
            required,
            status,
            size,
            name,
            _hasLeadingIcon,
        } = this;

        const classes : ClassInfo = {
            'c-select': true,
            [`c-select--${size}`]: true,
            [`c-select--${status}`]: true,
            'c-select--withLeadingIcon': _hasLeadingIcon,
            'is-disabled': disabled,
        };

        return html`
            <div
                class="${classMap(classes)}"
                data-test-id="pie-select-shell">
                    <slot name="leadingIcon" @slotchange=${this._handleLeadingIconSlotchange}></slot>
                    <select
                    data-test-id="pie-select-element"
                        name="${ifDefined(name)}"
                        ?disabled="${disabled}"
                        ?required="${required}"
                        aria-describedby="${ifDefined(assistiveText ? assistiveTextIdValue : undefined)}"
                        aria-invalid="${status === 'error' ? 'true' : 'false'}"
                        aria-errormessage="${ifDefined(status === 'error' ? assistiveTextIdValue : undefined)}"
                        @input=${this._handleInput}
                        @change=${this._handleChange}>
                            ${this.renderChildren(this)}
                    </select>
                    <icon-chevron-down size='s' class='c-select-trailingIcon'></icon-chevron-down>
                    <slot @slotchange=${this._handleDefaultSlotChange} style="display: none"></slot>
            </div>
            ${this.renderAssistiveText()}
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieSelect);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieSelect;
    }
}
