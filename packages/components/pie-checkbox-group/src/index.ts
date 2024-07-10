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
const assistiveTextId = 'assistive-text';

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

    private _handleError () : void {
        if (this._slottedChildren) {
            [...this._slottedChildren]
            .forEach((child) => child.setAttribute('status', 'error'));
        }
    }

    protected updated (_changedProperties: PropertyValues<this>): void {
        super.updated(_changedProperties);

        if (this.disabled) {
            this._handleDisabled();
        }

        if (this.status === 'error') {
            this._handleError();
        }
    }

    render () {
        const {
            label,
            assistiveText,
            status,
            disabled,
        } = this;
        return html`
            <fieldset
                ?disabled=${disabled}
                aria-invalid=${status === 'error' ? 'true' : 'false'}
                aria-errormessage=${ifDefined(status === 'error' ? assistiveTextId : undefined)}
                aria-describedby="${ifDefined(assistiveText && status !== 'error' ? assistiveTextId : undefined)}"
                data-test-id="pie-checkbox-group"
            >
                ${label ? html`<legend>${label}</legend>` : nothing}
                <slot></slot>
            </fieldset>
            ${assistiveText ? html`
                <pie-assistive-text
                    id="${assistiveTextId}"
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
