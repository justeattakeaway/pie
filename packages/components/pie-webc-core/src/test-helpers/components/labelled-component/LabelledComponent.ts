import { LitElement, html, unsafeCSS } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { property } from 'lit/decorators.js';
import styles from './labelledComponent.scss?inline';

/**
 * This is a Web Component used for visual testing purposes.
 * It allows us to wrap a component we'd like to test in a container
 * that displays the component's props as a label.
 *
 * Components can be tested without this, but it's useful if your tests
 * require additional markup when testing a component.
 */
export class LabelledComponent extends LitElement {
    static styles = unsafeCSS(styles);

    /**
     * The label to display above the component.
     * This should be a single string representing a comma separated list of prop key/value pairs.
     * Such as: 'size: small, isFullWidth: true'
     */
    @property({ type: String })
        label = '';

    // Renders a label such as 'size: small, isFullWidth: true'
    // as <p> tags HTML such as:
    // <p class="c-labelledComponent-label"><b>size</b>: <code>small</code></p>
    // <p class="c-labelledComponent-label"><b>isFullWidth</b>: <code>true</code></p>
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
