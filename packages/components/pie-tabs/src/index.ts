import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './tabs.scss?inline';
import { type TabsProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-tabs';

/**
 * @tagname pie-tabs
 */
@safeCustomElement('pie-tabs')
export class PieTabs extends RtlMixin(PieElement) implements TabsProps {
    render () {
        return html`<h1 data-test-id="pie-tabs">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTabs;
    }
}
