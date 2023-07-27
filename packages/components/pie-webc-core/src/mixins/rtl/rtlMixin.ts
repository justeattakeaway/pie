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
declare class _RTLInterface {
    dir: htmlDirAttribute;
    isRTL: boolean;
}

export const RtlMixin =
    <T extends Constructor<LitElement>>(superClass: T) => {
        class RTLElement extends superClass implements _RTLInterface {
            @property({ type: String, reflect: true })
                dir : htmlDirAttribute = 'ltr';

            /**
             * Returns true if the element is in Right to Left mode.
             * If a dir attribute is not explicitly set on the web component
             * then it falls back to the nearest parent with a dir attribute set.
             *
             * A dir attribute being set will result in a reactive property.
             * If the component falls back to a parent dir attribute then the value
             * will not be reactive and is only computed once
             */
            get isRTL () : boolean {
                if (this.dir === 'ltr') {
                    return false;
                }

                if (this.dir === 'rtl' || window?.getComputedStyle(this)?.direction === 'rtl') {
                    return true;
                }

                return false;
            }
        }

        return RTLElement as Constructor<_RTLInterface> & T;
    };
