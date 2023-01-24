import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('pie-button')
export class PieButton extends LitElement {
    @property() actionType = 'submit';

    static styles = [css`
      button {
        background-color: var(--dt-color-interactive-brand);
        border-radius: var(--dt-radius-rounded-e);
        border: none;
        color: var(--dt-color-content-interactive-primary);
        font-size: 20px; // A future ticket will pull in a helper for font size & line height.
        line-height: 1.4;
        font-family: var(--dt-font-interactive-m-family);
        font-weight: var(--dt-font-interactive-m-weight);
        padding-right: var(--dt-spacing-e);
        padding-left: var(--dt-spacing-e);
        min-height: 48px;
      }
    `];

    render () {
        return html`
        <button type=${this.actionType}>
            I'm a PIE button
        </button>`;
    }
}
