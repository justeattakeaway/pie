import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('pie-button')
export class PieButton extends LitElement {
    override render () {
        return html`<button>I'm a PIE button</button>`;
    }
}
