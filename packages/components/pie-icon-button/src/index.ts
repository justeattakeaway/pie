import {
    LitElement, html, unsafeCSS,
} from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './iconButton.scss?inline';
import {
    type IconButtonProps, sizes, variants, defaultProps,
} from './defs';
import '@justeattakeaway/pie-spinner';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-icon-button';

/**
 * @tagname pie-icon-button
 */
export class PieIconButton extends LitElement implements IconButtonProps {
    @property({ type: Object })
    public aria?: IconButtonProps['aria'];

    @property()
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size?: IconButtonProps['size'] = defaultProps.size;

    @property()
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant?: IconButtonProps['variant'] = defaultProps.variant;

    @property({ type: Boolean })
    public disabled? = defaultProps.disabled;

    @property({ type: Boolean })
    public isLoading? = defaultProps.isLoading;

    /**
     * Template for the loading state
     *
     * @private
     */
    private renderSpinner () {
        const { variant, size, disabled } = this;
        const spinnerSize = size === 'xsmall' ? 'small' : 'medium';
        let spinnerVariant = 'brand';
        if (variant?.includes('secondary')) spinnerVariant = 'secondary';
        if ((variant === 'primary' && !disabled) || variant === 'ghost-inverse') spinnerVariant = 'inverse';

        return html`
                <pie-spinner
                    size="${spinnerSize}"
                    variant="${spinnerVariant}">
                </pie-spinner>`;
    }

    render () {
        const {
            disabled, size, variant, isLoading, aria,
        } = this;

        // The inline SVG is temporary until we have a proper icon integration
        return html`
            <button
                class="o-iconBtn"
                data-test-id="pie-icon-button"
                size="${size || 'medium'}"
                variant="${variant || 'primary'}"
                ?disabled="${disabled}"
                ?isLoading="${isLoading}"
                aria-label="${ifDefined(aria?.label)}"
                aria-labelledby="${ifDefined(aria?.labelledby)}"
                aria-describedby="${ifDefined(aria?.describedby)}"
                aria-expanded="${ifDefined(aria?.expanded)}"
                aria-controls="${ifDefined(aria?.controls)}">
                ${isLoading ? this.renderSpinner() : html`<slot></slot>`}
            </button>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieIconButton);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieIconButton;
    }
}
