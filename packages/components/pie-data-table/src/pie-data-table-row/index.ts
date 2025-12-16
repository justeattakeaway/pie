import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './data-table-row.scss?inline';
import {
    type DataTableRowProps,
} from './defs';

export * from './defs';

const componentSelector = 'pie-data-table-row';

/**
 * @tagname pie-data-table-row
 * @slot - Default slot
 */
@safeCustomElement('pie-data-table-row')
export class PieDataTableRow extends PieElement implements DataTableRowProps {
    /**
     * Whether the row is currently selected
     */
    @property({ type: Boolean })
    public isSelected?: DataTableRowProps['isSelected'];

    /**
     * Whether the row is hidden
     */
    @property({ type: Boolean })
    public isHidden?: DataTableRowProps['isHidden'];

    connectedCallback () {
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'row');
        }

        this.addEventListener('mouseenter', this._handleMouseEnter);
        this.addEventListener('mouseleave', this._handleMouseLeave);
        this.style.setProperty('--data-table-background-hover-or-active', 'transparent');

        super.connectedCallback();
    }

    disconnectedCallback () {
        super.disconnectedCallback();

        this.removeEventListener('mouseenter', this._handleMouseEnter);
        this.removeEventListener('mouseleave', this._handleMouseLeave);
    }

    private _handleMouseEnter = () => {
        this.style.setProperty('--data-table-background-hover-or-active', 'var(--dt-color-container-subtle)');
    };

    private _handleMouseLeave = () => {
        this.style.setProperty('--data-table-background-hover-or-active', 'transparent');
    };

    render () {
        const { isHidden } = this;

        if (isHidden) {
            return nothing;
        }

        return html`<slot></slot>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDataTableRow;
    }
}
