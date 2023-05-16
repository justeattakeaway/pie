/* eslint-disable max-classes-per-file */
import { LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';

type Constructor<T> = new (...args: any[]) => T;

export declare class RTLInterface {
    dir: string;
    isRTL: boolean;
}
/* playground-fold-end */

export const RtlMixin =
    <T extends Constructor<LitElement>>(superClass: T) => {
        class RTLElement extends superClass {
            @property({ type: String, reflect: true })
                dir = 'ltr';

            // getter and setter for isRTL based on dir
            get isRTL () {
                return this.dir === 'rtl';
            }
        }
        return RTLElement as Constructor<RTLInterface> & T;
    };
