import {
    LitElement, TemplateResult, html, nothing, unsafeCSS,
} from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { RtlMixin, defineCustomElement, PIEInputElement } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import styles from './form-label.scss?inline';
import { FormLabelProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-form-label';

/**
 * @tagname pie-form-label
 */
export class PieFormLabel extends RtlMixin(LitElement) implements FormLabelProps {
    @property({ type: String, reflect: true })
    public for?: string;

    @property({ type: String })
    public optional?: string;

    @property({ type: String })
    public trailing?: string;

    private _renderOptionalLabel (): TemplateResult | typeof nothing {
        const { optional } = this;

        return optional ? html`<span class="c-formLabel-optional">${optional}</span>` : nothing;
    }

    private handleClick () {
        if (this.for) {
            const target = document.querySelector(`#${this.for}`) as unknown as PIEInputElement;

            const canReceiveFocus = target && target.focusTarget &&
                'focus' in target.focusTarget &&
                'click' in target.focusTarget;

            if (!canReceiveFocus) return;

            target.focusTarget.focus();
            target.focusTarget.click();
        }
    }

    render () {
        const {
            trailing,
            isRTL,
        } = this;

        return html`
            <label
                @click=${this.handleClick}
                data-test-id="pie-form-label"
                class="c-formLabel"
                for=${ifDefined(this.for)}>
                    <div>
                        ${isRTL ? this._renderOptionalLabel() : nothing}
                        <span class="c-formLabel-leading"><slot></slot></span>
                        ${!isRTL ? this._renderOptionalLabel() : nothing}
                    </div>
                    ${trailing ? html`<span class="c-formLabel-trailing">${trailing}</span>` : nothing}
            </label>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieFormLabel);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieFormLabel;
    }
}
