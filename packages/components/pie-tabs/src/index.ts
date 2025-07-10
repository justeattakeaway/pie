import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import styles from './tabs.scss?inline';
import {
    type TabsProps,
    variants,
    defaultProps,
    orientations,
} from './defs';
import { type TabPanelProps } from './pie-tab-panel/defs';

const componentSelector = 'pie-tabs';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-tabs
 */
@safeCustomElement(componentSelector)
export class PieTabs extends PieElement implements TabsProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, orientations, defaultProps.orientation)
    public orientation = defaultProps.orientation;

    @queryAssignedElements() _pieTabPanelSlots!: Array<HTMLElement & TabPanelProps>;

    private _selectedTab = 0;

    firstUpdated (): void {
        this.requestUpdate();
    }

    updated (): void {
        this.updateSelectedPanel();
    }

    /**
     * Handles the click event on a tab.
     * This method updates the selected tab index and updates the displayed panel accordingly.
     *
     * @param index The index of the tab that was clicked.
     *
     * @private
     */
    private handleTabClick (index: number) {
        this._selectedTab = index;
        this.updateSelectedPanel();
        this.requestUpdate();
    }

    /**
     * Updates the selected state of each tab panel based on the currently selected tab index.
     * This method iterates through all tab panels and sets the `selected` property accordingly.
     *
     * @private
     */
    private updateSelectedPanel () {
        this._pieTabPanelSlots.forEach((panel, index) => {
            panel.selected = index === this._selectedTab;
        });
    }

    render () {
        const classes = {
            'c-tabs': true,
            'c-tabs-variant--contained': this.variant === 'contained',
            [`c-tabs-orientation--${this.orientation}`]: true,
        };

        return html`
            <div
                data-test-id="pie-tabs"
                class="${classMap(classes)}"
            >
                ${this._pieTabPanelSlots && this._pieTabPanelSlots.length > 0 && (html`
                    <nav class="c-tabs-navigation">
                        <ul role="tablist">
                            ${
                            /* eslint-disable indent */
                            repeat(
                                this._pieTabPanelSlots,
                                (element, index) => html`
                                    <li
                                        @click=${() => {
                                            if (element.disabled) {
                                                return;
                                            }
                                            this.handleTabClick(index);
                                        }}
                                        role="tab"
                                        tabindex="${index}"
                                        class="${classMap({
                                            selected: this._selectedTab === index,
                                            [`c-tabs-navigation-item--${this.orientation}`]: true,
                                            [`c-tabs-navigation-item-variant--${this.variant}`]: true,
                                            disabled: !!element.disabled,
                                        })}"
                                    >
                                        <span>${element.title}</span>
                                    </li>
                                `,
                            /* eslint-enable indent */
                            )}
                        </ul>
                    </nav>
                `)}
                <div class="c-tabs-panels">
                    <slot></slot>
                </div>
            </div>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTabs;
    }
}
