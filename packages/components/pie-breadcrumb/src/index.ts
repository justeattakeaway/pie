import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { RtlMixin, defineCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';

import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';

import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronLeft.js';

import styles from './breadcrumb.scss?inline';
import {
    type BreadcrumbProps,
    type BreadcrumbItem,
    componentSelector,
    componentClass,
    variants,
    defaultProps,
} from './defs';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-breadcrumb
 */
export class PieBreadcrumb extends RtlMixin(PieElement) implements BreadcrumbProps {
    @property({ type: Array })
    public items: BreadcrumbProps['items'] = [];

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: Boolean })
    public scrim = defaultProps.scrim;

    private renderSeparator () {
        return html`
            <li role="presentation" aria-hidden="true" class="c-breadcrumb-separator">
                ${this.isRTL ? html`<icon-chevron-left></icon-chevron-left>` : html`<icon-chevron-right></icon-chevron-right>`}
            </li>
        `;
    }

    private renderNavigationItem (item: BreadcrumbItem, isLastItem = false) {
        const linkVariant = this.scrim ? 'inverse' : 'default';

        return html`
            <li role="listitem">
                ${
                    isLastItem
                        ? html`<span class="c-breadcrumb-list-last-item">${item.label}</span>`
                        : html`
                            <pie-link variant="${linkVariant}" isStandalone="true" underline="reversed" isBold="true" href="${item.href}">
                                ${item.label}
                            </pie-link>
                        `
                }
            </li>
            ${isLastItem ? nothing : this.renderSeparator()}
        `;
    }

    private renderBreadcrumbItems (items: BreadcrumbProps['items']) {
        const numberOfSeparators = items.length - 1;

        return html`
            <ol class="c-breadcrumb-list" data-test-id="${componentSelector}-navigation-list">
                ${items.map((item, index) => this.renderNavigationItem(item, numberOfSeparators <= index))}
            </ol>
        `;
    }

    render () {
        const { items, variant, scrim } = this;

        const componentWrapperClasses = {
            [componentClass]: true,
            [`${componentClass}--${variant}`]: true,
            [`${componentClass}--scrim`]: Boolean(scrim),
        };

        return html`
            <nav
                aria-label="breadcrumb"
                data-test-id="${componentSelector}"
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
