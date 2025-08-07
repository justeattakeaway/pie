import { html, nothing, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';

import styles from './data-table-header.scss?inline';
import {
    type DataTableHeaderProps,
    dataTableHeaderVariant,
    defaultProps,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-data-table-header';

/**
 * @tagname pie-data-table-header
 */
@safeCustomElement('pie-data-table-header')
export class PieDataTableHeader extends PieElement implements DataTableHeaderProps {
    /**
     * Title text for the data table header
     */
    @property({ type: String })
    public title!: DataTableHeaderProps['title'];

    /**
     * Subtitle text for the data table header
     */
    @property({ type: String })
    public subtitle: DataTableHeaderProps['subtitle'];

    /**
     * Emphasis level for the header
     */
    @property({ type: String })
    @validPropertyValues(componentSelector, dataTableHeaderVariant, defaultProps.variant)
    public variant?: typeof defaultProps.variant;

    @state()
    private hasActionButtons = false;

    /**
     * Handles the slot change event to determine if there are action buttons.
     *
     * @param event - The slot change event
     */
    private handleSlotChange (event: Event) {
        const slot = event.target as HTMLSlotElement;
        this.hasActionButtons = slot.assignedElements().length > 0;
    }

    render () {
        const { title, subtitle, variant } = this;

        const classes = {
            'c-data-table-header': true,
            'c-data-table-header--strong': variant === 'strong',
        };

        return html`
            <header class="${classMap(classes)}">
                <div class="c-data-table-header-title-wrapper">
                    ${title ? html`<span class="c-data-table-header-title">${title}</span>` : nothing} 
                    ${subtitle ? html`<span class="c-data-table-header-subtitle">${subtitle}</span>` : nothing}
                </div>
                ${this.hasActionButtons ? html`
                    <div class="c-data-table-action-buttons-wrapper">
                        <slot name="action-button" @slotchange=${this.handleSlotChange}></slot>
                    </div>
                ` : html`
                    <slot name="action-button" @slotchange=${this.handleSlotChange} style="display: none;"></slot>
                `}
            </header>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDataTableHeader;
    }
}
