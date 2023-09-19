/* eslint-disable max-classes-per-file */
import { LitElement, isServer } from 'lit';
import { property } from 'lit/decorators/property.js';

// According to TS, "A mixin class must have a constructor with a single rest parameter of type 'any[]'."
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T;

type htmlDirAttribute = 'ltr' | 'rtl' | 'auto';

/**
 * Any component property interface that implements RTL should extend this interface. See the ModalProps interface for an example of this.
 */
export interface RTLComponentProps {
    dir?: htmlDirAttribute
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
 * By default, components will infer the 'dir' property from the document's root 'dir' attribute.
 * If needed, it's possible to override specific components direction by setting the 'dir' property
 * value. The 'dir' property value is reflected in the DOM, making it queryable. The 'isRTL'
 * internal property returns true or false depending on whether or not the 'dir' property is 'rtl' or not.
 */

export const RtlMixin =
    <T extends Constructor<LitElement>>(superClass: T) => {
        class RTLElement extends superClass implements _RTLInterface {
            // Initialized with a default value. Updated later if on the client-side.
            @property({ type: String, reflect: true })
                dir: htmlDirAttribute = 'ltr'; // Default to 'ltr' for SSR

            // According to TS, "A mixin class must have a constructor with a single rest parameter of type 'any[]'."
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            constructor (...args: any[]) {
                super(...args);

                // If we're not on the server, we set the dir using document.
                if (!isServer) {
                    this.dir = document.documentElement.dir as htmlDirAttribute ?? 'ltr';
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
