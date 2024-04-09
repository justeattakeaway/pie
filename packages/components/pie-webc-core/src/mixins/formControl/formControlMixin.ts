import type { LitElement } from 'lit';
import type { GenericConstructor } from '../types/GenericConstructor';
import { PieFormManager } from '../../forms/pie-form-manager';

/**
 * Interface for FormControl behavior.
 */
export interface FormControlInterface {
    _internals: ElementInternals;
    get form(): HTMLFormElement | null;
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
       * @implements {FormControlInterface}
       */
        class FormControlElement extends superClass implements FormControlInterface {
            static formAssociated = true;

            _internals: ElementInternals;

            get form () {
                return this._internals.form;
            }

            // Storing this reference as this.form is not available in disconnectedCallback
            private _managedForm?: HTMLFormElement;

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            constructor (...args: any[]) {
                super(...args);
                this._internals = this.attachInternals();
            }

            override connectedCallback (): void {
                super.connectedCallback();

                if (this.form) {
                    // Ensure that the form is managed by the PieFormManager
                    if (!window.pieFormManager) {
                        window.pieFormManager = new PieFormManager();
                    }

                    window.pieFormManager.addForm(this.form);
                    // Storing a reference to the form to be used in disconnectedCallback when this.form will be unavailable.
                    this._managedForm = window.pieFormManager.getForm(this.form)?.form;
                }
            }

            override disconnectedCallback (): void {
                super.disconnectedCallback();

                if (this._managedForm && window.pieFormManager) {
                    // We can extend this to include more form control components as we create them.
                    const pieInputsInForm = this._managedForm.querySelectorAll('pie-input');

                    // This particular component instance is not queryable in the DOM during disconnectedCallback
                    // so if it was the last require field then the length would be 0
                    if (pieInputsInForm.length === 0) {
                        window.pieFormManager.deleteForm(this._managedForm);
                    }
                }
            }
        }

        return FormControlElement as GenericConstructor<FormControlInterface> & T;
    };
