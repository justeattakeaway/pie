import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';

import styles from './tabs.scss?inline';
import { type TabsProps } from './defs';

const componentSelector = 'pie-tabs';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-tabs
 */
@safeCustomElement(componentSelector)
export class PieTabs extends PieElement implements TabsProps {
    private _selectedTab = 0;

    // firstUpdated() {
    //     this.updateSelectedPanel();
    // }

    private handleTabClick (index: number) {
        this._selectedTab = index;
        this.updateSelectedPanel();
        this.requestUpdate();

        // console.log('index', this._selectedTab)
        // this.updateSelectedPanel();
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
        };

        const panels = this.getPanels();

        console.log('panels', panels);

        return html`
            <div
                aria-label="tabs"
                data-test-id="pie-tabs"
                class="${classMap(classes)}"
            >
                ${panels.length > 0 && (html`
                    <nav>
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
            </div> 
             <slot></slot>
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
