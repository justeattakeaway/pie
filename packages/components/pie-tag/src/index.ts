import {
    LitElement, html, unsafeCSS, nothing,
} from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './tag.scss?inline';
import { TagProps, variants, sizes } from './defs';

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
    @validPropertyValues(componentSelector, variants, 'neutral')
    public variant: TagProps['variant'] = 'neutral';

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, 'large')
    public size : TagProps['size'] = 'large';

    @property({ type: Boolean })
    public isStrong = false;

    render () {
        const {
            variant,
            size,
            isStrong,
        } = this;
        return html`
            <div
                class="c-tag"
                variant=${variant}
                size=${size}
                ?isStrong=${isStrong}
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
