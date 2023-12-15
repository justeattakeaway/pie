import {
    LitElement, TemplateResult, html, nothing, unsafeCSS,
} from 'lit';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import styles from './form-label.scss?inline';
import { FormLabelProps } from './defs';

type PIEInputElement = Partial<HTMLInputElement> & {
    focus: () => void,
    onChange: (event: Event, checkedOverride: boolean | null) => void
};

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
        const target = document.querySelector(`#${this.for}`);
        if (!target) {
            return;
        }

        console.log('focusing input');
        if ('focus' in target) {
            (target as PIEInputElement).focus();
        }

        // Check if target is a checkbox-like element (has 'checked' property)
        if ('checked' in target) {
            const inputTarget = target as PIEInputElement & { checked?: boolean };
            console.log('toggling input');

            if (inputTarget.checked !== undefined) {
                inputTarget.checked = !inputTarget.checked;
                inputTarget.onChange?.(new Event('change'), inputTarget.checked);
                console.log('target checked state: ', inputTarget.checked);
            }
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
                for=${this.for}>
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
