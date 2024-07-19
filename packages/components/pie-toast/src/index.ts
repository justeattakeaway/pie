import {
    LitElement,
    html,
    unsafeCSS,
    nothing,
    type TemplateResult,
    type PropertyValues,
} from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
    RtlMixin,
    defineCustomElement,
    dispatchCustomEvent,
    validPropertyValues,
} from '@justeattakeaway/pie-webc-core';
import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';

import '@justeattakeaway/pie-icons-webc/dist/IconInfoCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconAlertCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconAlertTriangle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCheckCircle.js';

import '@justeattakeaway/pie-button';

import styles from './toast.scss?inline';
import {
    ToastProps,
    componentSelector,
    componentClass,
    ActionProps,
    ON_TOAST_CLOSE_EVENT,
    ON_TOAST_OPEN_EVENT,
    ON_TOAST_LEADING_ACTION_CLICK_EVENT,
    defaultProps,
    variants,
} from './defs';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-toast
 */
export class PieToast extends RtlMixin(LitElement) implements ToastProps {
    @property()
    public message: ToastProps['message'] = '';

    @property({ type: Boolean })
    public isOpen = defaultProps.isOpen;

    @property()
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant: NonNullable<ToastProps['variant']> = defaultProps.variant;

    @property({ type: Boolean })
    public isStrong = defaultProps.isStrong;

    @property({ type: Boolean })
    public isDismissible = defaultProps.isDismissible;

    @property({ type: Boolean })
    public isMultiline = defaultProps.isMultiline;

    @property({ type: Object })
    public leadingAction: ToastProps['leadingAction'];

    @query('pie-button') actionButton?: HTMLElement;

    private _actionButtonOffset = 0;

    private _messageAreaMaxWidth = 0;

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    /**
     * Calculates and returns the width of the message based on the toast properties.
     *
     * @param {boolean} hasIcon - Indicates if the toast has an icon.
     * @param {boolean} isMultiline - Indicates if the message is multiline.
     * @param {boolean} hasActionButton - Indicates if the toast has an action button.
     * @param {boolean} hasCloseIcon - Indicates if the toast has a close icon.
     *
     * @returns {number} - The width of the message in pixels.
     */
    private getMessageMaxWidth (
        hasIcon: boolean,
        isMultiline: boolean,
        hasActionButton: boolean,
        hasCloseIcon: boolean,
    ): number {
        const iconOffset = 20;
        const closeIconOffset = 32;
        const gap = 8;
        const toastMaxWidthWithoutPadding = 392;

        let offset = 0;

        if (hasIcon) {
            offset += iconOffset + gap;
        }

        if (!isMultiline && hasActionButton) {
            offset += this._actionButtonOffset + gap;
        }

        if (hasCloseIcon) {
            offset += closeIconOffset + gap;
        }

        return toastMaxWidthWithoutPadding - offset;
    }

    /**
     * Lifecycle method executed when component is updated.
     * It dispatches an event if toast is opened.
     * It calculates _messageAreaMaxWidth
     */
    protected async updated (_changedProperties: PropertyValues<this>) {
        if (_changedProperties.has('isOpen') && this.isOpen) {
            dispatchCustomEvent(this, ON_TOAST_OPEN_EVENT, { targetNotification: this });
        }

        await this.updateComplete;

        if (this.actionButton) {
            this._actionButtonOffset = this.actionButton.offsetWidth;
        }

        const hasIcon = this.variantHasIcon(this.variant);

        this._messageAreaMaxWidth = this.getMessageMaxWidth(hasIcon, this.isMultiline, !!this.leadingAction?.text, this.isDismissible);

        if (
            _changedProperties.has('variant') ||
            _changedProperties.has('isStrong') ||
            _changedProperties.has('message') ||
            _changedProperties.has('isDismissible') ||
            _changedProperties.has('isMultiline') ||
            _changedProperties.has('leadingAction')) {
            this.requestUpdate();
        }
    }

    /**
     * It handle the action button action.
     *
     * @private
     */
    private handleActionClick () {
        dispatchCustomEvent(this, ON_TOAST_LEADING_ACTION_CLICK_EVENT, { targetNotification: this });
    }

