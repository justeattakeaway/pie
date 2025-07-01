import {
    html,
    unsafeCSS,
    nothing,
    type PropertyValues,
    type TemplateResult,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    property, queryAssignedElements, state,
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

    @state()
    private _fieldSetTabIndex = 0;

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
                radio.checked = radio.value === this.value;
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
        this._resetButtonsTabIndex();
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
     * Ensures all newly added radio buttons are tabbable and inherit the name property
     */
    private _handleRadioSlotChange (): void {
        this._resetButtonsTabIndex();
        this._applyNameToChildren();
    }

    /**
     * Prevent radio buttons from receiving focus
     */
    private _resetButtonsTabIndex () {
        this._slottedChildren.forEach((radio) => {
            radio.tabIndex = -1;
        });
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

        this.addEventListener('focus', this._handleFocus, { signal });
        this.addEventListener('focusout', this._handleFocusOut, { signal });

        this.shadowRoot?.addEventListener('change', this._handleRadioChange.bind(this), { signal });

        this.addEventListener('keydown', this._handleKeyDown, { signal });

        this._applyNameToChildren();
    }

    /**
     * Handles the `focus` event to manage focus within the radio group.
     *
     * This method determines the appropriate element to focus when the radio group
     * gains focus. It considers where the focus is coming from, and focuses the
     * checked option, the first option, or the last option as needed.
     */
    private _handleFocus (event: FocusEvent): void {
        // Bypass all logic if there are no children
        const enabledChildren = this._slottedChildren.filter((item) => !item.disabled);
        if (!enabledChildren || enabledChildren.length === 0) return;

        if (!this.value) {
            // When no value is assigned, depending on the previously focused element,
            // transfer focus to the next logical radio

            // Workaround for Safari, when body is the active element,
            // it is not assigned to the event.relatedTarget
            const previouslyFocusedElement = event.relatedTarget as Node || this.parentNode;
            const sourceRelativePosition = (this as Node).compareDocumentPosition(previouslyFocusedElement);

            // Check if focus element was before or after this instance
            // eslint-disable-next-line no-bitwise
            const topToBottomOrder = sourceRelativePosition & Node.DOCUMENT_POSITION_PRECEDING; // we need the bitwise operator here

            // Depending on the focus direction of movement, get the first or last enabled children
            const firstOrLastChild = topToBottomOrder ? enabledChildren.shift() : enabledChildren.pop();

            if (firstOrLastChild) {
                firstOrLastChild.tabIndex = 0;
                firstOrLastChild.focus();
            }

            // Set the selected radio with tabindex 0, and -1 for the others
            enabledChildren.forEach((radio) => {
                radio.tabIndex = -1;
            });
        } else {
            // When a value is assigned, the matching radio element is focused
            enabledChildren.forEach((radio) => {
                if (radio.value === this.value) {
                    radio.tabIndex = 0;
                    radio.focus();
                } else {
                    radio.tabIndex = -1;
                }
            });
        }
    }

    /**
     * Handles the `focusout` event to set `tabindex` where it will be needed
     *
     * When no value is set and focus leaves the radio group, this method enables the
     * `tabindex` attribute on the `fieldset` element. This ensures the radio group
     * remains accessible for keyboard navigation and can be re-focused when tabbing
     * back into the group.
     *
     * When a value is set and focus leaves the radio group, it will add it back
     * to the correspondent radio, so ir can be re-focused when tabbing back into
     * the group.
     */
    private _handleFocusOut (event: FocusEvent): void {
        // `relatedTarget` is null when focusing the body
        const focusedElement = event.relatedTarget as Node;
        if (!focusedElement) {
            this._resetButtonsTabIndex();
            this._fieldSetTabIndex = 0;
            return;
        }

        // Since losing focus out can happen after focusing a radio, we want to check
        // if the focus target is outside this component
        const position = (focusedElement).compareDocumentPosition(this as Node);

        // we need the bitwise operator here
        const instanceContainsFocusedElement = position & Node.DOCUMENT_POSITION_CONTAINS; // eslint-disable-line no-bitwise
        const radioGroupLostFocus = instanceContainsFocusedElement === 0;

        // Make the fieldset focusable after it loses focus to an element that is not inside itself
        if (radioGroupLostFocus) {
            this._resetButtonsTabIndex();
            this._fieldSetTabIndex = 0;
        } else {
            // If the fieldset lost focus to an element inside itself it should not be focusable
            this._fieldSetTabIndex = -1;
        }
    }

    private _moveFocus (currentIndex: number, step: number): void {
        const enabledChildren = this._slottedChildren.filter((el) => !el.disabled);
        if (!enabledChildren) return; // avoid the infinite when there's nothing to focus on

        const newIndex = (currentIndex + step + this._slottedChildren.length) % this._slottedChildren.length;
        const childElement = this._slottedChildren[newIndex];

        // skip disabled element
        if (childElement.disabled) {
            if (step === 0) {
                this._moveFocus(newIndex, 1);
            } else {
                this._moveFocus(newIndex, step);
            }
            return;
        }

        // Focus and click the next radio
        const radio: HTMLInputElement = childElement;
        radio.focus();
        // This is quite hacky, but it ensures the radio elements correct emit a real change event.
        // Simply setting radio.checked as true would require re-architecture of both this component and the radio button
        // to ensure that property changes are observed and correctly propagated up.
        radio.shadowRoot?.querySelector('input')?.click();
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
        } else if (event.code === 'Space') {
            this._moveFocus(currentIndex, 0);
        }
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
            _fieldSetTabIndex,
        } = this;

        const hasAssistiveText = Boolean(assistiveText?.length);

        const classes = {
            'c-radioGroup': true,
            'c-radioGroup--inline': isInline,
            'c-radioGroup--hasAssistiveText': hasAssistiveText,
        };

        return html`
            <fieldset
                tabindex=${_fieldSetTabIndex}
                role="radiogroup"
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
