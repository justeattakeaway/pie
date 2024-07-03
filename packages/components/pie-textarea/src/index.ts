import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';

import { validPropertyValues, RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './textarea.scss?inline';
import {
    TextareaProps, defaultProps, sizes, resizeModes,
} from './defs';

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
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, resizeModes, defaultProps.resize)
    public resize = defaultProps.resize;

    render () {
        const {
            disabled,
            resize,
            size,
        } = this;

        return html`
            <div
                class="c-textarea"
                data-test-id="pie-textarea-shell"
                data-pie-size=${size}
                data-pie-resize=${resize}>
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
