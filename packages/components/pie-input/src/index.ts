import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import {
    validPropertyValues, RtlMixin, defineCustomElement, FormControlMixin,
} from '@justeattakeaway/pie-webc-core';

import styles from './input.scss?inline';
import { types, InputProps, PIE_INPUT_EVENT } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-input';

/**
 * @tagname pie-input
 * @event {CustomEvent} pie-input - when the input value is changed.
 */
export class PieInput extends FormControlMixin(RtlMixin(LitElement)) implements InputProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @property({ type: String, reflect: true })
    @validPropertyValues(componentSelector, types, 'text')
    public type: InputProps['type'] = 'text';

    @property({ type: String })
    public value = '';

    /**
     * Handles the input event and dispatches a custom event with the input event data and input value.
     * @param event - The input event.
     */
    private handleInput = (event: InputEvent) => {
        this.value = (event.target as HTMLInputElement).value;

        this.dispatchEvent(new CustomEvent(
            PIE_INPUT_EVENT,
            {
                detail: {
                    data: event.data,
                    value: this.value,
                },
                bubbles: true,
                composed: true,
            },
        ));
    };

    render () {
        const { type, value } = this;

        return html`<input
            type=${ifDefined(type)}
            .value=${live(value)}
            @input=${this.handleInput}
            data-test-id="pie-input">`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieInput);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieInput;
    }
}
