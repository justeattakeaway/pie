import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
    type FieldA11y,
    type FieldContextCallback,
    FIELD_CONTEXT_EVENT,
    type FieldContextRequestEvent,
} from './fieldContext.ts';

const componentSelector = 'form-field-mock';

interface ActivatableControl extends HTMLElement {
    activate?: () => void;
}

/**
 * A transparent, opinion-free form-field wrapper (PoC mock).
 *
 * It imposes no structure or styling — it renders only a `<slot>`, so the
 * consumer owns all markup and styles the host however they like (a card, an
 * inline row, …). Its only jobs:
 *
 *  - read the accessible name/description from elements the consumer marks with
 *    `[data-field-label]` / `[data-field-description]` (at any nesting depth),
 *    and hand them to a nested control via a lightweight context handshake;
 *  - forward clicks anywhere in its subtree to that control.
 *
 * Because the control's real `<input>` lives in its own shadow root, the values
 * are passed as **strings** (not IDREFs) so they apply cleanly across the
 * shadow boundary.
 */
@customElement(componentSelector)
export class FormFieldMock extends LitElement {
    public static styles = css`
        :host { display: block; }
    `;

    @property({ type: Boolean })
    public required = false;

    @property({ type: Boolean })
    public invalid = false;

    #a11y: FieldA11y = {
        label: '', description: '', required: false, invalid: false, errorMessage: '',
    };

    #subscribers = new Set<FieldContextCallback>();

    #control: ActivatableControl | null = null;

    #listeners: AbortController | null = null;

    public connectedCallback (): void {
        super.connectedCallback();
        this.#listeners = new AbortController();
        const { signal } = this.#listeners;
        this.addEventListener(FIELD_CONTEXT_EVENT, this.#onContextRequest, { signal });
        this.addEventListener('click', this.#onClick, { signal });
    }

    public disconnectedCallback (): void {
        super.disconnectedCallback();
        this.#listeners?.abort();
        this.#listeners = null;
        this.#subscribers.clear();
    }

    public updated (): void {
        // Recompute after each render (cheap, guarded) so changes to the marked
        // text or the required/invalid properties are published to the control.
        this.#recompute();
    }

    #recompute = (): void => {
        const text = (selector: string) => [...this.querySelectorAll<HTMLElement>(selector)]
            .map((el) => el.textContent?.trim())
            .filter(Boolean)
            .join(' ');

        const next: FieldA11y = {
            label: text('[data-field-label]'),
            description: text('[data-field-description]'),
            required: this.required,
            invalid: this.invalid,
            errorMessage: text('[data-field-error]'),
        };

        const unchanged = next.label === this.#a11y.label &&
            next.description === this.#a11y.description &&
            next.required === this.#a11y.required &&
            next.invalid === this.#a11y.invalid &&
            next.errorMessage === this.#a11y.errorMessage;
        if (unchanged) return;

        this.#a11y = next;
        this.#subscribers.forEach((callback) => callback(next, () => this.#subscribers.delete(callback)));
    };

    #onContextRequest = (event: Event): void => {
        const request = event as FieldContextRequestEvent;
        event.stopPropagation();

        this.#subscribers.add(request.callback);
        this.#control = event.target as ActivatableControl;
        request.callback(this.#a11y, () => this.#subscribers.delete(request.callback));
    };

    #onClick = (event: Event): void => {
        if (!this.#control) return;
        // A click on the control itself is handled natively; only forward clicks
        // from elsewhere in the field (the label text, the card area, …).
        if (event.composedPath().includes(this.#control)) return;
        this.#control.activate?.();
    };

    public render () {
        return html`<slot @slotchange=${this.#recompute}></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: FormFieldMock;
    }
}
