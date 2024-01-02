/* eslint-disable max-classes-per-file */
import { LitElement } from 'lit';
import type { GenericConstructor } from '../types/GenericConstructor';

/**
 * Interface for FormControl behavior.
 */
declare class _FormControlInterface {
    public static formAssociated: boolean;
    readonly _internals: ElementInternals;
    public get form(): HTMLFormElement | null;
}

/**
 * Mixin to add form control behaviors to a LitElement.
 * This mixin adds properties and methods to handle form-associated custom elements.
 *
 * @param superClass - The LitElement class to extend with form control functionality.
 * @returns A class extending both the provided LitElement and _FormControlInterface.
 *
 * @example
 * ```typescript
 * import { LitElement, html } from 'lit';
 * import { FormControlMixin } from './path-to-FormControlMixin'; // Update the import path
 *
 * // Create a new component using the FormControlMixin
 * class MyFormElement extends FormControlMixin(LitElement) {
 *   render() {
 *     return html`<div>Form-associated element with form: ${this.form ? 'attached' : 'detached'}</div>`;
 *   }
 * }
 *
 * customElements.define('my-form-element', MyFormElement);
 * ```
 */
export const FormControlMixin =
    <T extends GenericConstructor<LitElement>>(superClass: T) => {
        /**
       * Class representing a LitElement that behaves like a native HTML form control element.
       * @extends {LitElement}
       * @implements {_FormControlInterface}
       */
        class FormControlElement extends superClass implements _FormControlInterface {
            public static formAssociated = true;

            readonly _internals: ElementInternals;

            public get form () {
                return this._internals.form;
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
            constructor (...args: any[]) {
                super();
                this._internals = this.attachInternals();
            }
        }

        return FormControlElement as GenericConstructor<_FormControlInterface> & T;
    };
