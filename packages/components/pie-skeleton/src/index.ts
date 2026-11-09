import {
    html, nothing, unsafeCSS,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import styles from './skeleton.scss?inline';
import {
    type SkeletonProps,
    defaultProps,
    variants,
    backgroundColors,
    backgroundColorClassNames,
    aspectRatios,
    borderRadii,
    buttonSizes,
    spacingIdentifiers,
    LINES_MIN,
    LINES_MAX,
    STARS_MIN,
    STARS_MAX,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-skeleton';

// Matches absolute (e.g. `40px`) and percentage (e.g. `50%`) height values.
const LENGTH_REGEX = /^\d*\.?\d+(px|rem|em|%|vh|vw)$/;

/**
 * @tagname pie-skeleton
 */
@safeCustomElement('pie-skeleton')
export class PieSkeleton extends PieElement implements SkeletonProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, backgroundColors, defaultProps.backgroundColor)
    public backgroundColor = defaultProps.backgroundColor;

    @property({ type: String })
    public width: SkeletonProps['width'];

    @property({ type: String })
    public height: SkeletonProps['height'];

    @property({ type: Number })
    public lines = defaultProps.lines;

    @property({ type: Number })
    public stars = defaultProps.stars;

    @property({ type: String })
    @validPropertyValues(componentSelector, borderRadii, defaultProps.borderRadius)
    public borderRadius = defaultProps.borderRadius;

    @property({ type: String })
    @validPropertyValues(componentSelector, aspectRatios, defaultProps.aspectRatio)
    public aspectRatio = defaultProps.aspectRatio;

    @property({ type: Boolean })
    public isResponsive = defaultProps.isResponsive;

    /**
     * Clamps a numeric prop to the given inclusive range. Non-numeric values fall back to the minimum.
     *
     * @private
     */
    private _clamp (value: number, min: number, max: number): number {
        const parsed = Math.trunc(Number(value));
        if (!Number.isFinite(parsed)) return min;
        return Math.min(Math.max(parsed, min), max);
    }

    /**
     * The number of text lines to draw, clamped between 1 and 10.
     *
     * @private
     */
    private get _linesCount (): number {
        return this._clamp(this.lines, LINES_MIN, LINES_MAX);
    }

    /**
     * The number of stars to draw, clamped between 1 and 10.
     *
     * @private
     */
    private get _starsCount (): number {
        return this._clamp(this.stars, STARS_MIN, STARS_MAX);
    }

    /**
     * Whether a `height` value is a `pie-button` size name.
     *
     * @private
     */
    private _isButtonSize (value?: string): value is typeof buttonSizes[number] {
        return !!value && (buttonSizes as readonly string[]).includes(value);
    }

    /**
     * Whether a `height` value is a supported spacing identifier (e.g. `spacing-e`).
     *
     * @private
     */
    private _isSpacingIdentifier (value?: string): boolean {
        return !!value && (spacingIdentifiers as readonly string[]).includes(value);
    }

    /**
     * Resolves the `height` prop to a CSS length for the variants that accept absolute values,
     * percentages or spacing identifiers (box, circle, pill and star).
     * Returns `undefined` when the value is handled elsewhere (a `button-*` size) or isn't valid
     * for the variant, so the CSS default applies.
     *
     * @private
     */
    private _resolveHeight (): string | undefined {
        const { height, variant } = this;

        if (!height) return undefined;

        if (this._isSpacingIdentifier(height)) return `var(--dt-${height})`;

        // For pill variants, the height is defined by a class
        if (variant === 'pill' && this._isButtonSize(height)) return undefined;

        // The star variant ignores percentages: a row of fixed-shape stars has no percentage height.
        if (variant === 'star' && height.endsWith('%')) return undefined;

        return LENGTH_REGEX.test(height) ? height : undefined;
    }

    /**
     * The classes applied to the root element.
     *
     * @private
     */
    private get _rootClasses (): Record<string, boolean> {
        const {
            variant, backgroundColor, borderRadius, aspectRatio, isResponsive, height,
        } = this;

        const classes: Record<string, boolean> = {
            'c-skeleton': true,
            [`c-skeleton--${variant}`]: true,
            [backgroundColorClassNames[backgroundColor]]: true,
        };

        if (variant === 'box') {
            classes[`c-skeleton--${borderRadius}`] = true;
            classes[`c-skeleton--${aspectRatio}`] = true;
        }

        if (variant === 'pill') {
            if (this._isButtonSize(height)) {
                classes[`c-skeleton--${height}`] = true;
            }
            classes['c-skeleton--responsive'] = isResponsive;
        }

        return classes;
    }

    /**
     * The inline styles applied to the root element.
     *
     * @private
     */
    private get _rootStyles (): string {
        const { variant, width } = this;
        const styles: string[] = [];

        // `width` is ignored by the circle and star variants.
        if (width && variant !== 'circle' && variant !== 'star') {
            styles.push(`width: ${width}`);
        }

        if (variant === 'box' || variant === 'circle' || variant === 'pill') {
            const height = this._resolveHeight();
            if (height) styles.push(`height: ${height}`);
        }

        // The star variant sizes each star from a single custom property.
        if (variant === 'star') {
            const size = this._resolveHeight();
            if (size) styles.push(`--skeleton-star-size: ${size}`);
        }

        return styles.join('; ');
    }

    /**
     * Renders the text lines for the `text` variant. When there's more than one line,
     * the last line is drawn at half width (handled in CSS through the `is-last` class).
     *
     * @private
     */
    private _renderTextLines () {
        const lineCount = this._linesCount;
        const { height } = this;

        return Array.from({ length: lineCount }, (_, index) => {
            const isLastLine = lineCount > 1 && index === lineCount - 1;

            const lineClasses = classMap({
                'c-skeleton-line': true,
                'is-last': isLastLine,
                [`c-skeleton-line--${height}`]: !!height,
            });

            return html`<div class="${lineClasses}"></div>`;
        });
    }

    /**
     * Renders the stars for the `star` variant.
     *
     * @private
     */
    private _renderStars () {
        return Array.from({ length: this._starsCount }, () => html`<div class="c-skeleton-star"></div>`);
    }

    /**
     * Renders the shapes drawn inside the root element. The box, circle and pill variants
     * are drawn by the root element itself, so they have no children.
     *
     * @private
     */
    private _renderShapes () {
        if (this.variant === 'text') return this._renderTextLines();
        if (this.variant === 'star') return this._renderStars();
        return nothing;
    }

    render () {
        return html`
            <div
                data-test-id="pie-skeleton"
                class="${classMap(this._rootClasses)}"
                style="${this._rootStyles}">
                ${this._renderShapes()}
            </div>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieSkeleton;
    }
}
