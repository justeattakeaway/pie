import { html, unsafeCSS, type PropertyValues } from 'lit';
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

    // Roles + aria are applied in connectedCallback (and synced on updates)
    // so SSR output is unaffected — the server sees no aria attributes.
    connectedCallback () {
        super.connectedCallback();
        this.updateRole();
    }

    updated (changedProperties: PropertyValues<this>) {
        if (changedProperties.has('selectionType')) {
            this.updateRole();
            this.options.forEach((opt) => this.applyOptionAria(opt));
        }
    }

    private updateRole () {
        this.setAttribute('role', this.selectionType ? 'listbox' : 'list');
        if (this.selectionType === 'multi') {
            this.setAttribute('aria-multiselectable', 'true');
        } else {
            this.removeAttribute('aria-multiselectable');
        }
    }

    private applyOptionAria (opt: PieListItem) {
        if (this.selectionType) {
            opt.setAttribute('role', 'option');
            opt.setAttribute('aria-selected', opt.selected ? 'true' : 'false');
        } else {
            opt.setAttribute('role', 'listitem');
            opt.removeAttribute('aria-selected');
        }
    }

    handleSlotChange () {
        this.options.forEach((opt) => this.applyOptionAria(opt));
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
