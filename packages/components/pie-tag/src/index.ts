import {
    LitElement, html, unsafeCSS, nothing,
} from 'lit';
import { property } from 'lit/decorators.js';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './tag.scss?inline';
import {
    type TagProps, variants, sizes, defaultProps,
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

    render () {
        const {
            disabled,
            isInteractive,
            isStrong,
            size,
            variant,
        } = this;

        const classes = {
            'c-tag': true,
            [`c-tag--${size}`]: true,
            [`c-tag--${variant}`]: true,
            'c-tag--disabled': disabled,
            'c-tag--strong': isStrong,
            'c-tag--interactive': isInteractive,
        };

        if (isInteractive) {
            return this.renderButtonTag(classes);
        }

        return this.renderTag(classes);
    }

    private renderIconSlot () {
        if (this.size !== 'large') return nothing;

        return html`<slot name="icon"></slot>`;
    }

    private renderTag (classes: ClassInfo) {
        return html`
        <div
            class="${classMap(classes)}"
            data-test-id="pie-tag">
            ${this.renderIconSlot()}
            <slot></slot>
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

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieTag);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTag;
    }
}
