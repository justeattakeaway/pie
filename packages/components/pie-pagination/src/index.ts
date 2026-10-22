
import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    RtlMixin,
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import styles from './pagination.scss?inline';
import { type PaginationProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-pagination';

/**
 * @tagname pie-pagination
 */
@safeCustomElement('pie-pagination')
export class PiePagination extends RtlMixin(PieElement) implements PaginationProps {
    render () {
        return html`<h1 data-test-id="pie-pagination">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PiePagination;
    }
}
