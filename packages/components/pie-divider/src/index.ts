import {
    html, unsafeCSS,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
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
@safeCustomElement('pie-divider')
export class PieDivider extends PieElement implements DividerProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String, reflect: true })
    @validPropertyValues(componentSelector, orientations, defaultProps.orientation)
    public orientation = defaultProps.orientation;

    @property({ type: String })
    public label = defaultProps.label;

    render () {
        const { variant, orientation, label } = this;

        const showLabel = label.length > 0 && orientation === 'horizontal';
        const classes = {
            'c-divider': true,
            'c-divider--inverse': variant === 'inverse',
            'c-divider--vertical': orientation === 'vertical',
            'c-divider--labelled': showLabel,
        };

        return html`
            ${showLabel ? html`
                <div
                    id="${componentSelector}"
                    data-test-id="${componentSelector}"
                    class="${classMap(classes)}"
                    aria-labelledby="${componentSelector}-label">
                        <hr aria-hidden="true"/>
                        <span id="${componentSelector}-label" class="c-divider-label">${label}</span>
                        <hr aria-hidden="true"/>
                </div>`
            : html`
                <hr id="${componentSelector}"
                    data-test-id="${componentSelector}"
                    class="${classMap(classes)}"
                    aria-hidden="true"
                />`
            }`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDivider;
    }
}
