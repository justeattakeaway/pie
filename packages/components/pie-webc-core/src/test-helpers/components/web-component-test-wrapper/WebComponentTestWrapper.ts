import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './webComponentTestWrapper.scss?inline';

/**
 * This is a Web Component used for visual testing purposes.
 * It allows us to wrap a component we'd like to test in a container
 * that displays the component's props as a label.
 *
 * Components can be tested without this, but it's useful if your tests
 * require additional markup when testing a component.
 */
export class WebComponentTestWrapper extends LitElement {
    static styles = unsafeCSS(styles);

    /**
     * The prop key and values to display above the component.
     * This should be a single string representing a comma separated list of prop key/value pairs.
     * Such as: 'size: small, isFullWidth: true'
     */
    @property({ type: String })
        propKeyValues = '';

    // Renders a string such as 'size: small, isFullWidth: true'
    // as HTML such as:
    // <p class="c-webComponentTestWrapper-label"><b>size</b>: <code>small</code></p>
    // <p class="c-webComponentTestWrapper-label"><b>isFullWidth</b>: <code>true</code></p>
    _renderPropKeyValues () {
        return this.propKeyValues.split(',').map((propKeyValueString) => {
            const [key, value] = propKeyValueString.split(':');

            return html`<p class="c-webComponentTestWrapper-label"><b>${key}</b>: <code>${value}</code></p>`;
        });
    }

    // eslint-disable-next-line class-methods-use-this
    render () {
        return html`
            <div class="c-webComponentTestWrapper">
                ${this._renderPropKeyValues()}
                <div class="c-webComponentTestWrapper-slot">
                    <slot name="component"></slot>
                </div>
            </div>`;
    }
}

const componentSelector = 'web-component-test-wrapper';

if (!customElements.get(componentSelector)) {
    customElements.define(componentSelector, WebComponentTestWrapper);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: WebComponentTestWrapper;
    }
}
