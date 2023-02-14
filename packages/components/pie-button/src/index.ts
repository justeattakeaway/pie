import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';

import styles from './button.scss?inline';
import { validPropertyValues } from './decorators';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from './defs';

// Valid values available to consumers
export { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT };

@customElement('pie-button')
export class PieButton extends LitElement {
    /**
     * The size of the button. Available sizes are xsmall, small, medium (default) and large.
     */
    @property()
    @validPropertyValues(Object.values(BUTTON_SIZE), BUTTON_SIZE.MEDIUM)
    size : BUTTON_SIZE = BUTTON_SIZE.MEDIUM;

    /**
     * The Button type. Maps directly to the `type` attribute on the button element.
     * Default value is `submit`.
     */
    @property()
    @validPropertyValues(Object.values(BUTTON_TYPE), BUTTON_TYPE.SUBMIT)
    type : BUTTON_TYPE = BUTTON_TYPE.SUBMIT;

    /**
     * The Button style variant to use. Valid values are primary (default), secondary, outline and ghost.
     */
    @property()
    @validPropertyValues(Object.values(BUTTON_VARIANT), BUTTON_VARIANT.PRIMARY)
    variant : BUTTON_VARIANT = BUTTON_VARIANT.PRIMARY;

    render () {
        const { size, type, variant } = this;

        const classes = {
            'o-btn': true,
            [`o-btn--${size}`]: size,
            [`o-btn--${variant}`]: variant
        };

        return html`
            <button
                class=${classMap(classes)}
                type=${type}>
                I'm a PIE button
            </button>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}
