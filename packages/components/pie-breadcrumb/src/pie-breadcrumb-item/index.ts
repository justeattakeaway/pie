import { html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';

import styles from '../breadcrumb.scss?inline';
import { type BreadcrumbItemProps } from './defs';

const componentSelector = 'pie-breadcrumb-item';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-breadcrumb-item
 */
@safeCustomElement('pie-breadcrumb-item')
export class PieBreadcrumbItem extends PieElement implements BreadcrumbItemProps {
    @property({ type: String })
    public href: BreadcrumbItemProps['href'];

    @property({ type: String })
    public target: BreadcrumbItemProps['target'];

    /**
     * Renders a separator icon between breadcrumb items.
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
                        <icon-chevron-right></icon-chevron-right>
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
            <pie-link 
                isStandalone 
                underline="reversed"
                href="${ifDefined(this.href)}"
                target="${ifDefined(this.target)}">
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
