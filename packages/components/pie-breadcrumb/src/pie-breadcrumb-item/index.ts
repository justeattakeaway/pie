import { html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';

import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronLeft.js';

import styles from '../breadcrumb.scss?inline';
import { type BreadcrumbItemProps } from './defs';

const componentSelector = 'pie-breadcrumb-item';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-breadcrumb-item
 */
@safeCustomElement('pie-breadcrumb-item')
export class PieBreadcrumbItem extends RtlMixin(PieElement) implements BreadcrumbItemProps {
    @property({ type: String, reflect: true })
    public href = '';

    /**
     * Renders a separator icon between breadcrumb items.
     * The icon direction depends on the RTL (Right-to-Left) setting.
     *
     * @returns {TemplateResult} HTML template for the separator icon.
     *
     * @private
     */
    private renderSeparator () {
        return html`
                <span
                    class="c-breadcrumb-separator"
                    role="presentation"
                    aria-hidden="true"
                    data-test-id="pie-breadcrumb-separator">
                        ${this.isRTL ? html`<icon-chevron-left></icon-chevron-left>` : html`<icon-chevron-right></icon-chevron-right>`}
                </span>
            `;
    }

    /**
     * Renders a navigation link for a breadcrumb item.
     *
     * @private
     */
    private renderNavigationLink () {
        return html`
            <pie-link isStandalone underline="reversed" href="${this.href}">
                <span><slot></slot></span>
            </pie-link>
        `;
    }

    render () {
        return html`
            <li role="listitem" data-test-id="pie-breadcrumb-item" class="c-breadcrumb-item">
                ${this.renderNavigationLink()}
                ${this.renderSeparator()}
            </li>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieBreadcrumbItem;
    }
}
