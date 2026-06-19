import {
    LitElement, css, html, nothing,
} from 'lit';
import {
    customElement, property, query, state,
} from 'lit/decorators.js';
import { type FieldA11y, FieldContextRequestEvent, fieldDescription } from './fieldContext.ts';

const componentSelector = 'textarea-mock';

/**
 * A multi-line text input (PoC mock) with a native `<textarea>` in its shadow
 * root. Same controlled/contextual behaviour as {@link TextInputMock}.
 */
@customElement(componentSelector)
export class TextAreaMock extends LitElement {
    public static shadowRootOptions: ShadowRootInit = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    public static styles = css`
        :host { display: block; }
        textarea {
            inline-size: 100%;
            box-sizing: border-box;
            padding: 6px 8px;
            font: inherit;
            min-block-size: 4lh;
            resize: vertical;
        }
        textarea[aria-invalid="true"] { outline: 2px solid #c00; }
    `;

    @property()
    public value = '';

    @property({ type: Boolean, reflect: true })
    public disabled = false;

    @state()
    private _ctx: FieldA11y = { label: '', description: '' };

    @query('textarea')
    private _textarea!: HTMLTextAreaElement;

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

    public activate (): void {
        this._textarea?.focus();
    }

    #relay = (type: 'input' | 'change') => (event: Event): void => {
        event.stopPropagation();
        this.dispatchEvent(new CustomEvent(type, {
            detail: { value: (event.target as HTMLTextAreaElement).value },
            bubbles: true,
            composed: true,
        }));
    };

    public render () {
        const description = fieldDescription(this._ctx);
        return html`
            <textarea
                ?disabled=${this.disabled}
                aria-label=${this._ctx.label || nothing}
                aria-description=${description || nothing}
                aria-required=${this._ctx.required ? 'true' : nothing}
                aria-invalid=${this._ctx.invalid ? 'true' : nothing}
                @input=${this.#relay('input')}
                @change=${this.#relay('change')}
            >${this.value}</textarea>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: TextAreaMock;
    }
}
