import {
    LitElement,
    html,
    unsafeCSS,
} from 'lit';
import { defineCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';
import { property, query, state } from 'lit/decorators.js';
import {
    type ThumbnailProps,
    defaultProps,
    variants,
    backgroundColors,
    backgroundColorClassNames,
    sizes,
    aspectRatios,
} from './defs';
import styles from './thumbnail.scss?inline';
import defaultPlaceholder from './default-placeholder.svg';

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

    @property({ type: Number })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, aspectRatios, defaultProps.aspectRatio)
    public aspectRatio = defaultProps.aspectRatio;

    @property({ type: String })
    public src = defaultProps.src;

    @property({ type: String })
    public alt = defaultProps.alt;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: Boolean })
    public hasPadding = defaultProps.hasPadding;

    @property({ type: Boolean })
    public hideDefaultPlaceholder = defaultProps.hideDefaultPlaceholder;

    @property({ type: String })
    @validPropertyValues(componentSelector, backgroundColors, defaultProps.backgroundColor)
    public backgroundColor = defaultProps.backgroundColor;

    @property({ type: Object })
    public placeholder: ThumbnailProps['placeholder'] = defaultProps.placeholder;

    @query('img')
    private img!: HTMLImageElement;

    @state()
    private _isDefaultPlaceholder = false;

    /**
     * Assigns the thumbnail size and border radius CSS variables
     * based on the size prop.
     */
    private _generateSizeStyles (): string {
        const { size } = this;
        let borderRadius = '--dt-radius-rounded-c';
        let defaultPlaceholderPadding = '--dt-spacing-d';
        if (size <= 40) {
            borderRadius = '--dt-radius-rounded-a';
            defaultPlaceholderPadding = '--dt-spacing-a';
        } else if (size <= 56) {
            borderRadius = '--dt-radius-rounded-b';
            defaultPlaceholderPadding = '--dt-spacing-b';
        }

        return `
            --thumbnail-size: ${size}px;
            --thumbnail-border-radius: var(${borderRadius});
            --thumbnail-default-placeholder-padding: var(${defaultPlaceholderPadding});
        `;
    }

    /**
     * Handles image load errors by replacing the src and alt props
     * with the component default placeholder or the custom placeholder if provided.
     */
    private _handleImageError () {
        if (this.placeholder?.src) {
            this.setAttribute('src', this.placeholder.src);
            this.setAttribute('alt', this.placeholder.alt ?? '');
            return;
        }

        if (!this.hideDefaultPlaceholder) {
            this.setAttribute('src', defaultPlaceholder);
            this.setAttribute('alt', '');
            this._isDefaultPlaceholder = true;
        }
    }

    /**
     * Detects image load status and applies the placeholder on failure.
     * This is needed as the `onerror` event is not triggered in SSR.
     */
    private _checkImageError () {
        if (this.img) {
            const { complete, naturalHeight } = this.img;
            const hasError = complete && naturalHeight === 0;
            if (hasError) this._handleImageError.call(this);
        }
    }

    protected firstUpdated (): void {
        this._checkImageError();
    }

    render () {
        const {
            variant,
            src,
            alt,
            disabled,
            hasPadding,
            _isDefaultPlaceholder,
            backgroundColor,
            aspectRatio,
        } = this;

        const wrapperClasses = {
            'c-thumbnail': true,
            [`c-thumbnail--${variant}`]: true,
            [`c-thumbnail--${aspectRatio}`]: true,
            [backgroundColorClassNames[backgroundColor]]: true,
            'c-thumbnail--disabled': disabled,
            'c-thumbnail--padding': hasPadding,
            'c-thumbnail--defaultPlaceholder': _isDefaultPlaceholder,
        };

        const sizeStyles = this._generateSizeStyles();

        return html`
            <div data-test-id="pie-thumbnail"
             class="${classMap(wrapperClasses)}"
             style="${sizeStyles}">
                <img
                    data-test-id="pie-thumbnail-img"
                    src="${src}"
                    class="c-thumbnail-img"
                    alt="${alt}"
                    @error="${this._handleImageError}"
                />
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
