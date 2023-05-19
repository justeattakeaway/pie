/* eslint-disable max-classes-per-file */
import { LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';

type Constructor<T> = new (...args: any[]) => T;

declare class RTLInterface {
    dir: string;
    isRTL: boolean;
}

export const RtlMixin =
    <T extends Constructor<LitElement>>(superClass: T) => {
        class RTLElement extends superClass {
            @property({ type: String })
                dir = '';

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

        return RTLElement as Constructor<RTLInterface> & T;
    };
