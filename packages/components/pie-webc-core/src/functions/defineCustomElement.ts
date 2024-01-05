import type { LitElement } from 'lit';

/**
 * Defines a web component, ensuring that the component is only defined once in the Custom Element Registry.
 *
 * If the component has already been defined with the same name, a warning is logged to the console.
 *
 * @param {string} elementSelector - The selector of the custom element. Must be a valid custom element selector, containing a dash. I.e. 'my-component'
 * @param {typeof LitElement} elementClass - The class that defines the custom element, extending LitElement.
 *
 * @example
 *
 * ```javascript
 * import { css, html, LitElement } from 'lit';
 *
 * // IMPORTANT: Add the following JSDoc comment above your class setting the `@tagname` to the selector you want to use. - This is mandatory.
 * // "@tagname my-component"
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
 * ```
 *
 * NOTE: The inclusion of the `@tagname` JSDoc comment above your class is essential for correct functionality. Ensure it matches the tag you're registering.
 *
 * @returns {void}
 */
export function defineCustomElement (elementSelector: string, elementClass: typeof LitElement): void {
    if (!customElements.get(elementSelector)) {
        customElements.define(elementSelector, elementClass);
    } else {
        console.warn(`PIE Web Component: "${elementSelector}" has already been defined. Please ensure the component is only being defined once in your application.`);
    }
}
