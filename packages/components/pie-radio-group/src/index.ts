import {
    LitElement,
    html,
    unsafeCSS,
    nothing,
    type PropertyValues,
    type TemplateResult,
} from 'lit';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import {
    RtlMixin,
    defineCustomElement,
    FormControlMixin,
    wrapNativeEvent,
    validPropertyValues,
} from '@justeattakeaway/pie-webc-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './radio-group.scss?inline';
import {
    type RadioGroupProps,
    defaultProps,
    statusTypes,
    ON_RADIO_GROUP_DISABLED,
} from './defs';
import '@justeattakeaway/pie-assistive-text';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-radio-group';
const assistiveTextId = 'assistive-text';

/**
 * @tagname pie-radio-group
 * @slot - Default slot
 * @slot label - The label slot
 * @event {CustomEvent} change - when one of the radios state is changed.
 */
export class PieRadioGroup extends FormControlMixin(RtlMixin(LitElement)) implements RadioGroupProps {
    @state()
    private _hasLabel = false;

    @property({ type: String })
    public name: RadioGroupProps['name'];

    @property({ type: String })
    public value = defaultProps.value;

    @property({ type: Boolean })
    public isInline = defaultProps.isInline;

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @property({ type: String })
    public assistiveText?: RadioGroupProps['assistiveText'];

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, defaultProps.status)
    public status = defaultProps.status;

    @queryAssignedElements({ selector: 'pie-radio' })
        _slottedChildren!: Array<HTMLInputElement>;

    private _abortController!: AbortController;

    /**
     * Dispatches a custom event to notify each slotted child radio element
     * when the radio group is disabled.
     * @private
     */
    private _handleDisabled (): void {
        this._slottedChildren.forEach((child) => child.dispatchEvent(new CustomEvent(ON_RADIO_GROUP_DISABLED, {
            bubbles: false, composed: false, detail: { disabled: this.disabled },
        })));
    }

    /**
     * Updates the `status` attribute of all slotted children.
     * @private
     * @returns {void}
     */
    private _handleStatus (): void {
        this._slottedChildren.forEach((child) => child.setAttribute('status', this.status === 'error' ? 'error' : 'default'));
    }

    /**
     * Unselects all radios that are not the selected value.
     * @param {string} selectedValue - The value of the currently selected radio.
     * @private
     */
    private _handleRadioSelection (selectedValue: string): void {
        this.value = selectedValue;
        this._slottedChildren.forEach((radio) => {
            if (!radio.disabled) {
                radio.checked = radio.value === selectedValue;
            }
        });
    }

    /**
     * Handles the radio change event, updates the selected value, and emits a change event for consumers.
     * @param {Event} event - The change event from a radio element.
     * @private
     */
    private _handleRadioChange (event: Event): void {
        event.stopPropagation();
        const target = event.target as HTMLInputElement;
        this._handleRadioSelection(target.value);
        const changedEvent = wrapNativeEvent(event);
        this.dispatchEvent(changedEvent);
    }

    /**
     * Updates the `_hasLabel` state when content is added to the label slot.
     * @param {Event} e - The slotchange event.
     * @private
     */
    private _handleSlotChange (e: { target: HTMLSlotElement }): void {
        const childNodes = e.target.assignedNodes({ flatten: true });
        this._hasLabel = childNodes.length > 0;
    }

    /**
     * Renders the label element inside a legend, wrapping the slot content.
     * @returns {TemplateResult } The template for the label slot.
     * @private
     */
    private _renderWrappedLabel (): TemplateResult {
        return this._hasLabel
            ? html`<legend><slot name='label' @slotchange=${this._handleSlotChange}></slot></legend>`
            : html`<slot name='label' @slotchange=${this._handleSlotChange}></slot>`;
    }

    protected updated (_changedProperties: PropertyValues<this>): void {
        if (_changedProperties.has('disabled')) {
            this._handleDisabled();
        }

        if (_changedProperties.has('value')) {
            this._handleRadioSelection(this.value);
        }

        if (_changedProperties.has('status')) {
            this._handleStatus();
        }
    }

    connectedCallback (): void {
        super.connectedCallback();
        this._abortController = new AbortController();
        const { signal } = this._abortController;

        // Add event listener for keydown with explicit type assertion for the event
        this.shadowRoot?.addEventListener(
            'keydown',
            (event: Event) => this._handleKeydown(event as KeyboardEvent), // Explicitly cast to KeyboardEvent
            { signal },
        );

        this.shadowRoot?.addEventListener('change', this._handleRadioChange.bind(this), { signal });
    }

    private _handleKeydown (event: KeyboardEvent): void {
        const radios = this._slottedChildren.filter((child) => !child.disabled);
        const currentIndex = radios.findIndex((radio) => radio === document.activeElement);
        if (currentIndex === -1) return;

        const moveFocus = (newIndex: number) => {
            radios[newIndex].focus();
            this._handleRadioSelection(radios[newIndex].value);
            this._updateTabIndex(); // Ensure tabindex reflects the current focus
        };

        // eslint-disable-next-line default-case
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                moveFocus((currentIndex + 1) % radios.length);
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                event.preventDefault();
                moveFocus((currentIndex - 1 + radios.length) % radios.length);
                break;
            case ' ':
                event.preventDefault();
                this._handleRadioSelection(radios[currentIndex].value);
                break;
            case 'Tab':
                if (!event.shiftKey && currentIndex === radios.length - 1) {
                    // Tab out forward from the last button
                    this._resetTabIndex(); // Prepare for re-entry
                } else if (event.shiftKey && currentIndex === 0) {
                    // Shift + Tab out backward from the first button
                    this._resetTabIndex();
                }
                break;
        }
    }

    private _resetTabIndex (): void {
        const radios = this._slottedChildren.filter((child) => !child.disabled);
        radios.forEach((radio) => radio.setAttribute('tabindex', '-1'));

        // Ensure the checked or first radio remains tabbable for re-entry
        const checkedRadio = radios.find((radio) => radio.checked);
        (checkedRadio ?? radios[0])?.setAttribute('tabindex', '0');
    }

    private _updateTabIndex (): void {
        const radios = this._slottedChildren.filter((child) => !child.disabled);
        radios.forEach((radio, index) => {
            if (radio.checked || (index === 0 && !radios.some((r) => r.checked))) {
                radio.setAttribute('tabindex', '0'); // Focusable
            } else {
                radio.setAttribute('tabindex', '-1'); // Not focusable
            }
        });
    }

    protected firstUpdated (_changedProperties: PropertyValues<this>): void {
        super.firstUpdated(_changedProperties);

        // Update tabindex on initial render
        this._updateTabIndex();

        // Handle focus when tabbing into the group
        this.shadowRoot?.addEventListener(
            'focus',
            (event: Event) => {
                const focusEvent = event as FocusEvent;
                if (focusEvent.target === this) {
                    const radios = this._slottedChildren.filter((child) => !child.disabled);
                    const checkedRadio = radios.find((radio) => radio.checked);
                    (checkedRadio ?? radios[0])?.focus();
                    this._updateTabIndex(); // Ensure the correct radio button is focusable
                }
            },
            { capture: true },
        );

        // Update tabindex dynamically when selection changes
        this._slottedChildren.forEach((radio) => {
            radio.addEventListener('change', () => this._updateTabIndex());
        });
    }

    disconnectedCallback (): void {
        super.disconnectedCallback();
        this._abortController.abort();
    }

    render () {
        const {
            name,
            isInline,
            disabled,
            status,
            assistiveText,
        } = this;

        const hasAssistiveText = Boolean(assistiveText?.length);

        const classes = {
            'c-radioGroup': true,
            'c-radioGroup--inline': isInline,
            'c-radioGroup--hasAssistiveText': hasAssistiveText,
        };

        return html`
            <fieldset
                name=${ifDefined(name)}
                ?disabled=${disabled}
                data-test-id="pie-radio-group"
                aria-describedby=${hasAssistiveText ? assistiveTextId : nothing}
                class="${classMap(classes)}">
                    ${this._renderWrappedLabel()}
                <slot></slot>
            </fieldset>
            ${hasAssistiveText ? html`
                <pie-assistive-text
                    id=${assistiveTextId}
                    variant=${status}
                    data-test-id="pie-radio-group-assistive-text">
                        ${assistiveText}
                    </pie-assistive-text>`
            : nothing}
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieRadioGroup);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieRadioGroup;
    }
}
