import {
    LitElement, html, unsafeCSS, nothing,
} from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
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
    public isDimmed = defaultProps.isDimmed;

    render () {
        const {
            isDimmed,
            isStrong,
            size,
            variant,
        } = this;

        const classes = {
            'c-tag': true,
            [`c-tag--${size}`]: true,
            [`c-tag--${variant}`]: true,
            'c-tag--dimmed': isDimmed,
            'c-tag--strong': isStrong,
        };

        return html`
            <div
                class="${classMap(classes)}"
                data-test-id="pie-tag"
            >
                ${size === 'large' ? html`<slot name="icon"></slot>` : nothing}
                <slot></slot>
            </div>`;
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
