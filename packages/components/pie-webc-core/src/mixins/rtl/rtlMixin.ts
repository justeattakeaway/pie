import { type LitElement, isServer } from 'lit';
import { type GenericConstructor } from '../types/GenericConstructor';

/**
 * An interface representing the structure of RTL related class.
 * @interface
 */
export interface RTLInterface {
    /** A boolean indicating whether the text direction is right-to-left. */
    isRTL: boolean;
}

/**
 * A mixin to extend LitElement with right-to-left (RTL) text direction handling.
 * This mixin adds a read-only `isRTL` property to the class it's applied to,
 * allowing you to easily determine the text direction within your component.
 *
 * @function
 * @param {GenericConstructor<LitElement>} superClass - The LitElement class to extend with RTL functionality.
 * @returns {GenericConstructor<RTLInterface> & T} - A new class extending both LitElement and RTLInterface.
 *
 * @example
 * ```typescript
 * import { LitElement, html } from 'lit';
 * import { RtlMixin } from './RtlMixin'; // Adjust the import path as needed
 *
 * class MyElement extends RtlMixin(LitElement) {
 *   render() {
 *     return html`<p>Text direction is ${this.isRTL ? 'right-to-left' : 'left-to-right'}</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * @example
 * ```typescript
 * import { LitElement, html } from 'lit';
 * import { RtlMixin } from './RtlMixin'; // Adjust the import path as needed
 *
 * class MyStyledElement extends RtlMixin(LitElement) {
 *   render() {
 *     return html`<div class="foo" ?data-is-rtl=${this.isRTL}>Content</div>`;
 *   }
 * }
 *
 * customElements.define('my-styled-element', MyStyledElement);
 * ```
 *
 * The corresponding SCSS to leverage the `data-is-rtl` attribute:
 * ```scss
 * .foo[data-is-rtl] {
 *   background-color: red;
 *   text-align: right;
 * }
 * ```
 */
export const RtlMixin =
    <T extends GenericConstructor<LitElement>>(superClass: T) => {
        /**
       * Class representing a LitElement with RTL handling.
       * @extends {LitElement}
       * @implements {RTLInterface}
       */
        class RTLElement extends superClass implements RTLInterface {
            /**
             * A getter to determine whether the text direction is right-to-left (RTL).
             * If the `dir` property is present on the component, it will be used to determine the text direction.
             * If running on the client-side (not SSR) and the `dir` property is not present, the text direction will be inferred
             * from the document's root element. This inference is not available during SSR.
             * In all other cases, it will return `false`, indicating a left-to-right (LTR) text direction.
             *
             * @returns {boolean} - Returns `true` if the text direction is RTL, otherwise `false`.
             */
            get isRTL (): boolean {
                if (this.dir) {
                    return this.dir === 'rtl';
                }

                // If running on client-side and `dir` is not present, infer from the document's root element.
                if (!isServer && !this.dir) {
                    return document.documentElement.getAttribute('dir') === 'rtl';
                }

                return false;
            }
        }

        return RTLElement as GenericConstructor<RTLInterface> & T;
    };
