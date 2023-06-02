import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';

import styles from './button.scss?inline';
import {
    ButtonSize, ButtonType, ButtonVariant,
    BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT,
} from './defs';

// Valid values available to consumers
export { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT };

const componentSelector = 'pie-button';

export class PieButton extends LitElement {
    @property()
    @validPropertyValues(componentSelector, Array.values(BUTTON_SIZE), 'medium')
        size: ButtonSize = 'medium';

    @property()
    @validPropertyValues(componentSelector, Array.values(BUTTON_TYPE), 'submit')
        type: ButtonType = 'submit';

    @property()
    @validPropertyValues(componentSelector, Array.values(BUTTON_VARIANT), 'primary')
        variant: ButtonVariant = 'primary';

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
