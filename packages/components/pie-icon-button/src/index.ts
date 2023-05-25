import { LitElement, html } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { customElement, property } from 'lit/decorators.js'; // eslint-disable-line import/no-extraneous-dependencies
import { ICON_BUTTON_VARIANT } from './defs';
import { validPropertyValues } from './decorators';

// Valid values available to consumers
export { ICON_BUTTON_VARIANT };

@customElement('pie-icon-button')
export class PieIconButton extends LitElement {
    @property()
    @validPropertyValues(Object.values(ICON_BUTTON_VARIANT), ICON_BUTTON_VARIANT.PRIMARY)
        variant : ICON_BUTTON_VARIANT = ICON_BUTTON_VARIANT.PRIMARY;

    // eslint-disable-next-line class-methods-use-this
    render () {
        return html`
            <button>
                <slot></slot>
            </button>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'pie-icon-button': PieIconButton;
    }
}
