import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './divider.scss?inline';
import {
    type DividerProps, variants, orientations, defaultProps,
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
    public variant: DividerProps['variant'] = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, orientations, defaultProps.orientation)
    public orientation : DividerProps['orientation'] = defaultProps.orientation;

    render () {
        const { variant, orientation } = this;

        return html`
            <hr
                data-test-id="pie-divider"
                aria-hidden="true"
                class="c-divider"
                variant=${variant}
                orientation=${orientation}
            />`;
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
