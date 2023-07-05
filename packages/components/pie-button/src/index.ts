import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { IconLoading } from '@justeattakeaway/pie-icons-webc';
import styles from './button.scss?inline';
import {
    ButtonProps, sizes, types, variants,
} from './defs';

// Valid values available to consumers
export {
    type ButtonProps,
    sizes,
    types,
    variants,
};
export { IconLoading };

const componentSelector = 'pie-button';

export class PieButton extends LitElement implements ButtonProps {
    @property()
    @validPropertyValues(componentSelector, sizes, 'medium')
    public size: ButtonProps['size'] = 'medium';

    @property()
    @validPropertyValues(componentSelector, types, 'submit')
    public type: ButtonProps['type'] = 'submit';

    @property()
    @validPropertyValues(componentSelector, variants, 'primary')
    public variant: ButtonProps['variant'] = 'primary';

    @property({ type: Boolean })
    public disabled = false;

    @property({ type: Boolean, reflect: true })
    public isLoading = false;

    @property({ type: Boolean })
    public isFullWidth = false;

    private renderLoadingSpinner () {
        return html`<div class="o-btn-spinner"></div>`;
    }

    render () {
        const {
            type, disabled, isFullWidth, variant, size, isLoading: loading,
        } = this;

        return html`
            <button
                class="o-btn"
                type=${type}
                variant=${variant}
                size=${size}
                ?disabled=${disabled}
                ?loading=${loading}
                ?isFullWidth=${isFullWidth}>
                ${loading ? this.renderLoadingSpinner() : html`<slot></slot>`}
            </button>`;
    }

    focus () {
        this.shadowRoot?.querySelector('button')?.focus();
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieButton);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieButton;
    }
}
