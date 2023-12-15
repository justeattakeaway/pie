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
        if (target) {
            console.log('focusing input');
            (target as PIEInputElement).focus();
            if ('checked' in target && target.checked !== undefined) {
                console.log('toggling input');
                (target as PIEInputElement).checked = !(target as HTMLInputElement).checked;
                (target as PIEInputElement).onChange(new Event('change'), ((target as PIEInputElement).checked as boolean));
                console.log('target checked state: ', (target as HTMLInputElement).checked);
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
