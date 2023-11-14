import {
    LitElement, html, nothing, unsafeCSS,
} from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './spinner.scss?inline';
import {
    SpinnerProps,
    sizes,
    variants,
    type AriaProps,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-spinner';

/**
 * @tagname pie-spinner
 */
export class PieSpinner extends LitElement implements SpinnerProps {
    @property({ type: Object })
    public aria?: AriaProps;

    @property()
    @validPropertyValues(componentSelector, sizes, 'm')
    public size?: SpinnerProps['size'] = 'm';

    @property()
    @validPropertyValues(componentSelector, variants, 'brand')
    public variant?: SpinnerProps['variant'] = 'brand';

    render () {
        const { variant, size, aria } = this;

        return html`
            <div 
                data-test-id="pie-spinner"
                class="c-spinner"
                role="status"
                aria-live="polite"
                size="${size}"
                variant="${variant}">
                   ${aria?.label ? html`<span class="c-spinner-label">${aria.label}</span>` : nothing}
                </div>`;
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
