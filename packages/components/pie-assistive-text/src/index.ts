import {
    LitElement, html, unsafeCSS, nothing, TemplateResult,
} from 'lit';

import { property } from 'lit/decorators.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@justeattakeaway/pie-icons-webc/dist/IconAlertCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCheckCircle.js';

import styles from './assistive-text.scss?inline';
import { AssistiveTextProps, variants, defaultProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-assistive-text';

/**
 * @tagname pie-assistive-text
 * @slot - Default slot
 */
export class PieAssistiveText extends LitElement implements AssistiveTextProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant?: AssistiveTextProps['variant'] = defaultProps.variant;

    /**
 * Renders the assistive-text icon content.
 * @private
 */
    private renderIcon (): TemplateResult {
        const { variant } = this;
        return html`
            ${variant === 'success' ? html`<icon-check-circle class="c-assistiveText-icon" size="s" ></icon-check-circle>` : nothing}
            ${variant === 'error' ? html`<icon-alert-circle class="c-assistiveText-icon" size="s"></icon-alert-circle>` : nothing}`;
    }

    render () {
        const {
            variant,
        } = this;

        return html`
        <p
            class="c-assistiveText"
            data-test-id="pie-assistive-text"
            variant=${ifDefined(variant)}>
            ${this.renderIcon()}
            <slot></slot>
        </p>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieAssistiveText);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieAssistiveText;
    }
}
