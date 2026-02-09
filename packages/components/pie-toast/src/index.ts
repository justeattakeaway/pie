import {
    html,
    unsafeCSS,
    nothing,
    type TemplateResult,
    type PropertyValues,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
    dispatchCustomEvent,
    safeCustomElement,
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
@safeCustomElement('pie-toast')
export class PieToast extends PieElement implements ToastProps {
    @property({ type: String })
    public message?: string;

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
            variant,
            message,
            isDismissible,
            leadingAction,
            isMultiline,
            isStrong,
        } = this;

        const componentWrapperClasses = {
            [componentClass]: true,
            [`${componentClass}--multiline`]: isMultiline,
            [`${componentClass}--${variant}`]: true,
            [`${componentClass}--strong`]: isStrong,
        };

        return html`
            <div
                role="${variant === 'error' ? 'alert' : 'status'}"
                data-test-id="${componentSelector}"
                class="${classMap(componentWrapperClasses)}">
                <div class="${componentClass}-contentArea">
                    <div class="${componentClass}-messageArea">
                        ${this.variantHasIcon(variant) ? this.getVariantIcon() : nothing}
                        <span data-test-id="${componentSelector}-message">
                            ${message || nothing}
                            <slot></slot>
                        </span>
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

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieToast;
    }
}
