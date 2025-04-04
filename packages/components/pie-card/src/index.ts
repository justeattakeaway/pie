import {
    html, unsafeCSS, nothing, type TemplateResult, type PropertyValues,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './card.scss?inline';
import {
    variants,
    tags,
    type CardProps,
    defaultProps,
    paddingValues,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-card';

/**
 * @tagname pie-card
 */
@safeCustomElement('pie-card')
export class PieCard extends PieElement implements CardProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, tags, defaultProps.tag)
    public tag = defaultProps.tag;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String, reflect: true })
    public href: CardProps['href'];

    @property({ type: String, reflect: true })
    public target: CardProps['target'];

    @property({ type: String, reflect: true })
    public rel: CardProps['rel'];

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: Object })
    public aria: CardProps['aria'];

    @property({ type: Boolean })
    public isDraggable = defaultProps.isDraggable;

    @property({ type: String })
    @validPropertyValues(componentSelector, paddingValues, undefined)
    public padding: CardProps['padding'];

    @queryAssignedElements({ flatten: true })
    private assignedElements?: HTMLElement[];

    private onClickHandler (event: Event) {
        if (this.disabled) {
            // needed to intercept/prevent click events when the card is disabled.
            event.preventDefault();
            event.stopPropagation();
        }
    }

    /**
     * Renders the card as an anchor element.
     *
     * @private
     */
    private renderAnchor (classes: ClassInfo): TemplateResult {
        const paddingCSS = this.generatePaddingCSS();
        const {
            href, rel, target, disabled, aria,
        } = this;

        return html`
            <a
                class="${classMap(classes)}"
                data-test-id="pie-card-link"
                href=${ifDefined(href && !disabled ? href : undefined)}
                target=${target || nothing}
                rel=${rel || nothing}
                role="link"
                aria-label=${aria?.label || nothing}
                aria-disabled=${disabled ? 'true' : 'false'}
                style=${ifDefined(paddingCSS)}>
                    <slot  @slotchange=${this.handleSlotChange}></slot>
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
     *
     * @private
     */
    private updateImagesOpacity (): void {
        if (this.assignedElements) {
            // Handle images nested inside slotted elements
            this.assignedElements.forEach((element) => {
                const images = element.querySelectorAll('img');
                this.applyOpacityToImages(images);
            });
        }

        // Handle directly slotted images
        const directImages = this.querySelectorAll('img');
        this.applyOpacityToImages(directImages);
    }

    /**
     * Applies or removes opacity from the given images based on the `disabled` property.
     *
     * @param images
     * @private
     */
    private applyOpacityToImages (images: NodeListOf<HTMLImageElement>): void {
        images.forEach((img) => {
            img.style.opacity = this.disabled ? '0.5' : '';
        });
    }

    /**
     * Observes changes in the `disabled` property and triggers the update of images' opacity.
     *
     * @param changedProperties
     */
    updated (changedProperties: PropertyValues<this>) : void {
        if (changedProperties.has('disabled')) {
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
            'is-disabled': disabled,
        };

        if (tag === 'a') return this.renderAnchor(classes);

        return html`
                <div
                    class="${classMap(classes)}"
                    data-test-id="pie-card-button"
                    role="button"
                    tabindex=${disabled ? '-1' : '0'}
                    aria-label=${aria?.label || nothing}
                    aria-disabled=${disabled ? 'true' : 'false'}
                    style=${paddingCSS || ''}
                    @click=${this.onClickHandler}>
                        <slot @slotchange=${this.handleSlotChange}></slot>
                    </div>
                </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCard;
    }
}
