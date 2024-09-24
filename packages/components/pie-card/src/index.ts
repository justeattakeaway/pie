import {
    html, LitElement, unsafeCSS, nothing, TemplateResult, type PropertyValues,
} from 'lit';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './card.scss?inline';
import {
    variants,
    tags,
    CardProps,
    defaultProps,
    paddingValues,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-card';

/**
 * @tagname pie-card
 */
export class PieCard extends LitElement implements CardProps {
    @property()
    @validPropertyValues(componentSelector, tags, defaultProps.tag)
    public tag: CardProps['tag'] = defaultProps.tag;

    @property()
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant: CardProps['variant'] = defaultProps.variant;

    @property({ type: String, reflect: true })
    public href?: string;

    @property({ type: String, reflect: true })
    public target?: string;

    @property({ type: String, reflect: true })
    public rel?: string;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: Object })
    public aria?: CardProps['aria'];

    @property({ type: Boolean })
    public isDraggable = defaultProps.isDraggable;

    @property({ type: String })
    @validPropertyValues(componentSelector, paddingValues, undefined)
    public padding?: CardProps['padding'];

    /**
     * Renders the card as an anchor element.
     *
     * @private
     */
    private renderAnchor (classes: ClassInfo): TemplateResult {
        const paddingCSS = this.generatePaddingCSS();

        return html`
            <a
                class="${classMap(classes)}"
                data-test-id="pie-card"
                ?disabled=${this.disabled}
                href=${this.href || ''}
                target=${this.target || nothing}
                rel=${this.rel || nothing}
                role="link"
                aria-label=${this.aria?.label || nothing}
                aria-disabled=${this.disabled ? 'true' : 'false'}
                style=${ifDefined(paddingCSS)}>
                    <slot></slot>
                </div>
            </a>`;
    }

    /**
     * Generates padding for the component based on `padding` values passed
     * by the consumer.
     *
     *
     * Example: 'a' or 'a, b'
     * Single values i.e `'a'` applies to all sides and `'a, b'` applies to: top & bottom, left & right
     *
     * @private
     */
    private generatePaddingCSS (): string {
        const { padding } = this;
        let paddingCSS = '';

        // Check if padding is empty (null, undefined, or an empty string)
        if (!padding) {
            return '';
        }

        const paddingArray = padding
            .split(',')
            .map((item) => item.trim())
            .filter((value) => /^[a-g]$/.test(value));

        if (paddingArray.length > 0 && paddingArray.length <= 2) {
            paddingCSS += `var(--dt-spacing-${paddingArray[0]})`;

            if (paddingArray.length > 1) {
                paddingCSS += ` var(--dt-spacing-${paddingArray[1]})`;
            }
        }

        if (!paddingCSS) {
            return '';
        }

        return `padding: ${paddingCSS}`;
    }

    /**
     * Handles the slot change event and applies/removes opacity to images based on the `disabled` state.
     *
     * @private
     */
    private handleSlotChange () {
        this.updateImagesOpacity();
    }

    /**
     * Updates opacity of all images (slotted and non-slotted) based on the `disabled` property.
     */
    private updateImagesOpacity () {
        // Handle slotted images
        const slot = this.shadowRoot?.querySelector('slot');

        if (slot) {
            const slottedElements = slot.assignedElements({ flatten: true });

            slottedElements.forEach((element) => {
                const images = element.querySelectorAll('img');
                this.applyOpacityToImages(images);
            });
        }

        // Handle non-slotted direct content images
        const directImages = this.querySelectorAll('img');
        this.applyOpacityToImages(directImages);
    }

    /**
     * Applies or removes opacity from the given images based on the `disabled` property.
     *
     * @param {NodeListOf<HTMLImageElement>} images - The images to apply opacity to.
     */
    private applyOpacityToImages (images: NodeListOf<HTMLImageElement>) {
        images.forEach((img) => {
            if (this.disabled) {
                img.style.opacity = '50%';
            } else {
                img.style.opacity = '';
            }
        });
    }

    /**
     * Observes changes in the `disabled` property and triggers the update of images' opacity.
     *
     * @param changedProperties
     */
    updated(changedProperties: PropertyValues<this>): void {
        if (changedProperties.has('disabled' as any)) {
            this.updateImagesOpacity(); // Re-apply styles when disabled state changes
        }
    }

    render () {
        const {
            variant,
            disabled,
            tag,
            aria,
            isDraggable,
        } = this;

        const paddingCSS = this.generatePaddingCSS();

        const classes = {
            'c-card': true,
            [`c-card--${variant}`]: true,
            'c-card--draggable': isDraggable,
            'c-card--disabled': disabled,
        };

        if (tag === 'a') return this.renderAnchor(classes);

        return html`
                <div
                    class="${classMap(classes)}"
                    data-test-id="pie-card"
                    role="button"
                    tabindex="0"
                    aria-label=${aria?.label || nothing}
                    aria-disabled=${disabled ? 'true' : 'false'}
                    style=${paddingCSS || ''}>
                        <slot @slotchange=${this.handleSlotChange}></slot>
                    </div>
                </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieCard);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCard;
    }
}
