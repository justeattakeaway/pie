import { LitElement, html } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { customElement } from 'lit/decorators.js'; // eslint-disable-line import/no-extraneous-dependencies

@customElement('pie-icon-button')
export class PieIconButton extends LitElement {
    // eslint-disable-next-line class-methods-use-this
    render () {
        return html`
            <button>
                I am a pie-icon-button
                <slot></slot>
            </button>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'pie-icon-button': PieIconButton;
    }
}
