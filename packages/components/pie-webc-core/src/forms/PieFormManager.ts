import { PIEInputElement } from '../interfaces';

export class PieFormManager {
    private forms: WeakMap<HTMLFormElement, PieFormData> = new WeakMap();

    private handleSubmit (event: Event) : void {
        const submittedForm = event.target as HTMLFormElement;
        const allPieInputs = submittedForm.querySelectorAll('pie-input');
        const firstInvalidInput = Array.from(allPieInputs).find((input) => !(input as ValidityElement).validity.valid) as PIEInputElement | undefined;

        firstInvalidInput?.focus();
    }

    public addForm (form: HTMLFormElement): void {
        const existingEntry = this.forms.get(form);

        if (existingEntry && existingEntry.listener) {
            return;
        }

        const data: PieFormData = {
            listener: this.handleSubmit,
            form,
        };

        form.addEventListener('submit', this.handleSubmit);

        this.forms.set(form, data);
    }

    public deleteForm (form: HTMLFormElement): void {
        const data = this.forms.get(form);

        if (data?.listener) {
            form.removeEventListener('submit', this.handleSubmit);
        }

        this.forms.delete(form);
    }

    public getForm (form: HTMLFormElement): PieFormData | undefined {
        return this.forms.get(form);
    }
}

type ValidityElement = Element & PIEInputElement;

type PieFormData = {
    listener?: EventListener,
    form?: HTMLFormElement,
}

declare global {
    interface Window {
        pieFormManager: PieFormManager | undefined
    }
}
