import {
    LitElement, html, unsafeCSS,
} from 'lit';

import { defineCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import {
    type ThumbnailProps, defaultProps, variants, backgroundColors,
} from './defs';
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

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: Boolean })
    public hasPadding = defaultProps.hasPadding;

    @property({ type: String })
    @validPropertyValues(componentSelector, backgroundColors, defaultProps.backgroundColor)
    public backgroundColor = defaultProps.backgroundColor;

    @property({ type: Object })
    public placeholder: ThumbnailProps['placeholder'];

    private handleImageError = () => {
        if (this.placeholder?.src) this.src = this.placeholder.src as string;
        if (this.placeholder?.alt) this.alt = this.placeholder.alt as string;
    };

    render () {
        const {
            variant,
            src,
            alt,
            disabled,
            hasPadding,
            backgroundColor,
            handleImageError,
        } = this;

        const wrapperClasses = {
            'c-thumbnail': true,
            [`c-thumbnail--${variant}`]: true,
            [`c-thumbnail--background-${backgroundColor}`]: true,
            'c-thumbnail--disabled': disabled,
            'c-thumbnail--padding': hasPadding,
        };

        return html`
            <div data-test-id="pie-thumbnail" class="${classMap(wrapperClasses)}">
                <img data-test-id="pie-thumbnail-img" src="${src}" class="c-thumbnail-img" alt="${alt}" @error="${handleImageError}">
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
