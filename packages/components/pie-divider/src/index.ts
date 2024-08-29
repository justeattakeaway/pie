import {
    html, LitElement, nothing, unsafeCSS,
} from 'lit';
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

    @property({ type: String })
    public label = defaultProps.label;

    renderDividerLabel () {
        if (!this.label) {
            return nothing;
        }

        return html`
            <hr aria-hidden="true"/>
            <span class="c-divider-label">${this.label}</span>
        `;
    }

    render () {
        const { variant, orientation, label } = this;

        const classes = {
            'c-divider': true,
            'c-divider--inverse': variant === 'inverse',
            'c-divider--vertical': orientation === 'vertical',
        };

        return html`
            <div
                id="${componentSelector}"
                data-test-id="${componentSelector}"
                class="${classMap(classes)}">
                ${this.renderDividerLabel()}
                <hr aria-hidden="true"/>
            </div>`;
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
