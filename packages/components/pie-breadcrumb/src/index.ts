import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';

import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';

import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronLeft.js';

import styles from './breadcrumb.scss?inline';
import {
    type BreadcrumbProps,
    type BreadcrumbItem,
} from './defs';

const componentSelector = 'pie-breadcrumb';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-breadcrumb
 */
export class PieBreadcrumb extends RtlMixin(PieElement) implements BreadcrumbProps {
    @property({ type: Array })
    public items: BreadcrumbProps['items'] = [];

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
            <li
                role="presentation"
                aria-hidden="true"
                class="c-breadcrumb-separator"
                data-test-id="pie-breadcrumb-separator">
                    ${this.isRTL ? html`<icon-chevron-left></icon-chevron-left>` : html`<icon-chevron-right></icon-chevron-right>`}
            </li>
        `;
    }

    /**
     * Renders a navigation link for a breadcrumb item.
     *
     * @param {BreadcrumbItem} item - The breadcrumb item containing label and URL.
     *
     * @private
     */
    private renderNavigationLink (item: BreadcrumbItem) {
        return html`
            <pie-link isStandalone="true" underline="reversed" isBold="true" href="${item.href}">
                ${item.label}
            </pie-link>
        `;
    }

    /**
     * Renders an individual breadcrumb item.
     * Conditionally renders either a clickable link or plain text for the last item.
     *
     * @param {BreadcrumbItem} item - The breadcrumb item to render.
     * @param {boolean} [isLastItem=false] - Indicates if the item is the last in the breadcrumb trail.
     *
     * @private
     */
    private renderItem (item: BreadcrumbItem, isLastItem = false) {
        return html`
            <li role="listitem" data-test-id="pie-breadcrumb-item">
                ${
                    isLastItem
                        ? html`<span
                                    class="c-breadcrumb-list-last-item" 
                                    data-test-id="pie-breadcrumb-last-item">
                                        ${item.label}
                                </span>`
                        : this.renderNavigationLink(item)
                }
            </li>
            ${isLastItem ? nothing : this.renderSeparator()}
        `;
    }

    /**
     * Renders a complete breadcrumb list.
     * Iterates over breadcrumb items to generate the breadcrumb trail.
     *
     * @param {BreadcrumbProps['items']} items - Array of breadcrumb items to render.
     *
     * @private
     */
    private renderBreadcrumbItems (items: BreadcrumbProps['items']) {
        const numberOfSeparators = items.length - 1;

        return html`
            <ol class="c-breadcrumb-list" data-test-id="pie-breadcrumb-list">
                ${items.map((item, index) => this.renderItem(item, numberOfSeparators <= index))}
            </ol>
        `;
    }

    render () {
        const { items } = this;

        const componentWrapperClasses = {
            'c-breadcrumb': true,
        };

        return html`
            <nav
                aria-label="breadcrumb"
                data-test-id="pie-breadcrumb"
                class="${classMap(componentWrapperClasses)}">
                    ${items ? this.renderBreadcrumbItems(items) : nothing}
            </nav>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieBreadcrumb);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieBreadcrumb;
    }
}
