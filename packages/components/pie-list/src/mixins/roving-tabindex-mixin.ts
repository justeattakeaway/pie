import type { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { type GenericConstructor } from '@justeattakeaway/pie-webc-core';

/**
 * Interface defining the properties and methods for the RovingTabindex behavior
 */
export interface RovingTabindexInterface {
    /**
     * Whether the component has roving tabindex enabled
     */
    rovingTabindexEnabled: boolean;

    /**
     * CSS selector string used to identify focusable items
     */
    rovingTabindexSelector: string;

    /**
     * Initialize the roving tabindex pattern
     */
    initializeRovingTabindex(): void;

    /**
     * Get the currently focusable items
     */
    getRovingTabindexItems(): Element[];

    /**
     * Update which item has tabindex="0"
     */
    updateRovingTabindex(newIndex: number): void;
}

/**
 * Mixin that adds roving tabindex behavior to a component.
 * This implements the accessibility pattern where only one item in a group is
 * in the tab order (tabindex="0") and others can be reached via arrow keys.
 *
 * @param superClass - The class to extend with roving tabindex functionality
 * @returns A class extending both the provided class and RovingTabindexInterface
 */
export const RovingTabindexMixin =
    <T extends GenericConstructor<LitElement>>(superClass: T) => {
        class RovingTabindexElement extends superClass implements RovingTabindexInterface {
            /**
             * Whether roving tabindex is enabled
             */
            @property({ type: Boolean, attribute: 'roving-tabindex-enabled' })
            public rovingTabindexEnabled = false;

            /**
             * CSS selector to identify focusable items
             * Can be any valid CSS selector string
             */
            @property({ type: String, attribute: 'roving-tabindex-selector' })
            public rovingTabindexSelector = 'li, [role="listitem"]';

            // Track the currently active index
            private _rovingTabindexCurrentIndex = 0;

            // Bound method references to ensure proper 'this' context
            private _boundKeyDownHandler: (e: KeyboardEvent) => void;
            private _boundFocusInHandler: (e: FocusEvent) => void;

            constructor (...args: any[]) {
                super(...args);

                // Bind methods to ensure 'this' context is preserved
                this._boundKeyDownHandler = this._handleKeyDown.bind(this);
                this._boundFocusInHandler = this._handleFocusIn.bind(this);
            }

            connectedCallback () {
                super.connectedCallback();

                if (this.rovingTabindexEnabled) {
                    this._addEventListeners();
                }
            }

            disconnectedCallback () {
                super.disconnectedCallback();

                if (this.rovingTabindexEnabled) {
                    this._removeEventListeners();
                }
            }

            /**
             * When properties change, update event listeners and tabindex state
             */
            updated (changedProperties: Map<string, any>) {
                super.updated(changedProperties);

                if (changedProperties.has('rovingTabindexEnabled')) {
                    if (this.rovingTabindexEnabled) {
                        this._addEventListeners();
                        this.initializeRovingTabindex();
                    } else {
                        this._removeEventListeners();
                        // Remove all tabindex attributes when disabled
                        this.getRovingTabindexItems().forEach((item) => {
                            item.removeAttribute('tabindex');
                        });
                    }
                }

                if (changedProperties.has('rovingTabindexSelector') &&
                    this.rovingTabindexEnabled) {
                    this.initializeRovingTabindex();
                }
            }

            /**
             * Get the currently active index
             */
            public getRovingTabindexActiveIndex (): number {
                return this._rovingTabindexCurrentIndex;
            }

            /**
             * Get all matching focusable items
             */
            public getRovingTabindexItems (): Element[] {
                return Array.from(this.querySelectorAll(this.rovingTabindexSelector))
                    .filter((item) => !item.hasAttribute('disabled') &&
                        !item.hasAttribute('aria-disabled'));
            }

            /**
             * Initialize the roving tabindex pattern
             */
            public initializeRovingTabindex (): void {
                if (!this.rovingTabindexEnabled) return;

                const items = this.getRovingTabindexItems();
                if (items.length === 0) return;

                // Make the item at currentIndex tabbable, or fallback to first item
                const activeIndex = (this._rovingTabindexCurrentIndex < items.length)
                    ? this._rovingTabindexCurrentIndex : 0;

                items.forEach((item, index) => {
                    item.setAttribute('tabindex', index === activeIndex ? '0' : '-1');
                });

                this._rovingTabindexCurrentIndex = activeIndex;
            }

            /**
             * Focus the item at the active index
             */
            public focusActiveItem (): void {
                if (!this.rovingTabindexEnabled) return;

                const items = this.getRovingTabindexItems();
                if (items.length === 0) return;

                if (this._rovingTabindexCurrentIndex >= 0 &&
                    this._rovingTabindexCurrentIndex < items.length) {
                    (items[this._rovingTabindexCurrentIndex] as HTMLElement).focus();
                }
            }

            /**
             * Update which item has tabindex="0"
             */
            public updateRovingTabindex (newIndex: number): void {
                const items = this.getRovingTabindexItems();
                if (items.length === 0) return;

                // Validate index bounds
                const validatedIndex = Math.max(0, Math.min(newIndex, items.length - 1));

                items.forEach((item, index) => {
                    item.setAttribute('tabindex', index === validatedIndex ? '0' : '-1');
                });

                this._rovingTabindexCurrentIndex = newIndex;
            }

            /**
             * Add event listeners for keyboard and focus navigation
             */
            private _addEventListeners (): void {
                this.addEventListener('keydown', this._boundKeyDownHandler);
                this.addEventListener('focusin', this._boundFocusInHandler);
            }

            /**
             * Remove event listeners
             */
            private _removeEventListeners (): void {
                this.removeEventListener('keydown', this._boundKeyDownHandler);
                this.removeEventListener('focusin', this._boundFocusInHandler);
            }

            /**
             * Handle keyboard navigation
             */
            private _handleKeyDown (e: KeyboardEvent): void {
                // Ignore if roving tabindex is disabled
                if (!this.rovingTabindexEnabled) return;

                // Only process if a focusable item received the event
                const target = e.target as HTMLElement;
                const items = this.getRovingTabindexItems();
                let currentIndex = items.indexOf(target as Element);

                // If the target isn't directly one of our items, use our tracked index
                if (currentIndex === -1) {
                    currentIndex = this._rovingTabindexCurrentIndex;
                }

                let newIndex = currentIndex;

                switch (e.key) {
                    case 'ArrowDown':
                    case 'ArrowRight':
                        e.preventDefault();
                        newIndex = Math.min(currentIndex + 1, items.length - 1);
                        break;

                    case 'ArrowUp':
                    case 'ArrowLeft':
                        e.preventDefault();
                        newIndex = Math.max(currentIndex - 1, 0);
                        break;

                    case 'Home':
                        e.preventDefault();
                        newIndex = 0;
                        break;

                    case 'End':
                        e.preventDefault();
                        newIndex = items.length - 1;
                        break;

                    default:
                        return; // Don't handle other keys
                }

                if (newIndex !== currentIndex) {
                    this.updateRovingTabindex(newIndex);
                    (items[newIndex] as HTMLElement).focus();
                }
            }

            /**
             * Handle focus changes to update tabindex values
             */
            private _handleFocusIn (e: FocusEvent): void {
                if (!this.rovingTabindexEnabled) return;

                const target = e.target as HTMLElement;
                const items = this.getRovingTabindexItems();
                const newIndex = items.indexOf(target as Element);

                if (newIndex !== -1) {
                    this.updateRovingTabindex(newIndex);
                }
            }
        }

        return RovingTabindexElement as GenericConstructor<RovingTabindexInterface> & T;
    };
