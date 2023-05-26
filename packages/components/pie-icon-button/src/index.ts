import { LitElement, html } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies

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

customElements.define('pie-icon-button', PieIconButton);

declare global {
    interface HTMLElementTagNameMap {
        'pie-icon-button': PieIconButton;
    }
}
