import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { RtlMixin, safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';

import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronLeft.js';

import styles from './breadcrumb.scss?inline';
import {
    type BreadcrumbProps,
    type BreadcrumbItem,
    variants,
    defaultProps,
} from './defs';

const componentSelector = 'pie-breadcrumb';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-breadcrumb
 */
@safeCustomElement('pie-breadcrumb')
export class PieBreadcrumb extends RtlMixin(PieElement) implements BreadcrumbProps {
    @property({ type: Array })
    public items: BreadcrumbProps['items'] = [];

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: Boolean })
    public isCompact = defaultProps.isCompact;

    /**
     * Renders a separator icon between breadcrumb items.
     * The icon direction depends on the RTL (Right-to-Left) setting.
     *
     * @returns {TemplateResult} HTML template for the separator icon.
     *
     * @private
     */
    private renderSeparator () {
        const separatorVariant = this.variant === 'scrim' ? 'c-breadcrumb-separator--scrim' : 'c-breadcrumb-separator';

        return html`
            <li
                role="presentation"
                aria-hidden="true"
                class="${separatorVariant}"
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
        const linkVariant = this.variant === 'scrim' ? 'inverse' : 'default';

        return html`
            <pie-link variant="${linkVariant}" isStandalone underline="reversed" isBold href="${item.href}">
                ${item.label}
            </pie-link>
        `;
    }

    /**
     * Renders the last breadcrumb item.
     * It has 250px of max-width. If the label reaches this width the text truncates.
     *
     * @param {BreadcrumbItem} item - The breadcrumb item containing label and URL.
     *
     * @private
     */
    private renderLastItem (item: BreadcrumbItem) {
        const wrapperClasses = {
            'c-breadcrumb-list-last-item': true,
            'c-breadcrumb-list-last-item--scrim': this.variant === 'scrim',
        };

        return html`<span class="${classMap(wrapperClasses)}">${item.label}</span>`;
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
                        ? this.renderLastItem(item)
                        : this.renderNavigationLink(item)
                }
            </li>
            ${isLastItem ? nothing : this.renderSeparator()}
        `;
    }

    /**
     * Renders breadcrumb items using the default variant style.
     *
     * @param {BreadcrumbProps['items']} items - Breadcrumb items to render.
     *
     * @private
     */
    private renderDefaultBreadcrumb (items: BreadcrumbProps['items']) {
        const numberOfSeparators = items.length - 1;

        return html`${items.map((item, index) => this.renderItem(item, numberOfSeparators <= index))}`;
    }

    /**
     * Renders a separator icon specifically for the back variant.
     * The icon direction depends on the RTL (Right-to-Left) setting.
     *
     * @private
     */
    private renderCompactBreadcrumbSeparator () {
        const separatorVariant = this.variant === 'scrim' ? 'c-breadcrumb-separator--scrim' : 'c-breadcrumb-separator';

        return html`
            <li role="presentation" aria-hidden="true" class="${separatorVariant}" data-test-id="pie-breadcrumb-separator">
                ${this.isRTL ? html`<icon-chevron-right></icon-chevron-right>` : html`<icon-chevron-left></icon-chevron-left>`}
            </li>
        `;
    }

    /**
     * Renders breadcrumb items using the back variant style, displaying only the last item with a preceding separator.
     *
     * @param {BreadcrumbProps['items']} items - Breadcrumb items to render.
     *
     * @private
     */
    private renderCompactBreadcrumb (items: BreadcrumbProps['items']) {
        const lastItem = items[items.length - 1];

        return html`
            ${this.renderCompactBreadcrumbSeparator()}
            <li role="listitem" data-test-id="pie-breadcrumb-item">
                ${this.renderNavigationLink(lastItem)}
            </li>
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
    private renderBreadcrumbItems (items: BreadcrumbProps['items'], isCompact: BreadcrumbProps['isCompact']) {
        return html`
            <ol class="c-breadcrumb-list" data-test-id="pie-breadcrumb-list">
                ${isCompact ? this.renderCompactBreadcrumb(items) : this.renderDefaultBreadcrumb(items)}
            </ol>
        `;
    }

    render () {
        const { items, variant, isCompact } = this;

        const componentWrapperClasses = {
            'c-breadcrumb': true,
            'c-breadcrumb--scrim': variant === 'scrim',
        };

        return html`
            <nav
                aria-label="breadcrumb"
                data-test-id="pie-breadcrumb"
                class="${classMap(componentWrapperClasses)}">
                ${items ? this.renderBreadcrumbItems(items, isCompact) : nothing}
            </nav>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieBreadcrumb;
    }
}
