import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { safeCustomElement, validPropertyValues, DelegatesFocusMixin } from '@justeattakeaway/pie-webc-core';
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
@safeCustomElement('pie-icon-button')
export class PieIconButton extends DelegatesFocusMixin(PieElement) implements IconButtonProps {
    @property({ type: Object })
    public aria: IconButtonProps['aria'];

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: Boolean })
    public isLoading = defaultProps.isLoading;

    /**
     * Template for the loading state
     *
     * @private
     */
    private renderSpinner () {
        const { variant, size, disabled } = this;
        const spinnerSize = size === 'xsmall' ? 'small' : 'medium';
        let spinnerVariant = 'brand';
        if (/secondary|translucent/.test(variant)) spinnerVariant = 'secondary';
        if (variant === 'ghost-secondary-dark') spinnerVariant = 'secondary-dark';
        if (variant === 'ghost-inverse-light') spinnerVariant = 'inverse-light';
        if ((variant.includes('primary') && !disabled) || variant === 'ghost-inverse') spinnerVariant = 'inverse';

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

        const classes = {
            'o-iconBtn': true,
            [`o-iconBtn--${size}`]: true,
            [`o-iconBtn--${variant}`]: true,
            'is-loading': isLoading,
        };

        // The inline SVG is temporary until we have a proper icon integration
        return html`
            <button
                class="${classMap(classes)}"
                data-test-id="pie-icon-button"
                ?disabled="${disabled}"
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

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieIconButton;
    }
}
