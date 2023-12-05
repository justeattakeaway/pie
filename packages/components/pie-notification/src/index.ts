import { LitElement, html, unsafeCSS } from 'lit';

import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import '@justeattakeaway/pie-icons-webc/IconClose';

import styles from './notification.scss?inline';
import { NotificationProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-notification';
const componentClass = 'c-notification';

/**
 * @tagname pie-notification
 */
export class PieNotification extends LitElement implements NotificationProps {
    @property({ type: Boolean })
    public isOpen = false;

    render () {
        return html`
        <div data-test-id="${componentSelector}" class="${componentClass}">
            <section>
                <header class="${componentClass}-header">
                    <!-- Icon -->
                    <h2>Title</h2>
                </header>
                <article>
                    Content
                    <!-- <slot></slot> -->
                </article>
            </section>
            
            <footer class="${componentClass}-footer">
                <!-- Action -->
                Footer
            </footer>
        </div>`;
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
