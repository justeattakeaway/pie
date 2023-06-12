import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';

import styles from './button.scss?inline';
import type {
    BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT,
} from './defs';

export const buttonSizes: BUTTON_SIZE[] = [
    'xsmall',
    'small-expressive',
    'small-productive',
    'medium',
    'large'
];

export const buttonTypes: BUTTON_TYPE[] = [
    'submit',
    'button',
    'reset',
    'menu'
];

export const buttonVariants: BUTTON_VARIANT[] = [
    'primary',
    'secondary',
    'outline',
    'ghost'
];

// Valid values available to consumers
export { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT };

const componentSelector = 'pie-button';

export class PieButton extends LitElement {
    @property()
    @validPropertyValues(componentSelector, buttonSizes, 'medium')
        size: BUTTON_SIZE = 'medium';

    @property()
    @validPropertyValues(componentSelector, buttonTypes, 'submit')
        type: BUTTON_TYPE = 'submit';

    @property()
    @validPropertyValues(componentSelector, buttonVariants, 'primary')
        variant: BUTTON_VARIANT = 'primary';

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
