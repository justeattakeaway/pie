import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './list-item.scss?inline';
import { type ListItemProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list-item';

/**
 * @tagname pie-list-item
 *
 * PIE List Item component for use within pie-list.
 */
export class PieListItem extends RtlMixin(PieElement) implements ListItemProps {
    /**
     * Whether the item is selected
     */
    @property({ type: Boolean, reflect: true })
    public selected = false;

    /**
     * Whether the item is disabled
     */
    @property({ type: Boolean, reflect: true })
    public disabled = false;

    /**
     * Tab index for keyboard navigation
     */
    @property({ type: Number, reflect: true })
    public tabindex = -1;

    /**
     * Primary text content of the list item
     */
    @property({ type: String })
    public primaryText = '';

    /**
     * Secondary text content displayed below the primary text
     */
    @property({ type: String })
    public secondaryText = '';

    /**
     * Meta text content typically displayed in trailing position
     */
    @property({ type: String })
    public metaText = '';

    /**
     * Type of content in the leading slot
     * Affects styling and accessibility
     */
    @property({ type: String, reflect: true })
    public leadingType: 'none' | 'icon' | 'avatar' | 'payment' | 'thumbnail' = 'none';

    /**
     * Type of content in the trailing slot
     * Affects styling and accessibility
     */
    @property({ type: String, reflect: true })
    public trailingType: 'none' | 'icon' | 'meta' | 'tag' | 'checkbox' | 'radio' | 'switch' = 'none';

    /**
     * Accessibility label
     */
    @property({ type: String })
    public ariaLabel: string | null = null;

    /**
     * ID of element that labels this item
     */
    @property({ type: String })
    public ariaLabelledby: string | null = null;

    /**
     * Value for form integration
     */
    @property({ type: String })
    public value = '';

    /**
     * Tracks if parent list is in compact mode
     */
    @state()
    protected _compact = false;

    /**
     * Tracks if parent list is interactive
     */
    @state()
    protected _interactive = false;

    /**
     * Reference to the internal form control if present
     */
    private _formControl: HTMLElement | null = null;

    /**
     * MutationObserver for parent list
     */
    private _parentObserver: MutationObserver | null = null;

    connectedCallback () {
        super.connectedCallback();

        this.setAttribute('role', 'listitem');

        // Check for parent list properties
        const parentList = this.closest('pie-list');

        if (parentList) {
            // Sync interactive state with parent
            this._interactive = parentList.hasAttribute('interactive');
            // Sync compact state with parent
            this._compact = parentList.getAttribute('variant') === 'compact';

            // Watch for changes in the parent list's attributes
            this._observeParentListChanges(parentList);

            // Ensure the item is focusable if in an interactive list
            if (this._interactive) {
                this.tabindex = 0;
            }
        }
    }

    disconnectedCallback () {
        super.disconnectedCallback();

        // Clean up observer if it exists
        if (this._parentObserver) {
            this._parentObserver.disconnect();
            this._parentObserver = null;
        }
    }

    /**
     * Called after first update and shadowRoot is initialized
     */
    firstUpdated () {
        // Set up mutation observer to detect slot changes
        if (this.shadowRoot) {
            this._setupSlotListeners();
        }

        // Find form controls in initial slots
        this._findFormControl();
    }

    /**
     * Set up an observer to watch for changes in the parent list's attributes
     */
    private _observeParentListChanges (parentList: Element) {
        // Create a MutationObserver to watch for attribute changes on the parent list
        this._parentObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes') {
                    const list = mutation.target as Element;

                    // Update interactive state
                    if (mutation.attributeName === 'interactive') {
                        this._interactive = list.hasAttribute('interactive');
                        this.tabindex = this._interactive && !this.disabled ? 0 : -1;
                    }

                    // Update compact state
                    if (mutation.attributeName === 'variant') {
                        this._compact = list.getAttribute('variant') === 'compact';
                    }

                    // Request update to reflect changes
                    this.requestUpdate();
                }
            });
        });

        // Start observing the parent list element
        this._parentObserver.observe(parentList, { attributes: true });
    }

    /**
     * Handle click events
     */
    private _handleClick (e: MouseEvent) {
        if (this.disabled) {
            e.preventDefault();
            return;
        }

        // Find form control in slots if present
        this._findFormControl();

        // Handle form control clicks
        if (this._formControl && this._interactive) {
            const controlType = this._getControlType();

            // Toggle checkbox state
            if (controlType === 'checkbox' || controlType === 'switch') {
                // Toggle the control
                (this._formControl as HTMLInputElement).click();
                e.preventDefault(); // Prevent double click handling
            } else if (controlType === 'radio') {
                // Select the radio
                (this._formControl as HTMLInputElement).click();
                e.preventDefault(); // Prevent double click handling
            }
        }

        // Dispatch custom event
        if (this._interactive) {
            this.dispatchEvent(new CustomEvent('pie-list-item-click', {
                bubbles: true,
                composed: true,
                detail: {
                    value: this.value,
                    selected: this.selected,
                    originalEvent: e,
                },
            }));
        }
    }

    /**
     * Handle key events for accessibility
     */
    private _handleKeyDown (e: KeyboardEvent) {
        if (this.disabled || !this._interactive) {
            return;
        }

        // Handle Enter or Space to activate the item
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this._handleClick(e as unknown as MouseEvent);
        }
    }

    /**
     * Set up slot change listeners
     */
    private _setupSlotListeners () {
        const slots = this.shadowRoot?.querySelectorAll('slot');
        slots?.forEach((slot) => {
            slot.addEventListener('slotchange', () => {
                this._handleSlotChange(slot as HTMLSlotElement);
            });
        });
    }

    /**
     * Handle changes to slot content
     */
    private _handleSlotChange (slot: HTMLSlotElement) {
        const slotName = slot.name || 'default';
        const elements = slot.assignedElements();

        // Check for form controls in slots
        if (slotName === 'leading' || slotName === 'trailing') {
            this._findFormControl();
        }

        // Validate content types against props
        this._validateSlotContent(slotName, elements);
    }

    /**
     * Find form controls in slots and set up event listeners
     */
    private _findFormControl () {
        // Look for form controls in slots
        const leadingSlot = this.shadowRoot?.querySelector('slot[name="leading"]') as HTMLSlotElement | null;
        const trailingSlot = this.shadowRoot?.querySelector('slot[name="trailing"]') as HTMLSlotElement | null;

        const leadingElements = leadingSlot?.assignedElements() || [];
        const trailingElements = trailingSlot?.assignedElements() || [];

        // Check for form controls
        const formControls = [
            ...leadingElements,
            ...trailingElements
        ].filter((el) => {
            const tagName = el.tagName.toLowerCase();
            return tagName === 'input' ||
                tagName === 'pie-checkbox' ||
                tagName === 'pie-radio' ||
                tagName === 'pie-switch';
        });

        if (formControls.length > 0) {
            this._formControl = formControls[0] as HTMLElement;
            this._syncFormControlState();
        } else {
            this._formControl = null;
        }
    }

    /**
     * Get the type of form control
     */
    private _getControlType (): 'checkbox' | 'radio' | 'switch' | null {
        if (!this._formControl) return null;

        const tagName = this._formControl.tagName.toLowerCase();

        if (tagName === 'pie-checkbox' ||
            (tagName === 'input' && this._formControl.getAttribute('type') === 'checkbox')) {
            return 'checkbox';
        }

        if (tagName === 'pie-radio' ||
            (tagName === 'input' && this._formControl.getAttribute('type') === 'radio')) {
            return 'radio';
        }

        if (tagName === 'pie-switch') {
            return 'switch';
        }

        return null;
    }

    /**
     * Synchronize state with form control
     */
    private _syncFormControlState () {
        if (!this._formControl) return;

        const controlType = this._getControlType();

        if (controlType === 'checkbox' || controlType === 'radio' || controlType === 'switch') {
            // Remove previous listeners if any
            this._formControl.removeEventListener('change', this._handleFormControlChange);

            // Add new listener
            this._formControl.addEventListener('change', this._handleFormControlChange);

            // Initial sync
            this.selected = (this._formControl as HTMLInputElement).checked;
        }
    }

    /**
     * Handle form control change events
     */
    private _handleFormControlChange = () => {
        if (!this._formControl) return;
        const isChecked = (this._formControl as HTMLInputElement).checked;
        this.selected = isChecked;
    };

    /**
     * Validate slot content against declared types
     */
    private _validateSlotContent (slotName: string, elements: Element[]) {
        // Only perform validation in development mode
        if (process.env.NODE_ENV !== 'development') return;

        if (slotName === 'leading' && this.leadingType !== 'none') {
            this._validateContentType(elements, this.leadingType, 'leadingType', slotName);
        }

        if (slotName === 'trailing' && this.trailingType !== 'none') {
            this._validateContentType(elements, this.trailingType, 'trailingType', slotName);
        }
    }

    /**
     * Validate content type matches the declared type
     */
    private _validateContentType (elements: Element[], declaredType: string, propName: string, slotName: string) {
        if (elements.length === 0) return;

        // Map of expected tag names for each type
        const typeTagMap: Record<string, string[]> = {
            icon: ['pie-icon'],
            avatar: ['pie-avatar'],
            thumbnail: ['img'],
            payment: ['pie-payment-icon'],
            checkbox: ['pie-checkbox', 'input[type="checkbox"]'],
            radio: ['pie-radio', 'input[type="radio"]'],
            switch: ['pie-switch'],
        };

        const expectedTags = typeTagMap[declaredType] || [];
        if (expectedTags.length === 0) return;

        // Check if any element matches expected tags
        const hasMatchingElement = elements.some((el) => {
            const tagName = el.tagName.toLowerCase();
            return expectedTags.some((expectedTag) => {
                if (expectedTag.includes('[')) {
                    // Handle attribute selectors
                    const [tag, attr] = expectedTag.split('[');
                    const attrName = attr.replace(']', '').split('=')[0];
                    const attrValue = attr.replace(']', '').split('=')[1]?.replace(/"/g, '');

                    return tagName === tag &&
                        el.hasAttribute(attrName) &&
                        (!attrValue || el.getAttribute(attrName) === attrValue);
                }
                return tagName === expectedTag;
            });
        });

        if (!hasMatchingElement) {
            console.warn(`pie-list-item: Content in ${slotName} slot does not match the declared ${propName}="${declaredType}"`);
        }
    }

    /**
     * Generate CSS classes based on component state
     */
    private _generateClasses () {
        const secondarySlot = this.shadowRoot?.querySelector('slot[name="secondary"]') as HTMLSlotElement | null;
        const hasSecondary = this.secondaryText ||
            this.querySelector('[slot="secondary"]') !== null ||
            (secondarySlot?.assignedNodes().length ?? 0) > 0;

        return {
            'c-list-item': true,
            'c-list-item--selected': this.selected,
            'c-list-item--disabled': this.disabled,
            'c-list-item--compact': this._compact,
            'c-list-item--interactive': this._interactive,
            'c-list-item--with-secondary': !!hasSecondary,
            [`c-list-item--leading-${this.leadingType}`]: this.leadingType !== 'none',
            [`c-list-item--trailing-${this.trailingType}`]: this.trailingType !== 'none',
            'c-list-item--control': ['radio', 'checkbox', 'switch'].includes(this.trailingType),
            // Removed explicit RTL class as it's handled by inheritance and logical properties
        };
    }

    render () {
        const classes = this._generateClasses();

        // Determine what to use for an accessible name
        const accessibleName = this.ariaLabel || undefined;
        const labelledBy = this.ariaLabelledby || undefined;

        // Set correct role based on type
        let role = 'listitem';
        let ariaChecked;

        if (this.trailingType === 'checkbox') {
            role = 'checkbox';
            ariaChecked = this.selected ? 'true' : 'false';
        } else if (this.trailingType === 'radio') {
            role = 'radio';
            ariaChecked = this.selected ? 'true' : 'false';
        }

        return html`
            <li
                class=${classMap(classes)}
                role=${role}
                aria-selected=${this.selected ? 'true' : 'false'}
                aria-disabled=${this.disabled ? 'true' : 'false'}
                aria-checked=${ifDefined(ariaChecked)}
                aria-label=${ifDefined(accessibleName)}
                aria-labelledby=${ifDefined(labelledBy)}
                @click=${this._handleClick}
                @keydown=${this._handleKeyDown}
                tabindex=${this._interactive && !this.disabled ? this.tabindex : '-1'}
                data-test-id="pie-list-item-content">

                <!-- Leading content slot -->
                ${this.leadingType !== 'none' ? html`
                    <div class="c-list-item__leading">
                        <slot name="leading"></slot>
                    </div>
                ` : ''}

                <!-- Main content area -->
                <div class="c-list-item__content">
                    <!-- Primary text -->
                    <div class="c-list-item__primary">
                        ${this.primaryText ? html`<span>${this.primaryText}</span>` : ''}
                        <slot></slot>
                    </div>

                    <!-- Secondary text -->
                    ${this.secondaryText ? html`
                        <p class="c-list-item__secondary">${this.secondaryText}</p>
                    ` : html`
                        <slot name="secondary"></slot>
                    `}
                </div>

                <!-- Trailing content slot -->
                ${this.trailingType !== 'none' || this.metaText ? html`
                    <div class="c-list-item__trailing">
                        ${this.metaText ? html`
                            <span class="c-list-item__meta">${this.metaText}</span>
                        ` : ''}
                        <slot class="c-list-item__meta" name="trailing"></slot>
                    </div>
                ` : ''}
            </li>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

// Utility function for conditional attributes
const ifDefined = (value: string | null | undefined) => (value === null || value === undefined ? undefined : value);

defineCustomElement(componentSelector, PieListItem);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieListItem;
    }
}
