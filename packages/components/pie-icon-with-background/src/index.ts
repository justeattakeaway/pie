import { html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    safeCustomElement,
    validPropertyValues,
} from '@justeattakeaway/pie-webc-core';
import styles from './icon-with-background.scss?inline';
import {
    shapes,
    sizes,
    variants,
    defaultProps,
    type IconWithBackgroundProps,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-icon-with-background';

/**
 * @tagname pie-icon-with-background
 * @slot - Default slot for the icon to render inside the component.
 * @csspart body - The main container of the component.
 */
@safeCustomElement('pie-icon-with-background')
export class PieIconWithBackground extends PieElement implements IconWithBackgroundProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, shapes, defaultProps.shape)
    public shape = defaultProps.shape;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: Boolean })
    public isStrong = defaultProps.isStrong;

    @property({ type: Boolean })
    public isDisabled = defaultProps.isDisabled;

    render () {
        const classes = {
            'c-iconWithBackground': true,
            [`c-iconWithBackground--${this.shape}`]: true,
            [`c-iconWithBackground--${this.size}`]: true,
            [`c-iconWithBackground--${this.variant}`]: true,
            'c-iconWithBackground--strong': this.isStrong,
            'is-disabled': this.isDisabled,
        };

        return html`<div part="body" class="${classMap(classes)}" data-test-id="pie-icon-with-background"><slot></slot></div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieIconWithBackground;
    }
}
