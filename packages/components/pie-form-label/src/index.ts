import {
    type TemplateResult, html, nothing, unsafeCSS,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { ifDefined } from 'lit/directives/if-defined.js';
import { RtlMixin, safeCustomElement, type PIEInputElement } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import styles from './form-label.scss?inline';
import { type FormLabelProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-form-label';

/**
 * @tagname pie-form-label
 */
@safeCustomElement('pie-form-label')
export class PieFormLabel extends RtlMixin(PieElement) implements FormLabelProps {
    @property({ type: String, reflect: true })
    public for: FormLabelProps['for'];

    @property({ type: String })
    public optional: FormLabelProps['optional'];

    @property({ type: String })
    public trailing: FormLabelProps['trailing'];

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
                        <span class="c-formLabel-leading" data-test-id="pie-form-label-leading"><slot></slot></span>
                        ${!isRTL ? this._renderOptionalLabel() : nothing}
                    </div>
                    ${trailing ? html`<span class="c-formLabel-trailing" data-test-id="pie-form-label-trailing">${trailing}</span>` : nothing}
            </label>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieFormLabel;
    }
}
