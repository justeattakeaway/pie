import { PIEInputElement } from '../interfaces';

/**
 * Focuses the first invalid input of a form. The validity state of each input in the form is read and the first with `ValidityState.valid === false` is focused.
 * @param form - The form element to focus the first invalid input of.
 */
function focusFirstInvalidInput (form: HTMLFormElement, event: Event): void {
    // We can extend this to include more form control components as we create them.
    const allPieInputs = form.querySelectorAll('pie-input');
    const firstInvalidInput = Array.from(allPieInputs).find((input) => !(input as ElementWithValidityState).validity.valid) as PIEInputElement | undefined;

    if (firstInvalidInput) {
        event.preventDefault();
        setTimeout(() => {
            firstInvalidInput.focus();
        }, 0);
    }
}

/**
 * Should be used as a singleton instance, attached to the Window object.
 * Manages forms and their submit event listeners to perform operations such as focusing invalid input fields.
 */
export class PieFormManager {
    // The forms are held in a WeakMap, so that they can be garbage collected if removed from the DOM.
    private _forms: WeakMap<HTMLFormElement, PieFormData> = new WeakMap();

    /**
     * Performs any necessary operations when a form is submitted.
     */
    private handleSubmit (event: Event) : void {
        const submittedForm = event.target as HTMLFormElement;
        focusFirstInvalidInput(submittedForm, event);
    }

    /**
     * Adds a form to the form manager and attaches a submit event listener to it.
     */
    public addForm (form: HTMLFormElement): void {
        const existingEntry = this._forms.get(form);

        if (existingEntry) {
            return;
        }

        const data: PieFormData = {
            listener: this.handleSubmit,
            form,
        };

        form.addEventListener('submit', data.listener as EventListener);

        this._forms.set(form, data);
    }

    /**
     * Removes a form from the form manager and the submit event listener from it.
     * @param form - The form to remove from the form manager.
     */
    public deleteForm (form: HTMLFormElement): void {
        const data = this._forms.get(form);

        if (data?.listener) {
            form.removeEventListener('submit', data.listener);
        }

        this._forms.delete(form);
    }

    /**
     * Retreives the PieFormData object associated with a form.
     * @param form - The form to retrieve the PieFormData object of.
     * @returns the PieFormData object associated with the form.
     */
    public getForm (form: HTMLFormElement): PieFormData | undefined {
        return this._forms.get(form);
    }
}

type ElementWithValidityState = Element & PIEInputElement;

type PieFormData = {
    listener?: EventListener,
    form?: HTMLFormElement,
}

declare global {
    interface Window {
        pieFormManager: PieFormManager | undefined
    }
}
