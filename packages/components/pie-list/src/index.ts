import { html, unsafeCSS } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './list.scss?inline';
import { type ListProps, type SelectionType } from './defs';
import { ListboxNavigationController } from './listbox-navigation-controller';
import type { PieListItem } from './pie-list-item';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list';

/**
 * @tagname pie-list
 * @slot - The default slot for `pie-list-item` elements.
 * @event {Event} change - fired when an item's selected state changes.
 */
@safeCustomElement('pie-list')
export class PieList extends RtlMixin(PieElement) implements ListProps {
    @property({ type: String, attribute: 'selection-type', reflect: true })
        selectionType: SelectionType = undefined;

    @queryAssignedElements({ selector: 'pie-list-item' })
        options!: PieListItem[];

    private navController = new ListboxNavigationController(this, () => this.options);

    connectedCallback () {
        super.connectedCallback();
        this.setAttribute('role', 'listbox');
    }

    handleSlotChange () {
        this.navController.resetTabindexState();
    }

    render () {
        return html`<slot @slotchange=${this.handleSlotChange}></slot>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieList;
    }
}
