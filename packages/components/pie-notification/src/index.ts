import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './notification.scss?inline';
import { NotificationProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-notification';

/**
 * @tagname pie-notification
 */
export class PieNotification extends LitElement implements NotificationProps {
    render () {
        return html`<h1 data-test-id="pie-notification">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieNotification);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieNotification;
    }
}
