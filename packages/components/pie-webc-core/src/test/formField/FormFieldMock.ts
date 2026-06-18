import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
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

    #a11y: FieldA11y = { label: '', description: '' };

    #subscribers = new Set<FieldContextCallback>();

    #control: ActivatableControl | null = null;

    public connectedCallback (): void {
        super.connectedCallback();
        this.addEventListener(FIELD_CONTEXT_EVENT, this.#onContextRequest);
        this.addEventListener('click', this.#onClick);
    }

    public disconnectedCallback (): void {
        super.disconnectedCallback();
        this.removeEventListener(FIELD_CONTEXT_EVENT, this.#onContextRequest);
        this.removeEventListener('click', this.#onClick);
        this.#subscribers.clear();
    }

    public firstUpdated (): void {
        this.#recompute();
    }

    // Recomputed only on connect and slotchange (not per render) — so reading the
    // marked text and publishing happens only when content actually changes.
    #recompute = (): void => {
        const text = (selector: string) => [...this.querySelectorAll<HTMLElement>(selector)]
            .map((el) => el.textContent?.trim())
            .filter(Boolean)
            .join(' ');

        const next: FieldA11y = {
            label: text('[data-field-label]'),
            description: text('[data-field-description]'),
        };

        if (next.label === this.#a11y.label && next.description === this.#a11y.description) return;

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
