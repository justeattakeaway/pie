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
    dir: htmlDirAttribute
}

// This is just used by the dynamically constructed class below and does not need to be imported or referenced anywhere else
interface _RTLInterface {
    /**
     * Sets the text direction of the element. Possible values are `ltr`, `rtl`, and `auto`.
     */
    dir: htmlDirAttribute;
    /**
     * Returns true if the element is in Right to Left mode. Based on the `dir` property.
     */
    isRTL: boolean;
}

/**
 * This mixin adds a reactive `dir` attribute to the component, allowing it to adjust rendering and styles based on text direction (LTR or RTL).
 *
 * Usage of this mixin is dependent on the specific needs of the component:
 *
 * - If your component only relies on CSS logical properties for styling, this mixin is NOT necessary for RTL support.
 * - If your component requires different template rendering for RTL, or if its styles are dependent on a 'dir' attribute, then this mixin should be used.
 *
 * The mixin includes a property `dir` with the default value `ltr`, and a getter `isRTL` to check if the text direction is right-to-left.
 * `isRTL` will return true if the `dir` property is set to `rtl`.
 *
 */
export const RtlMixin =
    <T extends Constructor<LitElement>>(superClass: T) => {
        class RTLElement extends superClass implements _RTLInterface {
            @property({ type: String, reflect: true })
            public dir : htmlDirAttribute = 'ltr';

            public get isRTL () : boolean {
                if (this.dir === 'rtl') {
                    return true;
                }

                return false;
            }
        }

        return RTLElement as Constructor<_RTLInterface> & T;
    };
