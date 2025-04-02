import { customElement } from 'lit/decorators.js';

/**
 * Custom decorator that wraps Lit's customElement decorator with error handling.
 * Logs a warning if the custom element has already been defined.
 *
 * @param {string} elementSelector - Custom element tag name.
 * @returns {ClassDecorator}
 */
export function safeCustomElement (elementSelector: string): ClassDecorator {
    return (elementClass: any) => {
        try {
            customElement(elementSelector)(elementClass);
        } catch (e) {
            if ((e as Error).message.includes('define')) {
                console.warn(`PIE Web Component: "${elementSelector}" has already been defined. Please ensure the component is only being defined once in your application.`);
            } else {
                throw e;
            }
        }
    };
}
