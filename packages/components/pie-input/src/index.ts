import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { validPropertyValues, RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './input.scss?inline';
import { types, InputProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-input';

/**
 * @tagname pie-input
 */
export class PieInput extends RtlMixin(LitElement) implements InputProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @property({ type: String, reflect: true })
    @validPropertyValues(componentSelector, types, 'text')
    public type: InputProps['type'] = 'text';

    render () {
        const { type } = this;

        return html`<input
            type=${ifDefined(type)}
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
