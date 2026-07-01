import { html, unsafeCSS, nothing } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './icon-with-background.scss?inline';
import {
    variants,
    shapes,
    sizes,
    emphases,
    sizeShapeIconMap,
    defaultProps,
    type IconWithBackgroundProps,
} from './defs';

export * from './defs';

const componentSelector = 'pie-icon-with-background';

/**
 * @tagname pie-icon-with-background
 *
 * The icon element referenced by `iconName` must be imported separately by the consumer,
 * e.g. `import '@justeattakeaway/pie-icons-webc/dist/IconAlertCircle.js'`.
 */
@safeCustomElement(componentSelector)
export class PieIconWithBackground extends PieElement implements IconWithBackgroundProps {
    @property({ type: String, attribute: 'icon-name' })
    public iconName = defaultProps.iconName;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, shapes, defaultProps.shape)
    public shape = defaultProps.shape;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, emphases, defaultProps.emphasis)
    public emphasis = defaultProps.emphasis;

    @property({ type: Boolean })
    public isDisabled = defaultProps.isDisabled;

    render () {
        const {
            iconName, shape, size, variant, emphasis, isDisabled,
        } = this;

        const classes = {
            'c-iconWithBackground': true,
            [`c-iconWithBackground--${size}`]: true,
            [`c-iconWithBackground--${shape}`]: true,
            [`c-iconWithBackground--${variant}`]: true,
            [`c-iconWithBackground--${emphasis}`]: true,
            'c-iconWithBackground--disabled': isDisabled,
        };

        const iconConfig = sizeShapeIconMap[shape][size];

        return html`
            <div
                class="${classMap(classes)}"
                data-test-id="${componentSelector}"
                aria-hidden="true">
                ${iconName
                    ? unsafeHTML(`<${iconName} size="${iconConfig.iconSize}" style="--icon-size-override: ${iconConfig.iconPx}px"></${iconName}>`)
                    : nothing}
            </div>
        `;
    }

    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieIconWithBackground;
    }
}
