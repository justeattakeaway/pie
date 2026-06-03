
import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import styles from './lite-radio.scss?inline';
import { defaultProps, type LiteRadioProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-lite-radio';

/**
 * @tagname pie-lite-radio
 */
@safeCustomElement('pie-lite-radio')
export class PieLiteRadio extends PieElement implements LiteRadioProps {
    @property({ type: Boolean, reflect: true })
    public isError = defaultProps.isError;

    render () {
        return html`<slot></slot>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieLiteRadio;
    }
}
