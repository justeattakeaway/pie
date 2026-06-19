import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './FormFieldMock.ts';
import './TextInputMock.ts';
import './TextAreaMock.ts';
import './CheckboxMock.ts';
import './RadioMock.ts';
import './RadioGroupMock.ts';
import './CheckboxGroupMock.ts';

const componentSelector = 'demo-form-mock';

const cardStyle = 'display:flex; gap:12px; align-items:flex-start; padding:16px; border:1px solid #b3b3b3; border-radius:8px; cursor:pointer;';

const fieldStyle = 'display:block;';

const detail = <T>(event: Event): T => (event as CustomEvent<T>).detail;

/**
 * A complex form (PoC mock) that acts as the **consumer** for the form-field
 * pattern: it owns every value and validity flag, wiring a variety of controls
 * (text input, textarea, radio group, checkbox group, single checkbox) through
 * the form-field + controller pattern. It stress-tests the pattern across
 * control types, mixed layouts (inline + clickable cards), disabled options,
 * required fields and live validation, and shows the owned state live.
 */
@customElement(componentSelector)
export class DemoFormMock extends LitElement {
    public static styles = css`
        :host { display: block; font-family: sans-serif; max-width: 480px; }
        form { display: flex; flex-direction: column; gap: 20px; }
        fieldset { margin: 0; border: 1px solid #ddd; border-radius: 8px; padding: 12px; }
        legend { font-weight: bold; padding-inline: 4px; }
        .label { font-weight: bold; display: block; }
        .req { color: #c00; }
        .desc { color: #555; display: block; margin-block-end: 4px; }
        .err { color: #c00; display: block; }
        .summary { background: #f4f4f4; padding: 12px; border-radius: 8px; white-space: pre-wrap; font-family: monospace; font-size: 12px; }
        button { align-self: flex-start; padding: 8px 16px; }
    `;

    @state() private _name = '';

    @state() private _email = '';

    @state() private _notes = '';

    @state() private _delivery: string | null = null;

    @state()
    private _channels: string[] = [];

    @state() private _acceptedTerms = false;

    @state() private _submitted = false;

    get #emailInvalid (): boolean {
        return this._email.length > 0 && !/^[^@\s]+@[^@\s]+$/.test(this._email);
    }

    #onSubmit = (event: Event): void => {
        event.preventDefault();
        this._submitted = true;
    };

    public render () {
        return html`
            <form @submit=${this.#onSubmit} novalidate aria-label="Account preferences">
                <h2>Account preferences</h2>

                <!-- Text input: required -->
                <form-field-mock required style=${fieldStyle}>
                    <span class="label" data-field-label>Full name <span class="req">*</span></span>
                    <span class="desc" data-field-description>As it appears on your card.</span>
                    <text-input-mock
                        .value=${this._name}
                        @input=${(e: Event) => { this._name = detail<{ value: string }>(e).value; }}
                    ></text-input-mock>
                </form-field-mock>

                <!-- Text input: required + live validation -->
                <form-field-mock required ?invalid=${this.#emailInvalid} style=${fieldStyle}>
                    <span class="label" data-field-label>Email <span class="req">*</span></span>
                    <span class="desc" data-field-description>We’ll send your receipt here.</span>
                    <span class="err" data-field-error ?hidden=${!this.#emailInvalid}>Enter a valid email address.</span>
                    <text-input-mock
                        .value=${this._email}
                        @input=${(e: Event) => { this._email = detail<{ value: string }>(e).value; }}
                    ></text-input-mock>
                </form-field-mock>

                <!-- Textarea -->
                <form-field-mock style=${fieldStyle}>
                    <span class="label" data-field-label>Delivery notes</span>
                    <span class="desc" data-field-description>Optional instructions for the driver.</span>
                    <textarea-mock
                        .value=${this._notes}
                        @input=${(e: Event) => { this._notes = detail<{ value: string }>(e).value; }}
                    ></textarea-mock>
                </form-field-mock>

                <!-- Radio group in fully-clickable cards (one disabled) -->
                <fieldset>
                    <legend>Delivery speed</legend>
                    <radio-group-mock
                        aria-label="Delivery speed"
                        @change=${(e: Event) => { this._delivery = (e.target as HTMLElementTagNameMap['radio-group-mock']).value; }}
                    >
                        ${[
            { value: 'standard', label: 'Standard', desc: 'Arrives in 2–3 days. Free.' },
            { value: 'express', label: 'Express', desc: 'Arrives tomorrow.' },
            {
                value: 'sameday', label: 'Same day', desc: 'Currently unavailable in your area.', disabled: true,
            },
        ].map((option) => html`
                            <form-field-mock style=${cardStyle}>
                                <span style="flex:1;">
                                    <span class="label" data-field-label>${option.label}</span>
                                    <span class="desc" data-field-description>${option.desc}</span>
                                </span>
                                <radio-mock value=${option.value} ?disabled=${option.disabled ?? false}></radio-mock>
                            </form-field-mock>
                        `)}
                    </radio-group-mock>
                </fieldset>

                <!-- Checkbox group, plain (one disabled) -->
                <fieldset>
                    <legend>Notifications</legend>
                    <checkbox-group-mock
                        aria-label="Notifications"
                        @change=${(e: Event) => { this._channels = [...(e.target as HTMLElementTagNameMap['checkbox-group-mock']).value]; }}
                    >
                        ${[
            { value: 'email', label: 'Email' },
            { value: 'push', label: 'Push' },
            { value: 'sms', label: 'SMS (disabled)', disabled: true },
        ].map((option) => html`
                            <form-field-mock style="display:inline-flex; gap:8px; align-items:center; cursor:pointer;">
                                <checkbox-mock value=${option.value} ?disabled=${option.disabled ?? false}></checkbox-mock>
                                <span data-field-label>${option.label}</span>
                            </form-field-mock>
                        `)}
                    </checkbox-group-mock>
                </fieldset>

                <!-- Single required checkbox -->
                <form-field-mock required style="display:inline-flex; gap:8px; align-items:center; cursor:pointer;">
                    <checkbox-mock
                        .checked=${this._acceptedTerms}
                        @change=${(e: Event) => { this._acceptedTerms = detail<{ checked: boolean }>(e).checked; }}
                    ></checkbox-mock>
                    <span data-field-label>I accept the terms <span class="req">*</span></span>
                </form-field-mock>

                <button type="submit">Submit</button>

                <div class="summary" aria-live="polite">${JSON.stringify({
            name: this._name,
            email: this._email,
            notes: this._notes,
            delivery: this._delivery,
            channels: this._channels,
            acceptedTerms: this._acceptedTerms,
            submitted: this._submitted,
        }, null, 2)}</div>
            </form>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: DemoFormMock;
    }
}
