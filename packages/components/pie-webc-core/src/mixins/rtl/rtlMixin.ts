/* eslint-disable max-classes-per-file */
import { LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';

// According to TS, "A mixin class must have a constructor with a single rest parameter of type 'any[]'."
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T;

type htmlDirAttribute = 'ltr' | 'rtl' | 'auto';

/**
 * Any component property interface that implements RTL should extend this interface. See the ModalProps interface for an example of this.
 */
export interface RTLComponentProps {
    dir: htmlDirAttribute;
}

// This is just used by the dynamically constructed class below and does not need to be imported or referenced anywhere else
declare class _RTLInterface {
    dir: htmlDirAttribute;
    isRTL: boolean;
}

/**
 * This RTL mixin is used with Lit Web components to add programmatic Right-to-Left (RTL) support.
 * It is only required if your component either:
 * - Needs RTL awareness in its TypeScript logic.
 * - Its CSS requires a [dir='rtl'] attribute to be present.
 *
 * By default, components will infer the `dir` property from the document's root `dir` attribute.
 * If needed, it's possible to override specific components direction by setting the `dir` property
 * value. The `dir` property value is reflected in the DOM, making it queryable. The `isRTL`
 * internal property returns true or false depending on whether or not the `dir` property is `rtl` or not.
 *
 * **Note:** If you provide a `dir` property manually, we strongly suggest you use either `ltr` or `rtl` as the value and avoid using `auto`.
 *
 * ---
 * **SSR Usage:** There is no document.documentElement to infer the direction from on the server. For this reason, if no dir is set on the component, it will default to 'auto`
 * and infer from the root element on the client-side.
 *
 * If you require the component to have a `dir` set during SSR, you need need to manually set the dir property on the component.
 *  * @example
 * // Manually provide a dir property
 * <pie-component dir="rtl"></pie-component>
 */

export const RtlMixin =
    <T extends Constructor<LitElement>>(superClass: T) => {
        class RTLElement extends superClass implements _RTLInterface {
            // Initialized with a default value. Updated later if on the client-side.
            @property({ type: String, reflect: true })
            public dir: htmlDirAttribute = 'auto';

            connectedCallback (): void {
                super.connectedCallback();
                if (this.dir === 'auto') {
                    this.dir = document.documentElement.dir as htmlDirAttribute || 'auto';
                }
            }

            /**
             * Returns true if the element is in Right to Left mode.
             * If a dir attribute is not explicitly set on the web component
             * then it falls back to the nearest parent with a dir attribute set.
             *
             * A dir attribute being set will result in a reactive property.
             * If the component falls back to a parent dir attribute then the value
             * will not be reactive and is only computed once
             */
            get isRTL (): boolean {
                return this.dir === 'rtl';
            }
        }

        return RTLElement as Constructor<_RTLInterface> & T;
    };
