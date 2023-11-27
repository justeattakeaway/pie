import {
    LitElement, TemplateResult, html, unsafeCSS,
} from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './iconButton.scss?inline';
import {
    IconButtonProps, sizes, variants,
} from './defs';
import '@justeattakeaway/pie-spinner';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-icon-button';

/**
 * @tagname pie-icon-button
 */
export class PieIconButton extends LitElement implements IconButtonProps {
    @property()
    @validPropertyValues(componentSelector, sizes, 'medium')
    public size?: IconButtonProps['size'] = 'medium';

    @property()
    @validPropertyValues(componentSelector, variants, 'primary')
    public variant?: IconButtonProps['variant'] = 'primary';

    @property({ type: Boolean })
    public disabled? = false;

    @property({ type: Boolean })
    public isLoading? = false;

    /**
     * Template for the loading state
     *
     * @private
     */
    private renderSpinner (): TemplateResult {
        const { variant, size, disabled } = this;
        const spinnerSize = size === 'xsmall' ? 'small' : 'medium';
        let spinnerVariant = 'brand';
        if (variant?.includes('secondary')) spinnerVariant = 'secondary';
        if ((variant === 'primary' && !disabled) || variant === 'ghost-inverse') spinnerVariant = 'inverse';

        return html`
                <pie-spinner
                    size="${spinnerSize}"
                    variant="${spinnerVariant}"
                </pie-spinner>`;
    }

    render () {
        const {
            disabled, size, variant, isLoading,
        } = this;

        // The inline SVG is temporary until we have a proper icon integration
        return html`
            <button
                class="o-iconBtn"
                size="${size}"
                variant="${variant}"
                ?disabled="${disabled}"
                ?isLoading="${isLoading}">
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
