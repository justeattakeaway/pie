import {
    LitElement, html, unsafeCSS, type PropertyValues,
} from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import {
    RtlMixin,
    defineCustomElement,
    FormControlMixin,
    validPropertyValues,
} from '@justeattakeaway/pie-webc-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './checkbox-group.scss?inline';
import {
    ON_CHECKBOX_GROUP_DISABLED,
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
 * @event {CustomEvent} pie-checkbox-group-disabled - triggered after the disabled state of the checkbox group changes.
 */
export class PieCheckboxGroup extends FormControlMixin(RtlMixin(LitElement)) implements CheckboxGroupProps {
    @property({ type: String })
    public name?: CheckboxGroupProps['name'];

    @property({ type: String })
    public label?: CheckboxGroupProps['label'];

    @property({ type: String })
    public assistiveText?: CheckboxGroupProps['assistiveText'];

    @property({ type: Boolean })
    public isInline = defaultProps.isInline;

    @property({ type: String })
    @validPropertyValues(componentSelector, statusTypes, defaultProps.status)
    public status = defaultProps.status;

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @queryAssignedElements({}) _slottedChildren!: Array<HTMLElement>;

    private _handleDisabled () : void {
        if (this._slottedChildren) {
            this._slottedChildren.forEach((child) => {
                child.dispatchEvent(new CustomEvent(ON_CHECKBOX_GROUP_DISABLED, { bubbles: false, composed: false, detail: { disabled: this.disabled } }));
            });
        }
    }

    private _handleStatus () : void {
        if (this._slottedChildren) {
            this._slottedChildren.forEach((child) => child.setAttribute('status', this.status));
        }
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
            label,
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
                data-test-id="pie-checkbox-group"
                class="${classMap(classes)}"
            >
                ${label && html`<legend class="c-checkboxGroup-label">${label}</legend>`}
                <slot></slot>
            </fieldset>
            ${assistiveText && html`
                <pie-assistive-text
                    id="${assistiveTextId}"
                    variant=${status}
                    data-test-id="pie-checkbox-group-assistive-text">
                        ${assistiveText}
                </pie-assistive-text>`}
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
