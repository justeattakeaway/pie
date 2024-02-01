import {
    LitElement, html, unsafeCSS, nothing, TemplateResult,
} from 'lit';

import { property } from 'lit/decorators.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import '@justeattakeaway/pie-icons-webc/IconAlertCircle';
import '@justeattakeaway/pie-icons-webc/IconCheckCircle';

import styles from './assistive-text.scss?inline';
import { AssistiveTextProps, variants } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-assistive-text';

/**
 * @tagname pie-assistive-text
 */
export class PieAssistiveText extends LitElement implements AssistiveTextProps {
    @property()
    @validPropertyValues(componentSelector, variants, 'default')
    public variant?: AssistiveTextProps['variant'] = 'default';

    /**
 * Renders the assistive-text icon content.
 * @private
 */
    private renderContent (): TemplateResult {
        const { variant } = this;
        return html`
            ${variant === 'success' ? html`<icon-check-circle size="s" />` : nothing}
            ${variant === 'error' ? html`<icon-alert-circle size="s" />` : nothing}`;
    }

    render () {
        const {
            variant,
        } = this;

        return html`
        <p 
            class="c-assistiveText"
            data-test-id="pie-assistive-text"
            variant=${variant || 'default'}>
            <span class="c-assistiveText-content">
            ${this.renderContent()}
            <slot></slot>
            </span>
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
