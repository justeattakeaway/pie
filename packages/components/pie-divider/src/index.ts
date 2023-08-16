import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './divider.scss?inline';
import { DividerProps, variants, orientations } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-divider';

export class PieDivider extends LitElement implements DividerProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, 'default')
    public variant: DividerProps['variant'] = 'default';

    @property({ type: String })
    @validPropertyValues(componentSelector, orientations, 'horizontal')
    public orientation : DividerProps['orientation'] = 'horizontal';

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

customElements.define(componentSelector, PieDivider);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDivider;
    }
}
