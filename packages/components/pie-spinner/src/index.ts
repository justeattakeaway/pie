import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './spinner.scss?inline';
import { SpinnerProps, sizes, variants } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-spinner';

/**
 * @tagname pie-spinner
 */
export class PieSpinner extends LitElement implements SpinnerProps {
    @property()
    @validPropertyValues(componentSelector, sizes, 'm')
    public size: SpinnerProps['size'] = 'm';

    @property()
    @validPropertyValues(componentSelector, variants, 'brand')
    public variant: SpinnerProps['variant'] = 'brand';

    render () {
        const { variant, size } = this;

        return html`
            <div 
                role="presentation" 
                class="c-spinner"
                size="${size}"
                variant="${variant}"></div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieSpinner);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieSpinner;
    }
}
