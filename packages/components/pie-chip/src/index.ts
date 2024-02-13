import {
    LitElement, html, unsafeCSS, TemplateResult, nothing,
} from 'lit';
import { property } from 'lit/decorators.js';

import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';
import styles from './chip.scss?inline';
import { ChipProps, variants } from './defs';
import '@justeattakeaway/pie-icons-webc/IconCloseCircleFilled';
import '@justeattakeaway/pie-spinner';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-chip';

/**
 * @tagname pie-chip
 * @slot icon - The icon slot
 * @slot - Default slot
 */
export class PieChip extends LitElement implements ChipProps {
    @property()
    @validPropertyValues(componentSelector, variants, 'primary')
    public variant: ChipProps['variant'] = 'default';

    @property({ type: Boolean })
    public disabled = false;

    @property({ type: Boolean })
    public isSelected = false;

    @property({ type: Boolean })
    public isLoading = false;

    @property({ type: Boolean })
    public isDismissible = false;

    /**
     * Template for the loading state
     *
     * @private
     */
    private renderSpinner (): TemplateResult {
        const { isSelected } = this;
        const spinnerVariant = isSelected ? 'inverse' : 'secondary';

        return html`
                    <pie-spinner
                        class="c-chip-spinner"
                        size="small"
                        variant="${spinnerVariant}">
                    </pie-spinner>`;
    }

    /**
     * Template for the dismissible state
     *
     * @private
     */
    private renderCloseButton (): TemplateResult {
        return html`
                    <button 
                        class="c-chip-closeBtn"
                        data-test-id="chip-close-button">
                        <icon-close-circle-filled size="m"></icon-close-circle-filled>
                    </button>`;
    }

    render () {
        const {
            variant,
            disabled,
            isSelected,
            isLoading,
            isDismissible,
        } = this;

        return html`
            <div
                class="c-chip"
                role="button"
                tabindex="0"
                data-test-id="pie-chip"
                variant="${variant}"
                ?disabled="${disabled}"
                ?isSelected="${isSelected}"
                ?isLoading="${isLoading}"
                ?isDismissible="${isDismissible}">
                    <slot name="icon"></slot>
                    ${isLoading ? this.renderSpinner() : nothing}
                    <slot></slot> 
                    ${isDismissible && isSelected ? this.renderCloseButton() : nothing}        
            </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieChip);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieChip;
    }
}
