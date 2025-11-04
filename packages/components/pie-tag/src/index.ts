import {
    html, unsafeCSS,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './tag.scss?inline';
import {
    variants,
    sizes,
    defaultProps,
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
    public isDimmed = defaultProps.isDimmed;

    @property({ type: Boolean, attribute: 'is-icon-only' })
    public isIconOnly = defaultProps.isIconOnly;

    @property({ type: Boolean, attribute: 'has-leading-icon' })
    public hasLeadingIcon = defaultProps.hasLeadingIcon;

    render () {
        const {
            isDimmed,
            isStrong,
            size,
            variant,
            isIconOnly,
            hasLeadingIcon,
        } = this;

        const classes = {
            'c-tag': true,
            [`c-tag--${size}`]: true,
            [`c-tag--${variant}`]: true,
            'c-tag--is-dimmed': isDimmed,
            'c-tag--strong': isStrong,
            'c-tag--icon-only': isIconOnly,
            'c-tag--has-icon': hasLeadingIcon,
        };

        return html`
        <div
            part="body"
            class="${classMap(classes)}"
            data-test-id="pie-tag">
            <slot part="icon" name="icon"></slot>
            <slot></slot>
        </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTag;
    }
}
