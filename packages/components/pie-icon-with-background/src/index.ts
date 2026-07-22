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

    render () {
        const classes = {
            'c-iconWithBackground': true,
            [`c-iconWithBackground--${this.shape}`]: true,
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
