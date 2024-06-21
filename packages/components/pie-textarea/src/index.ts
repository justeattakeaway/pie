import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';

import { RtlMixin, defineCustomElement, FormControlMixin } from '@justeattakeaway/pie-webc-core';

import styles from './textarea.scss?inline';
import { TextareaProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-textarea';

/**
 * @tagname pie-textarea
 */
export class PieTextarea extends FormControlMixin(RtlMixin(LitElement)) implements TextareaProps {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    @property({ type: Boolean, reflect: true })
    public disabled?: TextareaProps['disabled'];

    /**
     * Called after the disabled state of the element changes,
     * either because the disabled attribute of this element was added or removed;
     * or because the disabled state changed on a <fieldset> that's an ancestor of this element.
     * @param disabled - The latest disabled state of the textarea.
     */
    public formDisabledCallback (disabled: boolean): void {
        this.disabled = disabled;
    }

    render () {
        const {
            disabled,
        } = this;

        return html`
            <textarea
                data-test-id="textarea-component"
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
