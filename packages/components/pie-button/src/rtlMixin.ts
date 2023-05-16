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
            @property({ type: String })
                dir = '';

            // getter and setter for isRTL based on dir
            get isRTL () {
                if (this.dir === 'ltr') {
                    return false;
                }

                if (this.dir === 'rtl' || document?.documentElement?.dir === 'rtl') {
                    return true;
                }

                return false;
            }
        }
        return RTLElement as Constructor<RTLInterface> & T;
    };
