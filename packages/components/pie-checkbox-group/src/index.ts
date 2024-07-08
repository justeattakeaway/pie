import {
    LitElement, html, unsafeCSS, nothing, PropertyValues,
} from 'lit';
import { property } from 'lit/decorators.js';
import {
    RtlMixin, defineCustomElement, FormControlMixin, validPropertyValues,
} from '@justeattakeaway/pie-webc-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './checkbox-group.scss?inline';
import { CheckboxGroupProps, defaultProps, statusTypes } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-checkbox-group';
const assistiveTextIdValue = 'assistive-text';

/**
 * @tagname pie-checkbox-group
 */
export class PieCheckboxGroup extends FormControlMixin(RtlMixin(LitElement)) implements CheckboxGroupProps {
    @property({ type: String })
    public label?: CheckboxGroupProps['label'];

    @property({ type: String })
    public assistiveText?: CheckboxGroupProps['assistiveText'];

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, defaultProps.status)
    public status = defaultProps.status;

    @property({ type: Boolean, reflect: true })
    public disabled?: CheckboxGroupProps['disabled'];

    @property({ type: Object })
    public aria: CheckboxGroupProps['aria'];

    get _slottedChildren () {
        const slot = this.shadowRoot?.querySelector('slot');
        return slot?.assignedElements();
    }

    private _handleDisabled () : void {
        if (this._slottedChildren) {
            [...this._slottedChildren]
            .forEach((child) => child.setAttribute('disabled', 'true'));
        }
    }

    protected firstUpdated (_changedProperties: PropertyValues<this>): void {
        super.firstUpdated(_changedProperties);

        if (this.disabled) {
            this._handleDisabled();
        }
    }

    protected updated (_changedProperties: PropertyValues<this>): void {
        super.updated(_changedProperties);

        if (this.disabled) {
            this._handleDisabled();
        }
    }

    render () {
        const {
            label,
            assistiveText,
            status,
            disabled,
            aria,
        } = this;
        return html`
            <fieldset
                ?disabled=${disabled}
                aria-labelledby=${label ? nothing : aria?.labelledby || nothing}
                aria-label=${aria?.label || nothing}
                aria-invalid=${status === 'error' ? 'true' : 'false'}
                aria-errormessage="${status === 'error' ? assistiveTextIdValue : nothing}"
                aria-describedby=${ifDefined(assistiveText && status !== 'error' ? assistiveTextIdValue : nothing)}
                data-test-id="pie-checkbox-group"
            >
                ${label ? html`<legend>${label}</legend>` : nothing}
                <slot></slot>
            </fieldset>
            ${assistiveText ? html`
                <pie-assistive-text
                    id="${assistiveTextIdValue}"
                    variant=${status}
                    data-test-id="pie-checkbox-group-assistive-text">
                        ${assistiveText}
                </pie-assistive-text>` : nothing}
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieCheckboxGroup);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCheckboxGroup;
    }
}
