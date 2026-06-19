import {
    LitElement, css, html, nothing,
} from 'lit';
import {
    customElement, property, query, state,
} from 'lit/decorators.js';
import { type FieldA11y, FieldContextRequestEvent, fieldDescription } from './fieldContext.ts';

const componentSelector = 'text-input-mock';

/**
 * A text input (PoC mock) with a native `<input type="text">` in its shadow root.
 *
 * It pulls label/description/required/invalid/error from an ancestor form-field
 * via context and applies them as `aria-*` to the native input. It emits `input`
 * and `change` events carrying the value (the consumer owns the value); the
 * native input holds the live text so the caret is never disturbed.
 */
@customElement(componentSelector)
export class TextInputMock extends LitElement {
    public static shadowRootOptions: ShadowRootInit = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    public static styles = css`
        :host { display: block; }
        input {
            inline-size: 100%;
            box-sizing: border-box;
            padding: 6px 8px;
            font: inherit;
        }
        input[aria-invalid="true"] { outline: 2px solid #c00; }
    `;

    @property()
    public value = '';

    @property({ type: Boolean, reflect: true })
    public disabled = false;

    @state()
    private _ctx: FieldA11y = { label: '', description: '' };

    @query('input')
    private _input!: HTMLInputElement;

    #unsubscribe?: () => void;

    public connectedCallback (): void {
        super.connectedCallback();
        this.dispatchEvent(new FieldContextRequestEvent((value, unsubscribe) => {
            this._ctx = value;
            this.#unsubscribe = unsubscribe;
        }));
    }

    public disconnectedCallback (): void {
        super.disconnectedCallback();
        this.#unsubscribe?.();
    }

    /** Called by a wrapping form-field when the user clicks elsewhere in the field. */
    public activate (): void {
        this._input?.focus();
    }

    #relay = (type: 'input' | 'change') => (event: Event): void => {
        event.stopPropagation(); // re-emit with the value so consumers needn't reach into the shadow
        this.dispatchEvent(new CustomEvent(type, {
            detail: { value: (event.target as HTMLInputElement).value },
            bubbles: true,
            composed: true,
        }));
    };

    public render () {
        const description = fieldDescription(this._ctx);
        return html`
            <input
                type="text"
                value=${this.value || nothing}
                ?disabled=${this.disabled}
                aria-label=${this._ctx.label || nothing}
                aria-description=${description || nothing}
                aria-required=${this._ctx.required ? 'true' : nothing}
                aria-invalid=${this._ctx.invalid ? 'true' : nothing}
                @input=${this.#relay('input')}
                @change=${this.#relay('change')}
            />
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: TextInputMock;
    }
}
