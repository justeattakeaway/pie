import { LitElement, html, unsafeCSS } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { property } from 'lit/decorators.js';
import styles from './labelledComponent.scss?inline';

export class LabelledComponent extends LitElement {
    static styles = unsafeCSS(styles);

    @property({ type: String })
        label = '';

    // eslint-disable-next-line class-methods-use-this
    render () {
        return html`
            <div>
                <p>${this.label.split(',').map((propKeyValueString) => {
            const [key, value] = propKeyValueString.split(':');

            return html`<b>${key}</b>: ${value}`;
        })}</p>
                <slot></slot>
            </div>`;
    }
}

customElements.define('labelled-component', LabelledComponent);

declare global {
    interface HTMLElementTagNameMap {
        'labelled-component': LabelledComponent;
    }
}
