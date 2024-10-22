import {
    LitElement, html, unsafeCSS, type PropertyValues, type nothing, type TemplateResult,
} from 'lit';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import {
    RtlMixin,
    defineCustomElement,
    FormControlMixin,
    wrapNativeEvent,
} from '@justeattakeaway/pie-webc-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './radio-group.scss?inline';
import {
    type RadioGroupProps,
    defaultProps,
    ON_RADIO_GROUP_DISABLED,
} from './defs';
import '@justeattakeaway/pie-assistive-text';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-radio-group';

/**
 * @tagname pie-radio-group
 * @slot - Default slot
 * @slot label - The label slot
 * @event {CustomEvent} change - when one of the radios state is changed.
 */
export class PieRadioGroup extends FormControlMixin(RtlMixin(LitElement)) implements RadioGroupProps {
    @state()
        hasLabel = false;

    @property({ type: String })
    public name?: RadioGroupProps['name'];

    @property({ type: String })
    public value = defaultProps.value;

    @property({ type: Boolean })
    public isInline = defaultProps.isInline;

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @queryAssignedElements({ selector: 'pie-radio' })
        _slottedChildren: Array<HTMLInputElement> | undefined;

    /**
     * Dispatches a custom event to notify each slotted child radio element
     * when the radio group is disabled.
     * @private
     */
    private _handleDisabled (): void {
        this._slottedChildren?.forEach((child) => child.dispatchEvent(new CustomEvent(ON_RADIO_GROUP_DISABLED, {
            bubbles: false, composed: false, detail: { disabled: this.disabled },
        })));
    }

    /**
     * Unselects all radios that are not the selected value.
     * @param {string} selectedValue - The value of the currently selected radio.
     * @private
     */
    private handleRadioSelection (selectedValue: string): void {
        this._slottedChildren?.filter((radio) => !radio.disabled)
        .forEach((radio) => {
            if (radio.value !== selectedValue) {
                radio.checked = false;
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
        this.value = target.value;
        this.handleRadioSelection(target.value);
        const changedEvent = wrapNativeEvent(event);
        this.dispatchEvent(changedEvent);
    }

    /**
     * Updates the `hasLabel` state when content is added to the label slot.
     * @param {Event} e - The slotchange event.
     * @private
     */
    private handleSlotChange (e: { target: HTMLSlotElement }): void {
        const childNodes = e.target.assignedNodes({ flatten: true });
        this.hasLabel = childNodes.length > 0;
    }

    /**
     * Renders the label element inside a legend, wrapping the slot content.
     * @returns {TemplateResult | typeof nothing} The template for the label slot.
     * @private
     */
    private renderWrappedLabel (): TemplateResult | typeof nothing {
        return this.hasLabel
            ? html`<legend><slot name='label' @slotchange=${this.handleSlotChange}></slot></legend>`
            : html`<slot name='label' @slotchange=${this.handleSlotChange}></slot>`;
    }

    protected updated (_changedProperties: PropertyValues<this>): void {
        if (_changedProperties.has('disabled')) {
            this._handleDisabled();
        }
    }

    connectedCallback (): void {
        super.connectedCallback();
        this.shadowRoot?.addEventListener('change', this._handleRadioChange.bind(this));
    }

    disconnectedCallback (): void {
        super.disconnectedCallback();
        this.shadowRoot?.removeEventListener('change', this._handleRadioChange);
    }

    render () {
        const {
            name,
            isInline,
            disabled,
        } = this;

        const classes = {
            'c-radioGroup': true,
            'c-radioGroup--inline': isInline,
        };

        return html`
            <fieldset
                name=${ifDefined(name)}
                ?disabled=${disabled}
                data-test-id="pie-radio-group"
                class="${classMap(classes)}">
                    ${this.renderWrappedLabel()}
                <slot></slot>
            </fieldset>
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
