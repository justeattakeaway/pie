import {
    LitElement, html, unsafeCSS,
} from 'lit';

import { defineCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { type ThumbnailProps, defaultProps, variants } from './defs';
import styles from './thumbnail.scss?inline';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-thumbnail';

/**
 * @tagname pie-thumbnail
 */
export class PieThumbnail extends LitElement implements ThumbnailProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    public src = defaultProps.src;

    @property({ type: String })
    public alt = defaultProps.alt;

    render () {
        const {
            variant,
            src,
            alt,
        } = this;

        const wrapperClasses = {
            'o-tn': true,
            [`o-tn--${variant}`]: true,
        };

        return html`
            <div data-test-id="pie-thumbnail" class="${classMap(wrapperClasses)}">
                <img data-test-id="pie-thumbnail-img" src="${src}" class="o-tn-img" alt="${alt}">
            </div>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieThumbnail);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieThumbnail;
    }
}
