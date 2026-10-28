
import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import styles from './dropdown.scss?inline';
import { type DropdownProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-dropdown';

/**
 * @tagname pie-dropdown
 */
@safeCustomElement('pie-dropdown')
export class PieDropdown extends PieElement implements DropdownProps {
    render () {
        return html`<h1 data-test-id="pie-dropdown">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDropdown;
    }
}
