import {
    html, unsafeCSS, type TemplateResult, nothing,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';

import {
    validPropertyValues,
    safeCustomElement,
    DelegatesFocusMixin,
} from '@justeattakeaway/pie-webc-core';
import styles from './chip.scss?inline';
import {
    type ChipProps,
    variants,
    types,
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
 * @event {Event} close - when a user clicks the close button.
 * @event {Event} change - when a user interacts with the chip of type checkbox.
 */
@safeCustomElement('pie-chip')
export class PieChip extends DelegatesFocusMixin(PieElement) implements ChipProps {
    private readonly _id = `pie-chip-${crypto.randomUUID()}`;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, types, defaultProps.type)
    public type = defaultProps.type;

    @property({ type: Boolean, reflect: true })
    public disabled = defaultProps.disabled;

    @property({ type: Boolean, reflect: true })
    public isSelected = defaultProps.isSelected;

    @property({ type: Boolean, reflect: true })
    public isLoading = defaultProps.isLoading;

    @property({ type: Boolean })
    public isDismissible = defaultProps.isDismissible;

    @property({ type: Object })
    public aria: ChipProps['aria'];

    /**
     * Handles the change event for the native checkbox.
     * This component is controlled, so it does not set its own state.
     * It simply forwards the native change event.
     * @private
     */
    private _onCheckboxChange () {
        // The original event from the input does not bubble past the shadow DOM boundary.
        // We create and dispatch a new 'change' event to ensure it bubbles and is composed,
        // allowing consumers to respond to the interaction.
        const changeEvent = new Event('change', { bubbles: true, composed: true });
        this.dispatchEvent(changeEvent);
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
            aria,
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
            <input
                data-test-id="chip-checkbox-input"
                type="checkbox"
                id="${this._id}"
                aria-label="${ifDefined(aria?.label)}"
                ?checked=${isSelected}
                ?disabled=${disabled}
                @change="${this._onCheckboxChange}">
            <label
                for="${this._id}"
                class=${classMap(classes)}
                data-test-id="pie-chip">
                ${this._renderContent()}
            </label>`;
    }

    private _renderButton (): TemplateResult {
        const {
            aria,
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
            <button
                id="${this._id}"
                data-test-id="chip-button"
                type="button"
                class=${classMap(classes)}
                aria-busy="${ifDefined(isLoading)}"
                aria-haspopup="${ifDefined(aria?.haspopup)}"
                aria-expanded="${ifDefined(aria?.expanded)}"
                aria-pressed="${isSelected}"
                aria-label="${ifDefined(aria?.label)}"
                ?disabled=${disabled}
                data-test-id="pie-chip">
                ${this._renderContent()}
            </button>`;
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
            const closeEvent = new Event('close', { bubbles: true, composed: true });
            this.dispatchEvent(closeEvent);
        };

        return html`
            <div
                data-test-id="chip-static"
                role="${ifDefined(showCloseButton ? undefined : 'button')}"
                tabindex="${ifDefined(showCloseButton ? undefined : '0')}"
                aria-busy="${isLoading}"
                aria-current="${isSelected}"
                aria-label="${ifDefined(this.aria?.label)}"
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
            case 'button':
                return this._renderButton();
            case 'checkbox':
                return this._renderCheckbox();
            default:
                return this._renderButton();
        }
    }

    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieChip;
    }
}
