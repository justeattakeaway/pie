import { LitElement, html } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { customElement } from 'lit/decorators.js'; // eslint-disable-line import/no-extraneous-dependencies

@customElement('pie-modal')
export class PieModal extends LitElement {
    // eslint-disable-next-line class-methods-use-this
    render () {
        return html`
            <div>This is the Pie Modal
                <slot></slot>
            </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'pie-modal': PieModal;
    }
}
