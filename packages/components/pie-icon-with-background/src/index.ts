
import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import styles from './icon-with-background.scss?inline';
import { type IconWithBackgroundProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-icon-with-background';

/**
 * @tagname pie-icon-with-background
 * @slot - Default slot for the icon to render inside the component.
 * @csspart body - The main container of the component.
 */
@safeCustomElement('pie-icon-with-background')
export class PieIconWithBackground extends PieElement implements IconWithBackgroundProps {
    render () {
        return html`<div part="body" data-test-id="pie-icon-with-background"><slot></slot></div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieIconWithBackground;
    }
}
