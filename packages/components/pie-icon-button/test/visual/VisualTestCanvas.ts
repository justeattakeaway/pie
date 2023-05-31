import { LitElement, html } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { customElement, property } from 'lit/decorators.js'; // eslint-disable-line import/no-extraneous-dependencies

@customElement('visual-test-canvas')
export class VisualTestCanvas extends LitElement {
    @property({ type: String })
        label = '';

    // eslint-disable-next-line class-methods-use-this
    render () {
        return html`
            <div>
                <h2>${this.label}</h2>
                <slot></slot>
            </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'visual-test-canvas': VisualTestCanvas;
    }
}
