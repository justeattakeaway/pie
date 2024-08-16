import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { defineCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './divider.scss?inline';
import {
    type DividerProps, defaultProps, orientations, variants,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-divider';

/**
 * @tagname pie-divider
 */
export class PieDivider extends LitElement implements DividerProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, orientations, defaultProps.orientation)
    public orientation = defaultProps.orientation;

    render () {
        const { variant, orientation } = this;

        const classes = {
            'c-divider': true,
            'c-divider--inverse': variant === 'inverse',
            'c-divider--vertical': orientation === 'vertical',
        };

        return html`
            <hr
                data-test-id="pie-divider"
                aria-hidden="true"
                class="${classMap(classes)}" />`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieDivider);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDivider;
    }
}
