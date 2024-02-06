import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './assistive-text.scss?inline';
import { AssistiveTextProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-assistive-text';

/**
 * @tagname pie-assistive-text
 */
export class PieAssistiveText extends LitElement implements AssistiveTextProps {
    render () {
        return html`<h1 data-test-id="pie-assistive-text">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieAssistiveText);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieAssistiveText;
    }
}
