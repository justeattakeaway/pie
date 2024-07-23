import {
    LitElement, html, unsafeCSS, nothing,
} from 'lit';
import { property } from 'lit/decorators.js';
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
    public variant: TagProps['variant'] = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size : TagProps['size'] = defaultProps.size;

    @property({ type: Boolean })
    public isStrong = defaultProps.isStrong;

    @property({ type: Boolean })
    public isDimmed = defaultProps.isDimmed;

    render () {
        const {
            variant,
            size,
            isStrong,
            isDimmed,
        } = this;
        return html`
            <div
                class="c-tag"
                variant=${variant}
                size=${size}
                ?isStrong=${isStrong}
                ?isDimmed=${isDimmed}
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
