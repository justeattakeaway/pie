import { html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './tab-panel.scss?inline';
import { type TabPanelProps } from './defs';

const componentSelector = 'pie-tab-panel';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-tab-panel;
 */
@safeCustomElement('pie-tab-panel')
export class PieTabPanel extends RtlMixin(PieElement) implements TabPanelProps {
    @property({ type: String })
    public title: TabPanelProps['title'] = '';

    @property({ type: Boolean, reflect: true })
    public selected = false;

    render () {
        return html`<slot></slot>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTabPanel;
    }
}
