import {
    LitElement, html, unsafeCSS, PropertyValues, nothing,
} from 'lit';

import { live } from 'lit/directives/live.js';

import { property, query } from 'lit/decorators.js';
import throttle from 'lodash.throttle';

import { validPropertyValues, RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './textarea.scss?inline';
import {
    TextareaProps, defaultProps, sizes, resizeModes,
} from './defs';

import '@justeattakeaway/pie-form-label';

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
    public value = defaultProps.value;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, resizeModes, defaultProps.resize)
    public resize = defaultProps.resize;

    @property({ type: String })
    public label = defaultProps.label;

    @property({ type: Number })
    public maxLength: TextareaProps['maxLength'];

    @query('textarea')
    private _textarea!: HTMLTextAreaElement;

    private _throttledResize = throttle(() => {
        if (this.resize === 'auto') {
            this._textarea.style.height = 'auto';
            this._textarea.style.height = `${this._textarea.scrollHeight + 2}px`; // +2 for border thicknesses
        }
    }, 100);

    private handleResize () {
        this._throttledResize();
    }

    private restrictInputLength () {
        if (this.maxLength && this.value.length > this.maxLength) {
            this.value = this.value.slice(0, this.maxLength);
        }
    }

    private handleInput (event: InputEvent) {
        this.value = (event.target as HTMLInputElement).value;
        this.restrictInputLength();
        this.handleResize();
    }

    protected firstUpdated (_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.restrictInputLength();
    }

    updated (changedProperties: PropertyValues<this>) {
        if (this.resize === 'auto' && (changedProperties.has('resize') || changedProperties.has('size'))) {
            this.handleResize();
        }

        if (changedProperties.has('value')) {
            this.restrictInputLength();
        }
    }

    renderLabel (label: string, maxLength?: number) {
        const characterCount = maxLength ? `${this.value.length}/${maxLength}` : '';

        return label?.length ? html`<pie-form-label trailing=${characterCount || nothing}>${label}</pie-form-label>` : nothing;
    }

    render () {
        const {
            disabled,
            resize,
            size,
            label,
            maxLength,
            value,
        } = this;

        return html`
            <div
                class="c-textareaWrapper"
                data-test-id="pie-textarea-wrapper"
                data-pie-size="${size}"
                data-pie-resize="${resize}">
                ${this.renderLabel(label, maxLength)}
                <textarea
                    data-test-id="pie-textarea"
                    @input=${this.handleInput}
                    ?disabled=${disabled}
                    .value=${live(value)}
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
