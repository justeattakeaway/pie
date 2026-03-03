
import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    RtlMixin,
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import styles from './popover.scss?inline';
import { type PopoverProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-popover';

/**
 * @tagname pie-popover
 */
@safeCustomElement('pie-popover')
export class PiePopover extends RtlMixin(PieElement) implements PopoverProps {
    render () {
        return html`<h1 data-test-id="pie-popover">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PiePopover;
    }
}
