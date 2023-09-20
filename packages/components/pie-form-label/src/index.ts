import {
    LitElement, html, nothing, unsafeCSS,
} from 'lit';
import { property } from 'lit/decorators.js';
import styles from './form-label.scss?inline';
import { FormLabelProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-form-label';

export class PieFormLabel extends LitElement implements FormLabelProps {
    @property({ type: String, reflect: true })
    public for?: string;

    @property({ type: String })
    public optional?: string;

    @property({ type: String })
    public trailing?: string;

    render () {
        const {
            optional,
            trailing,
        } = this;

        return html`
            <label
                data-test-id="pie-form-label"
                class="pie-form-label"
                for=${this.for}>
                    <div>
                        <slot></slot>
                        ${optional ? html`<span class="pie-form-label-optional">${optional}</span>` : nothing}
                    </div>
                    ${trailing ? html`<span class="pie-form-label-trailing">${trailing}</span>` : nothing}
            </label>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieFormLabel);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieFormLabel;
    }
}
