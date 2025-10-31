import {
    html, unsafeCSS, nothing, type PropertyValues,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './tag.scss?inline';
import {
    variants,
    sizes,
    defaultProps,
    iconPlacements,
    type TagProps,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-tag';

/**
 * @tagname pie-tag
 * @slot icon - The icon slot
 * @slot - Default slot
 * @csspart body - The main container of the tag.
 * @csspart icon - The container for the icon slot.
 */
@safeCustomElement('pie-tag')
export class PieTag extends PieElement implements TagProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: Boolean })
    public isStrong = defaultProps.isStrong;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: Boolean })
    public isInteractive = defaultProps.isInteractive;

    @property({ type: String })
    @validPropertyValues(componentSelector, iconPlacements, defaultProps.iconPlacement)
    public iconPlacement = defaultProps.iconPlacement;

    @queryAssignedElements({ slot: 'icon', flatten: true }) _iconSlotNodes!: Array<HTMLElement>;

    private isIconOnly = false;

    updated (changedProperties: PropertyValues<this>) {
        if (changedProperties.has('size')) this.checkIfIsIconOnly();
    }

    private checkIfIsIconOnly () {
        const { size, textContent, _iconSlotNodes } = this;

        // The instance size must be large
        const isLargeSize = size === 'large';

        // The default slot must be empty
        const defaultSlotText = textContent?.trim();
        const isDefaultSlotEmpty = defaultSlotText === '';

        // The icon slot must have some content
        const iconsSlotNotEmpty = _iconSlotNodes.length > 0;

        if (isLargeSize && isDefaultSlotEmpty && iconsSlotNotEmpty) {
            // The icon slot content must be an icon
            if (_iconSlotNodes && _iconSlotNodes.length === 1) {
                const firstNode = (_iconSlotNodes[0] as Element);
                const tag = firstNode.tagName.toUpperCase();
                const isIcon = tag.startsWith('ICON-') || tag === 'SVG';

                this.isIconOnly = isIcon;
                this.requestUpdate();

                return;
            }
        }

        this.isIconOnly = false;
        this.requestUpdate();
    }

    private handleSlotChange () {
        this.checkIfIsIconOnly();
    }

    private renderIconSlot () {
        if (this.size !== 'large') return nothing;

        return html`<slot part="icon" name="icon" @slotchange=${this.handleSlotChange}></slot>`;
    }

    private renderTag (classes: ClassInfo) {
        return html`
        <div
            part="body"
            class="${classMap(classes)}"
            data-test-id="pie-tag">
            ${this.renderIconSlot()}
            <slot @slotchange=${this.handleSlotChange}></slot>
        </div>`;
    }

    private renderButtonTag (classes: ClassInfo) {
        return html`
        <button
            part="body"
            type="button"
            ?disabled="${this.disabled}"
            class="${classMap(classes)}"
            data-test-id="pie-tag">
            ${this.renderIconSlot()}
            <slot></slot>
        </button>`;
    }

    render () {
        const {
            disabled,
            isInteractive,
            isStrong,
            size,
            variant,
            iconPlacement,
            isIconOnly,
        } = this;

        // isInteractive can only be true when isIconOnly is false
        const _isInteractive = isIconOnly ? false : isInteractive;

        const classes = {
            'c-tag': true,
            [`c-tag--${size}`]: true,
            [`c-tag--${variant}`]: true,
            'is-disabled': disabled,
            'c-tag--strong': isStrong,
            'c-tag--interactive': _isInteractive,
            'c-tag--icon-only': isIconOnly,
            [`c-tag--icon-placement--${iconPlacement}`]: _isInteractive && iconPlacement,
        };

        if (_isInteractive) {
            return this.renderButtonTag(classes);
        }

        return this.renderTag(classes);
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTag;
    }
}
