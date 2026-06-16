import { html, unsafeCSS, type PropertyValues } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './listbox.scss?inline';
import { type ListboxProps, type SelectionMode } from './defs';
import { ListboxNavigationController } from './listbox-navigation-controller';
import type { PieListboxOption } from './pie-listbox-option';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-listbox';

/**
 * @tagname pie-listbox
 * @slot - The default slot for `pie-listbox-option` elements.
 * @event {Event} change - fired when an option's selected state changes.
 */
@safeCustomElement('pie-listbox')
export class PieListbox extends RtlMixin(PieElement) implements ListboxProps {
    @property({ type: String, attribute: 'selection-mode', reflect: true })
        selectionMode: SelectionMode = 'single';

    @queryAssignedElements({ selector: 'pie-listbox-option' })
        options!: PieListboxOption[];

    private navController = new ListboxNavigationController(this, () => this.options);

    // Roles + aria are applied in connectedCallback (and synced on updates)
    // so SSR output is unaffected — the server sees no aria attributes.
    connectedCallback () {
        super.connectedCallback();
        this.setAttribute('role', 'listbox');
        this.setAttribute('tabindex', '0');
        this.applyMultiselectable();
    }

    updated (changedProperties: PropertyValues<this>) {
        if (changedProperties.has('selectionMode')) {
            this.applyMultiselectable();
        }
    }

    private applyMultiselectable () {
        if (this.selectionMode === 'multiple') {
            this.setAttribute('aria-multiselectable', 'true');
        } else {
            this.removeAttribute('aria-multiselectable');
        }
    }

    handleSlotChange () {
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
        [componentSelector]: PieListbox;
    }
}
