import {
    html,
    unsafeCSS,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
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
import defaultPlaceholder from './default-placeholder.svg?inline';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-thumbnail';

/**
 * @tagname pie-thumbnail
 */
@safeCustomElement('pie-thumbnail')
export class PieThumbnail extends PieElement implements ThumbnailProps {
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
    private _hasError = false;

    /**
     * Determines if the default placeholder should be displayed.
     */
    private get _isDefaultPlaceholderVisible (): boolean {
        const { _hasError, placeholder, hideDefaultPlaceholder } = this;
        return _hasError && !placeholder?.src && !hideDefaultPlaceholder;
    }

    /**
     * Returns the appropriate image props based on the following order:
     * 1. If there is no error, return the provided image props.
     * 2. If there is an error and a custom placeholder is provided, return the placeholder props.
     * 3. If there is an error and no custom placeholder is provided, return the component default placeholder.
     * 4. Otherwise, fall back to the provided src (resulting in a broken image).
     */
    private get _controlledSrc (): string {
        if (!this._hasError) return this.src;
        if (this.placeholder?.src) return this.placeholder.src;
        if (!this.hideDefaultPlaceholder) return defaultPlaceholder;
        return this.src;
    }

    private get _controlledAlt (): string {
        if (!this._hasError) return this.alt;
        if (this.placeholder?.src) return this.placeholder.alt ?? '';
        if (!this.hideDefaultPlaceholder) return '';
        return this.alt;
    }

    /**
     * Assigns CSS variables based on the size prop.
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
     * Handles the image error event.
     */
    private _handleImageError (): void {
        this._hasError = true;
    }

    /**
     * Checks the image load status and triggers error handling if needed.
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
            _controlledSrc,
            _controlledAlt,
            disabled,
            hasPadding,
            _isDefaultPlaceholderVisible,
            backgroundColor,
            aspectRatio,
        } = this;

        const wrapperClasses = {
            'c-thumbnail': true,
            [`c-thumbnail--${variant}`]: true,
            [`c-thumbnail--${aspectRatio}`]: true,
            [backgroundColorClassNames[backgroundColor]]: true,
            'is-disabled': disabled,
            'c-thumbnail--padding': hasPadding,
            'c-thumbnail--defaultPlaceholder': _isDefaultPlaceholderVisible,
        };

        const sizeStyles = this._generateSizeStyles();

        return html`
            <div data-test-id="pie-thumbnail"
             class="${classMap(wrapperClasses)}"
             style="${sizeStyles}">
                <img
                    data-test-id="pie-thumbnail-img"
                    src="${_controlledSrc}"
                    alt="${_controlledAlt}"
                    class="c-thumbnail-img"
                    @error="${this._handleImageError}"
                />
            </div>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieThumbnail;
    }
}
