import {
    LitElement, html, unsafeCSS, nothing, type PropertyValues,
} from 'lit';
import { property } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
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
 */
export class PieTag extends LitElement implements TagProps {
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

    private isIconOnly = false;

    updated (changedProperties: PropertyValues<this>) {
        if (changedProperties.has('size')) this.checkIfIsIconOnly();
    }

    private checkIfIsIconOnly () {
        // The size must be large
        const isLargeSize = this.size === 'large';

        // The default slot must be empty
        const defaultSlotText = this.textContent?.trim();
        const isDefaultSlotEmpty = defaultSlotText === '';

        // The icon slot must have some content
        const iconSlot = this.shadowRoot?.querySelector('slot[name="icon"]') as HTMLSlotElement | null;

        if (isLargeSize && isDefaultSlotEmpty && iconSlot) {
            const iconSlotNodes = iconSlot.assignedNodes({ flatten: true });

            // The icon slot content must be an icon
            if (iconSlotNodes && iconSlotNodes.length === 1) {
                const firstNode = (iconSlotNodes[0] as Element);
                const isIcon = firstNode.tagName.startsWith('ICON-');

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

        return html`<slot name="icon" @slotchange=${this.handleSlotChange}></slot>`;
    }

    private renderTag (classes: ClassInfo) {
        return html`
        <div
            class="${classMap(classes)}"
            data-test-id="pie-tag">
            ${this.renderIconSlot()}
            <slot @slotchange=${this.handleSlotChange}></slot>
        </div>`;
    }

    private renderButtonTag (classes: ClassInfo) {
        return html`
        <button
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
            'c-tag--disabled': disabled,
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

defineCustomElement(componentSelector, PieTag);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTag;
    }
}
