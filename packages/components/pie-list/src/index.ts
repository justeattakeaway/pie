import { html, unsafeCSS, type PropertyValues } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './list.scss?inline';
import { type ListProps, type InteractionType } from './defs';
import { ListboxNavigationController } from './listbox-navigation-controller';
import type { PieListItem } from './pie-list-item';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list';

/**
 * @tagname pie-list
 * @slot - The default slot for `pie-list-item` elements.
 * @event {Event} change - fired when an item's selected state changes
 *   (only emitted in `multi-select` and `single-select` modes).
 */
@safeCustomElement('pie-list')
export class PieList extends RtlMixin(PieElement) implements ListProps {
    @property({ type: String, attribute: 'interaction-type', reflect: true })
        interactionType: InteractionType = undefined;

    @queryAssignedElements({ selector: 'pie-list-item' })
        options!: PieListItem[];

    private navController = new ListboxNavigationController(this, () => this.options);

    // Per-type aria/role attributes. `none` is the lookup key for an unset
    // `interactionType`. `itemRole: null` means the list-item gets no role —
    // the slotted control (radio/checkbox/switch) owns its own semantics.
    // `selectable` means the list manages selection via the activedescendant
    // pattern (only for the two listbox modes).
    private static readonly ariaByType = {
        'multi-select': {
            listRole: 'listbox', itemRole: 'option', multiselectable: true, selectable: true,
        },
        'single-select': {
            listRole: 'listbox', itemRole: 'option', multiselectable: false, selectable: true,
        },
        radio: {
            listRole: 'radiogroup', itemRole: null, multiselectable: false, selectable: false,
        },
        checkbox: {
            listRole: 'group', itemRole: null, multiselectable: false, selectable: false,
        },
        switch: {
            listRole: 'group', itemRole: null, multiselectable: false, selectable: false,
        },
        none: {
            listRole: 'list', itemRole: 'listitem', multiselectable: false, selectable: false,
        },
    } as const;

    // Roles + aria are applied in connectedCallback (and synced on updates)
    // so SSR output is unaffected — the server sees no aria attributes.
    connectedCallback () {
        super.connectedCallback();
        this.updateRole();
    }

    updated (changedProperties: PropertyValues<this>) {
        if (changedProperties.has('interactionType')) {
            this.updateRole();
            this.options.forEach((opt) => this.applyOptionAria(opt));
        }
    }

    private get ariaConfig () {
        return PieList.ariaByType[this.interactionType ?? 'none'];
    }

    private updateRole () {
        const cfg = this.ariaConfig;
        this.setAttribute('role', cfg.listRole);
        if (cfg.multiselectable) {
            this.setAttribute('aria-multiselectable', 'true');
        } else {
            this.removeAttribute('aria-multiselectable');
        }
        // The list itself is the single tab stop for the activedescendant
        // pattern. Items are not focusable. For radio/checkbox/switch the
        // slotted controls own their own focus, so the list is not tabbable.
        if (cfg.selectable) {
            this.setAttribute('tabindex', '0');
        } else {
            this.removeAttribute('tabindex');
        }
    }

    private applyOptionAria (opt: PieListItem) {
        const cfg = this.ariaConfig;
        if (cfg.itemRole) {
            opt.setAttribute('role', cfg.itemRole);
        } else {
            opt.removeAttribute('role');
        }
        if (cfg.selectable) {
            opt.setAttribute('aria-selected', opt.selected ? 'true' : 'false');
            opt.setAttribute('aria-disabled', opt.disabled ? 'true' : 'false');
        } else {
            opt.removeAttribute('aria-selected');
            opt.removeAttribute('aria-disabled');
        }
    }

    handleSlotChange () {
        this.options.forEach((opt) => this.applyOptionAria(opt));
        this.navController.syncActiveAttr();
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
