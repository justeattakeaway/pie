import {
    LitElement,
    html,
    nothing,
    unsafeCSS,
} from 'lit';
import {
    RtlMixin,
    defineCustomElement,
    validPropertyValues,
} from '@justeattakeaway/pie-webc-core';
import {
    property,
    query,
    queryAssignedElements,
    state,
} from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronDown.js';

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
 */
export class PieSelect extends RtlMixin(LitElement) implements SelectProps {
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

    @query('select')
    public focusTarget!: HTMLElement;

    @queryAssignedElements({ slot: 'leadingIcon', flatten: true })
    private _leadingIconSlot!: Array<HTMLElement>;

    @state()
    private _hasLeadingIcon = false;

    private _handleDefaultSlotChange () {
        this.requestUpdate();
    }

    private _handleLeadingIconSlotchange () {
        this._hasLeadingIcon = Boolean(this._leadingIconSlot.length);
    }

    private renderItems () {
        return html`
          ${[...this.children]
            .filter((el) => el.matches('pie-select-option'))
            .map(({ textContent }) => html`<option>${textContent}</option>`)}
        `;
    }

    private renderAssistiveText () {
        if (!this.assistiveText) {
            return nothing;
        }

        return html`
            <pie-assistive-text
                id="${assistiveTextIdValue}"
                variant=${ifDefined(this.status)}
                data-test-id="pie-textarea-assistive-text">
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
                        name=${ifDefined(name)}
                        ?disabled=${disabled}
                        aria-describedby=${ifDefined(assistiveText ? assistiveTextIdValue : undefined)}
                        aria-invalid=${status === 'error' ? 'true' : 'false'}
                        aria-errormessage="${ifDefined(status === 'error' ? assistiveTextIdValue : undefined)}">
                        ${this.renderItems()}
                    </select>
                    <icon-chevron-down size='s' class='c-select-trailingIcon'></icon-chevron-down>
                    <slot @slotchange=${this._handleDefaultSlotChange} style="display: none"></slot>
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
