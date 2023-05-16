/* eslint-disable max-classes-per-file */
import { LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';

type Constructor<T> = new (...args: any[]) => T;

export declare class RTLInterface {
    dir: string;
    isRTL: boolean;
}

export const RtlMixin =
    <T extends Constructor<LitElement>>(superClass: T) => {
        class RTLElement extends superClass {
            @property({ type: String })
                dir = '';

            // if no prop provided, falls back to html dir attribute (ltr by default)
            // if prop provided, use that value over anything else present on the page

            // prop provided = reactive
            // no prop = non-reactive (most of our use cases don't need reactivity)
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
