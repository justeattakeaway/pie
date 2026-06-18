import {
    LitElement, css, html, nothing,
} from 'lit';
import {
    customElement, property, state,
} from 'lit/decorators.js';
import { type FieldA11y, FieldContextRequestEvent } from './fieldContext.ts';

const componentSelector = 'checkbox-mock';

/**
 * A **fully controlled** checkbox (PoC mock) with a native `<input>` in its
 * shadow root.
 *
 * It never sets its own `checked` state. On interaction it emits a `change`
 * event carrying the *proposed* value and reverts the native input, leaving the
 * consumer to decide the outcome and set `checked` back. (This is what lets a
 * consumer, e.g., await an API call and keep the box unchecked if it fails.)
 *
 * It pulls its accessible name/description from an ancestor form-field via
 * context. Its native input is naturally tabbable (or removed from the tab order
 * when disabled) — a checkbox group needs no roving navigation.
 */
@customElement(componentSelector)
export class CheckboxMock extends LitElement {
    public static styles = css`
        :host { display: inline-flex; }
        input { inline-size: 18px; block-size: 18px; margin: 0; }
    `;

    @property({ type: Boolean, reflect: true })
    public checked = false;

    @property()
    public value = '';

    @property({ type: Boolean, reflect: true })
    public disabled = false;

    @state()
    private _a11y: FieldA11y = { label: '', description: '' };

    #unsubscribe?: () => void;

    public connectedCallback (): void {
        super.connectedCallback();
        this.dispatchEvent(new FieldContextRequestEvent((value, unsubscribe) => {
            this._a11y = value;
            this.#unsubscribe = unsubscribe;
        }));
    }

    public disconnectedCallback (): void {
        super.disconnectedCallback();
        this.#unsubscribe?.();
    }

    /** Called by a wrapping form-field when the user clicks elsewhere in the field. */
    public activate (): void {
        if (this.disabled) return;
        this.#emitChange(!this.checked);
    }

    #emitChange (proposed: boolean): void {
        // Emit intent only; the consumer owns the state.
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: proposed },
            bubbles: true,
            composed: true,
        }));
    }

    #onNativeChange = (event: Event): void => {
        const input = event.target as HTMLInputElement;
        const proposed = input.checked;
        // Revert immediately — the component does not own its state.
        input.checked = this.checked;
        this.#emitChange(proposed);
    };

    public render () {
        return html`
            <input
                type="checkbox"
                .checked=${this.checked}
                ?disabled=${this.disabled}
                aria-label=${this._a11y.label || nothing}
                aria-description=${this._a11y.description || nothing}
                @change=${this.#onNativeChange}
            />
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: CheckboxMock;
    }
}
