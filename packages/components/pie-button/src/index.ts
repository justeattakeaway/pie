import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
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

    @property({ type: Boolean, reflect: true })
        disabled = false;

    @property({ type: Boolean, reflect: true })
        isFullWidth = false;

    render () {
        const {
            size, type, variant, disabled, isFullWidth,
        } = this;

        const classes = {
            'o-btn': true,
            [`o-btn--${size}`]: size,
            [`o-btn--${variant}`]: variant,
            'o-btn--is-disabled': disabled,
            'o-btn--fullWidth': isFullWidth,
        };

        return html`
            <button
                class=${classMap(classes)}
                type=${type}
                ?disabled=${disabled}
                ?isFullWidth=${isFullWidth}>
                <slot></slot>
            </button>`;
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
