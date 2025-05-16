import {
    html,
    unsafeCSS,
    nothing,
    type PropertyValues,
    type TemplateResult,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    property, query, queryAssignedElements, state,
} from 'lit/decorators.js';
import {
    RtlMixin,
    FormControlMixin,
    wrapNativeEvent,
    validPropertyValues,
    safeCustomElement,
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
@safeCustomElement('pie-radio-group')
export class PieRadioGroup extends FormControlMixin(RtlMixin(PieElement)) implements RadioGroupProps {
    @state()
    private _hasLabel = false;

    @property({ type: String, reflect: true })
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

    @query('fieldset')
    private _fieldset!: HTMLInputElement;

    private _abortController!: AbortController;

    /**
     * Tracks whether the `Shift` key was held during the last `Tab` key press.
     *
     * The property is static because it needs to be shared across all instances of the
     * `PieRadioGroup` component on the same page, ensuring consistent behavior.
     */
    private static _wasShiftTabPressed = false;

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
    private _handleLabelSlotChange (e: { target: HTMLSlotElement }): void {
        const childNodes = e.target.assignedNodes({ flatten: true });
        this._hasLabel = childNodes.length > 0;
    }

    /**
     * Ensures all newly added radio buttons are not tabbable and inherit the name property
     */
    private _handleRadioSlotChange (): void {
        // Make all (including any newly added) radio buttons impossible to tab to
        // This is because by default, we are able to tab to each individual radio button.
        // This is not the behaviour we want, so applying -1 tabindex prevents it.
        this._slottedChildren.forEach((radio) => radio.setAttribute('tabindex', '-1'));
        this._applyNameToChildren();
    }

    /**
     * Renders the label element inside a legend, wrapping the slot content.
     * @returns {TemplateResult } The template for the label slot.
     * @private
     */
    private _renderWrappedLabel (): TemplateResult {
        return this._hasLabel
            ? html`<legend><slot name='label' @slotchange=${this._handleLabelSlotChange}></slot></legend>`
            : html`<slot name='label' @slotchange=${this._handleLabelSlotChange}></slot>`;
    }

    private _applyNameToChildren () : void {
        this._slottedChildren.forEach((radio) => {
            if (this.name) {
                radio.setAttribute('name', this.name);
            }
        });
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

        if (_changedProperties.has('name')) {
            this._applyNameToChildren();
        }
    }

    connectedCallback (): void {
        super.connectedCallback();
        this._abortController = new AbortController();
        const { signal } = this._abortController;

        this.shadowRoot?.addEventListener('change', this._handleRadioChange.bind(this), { signal });

        this.addEventListener('focusin', this._handleFocusIn, { signal });
        this.addEventListener('focusout', this._handleFocusOut, { signal });

        this.addEventListener('keydown', this._handleKeyDown, { signal });

        // Warning! One edge case bug we've noticed is if the radio group is the first focusable element in the document,
        // and you shift + tab out of it, when tabbing back in, it will focus the last radio instead of the first.
        // Given it is quite an edge case, we will leave it for now.
        document.addEventListener('keydown', this._updateShiftTabState.bind(this), { signal });

        this._applyNameToChildren();
    }

    /**
     * Updates the state of `_wasShiftTabPressed` based on the last `Tab` key press.
     */
    private _updateShiftTabState (event: KeyboardEvent): void {
        if (event.key === 'Tab') {
            PieRadioGroup._wasShiftTabPressed = event.shiftKey;
        }
    }

    /**
     * Handles the `focusin` event to manage focus within the radio group.
     *
     * This method determines the appropriate element to focus when the radio group
     * gains focus. It considers the last navigation action (whether `Shift+Tab` was used)
     * and focuses the checked option, the first option, or the last option as needed.
     */
    private _handleFocusIn (event: FocusEvent): void {
        if (this !== event.target) return;

        const isShiftTab = PieRadioGroup._wasShiftTabPressed;
        const focusTarget = this._slottedChildren?.find((child) => child.checked) ||
            (isShiftTab ? this._slottedChildren.at(-1) : this._slottedChildren[0]);

        if (!focusTarget) return;

        focusTarget.focus();
        this._toggleFieldsetTabindex(false);
    }

    /**
     * Handles the `focusout` event to restore the `tabindex` on the radio group's `fieldset`.
     *
     * When focus leaves the radio group, this method enables the `tabindex` attribute
     * on the `fieldset` element. This ensures the radio group remains accessible for
     * keyboard navigation and can be re-focused when tabbing back into the group.
     */
    private _handleFocusOut (): void {
        this._toggleFieldsetTabindex(true);
    }

    private _toggleFieldsetTabindex (enable: boolean): void {
        if (enable) {
            this._fieldset.setAttribute('tabindex', '0');
        } else {
            this._fieldset.removeAttribute('tabindex');
        }
    }

    private _moveFocus (currentIndex: number, step: number): void {
        const newIndex = (currentIndex + step + this._slottedChildren.length) % this._slottedChildren.length;
        this._focusAndClickOption(this._slottedChildren[newIndex]);
    }

    /**
     * Determines if a key press indicates forward navigation within the radio group.
     *
     * This method evaluates a keyboard event to check if the pressed key corresponds
     * to forward navigation based on the current text direction (LTR or RTL).
     *
     * **Behaviour:**
     * - For LTR (Left-to-Right) layouts:
     *   - `ArrowRight` and `ArrowDown` indicate forward navigation.
     * - For RTL (Right-to-Left) layouts:
     *   - `ArrowLeft` and `ArrowDown` indicate forward navigation.
     */
    private _isForwardKey (event: KeyboardEvent): boolean {
        return (event.code === 'ArrowRight' && !this.isRTL) ||
            (event.code === 'ArrowLeft' && this.isRTL) ||
            event.code === 'ArrowDown';
    }

    /**
     * Determines if a key press indicates backward navigation within the radio group.
     *
     * This method evaluates a keyboard event to check if the pressed key corresponds
     * to backward navigation based on the current text direction (LTR or RTL).
     *
     * **Behaviour:**
     * - For LTR (Left-to-Right) layouts:
     *   - `ArrowLeft` and `ArrowUp` indicate backward navigation.
     * - For RTL (Right-to-Left) layouts:
     *   - `ArrowRight` and `ArrowUp` indicate backward navigation.
     */
    private _isBackwardKey (event: KeyboardEvent): boolean {
        return (event.code === 'ArrowLeft' && !this.isRTL) ||
            (event.code === 'ArrowRight' && this.isRTL) ||
            event.code === 'ArrowUp';
    }

    /**
     * Handles keyboard navigation within the radio group using arrow keys.
     *
     * This method responds to `keydown` events and determines the appropriate navigation
     * action (forward or backward) based on the pressed key and the current focus. It prevents
     * the default browser behaviour (e.g., scrolling) when arrow keys are used for navigation.
     */
    private _handleKeyDown (event: KeyboardEvent): void {
        const currentlyFocusedChild = this._slottedChildren.find((child) => child === document.activeElement);

        if (!currentlyFocusedChild) {
            return;
        }

        const currentIndex = this._slottedChildren.indexOf(currentlyFocusedChild);
        if (currentIndex === -1) {
            return;
        }

        // Prevent default scrolling behavior when using Arrow keys for Radio Group navigation
        if (['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(event.code)) {
            event.preventDefault();
        }

        if (this._isForwardKey(event)) {
            this._moveFocus(currentIndex, 1);
        } else if (this._isBackwardKey(event)) {
            this._moveFocus(currentIndex, -1);
        }
    }

    private _focusAndClickOption (option: HTMLInputElement): void {
        option.focus();
        // This is quite hacky, but it ensures the radio elements correct emit a real change event.
        // Simply setting option.checked as true would require re-architecture of both this component and the radio button
        // to ensure that property changes are observed and correctly propagated up.
        option.shadowRoot?.querySelector('input')?.click();
        this._toggleFieldsetTabindex(false);
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
                role="radiogroup"
                tabindex="0"
                name=${ifDefined(name)}
                ?disabled=${disabled}
                data-test-id="pie-radio-group-fieldset"
                aria-describedby=${hasAssistiveText ? assistiveTextId : nothing}
                class="${classMap(classes)}">
                    ${this._renderWrappedLabel()}
                <slot @slotchange=${this._handleRadioSlotChange}></slot>
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

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieRadioGroup;
    }
}
