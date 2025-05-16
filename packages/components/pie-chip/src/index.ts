import {
    html, unsafeCSS, type TemplateResult, nothing,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';

import {
    validPropertyValues, dispatchCustomEvent,
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import styles from './chip.scss?inline';
import {
    type ChipProps, variants, ON_CHIP_CLOSE_EVENT, defaultProps,
} from './defs';
import '@justeattakeaway/pie-icons-webc/dist/IconCloseCircleFilled.js';
import '@justeattakeaway/pie-spinner';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-chip';

/**
 * @tagname pie-chip
 * @slot icon - The icon slot
 * @slot - Default slot
 * @event {CustomEvent} pie-chip-close - when a user clicks close button.
 */
@safeCustomElement('pie-chip')
export class PieChip extends PieElement implements ChipProps {
    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: Boolean })
    public isSelected = defaultProps.isSelected;

    @property({ type: Boolean })
    public isLoading = defaultProps.isLoading;

    @property({ type: Boolean })
    public isDismissible = defaultProps.isDismissible;

    @property({ type: Object })
    public aria: ChipProps['aria'];

    /**
     * Handler to prevent click events
     * when the chip is disabled or dismissible
     *
     * @private
     */
    private onClickHandler (event: Event) {
        if (this.disabled || this.isDismissible) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

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
     * Handles click on a close button by dispatching a custom event
     *
     * @private
     */
    private _handleCloseButtonClick () : void {
        dispatchCustomEvent(this, ON_CHIP_CLOSE_EVENT);
    }

    /**
     * Template for the dismissible state
     *
     * @private
     */
    private renderCloseButton (): TemplateResult {
        return html`
                    <button
                        @click="${this._handleCloseButtonClick}"
                        ?disabled=${this.disabled}
                        aria-label="${ifDefined(this.aria?.close)}"
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
        const showCloseButton = isDismissible && isSelected;

        const classes = {
            'c-chip': true,
            [`c-chip--${variant}`]: true,
            'c-chip--selected': isSelected,
            'is-dismissible': showCloseButton,
            'is-disabled': disabled,
            'is-loading': isLoading,
        };

        return html`
            <div
                role="${ifDefined(showCloseButton ? undefined : 'button')}"
                tabindex="${ifDefined(showCloseButton ? undefined : '0')}"
                aria-atomic="true"
                aria-busy="${isLoading}"
                aria-current="${isSelected}"
                aria-label="${ifDefined(this.aria?.label)}"
                aria-live="polite"
                class=${classMap(classes)}
                data-test-id="pie-chip"
                @click="${this.onClickHandler}">
                    <slot name="icon"></slot>
                    ${isLoading ? this.renderSpinner() : nothing}
                    <slot></slot>
                    ${showCloseButton ? this.renderCloseButton() : nothing}
            </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieChip;
    }
}
