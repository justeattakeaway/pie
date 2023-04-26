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
    @property()
    @validPropertyValues(Object.values(BUTTON_SIZE), BUTTON_SIZE.MEDIUM)
    size : BUTTON_SIZE = BUTTON_SIZE.MEDIUM;

    @property()
    @validPropertyValues(Object.values(BUTTON_TYPE), BUTTON_TYPE.SUBMIT)
    type : BUTTON_TYPE = BUTTON_TYPE.SUBMIT;

    @property()
    @validPropertyValues(Object.values(BUTTON_VARIANT), BUTTON_VARIANT.PRIMARY)
    variant : BUTTON_VARIANT = BUTTON_VARIANT.PRIMARY;

    @property({type: Boolean, reflect: true})
    disabled : boolean = false;

    render () {
        const { size, type, variant, disabled } = this;

        const classes = {
            'o-btn': true,
            [`o-btn--${size}`]: size,
            [`o-btn--${variant}`]: variant,
            'o-btn--is-disabled': disabled,
        };

        const raiseWCEvent = () => {
            const event = new CustomEvent('CustomEvent', { detail: 'WC event dispatched' })
            console.info('WC event dispatched')
            this.dispatchEvent(event)
        }

        return html`
            <button
                class=${classMap(classes)}
                type=${type}
                ?disabled=${disabled}
                @click="${raiseWCEvent}">
                <slot></slot>
            </button>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        'pie-button': PieButton;
    }
}
