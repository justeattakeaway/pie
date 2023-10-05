/* eslint-disable max-classes-per-file */
import { LitElement } from 'lit';
import 'element-internals-polyfill';
import { ElementInternals } from 'element-internals-polyfill/dist/element-internals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = LitElement> = new (...args: any[]) => T;

export interface FormAssociatedInterface {
    form: HTMLFormElement | null;
    readonly _internals: ElementInternals; // Make this readonly in the interface
}

export const FormAssociatedComponentMixin = <T extends Constructor>(
    superClass: T,
): T & Constructor<FormAssociatedInterface> => {
    class FormAssociatedComponent extends superClass {
        static formAssociated = true;

        public readonly _internals: ElementInternals; // Make this public and readonly

        get form () {
            return this._internals.form;
        }

        constructor (...args: any[]) {
            super(...args);
            this._internals = this.attachInternals();
        }
    }

    return FormAssociatedComponent as T & Constructor<FormAssociatedInterface>;
};
