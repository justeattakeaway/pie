import {
    LitElement, css, html, nothing,
} from 'lit';
import {
    customElement, property, state,
} from 'lit/decorators.js';
import { type FieldA11y, FieldContextRequestEvent, fieldDescription } from './fieldContext.ts';

const componentSelector = 'radio-mock';

/**
 * A radio control (PoC mock) with a native `<input type="radio">` in its shadow
 * root, intended to be coordinated by a `radio-group-mock`.
 *
 * - Its `checked` state is owned by the group (set as a property; reflected to
 *   the native input).
 * - Its accessible name comes from its `label` property (plain usage) or, when
 *   a form-field provides one via context, that wins (card usage).
 * - Clicking it (or `activate()` from a wrapping field) requests selection from
 *   the group via a bubbling event.
 */
@customElement(componentSelector)
export class RadioMock extends LitElement {
    public static shadowRootOptions: ShadowRootInit = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    public static styles = css`
        :host { display: inline-flex; align-items: center; gap: 6px; }
        input { inline-size: 18px; block-size: 18px; margin: 0; }
    `;

    @property({ type: Boolean, reflect: true })
    public checked = false;

    @property()
    public value = '';

    /** The radio's own label (text only). Overridden by a form-field's context label. */
    @property()
    public label = '';

    @property({ type: Boolean, reflect: true })
    public disabled = false;

    @state()
    private _ctx: FieldA11y = { label: '', description: '' };

    #unsubscribe?: () => void;

    #listeners: AbortController | null = null;

    public connectedCallback (): void {
        super.connectedCallback();
        this.#listeners = new AbortController();
        this.addEventListener('click', this.#onHostClick, { signal: this.#listeners.signal });
        this.dispatchEvent(new FieldContextRequestEvent((value, unsubscribe) => {
            this._ctx = value;
            this.#unsubscribe = unsubscribe;
        }));
    }

    public disconnectedCallback (): void {
        super.disconnectedCallback();
        this.#listeners?.abort();
        this.#listeners = null;
        this.#unsubscribe?.();
    }

    /** Called by a wrapping form-field when the user clicks elsewhere in the field. */
    public activate (): void {
        this.#onHostClick();
    }

    get #label (): string {
        return this._ctx.label || this.label;
    }

    #onHostClick = (event?: Event): void => {
        if (this.disabled) return;
        // Controlled: never self-check. Suppress the native toggle and emit an
        // intent; the group decides and sets `checked`.
        event?.preventDefault();
        this.focus();
        this.dispatchEvent(new Event('radio-mock-select', { bubbles: true, composed: true }));
    };

    #onKeydown = (event: KeyboardEvent): void => {
        // Arrows are the group's (roving); suppress native Space self-checking.
        if (event.key === ' ') event.preventDefault();
    };

    public render () {
        return html`
            <input
                type="radio"
                .checked=${this.checked}
                ?disabled=${this.disabled}
                aria-label=${this.#label || nothing}
                aria-description=${fieldDescription(this._ctx) || nothing}
                aria-required=${this._ctx.required ? 'true' : nothing}
                aria-invalid=${this._ctx.invalid ? 'true' : nothing}
                @keydown=${this.#onKeydown}
            />
            ${this.label ? html`<span aria-hidden="true">${this.label}</span>` : nothing}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: RadioMock;
    }
}
