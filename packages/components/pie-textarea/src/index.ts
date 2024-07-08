import {
    LitElement, html, unsafeCSS, PropertyValues,
} from 'lit';
import { property, query } from 'lit/decorators.js';

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
    public disabled = defaultProps.disabled;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, resizeModes, defaultProps.resize)
    public resize = defaultProps.resize;

    @query('textarea')
    private _textarea!: HTMLTextAreaElement;

    private handleResize () {
        if (this.resize === 'auto') {
            this._textarea.style.height = 'auto';
            this._textarea.style.height = `${this._textarea.scrollHeight + 2}px`; // +2 for border thicknesses
        }
    }

    updated (changedProperties: PropertyValues<this>) {
        if (this.resize === 'auto' && (changedProperties.has('resize') || changedProperties.has('size'))) {
            this.handleResize();
        }
    }

    render () {
        const {
            disabled,
            resize,
            size,
        } = this;

        return html`
            <div
                class="c-textareaWrapper"
                data-test-id="pie-textarea-wrapper"
                data-pie-size="${size}"
                data-pie-resize="${resize}">
                <textarea
                    data-test-id="pie-textarea"
                    @input=${this.handleResize}
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
