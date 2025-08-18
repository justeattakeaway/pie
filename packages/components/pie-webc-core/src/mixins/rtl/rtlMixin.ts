import { type LitElement } from 'lit';
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
            private _isRTL = false;

            get isRTL () {
                return this._isRTL;
            }

            set isRTL (val: boolean) {
                this._isRTL = val;
                this.requestUpdate();
            }

            private observer: MutationObserver | null = null;

            connectedCallback () {
                super.connectedCallback();
                this.handleWritingDirectionUpdate();

                this.observer = new MutationObserver(() => {
                    this.handleWritingDirectionUpdate();
                });

                this.observer.observe(document.documentElement, {
                    attributeFilter: ['dir'],
                    subtree: true,
                });
            }

            disconnectedCallback () {
                super.disconnectedCallback();
                if (!this.observer) return;
                this.observer.disconnect();
                this.observer = null;
            }

            /**
             * If the `dir` property is present on the component, it will be used to determine the text direction.
             * If the `dir` property is not present, the text direction will be inferred from the document's root element.
             * otherwise the default value is `false`, indicating a left-to-right (LTR) text direction.
             */
            private handleWritingDirectionUpdate () {
                this.isRTL = this.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
            }
        }

        return RTLElement as GenericConstructor<RTLInterface> & T;
    };
