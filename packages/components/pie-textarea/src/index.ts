import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';

import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './textarea.scss?inline';
import { TextareaProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-textarea';

/**
 * @tagname pie-textarea
 */
export class PieTextarea extends RtlMixin(LitElement) implements TextareaProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @property({ type: Boolean, reflect: true })
    public disabled?: TextareaProps['disabled'];

    render () {
        const {
            disabled,
        } = this;

        return html`
            <textarea
                data-test-id="pie-textarea"
                ?disabled=${live(disabled)}
            />`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieTextarea);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieTextarea;
    }
}
