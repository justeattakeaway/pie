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
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';
import '@justeattakeaway/pie-icons-webc/dist/IconInfoCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconAlertCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconAlertTriangle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCheckCircle.js';

import styles from './toast.scss?inline';
import {
    componentSelector,
    componentClass,
    defaultProps,
    variants,
    ON_TOAST_CLOSE_EVENT,
    ON_TOAST_OPEN_EVENT,
    ON_TOAST_LEADING_ACTION_CLICK_EVENT,
    type ToastProps,
    type ActionProps,
} from './defs';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-toast
 * @event {CustomEvent} pie-toast-close - when a user clicks close button or when the toast auto dismiss.
 * @event {CustomEvent} pie-toast-open - when the toast is opened.
 * @event {CustomEvent} pie-toast-leading-action-click - when the user interacts with the leading action.
 */
export class PieToast extends RtlMixin(LitElement) implements ToastProps {
    @property({ type: String })
    public message = defaultProps.message;

    @property({ type: Boolean })
    public isOpen = defaultProps.isOpen;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: Boolean })
    public isStrong = defaultProps.isStrong;

    @property({ type: Boolean })
    public isDismissible = defaultProps.isDismissible;

    @property({ type: Boolean })
    public isMultiline = defaultProps.isMultiline;

    @property({ type: Object })
    public leadingAction: ToastProps['leadingAction'];

    @property({ type: Number })
    public duration = defaultProps.duration;

    @query('pie-button')
    private actionButton?: HTMLElement;

    @query('pie-icon-button')
    private closeButton?: HTMLElement;

    private _actionButtonOffset = 0;

    private _messageAreaMaxWidth = 0;

    private _timeoutId: NodeJS.Timeout | null = null;

    private _abortController: AbortController | null = null;

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    /**
     * Create a timeout function and set its id into a private attribute.
     *
     * @private
     */
    private setAutoDismiss () {
        if (this.duration === null) {
            return;
        }

        this._timeoutId = setTimeout(() => {
            this.closeToastComponent();
        }, this.duration);
    }

    /**
     * If the _abortController is set, it aborts all event
     * listeners in this controller and the controller turns into null.
     *
     * @private
     */
    private abortAndCleanEventListeners () {
        if (this._abortController) {
            this._abortController.abort();
            this._abortController = null;
        }
    }

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
     * Adds event listeners to the specified element for handling the auto dismiss behavior.
     *
     * @param {typeof this | HTMLElement | undefined} element - The element to which the listeners will be added. It can be the current instance, an HTMLElement, or undefined.
     * @param {keyof HTMLElementEventMap} inEvent - The event type to listen for when entering the element. (e.g., 'mouseenter', 'focusin').
     * @param {keyof HTMLElementEventMap} outEvent - The event type to listen for when leaving the element. (e.g., 'mouseleave', 'focusout').
     * @param {AddEventListenerOptions['signal']} abortSignal - An AbortSignal that can be used to remove the event listeners.
     *
     * @private
     */
    private addListenersToElement (
        element: typeof this | HTMLElement | undefined,
        inEvent: keyof HTMLElementEventMap,
        outEvent: keyof HTMLElementEventMap,
        abortSignal: AddEventListenerOptions['signal'],
    ) {
        if (element) {
            element.addEventListener(inEvent, () => {
                if (this._timeoutId) {
                    clearTimeout(this._timeoutId);
                }
            }, { signal: abortSignal });
            element.addEventListener(outEvent, () => {
                this.setAutoDismiss();
            }, { signal: abortSignal });
        }
    }

    /**
     * It creates all event listeners to handle the auto-dismiss capability
     * as well the controller responsible to remove the events when needed.
     *
     * @private
     */
    private createAutoDismissEventListeners () {
        this._abortController = new AbortController();

        this.setAutoDismiss();

        const { signal } = this._abortController;

        this.addListenersToElement(this.actionButton, 'focus', 'focusout', signal);
        this.addListenersToElement(this.closeButton, 'focus', 'focusout', signal);
        this.addListenersToElement(this, 'mouseover', 'mouseout', signal);
    }

    /**
     * Lifecycle method executed when component is updated.
     * It dispatches an event if toast is opened.
     * It adds event listeners when toast is opened and if the duration is not null
     * It aborts all event listeners when toast is closed.
     * It calculates _messageAreaMaxWidth
     */
    protected async updated (_changedProperties: PropertyValues<this>) {
        if (_changedProperties.has('isOpen') && this.isOpen) {
            dispatchCustomEvent(this, ON_TOAST_OPEN_EVENT, { targetNotification: this });

            if (this.duration !== null) {
                this.createAutoDismissEventListeners();
            }
        }

        if (_changedProperties.has('isOpen') && !this.isOpen) {
            this.abortAndCleanEventListeners();
        }

        // This lifecycle method is async on purpose because we
        // need to wait for the component to complete its rendering
        // so we can calculate _messageAreaMaxWidth based on
        // existing components such as icons and action buttons.
        await this.updateComplete;

        if (this.actionButton) {
            this._actionButtonOffset = this.actionButton.offsetWidth;
        }

        const hasIcon = this.variantHasIcon(this.variant);

        this._messageAreaMaxWidth = this.getMessageMaxWidth(hasIcon, this.isMultiline, !!this.leadingAction?.text, this.isDismissible);

        // It checks if there are changes on one of the properties
        // below and requests a new update in order to repeat the
        // lifecycle and perform new calculations.
        // This will make sure that all components will re-render
        // properly on Storybook.
        if (
            _changedProperties.has('variant') ||
            _changedProperties.has('isStrong') ||
            _changedProperties.has('message') ||
            _changedProperties.has('isDismissible') ||
            _changedProperties.has('isMultiline') ||
            _changedProperties.has('leadingAction') ||
            _changedProperties.has('duration')) {
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
                variant="${this.shouldNotUseInverseBtnVariant() ? 'ghost' : 'ghost-inverse'}"
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
                variant="${this.shouldNotUseInverseBtnVariant() ? 'ghost-secondary' : 'ghost-inverse'}"
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
            <span style="--toast-message-max-width: ${messageAreaMaxWidth}px" data-test-id="${componentSelector}-message">
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
        this.abortAndCleanEventListeners();
    }

    /**
     * Util method that returns an icon from a variant that has default icon.
     *
     * @private
     */
    private getVariantIcon () {
        switch (this.variant) {
            case 'info':
                return html`<icon-info-circle class="${componentClass}-icon" size="s" data-test-id="${componentSelector}-heading-icon-info"></icon-info-circle>`;
            case 'success':
                return html`<icon-check-circle class="${componentClass}-icon" size="s" data-test-id="${componentSelector}-heading-icon-success"></icon-check-circle>`;
            case 'warning':
                return html`<icon-alert-triangle class="${componentClass}-icon" size="s" data-test-id="${componentSelector}-heading-icon-warning"></icon-alert-triangle>`;
            case 'error':
                return html`<icon-alert-circle class="${componentClass}-icon" size="s" data-test-id="${componentSelector}-heading-icon-error"></icon-alert-circle>`;
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

    /**
     * util method that returns true if the variant is warning and is strong.
     *
     * @private
     */
    private shouldNotUseInverseBtnVariant () {
        return this.variant === 'warning' && this.isStrong;
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
            isRTL,
        } = this;

        const componentWrapperClasses = {
            [componentClass]: true,
            [`${componentClass}--rtl`]: isRTL,
            [`${componentClass}--multiline`]: isMultiline,
            [`${componentClass}--${variant}`]: true,
            [`${componentClass}--strong`]: isStrong,
            [`${componentClass}--animate-in`]: isOpen,
            [`${componentClass}--animate-out`]: !isOpen,
        };

        return html`
            <div
                role="${variant === 'error' ? 'alert' : 'status'}"
                data-test-id="${componentSelector}"
                class="${classMap(componentWrapperClasses)}">
                <div class="${componentClass}-contentArea">
                    <div class="${componentClass}-messageArea">
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
