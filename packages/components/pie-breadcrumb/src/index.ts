import { html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { defineCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';

import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';

import styles from './breadcrumb.scss?inline';
import {
    type BreadcrumbProps,
    variants,
    defaultProps,
} from './defs';

const componentSelector = 'pie-breadcrumb';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-breadcrumb
 */
export class PieBreadcrumb extends PieElement implements BreadcrumbProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: Boolean, reflect: true })
    public isCompact = defaultProps.isCompact;

    render () {
        const { variant, isCompact } = this;

        const classes = {
            'c-breadcrumb': true,
            [`c-breadcrumb--${variant}`]: true,
            'c-breadcrumb--compact': isCompact,
        };

        return html`
            <nav
                aria-label="breadcrumb"
                data-test-id="pie-breadcrumb"
                class="${classMap(classes)}">
                    <ol class="c-breadcrumb-list" data-test-id="pie-breadcrumb-list">
                        <slot @slotchange="${this._handleSlotChange}"></slot>
                    </ol>
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
