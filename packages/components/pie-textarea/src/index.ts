import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './textarea.scss?inline';
import { TextareaProps, defaultProps } from './defs';

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

    @property({ type: String })
    public size?: TextareaProps['size'] = defaultProps.size;

    render () {
        const {
            disabled,
            size,
        } = this;

        return html`
            <div
                class="c-textarea"
                data-test-id="pie-textarea-shell"
                data-pie-size=${ifDefined(size)}>
                <textarea
                    data-test-id="pie-textarea"
                    ?disabled=${disabled}
                ></textarea>
            </div>`;
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
