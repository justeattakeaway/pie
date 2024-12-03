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
     * Tracks whether the `Shift` key was held during the last `Tab` key press.
     *
     * This static property is updated whenever a `Tab` key press is detected. It is used
     * to determine navigation direction when the radio group gains focus:
     * - `true`: Indicates that the user pressed `Shift+Tab` for backward navigation.
     * - `false`: Indicates that the user pressed `Tab` alone for forward navigation.
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

    protected firstUpdated (): void {
        // Make all radios impossible to tab to
        this._slottedChildren.forEach((radio) => radio.setAttribute('tabindex', '-1'));
    }

    connectedCallback (): void {
        super.connectedCallback();
        this._abortController = new AbortController();
        const { signal } = this._abortController;

        this.shadowRoot?.addEventListener('change', this._handleRadioChange.bind(this), { signal });

        this.addEventListener('focusin', this._handleFocusIn, { signal });
        this.addEventListener('focusout', this._handleFocusOut, { signal });

        this.addEventListener('keydown', this._handleKeyDown, { signal });
        document.addEventListener('keydown', this._updateShiftTabState.bind(this), { signal });
    }

    /**
     * Updates the state of `_wasShiftTabPressed` based on the last `Tab` key press.
     *
     * When a `Tab` key press is detected, this method updates the static property
     * `wasShiftTabPressed` to indicate whether the `Shift` key was also held during
     * the event. This information is used to manage focus direction when the radio
     * group gains focus.
     *
     * @param {KeyboardEvent} event - The keyboard event containing information about the key press.
     *
     * Example Usage:
     * - If `Shift+Tab` is pressed, `_wasShiftTabPressed` is set to `true` to signal backward navigation.
     * - If `Tab` alone is pressed, `_wasShiftTabPressed` is set to `false` for forward navigation.
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
     *
     * **Behaviour:**
     * - If the event target is the radio group itself:
     *   - If an option is already checked, it focuses the checked option.
     *   - If `Shift+Tab` was pressed, it focuses the last option.
     *   - Otherwise, it focuses the first option.
     * - It disables the `tabindex` on the radio group's `fieldset` to allow focus to remain on
     *   the appropriate option.
     *
     * @param {FocusEvent} event - The focus event triggered when the radio group gains focus.
     *
     * Example Usage:
     * - When the user navigates to the radio group using `Shift+Tab`, the last option is focused.
     * - When the user navigates using `Tab`, the first option is focused (unless one is checked).
     * - If an option is already checked, it takes precedence and is focused.
     */
    private _handleFocusIn (event: FocusEvent): void {
        if (this !== event.target) return;

        console.log('In _handleFocusIn');
        const isShiftTab = PieRadioGroup._wasShiftTabPressed;
        const focusTarget = this._slottedChildren?.find((child) => child.checked) ||
            (isShiftTab ? this._slottedChildren.at(-1) : this._slottedChildren[0]);

        if (!focusTarget) return;

        console.log('focusing: ', focusTarget);
        focusTarget.focus();
        console.log('focused: ', focusTarget);
        this._toggleFieldsetTabindex(false);
    }

    /**
     * Handles the `focusout` event to restore the `tabindex` on the radio group's `fieldset`.
     *
     * When focus leaves the radio group, this method enables the `tabindex` attribute
     * on the `fieldset` element. This ensures the radio group remains accessible for
     * keyboard navigation and can be re-focused when tabbing back into the group.
     *
     */
    private _handleFocusOut (): void {
        this._toggleFieldsetTabindex(true);
    }

    /**
     * Toggles the `tabindex` attribute on the radio group's `fieldset` element.
     *
     * This method enables or disables the `tabindex` on the `fieldset` element based on
     * the provided `enable` flag. Enabling the `tabindex` allows the radio group to be
     * focusable via keyboard navigation, while disabling it prevents the `fieldset` from
     * interfering with the focus management of its child options.
     *
     * **Example Usage:**
     * - When the radio group loses focus, `_toggleFieldsetTabindex(true)` ensures the group is focusable.
     * - When a specific radio option is focused, `_toggleFieldsetTabindex(false)` prevents accidental focus on the `fieldset`.
     *
     * @param {boolean} enable - Whether to enable (`true`) or disable (`false`) the `tabindex` on the `fieldset`.
     */
    private _toggleFieldsetTabindex (enable: boolean): void {
        const fieldset = this.shadowRoot?.querySelector('fieldset');

        if (!fieldset) return;
        if (enable) {
            fieldset.setAttribute('tabindex', '0');
        } else {
            fieldset.removeAttribute('tabindex');
        }
    }

    /**
     * Moves focus within the radio group to the next or previous option.
     *
     * This method calculates the new index of the option to focus based on the
     * current index and a directional step. It wraps around when the focus reaches
     * the first or last option.
     * Once the target option is determined, it focuses and triggers a click event on it.
     *
     * **Example Usage:**
     * - If the current index is `0` and `step` is `1`, the next option (index `1`) will be focused.
     * - If the current index is the last option and `step` is `1`, focus wraps to the first option.
     *
     * @param {number} currentIndex - The index of the currently focused option.
     * @param {number} step - The directional step to move the focus (e.g., `1` for forward, `-1` for backward).
     */
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
     *
     * **Example Usage:**
     * - In an LTR layout, pressing `ArrowRight` or `ArrowDown` returns `true`.
     * - In an RTL layout, pressing `ArrowLeft` or `ArrowDown` returns `true`.
     *
     * @param {KeyboardEvent} event - The keyboard event containing information about the key press.
     * @returns {boolean} `true` if the key press is for forward navigation; otherwise, `false`.
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
     *
     * **Example Usage:**
     * - In an LTR layout, pressing `ArrowLeft` or `ArrowUp` returns `true`.
     * - In an RTL layout, pressing `ArrowRight` or `ArrowUp` returns `true`.
     *
     * @param {KeyboardEvent} event - The keyboard event containing information about the key press.
     * @returns {boolean} `true` if the key press is for backward navigation; otherwise, `false`.
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
     *
     * **Behaviour:**
     * - Checks if the currently focused element is one of the radio group options.
     * - Determines the index of the currently focused option.
     * - Prevents default scrolling behavior if an arrow key (`ArrowRight`, `ArrowDown`, `ArrowLeft`, `ArrowUp`) is pressed.
     * - Uses `_isForwardKey` or `_isBackwardKey` to determine the navigation direction and calls `_moveFocus` to update focus.
     *
     * **Example Usage:**
     * - Pressing `ArrowRight` (in LTR) moves the focus to the next option.
     * - Pressing `ArrowLeft` (in RTL) moves the focus to the next option.
     * - Pressing `ArrowUp` or `ArrowDown` navigates backward or forward, respectively, regardless of text direction.
     *
     * @param {KeyboardEvent} event - The keyboard event containing information about the key press.
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

    /**
     * Focuses a radio option and triggers a `click` event to ensure proper behaviour.
     *
     * This method sets focus on the provided radio option and programmatically triggers
     * a `click` event on its underlying `<input>` element. The `click` event ensures
     * that the radio group emits a `change` event as expected. Additionally,
     * it disables the `fieldset`'s `tabindex` to maintain proper focus behavior.
     *
     * **Behaviour:**
     * - Sets focus on the provided `option`.
     * - Finds the corresponding `<input>` element within the `option`'s shadow DOM (if available)
     *   and triggers a `click` event.
     * - Disables the `tabindex` on the `fieldset` to ensure focus remains on the option.
     *
     * @param {HTMLInputElement} option - The radio option to focus and click.
     */
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
        this._abortController.abort(); // This automatically removes event listeners associated with the signal
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
                tabindex="0"
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
