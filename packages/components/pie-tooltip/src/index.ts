
import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import styles from './tooltip.scss?inline';
import { type TooltipProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-tooltip';

/**
 * @tagname pie-tooltip
 */
@safeCustomElement('pie-tooltip')
export class PieTooltip extends PieElement implements TooltipProps {
    render () {
        return html`<h1 data-test-id="pie-tooltip">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTooltip;
    }
}
