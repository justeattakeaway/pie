import { html, unsafeCSS, type PropertyValues } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './list.scss?inline';
import { type ListProps, type ListVariant } from './defs';
import type { PieListItem } from './pie-list-item';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list';

/**
 * @tagname pie-list
 * @slot - The default slot for `pie-list-item` elements.
 */
@safeCustomElement('pie-list')
export class PieList extends RtlMixin(PieElement) implements ListProps {
    @property({ type: String, reflect: true })
        variant: ListVariant = 'static';

    @queryAssignedElements({ selector: 'pie-list-item' })
        items!: PieListItem[];

    // Per-variant aria roles. `itemRole: null` means the list-item gets no
    // role — the slotted control (radio/checkbox/switch) owns its own
    // semantics.
    private static readonly ariaByVariant = {
        static: { listRole: 'list', itemRole: 'listitem' },
        radio: { listRole: 'radiogroup', itemRole: null },
        checkbox: { listRole: 'group', itemRole: null },
        switch: { listRole: 'group', itemRole: null },
    } as const;

    // Roles + aria are applied in connectedCallback (and synced on updates)
    // so SSR output is unaffected — the server sees no aria attributes.
    connectedCallback () {
        super.connectedCallback();
        this.updateRole();
    }

    updated (changedProperties: PropertyValues<this>) {
        if (changedProperties.has('variant')) {
            this.updateRole();
            this.items.forEach((item) => this.applyItemRole(item));
        }
    }

    private get ariaConfig () {
        return PieList.ariaByVariant[this.variant ?? 'static'];
    }

    private updateRole () {
        this.setAttribute('role', this.ariaConfig.listRole);
    }

    private applyItemRole (item: PieListItem) {
        const { itemRole } = this.ariaConfig;
        if (itemRole) {
            item.setAttribute('role', itemRole);
        } else {
            item.removeAttribute('role');
        }
    }

    handleSlotChange () {
        this.items.forEach((item) => this.applyItemRole(item));
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
