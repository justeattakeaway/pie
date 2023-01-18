import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('pie-button')
export class PieButton extends LitElement {
    render () {
        return html`<button>I'm a PIE button</button>`;
    }
}