    /**
     * Render the action button depending on action type and its action.
     *
     * @param {ActionProps} action - The action properties.
     *
     * @returns {TemplateResult | typeof nothing} - The rendered action button or nothing if the action text is not defined.
     * @private
     */
    private renderActionButton (action: ActionProps) : TemplateResult | typeof nothing {
        const { text, ariaLabel } = action;

        return html`
            <pie-button
                variant="ghost-inverse"
                size="xsmall"
                aria-label="${ariaLabel || nothing}"
                @click="${() => this.handleActionClick()}"
                data-test-id="${componentSelector}-leading-action"
                type="button">
                ${text}
            </pie-button>
        `;
    }

    /**
     * Template for the footer area.
     * It should display only when isMultiline is true as well if has action button.
     * Called within the main render function.
     *
     * @private
     */
    private renderFooter () {
        const { leadingAction } = this;
        return html`
            <footer class="${componentClass}-footer" data-test-id="${componentSelector}-footer" >
                ${leadingAction ? this.renderActionButton(leadingAction) : nothing}
            </footer>
        `;
    }

    /**
     * Template for the close button element. Called within the
     * main render function.
     *
     * @private
     */
    private renderCloseButton (): TemplateResult {
        return html`
            <pie-icon-button
                variant="ghost-inverse"
                size="xsmall"
                data-test-id="${componentSelector}-close"
                @click="${this.closeToastComponent}">
                <icon-close></icon-close>
            </pie-icon-button>`;
    }

    /**
     * Template for the toast message. Called within the
     * main render function.
     *
     * @param {string} message - The message to be displayed.
     * @param {number} messageAreaMaxWidth - The maximum width of the message area calculated in the lifecycle method.
     *
     * @private
     */
    private renderMessage (message: string, messageAreaMaxWidth: number): TemplateResult {
        return html`
            <span style="max-width: ${messageAreaMaxWidth}px" data-test-id="${componentSelector}-message">
                ${message}
            </span>
        `;
    }

    /**
     * Util method responsible to close the component.
     * It handles the action when user clicks in the close button and triggers an event when is executed.
     *
     * @private
     */
    private closeToastComponent () {
        this.isOpen = false;
        dispatchCustomEvent(this, ON_TOAST_CLOSE_EVENT, { targetNotification: this });
    }

    /**
     * Util method that returns an icon from a variant that has default icon.
     *
     * @private
     */
    private getVariantIcon () {
        switch (this.variant) {
            case 'info':
                return html`<icon-info-circle class="icon" size="s" data-test-id="${componentSelector}-heading-icon-info"></icon-info-circle>`;
            case 'success':
                return html`<icon-check-circle class="icon" size="s" data-test-id="${componentSelector}-heading-icon-success"></icon-check-circle>`;
            case 'warning':
                return html`<icon-alert-triangle class="icon" size="s" data-test-id="${componentSelector}-heading-icon-warning"></icon-alert-triangle>`;
            case 'error':
                return html`<icon-alert-circle class="icon" size="s" data-test-id="${componentSelector}-heading-icon-error"></icon-alert-circle>`;
            default:
                return nothing as never;
        }
    }

    /**
     * Util method that returns true if the variant has an icon.
     *
     * @param {typeof variants[number]} variant - The variant to check if has icon.
     *
     * @private
     */
    private variantHasIcon (variant: typeof variants[number]) {
        return ['info', 'success', 'warning', 'error'].includes(variant);
    }

    render () {
        const {
            isOpen,
            variant,
            message,
            isDismissible,
            leadingAction,
            isMultiline,
            isStrong,
            _messageAreaMaxWidth,
        } = this;

        if (!isOpen) {
            return nothing;
        }

        const componentWrapperClasses = {
            [componentClass]: true,
            [`variant-${variant}`]: true,
            'is-strong': isStrong,
        };

        const messageAreaClasses = {
            [`${componentClass}-messageArea`]: true,
            'is-multiline': isMultiline,
        };

        return html`
            <div data-test-id="${componentSelector}" class="${classMap(componentWrapperClasses)}">
                <div class="${componentClass}-contentArea">
                    <div class="${classMap(messageAreaClasses)}">
                        ${this.variantHasIcon(variant) ? this.getVariantIcon() : nothing}
                        ${message === '' ? nothing : this.renderMessage(message, _messageAreaMaxWidth)} 
                    </div>
                    <div class="${componentClass}-actionsArea">
                        ${!isMultiline && leadingAction?.text ? this.renderActionButton(leadingAction) : nothing}
                        ${isDismissible ? this.renderCloseButton() : nothing}
                    </div>
                </div>
                ${isMultiline && leadingAction?.text ? this.renderFooter() : nothing}
            </div>`;
    }
}

defineCustomElement(componentSelector, PieToast);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieToast;
    }
}
