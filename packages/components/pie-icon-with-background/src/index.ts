import { html, unsafeCSS, nothing, type PropertyValues } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { normalizeIconName } from '@justeattakeaway/pie-icons-configs';
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

// Converts a kebab-case icon element name to PascalCase module name.
// "icon-alert-circle" → "IconAlertCircle", "icon-over-18" → "IconOver18"
function toPascalCase (kebabName: string): string {
    return normalizeIconName(kebabName)
        .split('-')
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join('');
}

/**
 * @tagname pie-icon-with-background
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

    @state()
    private _iconReady = false;

    updated (changedProperties: PropertyValues<this>): void {
        if (changedProperties.has('iconName') && this.iconName) {
            this._iconReady = false;
            this._loadIcon();
        }
    }

    private async _loadIcon (): Promise<void> {
        if (!this.iconName) return;
        const pascalName = toPascalCase(this.iconName);
        await import(`@justeattakeaway/pie-icons-webc/dist/${pascalName}.js`);
        this._iconReady = true;
    }

    render () {
        const {
            shape, size, variant, emphasis, isDisabled,
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
                ${this._iconReady
                    ? unsafeHTML(`<${this.iconName} size="${iconConfig.iconSize}" style="--icon-size-override: ${iconConfig.iconPx}px"></${this.iconName}>`)
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
