import { LitElement, html, unsafeCSS } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { property } from 'lit/decorators.js';
import styles from './labelledComponent.scss?inline';

export class LabelledComponent extends LitElement {
    static styles = unsafeCSS(styles);

    @property({ type: String })
        label = '';

    _renderLabel () {
        return this.label.split(',').map((propKeyValueString) => {
            const [key, value] = propKeyValueString.split(':');

            return html`<p class="c-labelledComponent-label"><b>${key}</b>: <code>${value}</code></p>`;
        });
    }

    // eslint-disable-next-line class-methods-use-this
    render () {
        return html`
            <div class="c-labelledComponent">
                ${this._renderLabel()}
                <div class="c-labelledComponent-slot">
                    <slot></slot>
                </div>
            </div>`;
    }
}

customElements.define('labelled-component', LabelledComponent);

declare global {
    interface HTMLElementTagNameMap {
        'labelled-component': LabelledComponent;
    }
}
