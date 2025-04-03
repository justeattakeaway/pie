import {
    html, unsafeCSS, nothing, type TemplateResult,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property } from 'lit/decorators.js';
import { safeCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { classMap } from 'lit/directives/class-map.js';
import '@justeattakeaway/pie-icons-webc/dist/IconAlertCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCheckCircle.js';

import styles from './assistive-text.scss?inline';
import { type AssistiveTextProps, variants, defaultProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-assistive-text';

/**
 * @tagname pie-assistive-text
 * @slot - Default slot
 */
@safeCustomElement('pie-assistive-text')
export class PieAssistiveText extends PieElement implements AssistiveTextProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: Boolean })
    public isVisuallyHidden = defaultProps.isVisuallyHidden;

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
            isVisuallyHidden,
        } = this;

        const classes = {
            'c-assistiveText': true,
            'c-assistiveText--isVisuallyHidden': isVisuallyHidden,
            [`c-assistiveText--${variant}`]: true,
        };

        return html`
        <p
            class="${classMap(classes)}"
            data-test-id="pie-assistive-text">
            ${this.renderIcon()}
            <slot></slot>
        </p>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieAssistiveText;
    }
}
