export class PieFormManager {
    constructor () {
        console.log('I exist!');
    }

    private forms: WeakMap<HTMLFormElement, PieFormData> = new WeakMap();

    private handleSubmit (event: Event) {
        console.log('form submit', event);
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
        console.log('data', data);
        if (data?.listener) {
            console.log('removing listener');
            form.removeEventListener('submit', this.handleSubmit);
        }

        this.forms.delete(form);
    }

    public getForm (form: HTMLFormElement): PieFormData | undefined {
        return this.forms.get(form);
    }
}

type PieFormData = {
    listener?: EventListener,
    form?: HTMLFormElement,
}

declare global {
    interface Window {
        pieFormManager: PieFormManager | undefined
    }
}
