import {
    LitElement,
    html,
    unsafeCSS,
    nothing,
    type TemplateResult,
} from 'lit';
import { property } from 'lit/decorators.js';
import { RtlMixin, defineCustomElement, dispatchCustomEvent } from '@justeattakeaway/pie-webc-core';
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
} from './defs';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-toast
 */
export class PieToast extends RtlMixin(LitElement) implements ToastProps {
    @property({ type: Boolean })
    public isOpen = defaultProps.isOpen;

    @property({ type: Boolean })
    public isDismissible = defaultProps.isDismissible;

    @property({ type: String })
    public message?: string;

    @property({ type: Object })
    public leadingAction: ToastProps['leadingAction'];

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

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
                variant="ghost"
                size="small-productive"
                aria-label="${ariaLabel || nothing}"
                @click="${() => this.handleActionClick()}"
                data-test-id="${componentSelector}-leading-action"
                type="button">
                ${text}
            </pie-button>
        `;
    }

    /**
     * Template for the footer area
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
                variant="ghost-secondary"
                size="small"
                class="${componentClass}-icon-close"
                data-test-id="${componentSelector}-icon-close"
                @click="${this.handleCloseButton}">
                <icon-close></icon-close>
            </pie-icon-button>`;
    }

    /**
     * It handles the action when user clicks in the close button.
     * Also triggers an event when is executed.
     *
     * @private
     */
    private handleCloseButton () {
        this.closeToastComponent();
        dispatchCustomEvent(this, ON_TOAST_CLOSE_EVENT, { targetNotification: this });
    }

    /**
     * Util method responsible to close the component.
     *
     * @private
     */
    private closeToastComponent () {
        this.isOpen = false;
    }

    render () {
        const { message, isDismissible, leadingAction } = this;

        return html`
            <div data-test-id="${componentSelector}" class="${componentClass}">
                ${message}
                ${isDismissible ? this.renderCloseButton() : nothing}
                ${leadingAction?.text ? this.renderFooter() : nothing}
            </div>`;
    }
}

defineCustomElement(componentSelector, PieToast);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieToast;
    }
}
