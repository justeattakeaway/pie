import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';

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
    render () {
        return html`
            <div>
                <h1 data-test-id="pie-tabs">Hello world!</h1>
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
