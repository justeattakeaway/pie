import { html, nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';

import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';

import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronLeft.js';

import styles from './breadcrumb.scss?inline';
import {
    type BreadcrumbProps,
    type BreadcrumbItem,
    componentSelector,
    componentClass,
} from './defs';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-breadcrumb
 */
export class PieBreadcrumb extends RtlMixin(PieElement) implements BreadcrumbProps {
    @property({ type: Array })
    public items: BreadcrumbProps['items'] = [];

    private renderSeparator () {
        return html`<li role="presentation" aria-hidden="true">${this.isRTL ? html`<icon-chevron-left></icon-chevron-left>` : html`<icon-chevron-right></icon-chevron-right>`}</li>`;
    }

    private renderNavigationItem (item: BreadcrumbItem, isLastItem = false) {
        return html`<li><span>${item.label}</span></li>${isLastItem ? this.renderSeparator() : nothing}`;
    }

    private renderBreadcrumbItems (items: BreadcrumbProps['items']) {
        const numberOfSeparators = items.length - 1;

        return html`
            <ol>
                ${items.map((item, index) => this.renderNavigationItem(item, numberOfSeparators > index))}
            </ol>
        `;
    }

    render () {
        const { items } = this;

        const componentWrapperClasses = {
            [componentClass]: true,
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
