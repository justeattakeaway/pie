import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';

import styles from './tabs.scss?inline';
import {
    type TabsProps,
    variants,
    defaultProps,
    orientations,
} from './defs';

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

    private _selectedTab = 0;

    firstUpdated () {
        this.updateSelectedPanel();
    }

    private handleTabClick (index: number) {
        this._selectedTab = index;
        this.updateSelectedPanel();
        this.requestUpdate();
    }

    private updateSelectedPanel () {
        const panels = this.getPanels();

        panels.forEach((panel, index) => {
            panel.selected = index === this._selectedTab;
        });
    }

    private getPanels () {
        return Array.from(this.querySelectorAll('pie-tab-panel'));
    }

    render () {
        const classes = {
            'c-tabs': true,
            'c-tabs-variant--contained': this.variant === 'contained',
            [`c-tabs-orientation--${this.orientation}`]: true,
        };

        const panels = this.getPanels();

        return html`
            <div
                aria-label="tabs"
                data-test-id="pie-tabs"
                class="${classMap(classes)}"
            >
                ${panels.length > 0 && (html`
                    <nav class="c-tabs-navigation">
                        <ul role="tablist">
                            ${panels.map((panel, index) => html`
                                <li
                                    @click=${() => this.handleTabClick(index)}
                                    role="tab"
                                    tabindex="${index}"
                                    class="${classMap({ selected: this._selectedTab === index })}"
                                >
                                    <span>${panel.title}</span>
                                </li>
                            `)}
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
