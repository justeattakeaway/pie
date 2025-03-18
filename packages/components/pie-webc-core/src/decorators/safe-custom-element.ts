import { customElement } from 'lit/decorators.js';

/**
 * Custom decorator that wraps Lit's customElement decorator with error handling.
 * Logs a warning if the custom element has already been defined, including version info of the already registered component if available.
 *
 * @param {string} elementSelector - Custom element tag name.
 * @returns {ClassDecorator}
 */
export function safeCustomElement (elementSelector: string): ClassDecorator {
    return (elementClass: any) => {
        try {
            customElement(elementSelector)(elementClass);
        } catch (e) {
            const registeredClass = customElements.get(elementSelector) as { v?: string };
            const registeredVersion = registeredClass?.v;
            const missingVersionMessage = 'No version data found. Icon components do not contain version data. If the component is not an icon, please report the missing version data.';
            const currentElementVersion = elementClass.v as { v?: string };

            if (currentElementVersion !== registeredVersion) {
                console.warn(
            `PIE Web Component: "${elementSelector}" was already registered with version: ${registeredVersion ?? missingVersionMessage}.`,
            e,
                );
            }
        }
    };
}
