import type { LitElement } from 'lit';
import type { GenericConstructor } from '../types/GenericConstructor';

/**
 * Mixin to add `delegatesFocus: true` to a LitElement's shadow root options.
 * This is useful for custom elements that act like form controls, allowing focus
 * to be automatically delegated to the first focusable element inside the shadow DOM.
 *
 * @param superClass - The LitElement class to extend.
 * @returns A class extending the provided LitElement with the delegatesFocus behaviour.
 *
 * @example
 * ```typescript
 * import { LitElement, html } from 'lit';
 * import { DelegatesFocusMixin } from './path-to-DelegatesFocusMixin'; // Update the import path
 *
 * // Create a new component using the DelegatesFocusMixin
 * class MyCustomInput extends DelegatesFocusMixin(LitElement) {
 *   render() {
 *     // The focus will automatically go to the input when the component is focused
 *     return html`<input>`;
 *   }
 * }
 *
 * customElements.define('my-custom-input', MyCustomInput);
 * ```
 */
export const DelegatesFocusMixin =
    <T extends GenericConstructor<LitElement>>(superClass: T) => {
        /**
         * A LitElement with `delegatesFocus` enabled on its shadow root.
         * @extends {LitElement}
         */
        class DelegatesFocusElement extends superClass {
            /**
             * Overrides shadow root options to include `delegatesFocus: true`, ensuring
             * focus is passed into the component's shadow DOM to the first focusable element. It preserves
             * any existing shadowRootOptions from the superclass.
             */
            static shadowRootOptions = {
                // The `as any` cast is a safe way to access the static property
                // from the generic superclass constructor. LitElement provides a default.
                // This is unfortunately unavoidable and a common issue with mixins in TS.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ...(superClass as any).shadowRootOptions,
                delegatesFocus: true,
            };
        }

        return DelegatesFocusElement as T;
    };
