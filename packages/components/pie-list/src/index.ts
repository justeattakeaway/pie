import { html, unsafeCSS, isServer } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './list.scss?inline';
import { type ListProps } from './defs';
import { RovingTabindexMixin } from './mixins/roving-tabindex-mixin.ts';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list';

/**
 * @tagname pie-list
 *
 * PIE List component for displaying collections of related items.
 */
export class PieList extends RovingTabindexMixin(RtlMixin(PieElement)) implements ListProps {
    @property({ type: String, reflect: true })
    public variant: 'default' | 'compact' = 'default';

    @property({ type: Boolean, reflect: true })
    public interactive = false;

    @property({ type: Boolean, reflect: true })
    public dividers = false;

    @property({ type: Number })
    public optimizeThreshold = 20;

    // The label used by assistive technologies to identify this list
    @property({ type: String })
    public ariaLabel: string | null = null;

    // ID of an element that labels this list
    @property({ type: String })
    public ariaLabelledby: string | null = null;

    @state()
    private _slottedItems: Element[] = [];

    @state()
    private _useRepeat = false;

    @state()
    private _eventDelegationSetup = false;

    // Unique ID for maintaining consistent accessibility references
    private _listId = `pie-list-${Math.round(Math.random() * 1000000)}`;

    connectedCallback () {
        super.connectedCallback();

        this.setAttribute('role', 'none');

        this.rovingTabindexEnabled = this.interactive;
        this.rovingTabindexSelector = 'li, pie-list-item';

        // Only set up event listeners in browser environments
        if (!isServer) {
            this._handleSlotChange = this._handleSlotChange.bind(this);
        }

        // Set up event delegation once
        if (!isServer && !this._eventDelegationSetup) {
            this._setupEventDelegation();
            this._eventDelegationSetup = true;
        }
    }

    disconnectedCallback () {
        super.disconnectedCallback();

        // Skip cleanup in SSR environment
        if (isServer) return;

        // Remove event listeners
        const slot = this.shadowRoot?.querySelector('slot');
        if (slot) {
            slot.removeEventListener('slotchange', this._handleSlotChange);
        }
    }

    firstUpdated () {
        // Skip slot handling in SSR environment
        if (isServer) return;

        const slot = this.shadowRoot?.querySelector('slot');
        if (slot) {
            slot.addEventListener('slotchange', this._handleSlotChange);
            // Initial slot content check
            this._handleSlotChange();
        }
    }

    updated (changedProperties: Map<string, never>) {
        super.updated(changedProperties);

        // Sync roving tabindex with interactive property
        if (changedProperties.has('interactive')) {
            this.rovingTabindexEnabled = this.interactive;
        }
    }

    private _handleSlotChange () {
        // This method should never run in SSR, but add a guard just in case
        if (isServer) return;

        const slot = this.shadowRoot?.querySelector('slot');
        if (!slot) return;

        const assignedNodes = slot.assignedNodes();
        const items: Element[] = [];

        // Filter for actual element nodes
        assignedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const item = node as Element;

                // For regular elements (not pie-list-item custom elements), set role="listitem"
                if (item.tagName.toLowerCase() !== 'pie-list-item') {
                    item.setAttribute('role', 'listitem');
                }

                items.push(item);
            }
        });

        // If we have more items than the threshold, use the repeat directive
        this._useRepeat = items.length >= this.optimizeThreshold;
        this._slottedItems = items;

        // Force a re-render to apply the repeat directive optimization
        this.requestUpdate();
    }

    private _setupEventDelegation () {
        // Handle clicks for all list items with one listener
        this.addEventListener('click', (e: Event) => {
            if (!this.interactive) return;

            const target = e.target as HTMLElement;
            const listItem = target.closest('li, pie-list-item');

            if (listItem && !listItem.hasAttribute('disabled')) {
                // Dispatch a custom event with the clicked item
                this.dispatchEvent(new CustomEvent('pie-list-item-click', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        item: listItem,
                        originalEvent: e,
                    },
                }));
            }
        });
    }

    render () {
        const classes = {
            'c-list': true,
            'c-list--compact': this.variant === 'compact',
            'c-list--interactive': this.interactive,
            'c-list--dividers': this.dividers,
            'c-list--rtl': this.isRTL,
        };

        // In SSR, always use the simple slot approach
        // In browser, use repeat directive for many items, regular slot for fewer items
        const content = isServer || !this._useRepeat || this._slottedItems.length === 0
            ? html`<slot @slotchange=${!isServer ? this._handleSlotChange : undefined}></slot>`
            : repeat(
                this._slottedItems,
                (item, index) => item.getAttribute('key') || index,
                (item) => item,
            );

        return html`
            <ul
                class=${classMap(classes)}
                id="${this._listId}"
                aria-label=${ifDefined(this.ariaLabel)}
                aria-labelledby=${ifDefined(this.ariaLabelledby)}
                role="list"
                aria-orientation="vertical"
                data-test-id="pie-list">
                ${content}
            </ul>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

// Utility function for conditional attributes
const ifDefined = (value: string | null | undefined) => (value === null || value === undefined ? undefined : value);

defineCustomElement(componentSelector, PieList);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieList;
    }
}
