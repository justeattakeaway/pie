import { LitElement, html } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { customElement, property } from 'lit/decorators.js'; // eslint-disable-line import/no-extraneous-dependencies
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { ICON_BUTTON_VARIANT } from './defs';

// Valid values available to consumers
export { ICON_BUTTON_VARIANT };

const componentSelector = 'pie-icon-button';

@customElement(componentSelector)
export class PieIconButton extends LitElement {
    @property()
    @validPropertyValues(componentSelector, Object.values(ICON_BUTTON_VARIANT), ICON_BUTTON_VARIANT.PRIMARY)
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
        [componentSelector]: PieIconButton;
    }
}
