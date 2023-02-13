import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';

import styles from './button.scss?inline';
import { validPropertyValues } from './decorators';
import {
    BUTTON_TYPE,
    BUTTON_VARIANT,
    VALID_BUTTON_TYPES,
    VALID_BUTTON_VARIANTS
} from './defs';

// Valid values available to consumers
export { BUTTON_VARIANT, BUTTON_TYPE };

@customElement('pie-button')
export class PieButton extends LitElement {
    /**
     * The Button type to use
     */
    @property()
    @validPropertyValues(VALID_BUTTON_TYPES, BUTTON_TYPE.SUBMIT)
    type : BUTTON_TYPE = BUTTON_TYPE.SUBMIT;

    /**
     * The Button style variant to use
     */
    @property()
    @validPropertyValues(VALID_BUTTON_VARIANTS, BUTTON_VARIANT.PRIMARY)
    variant : BUTTON_VARIANT = BUTTON_VARIANT.PRIMARY;

    render () {
        const { type, variant } = this;

        const classes = classMap({
            ['o-btn']: true,
            [`o-btn--${variant}`]: variant
        });

        return html`
            <button
                class="${classes}"
                type=${type}>
                I'm a PIE button
            </button>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}
