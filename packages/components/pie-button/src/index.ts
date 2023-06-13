import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';

import styles from './button.scss?inline';
import type { ButtonSize, ButtonTypes, ButtonVariants } from '@/defs';
import { buttonSizes, buttonTypes, buttonVariants } from '@/defs';

// Valid values available to consumers
export {
    ButtonSize, ButtonTypes, ButtonVariants,
    buttonSizes, buttonTypes, buttonVariants,
};

const componentSelector = 'pie-button';

export class PieButton extends LitElement {
    @property()
    @validPropertyValues(componentSelector, buttonSizes, 'medium')
        size: ButtonSize = 'medium';

    @property()
    @validPropertyValues(componentSelector, buttonTypes, 'submit')
        type: ButtonTypes = 'submit';

    @property()
    @validPropertyValues(componentSelector, buttonVariants, 'primary')
        variant: ButtonVariants = 'primary';

    @property({ type: Boolean })
        disabled = false;

    @property({ type: Boolean })
        isFullWidth = false;

    render () {
        const {
            type, disabled, isFullWidth, variant, size,
        } = this;

        return html`
            <button
                class="o-btn"
                type=${type}
                variant=${variant}
                size=${size}
                ?disabled=${disabled}
                ?isFullWidth=${isFullWidth}>
                <slot></slot>
            </button>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define('pie-button', PieButton);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieButton;
    }
}
