import { LitElement } from 'lit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ClassThatExtendsLitElement = new (...args: unknown[]) => LitElement;

/**
 * Defines a custom web component, ensuring that the component is only defined once in the Custom Element Registry.
 *
 * If the component has already been defined with the same name, a warning is logged to the console.
 *
 * @param {string} elementSelector - The selector of the custom element. Must be a valid custom element selector, containing a dash. I.e. 'my-component'
 * @param {ClassThatExtendsLitElement} elementClass - The class that defines the custom element, extending LitElement.
 *
 * @example
 *
 * import { css, html, LitElement } from 'lit';
 *
 * class MyComponent extends LitElement {
 *   static styles = css`
 *     :host {
 *       display: block;
 *       padding: 16px;
 *       color: var(--my-component-text-color, black);
 *     }
 *   `;
 *
 *   render() {
 *     return html`
 *       <p>My custom element content goes here!</p>
 *     `;
 *   }
 * }
 *
 * defineCustomElement('my-component', MyComponent);
 *
 * @returns {void}
 */
export function defineCustomElement (elementSelector: string, elementClass: ClassThatExtendsLitElement): void {
    if (!customElements.get(elementSelector)) {
        customElements.define(elementSelector, elementClass);
    } else {
        console.warn(`PIE Web Component: "${elementSelector}" has already been defined. Please ensure the component is only being defined once in your application.`);
    }
}
