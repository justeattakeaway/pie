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

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-select';
const assistiveTextIdValue = 'assistive-text';

/**
 * @tagname pie-select
 * @event {CustomEvent} change - when the selected option is changed.
 */
export class PieSelect extends FormControlMixin(RtlMixin(LitElement)) implements SelectProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, defaultProps.status)
    public status = defaultProps.status;

    @property({ type: String })
    public assistiveText: SelectProps['assistiveText'];

    @property({ type: String })
    public name: SelectProps['name'];

    @property({ type: Array })
    public options: SelectProps['options'] = defaultProps.options;

    @query('select')
    public focusTarget!: HTMLSelectElement;

    @query('select')
    private _select!: HTMLSelectElement;

    @queryAssignedElements({ slot: 'leadingIcon', flatten: true })
    private _leadingIconSlot!: Array<HTMLElement>;

    @state()
    private _hasLeadingIcon = false;

    protected firstUpdated (): void {
        this._internals.setFormValue(this._select.value);
    }

    /**
     * (Read-only) returns a ValidityState with the validity states that this element is in.
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
     */
    public get validity (): ValidityState {
        return this._select.validity;
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
     * Resets the value to the default select value.
     */
    public formResetCallback (): void {
        const selected = this._select.querySelector('option[selected]');
        this._select.value = selected?.getAttribute('value') ?? '';
        this._select.selectedIndex = selected ? this._select.selectedIndex : 0;
        this._internals.setFormValue(this._select.value);
    }

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

        this._internals.setFormValue(this._select.value);
    };

    private _handleLeadingIconSlotchange () {
        this._hasLeadingIcon = Boolean(this._leadingIconSlot.length);
    }

    /**
     * Renders the options from the options property
     * @param options - The options to render
     * @returns A template result with the rendered options
     */
    private renderChildren (options: SelectProps['options']): TemplateResult {
        return html`
            ${options.map((option) => {
            if (option.tag === 'optgroup') {
                return html`
                        <optgroup
                            ?disabled="${option.disabled}"
                            label="${ifDefined(option.label)}">
                            ${this.renderChildren(option.options)}
                        </optgroup>
                    `;
            }

            return html`
                    <option
                        .value="${live(option.value)}"
                        ?disabled="${option.disabled}"
                        ?selected="${option.selected}">
                        ${option.text}
                    </option>
                `;
        })}
        `;
    }

    /**
     * Renders the assistive text if available.
     * @returns A template result with the assistive text
     */
    private renderAssistiveText (): TemplateResult | typeof nothing {
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
            status,
            size,
            name,
            options,
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
                    aria-describedby="${ifDefined(assistiveText ? assistiveTextIdValue : undefined)}"
                    aria-invalid="${status === 'error' ? 'true' : 'false'}"
                    aria-errormessage="${ifDefined(status === 'error' ? assistiveTextIdValue : undefined)}"
                    @change=${this._handleChange}>
                    ${this.renderChildren(options)}
                </select>
                <icon-chevron-down size='s' class='c-select-trailingIcon'></icon-chevron-down>
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
