import { html, nothing, unsafeCSS } from 'lit';
import { property, state, queryAssignedElements } from 'lit/decorators.js';
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
 * @slot action-button - Slot for action buttons in the header
 */
@safeCustomElement('pie-data-table-header')
export class PieDataTableHeader extends PieElement implements DataTableHeaderProps {
    /**
     * heading text for the data table header
     */
    @property({ type: String })
    public heading!: DataTableHeaderProps['heading'];

    /**
     * Sub heading text for the data table header
     */
    @property({ type: String })
    public subHeading: DataTableHeaderProps['subHeading'];

    /**
     * Emphasis level for the header
     */
    @property({ type: String })
    @validPropertyValues(componentSelector, dataTableHeaderVariant, defaultProps.variant)
    public variant?: typeof defaultProps.variant;

    @queryAssignedElements({ slot: 'action-button', flatten: true })
    private _actionButtonSlot!: Array<HTMLElement>;

    @state()
    private hasActionButtons = false;

    private handleActionButtonSlotChange () {
        this.hasActionButtons = Boolean(this._actionButtonSlot.length);
    }

    /**
     * Handles the slot change event to determine if there are action buttons.
     *
     * @param event - The slot change event
     */
    private handleSlotChange (event: Event) {
        const slot = event.target as HTMLSlotElement;
        this.hasActionButtons = slot.assignedElements().length > 0;
    }

    /**
     * Lit lifecycle: called after the component's DOM has been rendered the first time.
     */
    firstUpdated () {
        this.handleActionButtonSlotChange();
    }

    render () {
        const { heading, subHeading, variant } = this;

        const classes = {
            'c-data-table-header': true,
            'c-data-table-header--strong': variant === 'strong',
        };

        return html`
            <header class="${classMap(classes)}">
                <div class="c-data-table-header-heading-wrapper">
                    ${heading ? html`<span class="c-data-table-header-heading">${heading}</span>` : nothing}

                    ${subHeading ? html`<span class="c-data-table-header-sub-heading">${subHeading}</span>` : nothing}
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
