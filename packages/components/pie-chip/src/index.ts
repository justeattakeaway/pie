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
    type ChipProps,
    variants,
    types,
    ON_CHIP_CLOSE_EVENT,
    ON_CHIP_SELECTED_EVENT,
    defaultProps,
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
 * @event {CustomEvent} pie-chip-close - when a user clicks the close button.
 * @event {CustomEvent} pie-chip-selected - when the chip is selected.
 */
@safeCustomElement('pie-chip')
export class PieChip extends PieElement implements ChipProps {
    private readonly _id = `pie-chip-${crypto.randomUUID()}`;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, types, defaultProps.type)
    public type = defaultProps.type;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: Boolean, reflect: true })
    public isSelected = defaultProps.isSelected;

    @property({ type: Boolean })
    public isLoading = defaultProps.isLoading;

    @property({ type: Boolean })
    public isDismissible = defaultProps.isDismissible;

    @property({ type: Object })
    public aria: ChipProps['aria'];

    /**
     * Handles the change event for the native checkbox.
     * Updates the isSelected property and dispatches an event.
     * @private
     */
    private _onCheckboxChange (event: Event) {
        const target = event.target as HTMLInputElement;
        this.isSelected = target.checked;
        dispatchCustomEvent(this, ON_CHIP_SELECTED_EVENT, { isSelected: this.isSelected });
    }

    /**
     * Template for the loading state spinner.
     * @private
     */
    private _renderSpinner (): TemplateResult {
        const spinnerVariant = this.isSelected ? 'inverse' : 'secondary';

        return html`
            <pie-spinner
                class="c-chip-spinner"
                size="small"
                variant="${spinnerVariant}">
            </pie-spinner>`;
    }

    /**
     * Renders the core content of the chip (icon, text, spinner).
     * @private
     */
    private _renderContent (): TemplateResult {
        return html`
            <slot name="icon"></slot>
            ${this.isLoading ? this._renderSpinner() : nothing}
            <slot></slot>
        `;
    }

    /**
     * Template for the checkbox variant.
     * This uses a visually hidden native checkbox for accessibility and form integration.
     * @private
     */
    private _renderCheckbox (): TemplateResult {
        const {
            variant,
            disabled,
            isSelected,
            isLoading,
        } = this;

        const classes = {
            'c-chip': true,
            [`c-chip--${variant}`]: true,
            'c-chip--selected': isSelected,
            'is-disabled': disabled,
            'is-loading': isLoading,
        };

        return html`
            <label
                for="${this._id}"
                class=${classMap(classes)}
                data-test-id="pie-chip">
                <input
                    data-test-id="chip-checkbox-input"
                    type="checkbox"
                    id="${this._id}"
                    aria-label="${ifDefined(this.aria?.label)}"
                    ?checked=${isSelected}
                    ?disabled=${disabled || isLoading}
                    @change="${this._onCheckboxChange}">
                ${this._renderContent()}
            </label>`;
    }

    /**
     * Template for the dismissible variant.
     * @private
     */
    private _renderDismissible (): TemplateResult {
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

        const onClickHandler = (event: Event) => {
            if (this.disabled) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const handleCloseButtonClick = () : void => {
            dispatchCustomEvent(this, ON_CHIP_CLOSE_EVENT);
        };

        return html`
            <div
                data-test-id="chip-static"
                role="${ifDefined(showCloseButton ? undefined : 'button')}"
                tabindex="${ifDefined(showCloseButton ? undefined : '0')}"
                aria-atomic="true"
                aria-busy="${isLoading}"
                aria-current="${isSelected}"
                aria-label="${ifDefined(this.aria?.label)}"
                aria-live="polite"
                class=${classMap(classes)}
                data-test-id="pie-chip"
                @click="${onClickHandler}">
                ${this._renderContent()}
                ${showCloseButton ? html`<button
                        @click="${handleCloseButtonClick}"
                        ?disabled=${this.disabled}
                        aria-label="${ifDefined(this.aria?.close)}"
                        class="c-chip-closeBtn"
                        data-test-id="chip-close-button">
                        <icon-close-circle-filled size="m"></icon-close-circle-filled>
                    </button>` : nothing}
            </div>`;
    }

    render () {
        if (this.isDismissible) {
            return this._renderDismissible();
        }

        switch (this.type) {
            case 'checkbox':
                return this._renderCheckbox();
            default:
                return this._renderCheckbox();
        }
    }

    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieChip;
    }
}
