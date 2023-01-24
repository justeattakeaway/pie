import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('pie-button')
export class PieButton extends LitElement {
    @property() actionType = 'submit';

    // another fake change
    render () {
        return html`
        <button type=${this.actionType}>
            I'm a PIE button
        </button>`;
    }
}
