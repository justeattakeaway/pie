import {
    html, unsafeCSS, type PropertyValues, type TemplateResult,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    property, queryAssignedElements, state,
} from 'lit/decorators.js';
import {
    RtlMixin,
    FormControlMixin,
    validPropertyValues,
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './checkbox-group.scss?inline';
import {
    ON_CHECKBOX_GROUP_DISABLED,
    ON_CHECKBOX_GROUP_ERROR,
    type CheckboxGroupProps,
    defaultProps,
    statusTypes,
} from './defs';
import '@justeattakeaway/pie-assistive-text';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-checkbox-group';
const assistiveTextId = 'assistive-text';

/**
 * @tagname pie-checkbox-group
 * @slot - Default slot
 * @slot label - The label slot
 * @event {CustomEvent} pie-checkbox-group-disabled - triggered after the disabled state of the checkbox group changes.
 * @event {CustomEvent} pie-checkbox-group-error - triggered after the state of the checkbox group changes to error.
 */
@safeCustomElement('pie-checkbox-group')
export class PieCheckboxGroup extends FormControlMixin(RtlMixin(PieElement)) implements CheckboxGroupProps {
    @state()
    private _hasLabel = false;

    @property({ type: String, reflect: true })
    public name: CheckboxGroupProps['name'];

    @property({ type: String })
    public assistiveText: CheckboxGroupProps['assistiveText'];

    @property({ type: Boolean })
    public isInline = defaultProps.isInline;

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, defaultProps.status)
    public status = defaultProps.status;

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @queryAssignedElements({ selector: 'pie-checkbox' }) _slottedChildren!: Array<HTMLElement>;

    private _handleDisabled () : void {
        this._slottedChildren.forEach((child) => child.dispatchEvent(new CustomEvent(ON_CHECKBOX_GROUP_DISABLED, {
            bubbles: false, composed: false, detail: { disabled: this.disabled },
        })));
    }

    private _handleStatus () : void {
        this._slottedChildren.forEach((child) => {
            child.setAttribute('status', this.status);

            if (this.status === 'error' && this.assistiveText) {
                child.setAttribute('assistiveText', this.assistiveText);
                child.dispatchEvent(new CustomEvent(ON_CHECKBOX_GROUP_ERROR, { bubbles: false, composed: false, detail: { error: true } }));
            }
        });
    }

    /**
     * Function that updates the local `_hasLabel` state in case
     * when the label slot receives content.
     * @private
     */
    private handleSlotChange (e: { target: HTMLSlotElement; }) {
        const childNodes = e.target.assignedNodes({ flatten: true });
        this._hasLabel = childNodes.length > 0;
    }

    /**
     * Template for the label slot to correctly wrap it into a legend element when it has content.
     * Called within the main render function.
     * @private
     */
    private renderWrappedLabel (): TemplateResult {
        return this._hasLabel ? html`<legend><slot name='label' @slotchange=${this.handleSlotChange}></slot></legend>` : html`<slot name='label' @slotchange=${this.handleSlotChange}></slot>`;
    }

    protected updated (_changedProperties: PropertyValues<this>): void {
        if (_changedProperties.has('disabled')) {
            this._handleDisabled();
        }

        if (_changedProperties.has('status')) {
            this._handleStatus();
        }
    }

    render () {
        const {
            name,
            isInline,
            assistiveText,
            status,
            disabled,
        } = this;

        const classes = {
            'c-checkboxGroup': true,
            'c-checkboxGroup--inline': isInline,
        };

        return html`
            <fieldset
                name=${ifDefined(name)}
                ?disabled=${disabled}
                aria-describedby="${ifDefined(assistiveText ? assistiveTextId : undefined)}"
                data-test-id="pie-checkbox-group-fieldset"
                class="${classMap(classes)}"
            >
                ${this.renderWrappedLabel()}
                <slot></slot>
            </fieldset>
            ${assistiveText && html`
                <pie-assistive-text
                    id="${assistiveTextId}"
                    variant=${status}
                    class="c-checkboxGroup-assistiveText"
                    data-test-id="pie-checkbox-group-assistive-text">
                        ${assistiveText}
                </pie-assistive-text>`}
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCheckboxGroup;
    }
}
