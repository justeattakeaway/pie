
import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    RtlMixin,
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import styles from './accordion.scss?inline';
import { type AccordionProps } from './defs';
import '@justeattakeaway/pie-divider';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronUp.js';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-accordion';

/**
 * @tagname pie-accordion
 */
@safeCustomElement('pie-accordion')
export class PieAccordion extends RtlMixin(PieElement) implements AccordionProps {
    render () {
        return html`<h1 data-test-id="pie-accordion">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieAccordion;
    }
}
