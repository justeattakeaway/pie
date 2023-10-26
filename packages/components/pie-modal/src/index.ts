import {
    LitElement, nothing, TemplateResult, unsafeCSS, PropertyValues,
} from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import {
    requiredProperty, RtlMixin, validPropertyValues, defineCustomElement,
} from '@justeattakeaway/pie-webc-core';
import '@justeattakeaway/pie-icons-webc/IconClose';
import '@justeattakeaway/pie-icons-webc/IconChevronLeft';
import '@justeattakeaway/pie-icons-webc/IconChevronRight';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import styles from './modal.scss?inline';
import {
    type AriaProps,
    type ActionProps,
    type ModalProps,
    type ModalActionType,
    headingLevels,
    positions,
    sizes,
    ON_MODAL_BACK_EVENT,
    ON_MODAL_CLOSE_EVENT,
    ON_MODAL_OPEN_EVENT,
    ON_MODAL_LEADING_ACTION_CLICK,
    ON_MODAL_SUPPORTING_ACTION_CLICK,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-modal';

/**
 * @tagname pie-modal
 * @event {CustomEvent} pie-modal-open - when the modal is opened.
 * @event {CustomEvent} pie-modal-close - when the modal is closed.
 * @event {CustomEvent} pie-modal-back - when the modal back button is clicked.
 * @event {CustomEvent} pie-modal-leading-action-click - when the modal leading action is clicked.
 * @event {CustomEvent} pie-modal-supporting-action-click - when the modal supporting action is clicked.
 */
export class PieModal extends RtlMixin(LitElement) implements ModalProps {
    @property({ type: Object })
    public aria!: AriaProps;

    @property({ type: String })
    @requiredProperty(componentSelector)
    public heading!: string;

    @property()
    @validPropertyValues(componentSelector, headingLevels, 'h2')
    public headingLevel: ModalProps['headingLevel'] = 'h2';

    @property({ type: Boolean })
    public hasBackButton = false;

    @property({ type: Boolean })
    public hasStackedActions = false;

    @property({ type: Boolean, reflect: true })
    public isDismissible = false;

    @property({ type: Boolean })
    public isFooterPinned = true;

    @property({ type: Boolean })
    public isFullWidthBelowMid = false;

    @property({ type: Boolean, reflect: true })
    public isLoading = false;

    @property({ type: Boolean })
    public isOpen = false;

    @property({ type: Object })
    public leadingAction!: ActionProps;

    @property()
    @validPropertyValues(componentSelector, positions, 'center')
    public position: ModalProps['position'] = 'center';

    @property()
    public returnFocusAfterCloseSelector?: string;

    @property()
    @validPropertyValues(componentSelector, sizes, 'medium')
    public size: ModalProps['size'] = 'medium';

    @property({ type: Object })
    public supportingAction!: ActionProps;

    @query('dialog')
    private _dialog?: HTMLDialogElement;

    private _backButtonClicked = false;

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    connectedCallback () : void {
        super.connectedCallback();
        this.addEventListener('click', (event) => this._handleDialogLightDismiss(event));
        document.addEventListener(ON_MODAL_OPEN_EVENT, this._handleModalOpened.bind(this));
        document.addEventListener(ON_MODAL_CLOSE_EVENT, this._handleModalClosed.bind(this));
        document.addEventListener(ON_MODAL_BACK_EVENT, this._handleModalClosed.bind(this));
    }

    disconnectedCallback () : void {
        document.removeEventListener(ON_MODAL_OPEN_EVENT, this._handleModalOpened.bind(this));
        document.removeEventListener(ON_MODAL_CLOSE_EVENT, this._handleModalClosed.bind(this));
        document.removeEventListener(ON_MODAL_BACK_EVENT, this._handleModalClosed.bind(this));
        super.disconnectedCallback();
    }

    async firstUpdated (changedProperties: PropertyValues<this>) : Promise<void> {
        super.firstUpdated(changedProperties);

        if (this._dialog) {
            const dialogPolyfill = await import('dialog-polyfill').then((module) => module.default);
            dialogPolyfill.registerDialog(this._dialog);
            this._dialog.addEventListener('cancel', (event) => this._handleDialogCancelEvent(event));
            this._dialog.addEventListener('close', () => {
                this.isOpen = false;
            });
        }

        this._handleModalOpenStateOnFirstRender(changedProperties);
    }

    updated (changedProperties: PropertyValues<this>) : void {
        super.updated(changedProperties);
        this._handleModalOpenStateChanged(changedProperties);
    }

    /**
     * Opens the dialog element and disables page scrolling
     */
    private _handleModalOpened () : void {
        const modalScrollContainer = this._dialog?.querySelector('.c-modal-scrollContainer');

        if (modalScrollContainer) {
            disableBodyScroll(modalScrollContainer);
        }

        if (this._dialog?.hasAttribute('open') || !this._dialog?.isConnected) {
            return;
        }
        // The ::backdrop pseudoelement is only shown if the modal is opened via JS
        this._dialog?.showModal();
    }

    /**
     * Closes the dialog element and re-enables page scrolling
     */
    private _handleModalClosed () : void {
        const modalScrollContainer = this._dialog?.querySelector('.c-modal-scrollContainer');

        if (modalScrollContainer) {
            enableBodyScroll(modalScrollContainer);
        }

        this._dialog?.close();
        this._returnFocus();
    }

    /**
     * Prevents the user from dismissing the dialog via the `cancel`
     * event (ESC key) when `isDismissible` is set to false.
     *
     * @param {Event} event - The event object.
     */
    private _handleDialogCancelEvent = (event: Event) : void => {
        if (!this.isDismissible) {
            event.preventDefault();
        }
    };

    // Handles the value of the isOpen property on first render of the component
    private _handleModalOpenStateOnFirstRender (changedProperties: PropertyValues<this>) : void {
        // This ensures if the modal is open on first render, the scroll lock and backdrop are applied
        const previousValue = changedProperties.get('isOpen');

        if (previousValue === undefined && this.isOpen) {
            this._dispatchModalCustomEvent(ON_MODAL_OPEN_EVENT);
        }
    }

    // Handles changes to the modal isOpen property by dispatching any appropriate events
    private _handleModalOpenStateChanged (changedProperties: PropertyValues<this>) : void {
        const wasPreviouslyOpen = changedProperties.get('isOpen');

        if (wasPreviouslyOpen !== undefined) {
            if (wasPreviouslyOpen) {
                if (this._backButtonClicked) {
                    // Reset the flag
                    this._backButtonClicked = false;
                    this._dispatchModalCustomEvent(ON_MODAL_BACK_EVENT);
                } else {
                    this._dispatchModalCustomEvent(ON_MODAL_CLOSE_EVENT);
                }
            } else {
                this._dispatchModalCustomEvent(ON_MODAL_OPEN_EVENT);
            }
        }
    }

    private _handleActionClick (actionType: ModalActionType) : void {
        if (actionType === 'leading') {
            this._dialog?.close('leading');
            this._dispatchModalCustomEvent(ON_MODAL_LEADING_ACTION_CLICK);
        } else if (actionType === 'supporting') {
            this._dialog?.close('supporting');
            this._dispatchModalCustomEvent(ON_MODAL_SUPPORTING_ACTION_CLICK);
        }
    }

    /**
     * Return focus to the specified element, providing the selector is valid
     * and the chosen element can be found.
     */
    private _returnFocus () : void {
        const selector = this.returnFocusAfterCloseSelector?.trim();

        if (selector) {
            (document.querySelector(selector) as HTMLElement)?.focus();
        }
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
                @click="${() => { this.isOpen = false; }}"
                variant="ghost-secondary"
                class="c-modal-closeBtn"
                aria-label="${this.aria?.close || nothing}"
                data-test-id="modal-close-button">
                <icon-close></icon-close>
            </pie-icon-button>`;
    }

    /**
     * Template for the back button element. Called within the
     * main render function.
     *
     * @private
     */
    private renderBackButton () : TemplateResult {
        return html`
            <pie-icon-button
                @click="${() => { this._backButtonClicked = true; this.isOpen = false; }}"
                variant="ghost-secondary"
                class="c-modal-backBtn"
                aria-label="${this.aria?.back || nothing}"
                data-test-id="modal-back-button">
                ${this.isRTL ? html`<icon-chevron-right></icon-chevron-right>` : html`<icon-chevron-left></icon-chevron-left>`}
            </pie-icon-button>
        `;
    }

    /**
     * Render leadingAction button depending on prop availability.
     *
     * 1. If the prop `leadingAction` is not provided, the button is not rendered.
     * 2. If the prop `leadingAction` is provided but any of the optional properties
     * are not provided, they fall back to their default values.
     *
     * @private
     */
    private renderLeadingAction () : TemplateResult | typeof nothing {
        const { text, variant = 'primary', ariaLabel } = this.leadingAction;

        if (!text) {
            return nothing;
        }

        return html`
            <pie-button
                variant="${variant}"
                aria-label="${ariaLabel || nothing}"
                type="submit"
                ?isFullWidth="${this.hasStackedActions}"
                @click="${() => this._handleActionClick('leading')}"
                data-test-id="modal-leading-action">
                ${text}
            </pie-button>
        `;
    }

    /**
     * Render supportingAction button depending on prop availability.
     *
     * 1. If the prop `supportingAction` is not provided, the button is not rendered.
     * 2. If the prop `supportingAction` is provided but any of the optional properties
     * are not provided, they fall back to their default values.
     * 3. If `supportingAction` is provided but not `leadingAction`, log a warning and do
     * not render `supportingAction`.
     *
     * @private
     */
    private renderSupportingAction (): TemplateResult | typeof nothing {
        const { text, variant = 'ghost', ariaLabel } = this.supportingAction;

        if (!text) {
            return nothing;
        }

        if (!this.leadingAction) {
            console.warn('Use `leadingAction` instead of `supportingAction`. `supportingAction` is being ignored.');
            return nothing;
        }

        return html`
            <pie-button
                variant="${variant}"
                aria-label="${ariaLabel || nothing}"
                type="reset"
                ?isFullWidth="${this.hasStackedActions}"
                @click="${() => this._handleActionClick('supporting')}"
                data-test-id="modal-supporting-action">
                ${text}
            </pie-button>
        `;
    }

    /**
     * Renders the modal inner content and footer of the modal.
     * @private
     */
    private renderModalContentAndFooter (): TemplateResult {
        return html`
        <article class="c-modal-scrollContainer c-modal-content c-modal-content--scrollable">
            <div class="c-modal-contentInner">
                <slot></slot>
            </div>
        </article>
        <footer class="c-modal-footer">
            ${this.leadingAction ? this.renderLeadingAction() : nothing}
            ${this.supportingAction ? this.renderSupportingAction() : nothing}
        </footer>`;
    }

    public render () {
        const {
            aria,
            hasBackButton,
            hasStackedActions,
            heading,
            headingLevel = 'h2',
            isDismissible,
            isFooterPinned,
            isFullWidthBelowMid,
            isLoading,
            leadingAction,
            position,
            size,
            supportingAction,
        } = this;

        const headingTag = unsafeStatic(headingLevel);

        return html`
        <dialog
            id="dialog"
            class="c-modal"
            size="${size}"
            position="${position}"
            ?hasActions=${leadingAction || supportingAction}
            ?hasBackButton=${hasBackButton}
            ?hasStackedActions=${hasStackedActions}
            ?isDismissible=${isDismissible}
            ?isFooterPinned=${isFooterPinned}
            ?isFullWidthBelowMid=${isFullWidthBelowMid}
            ?isLoading=${isLoading}
            aria-busy="${isLoading ? 'true' : 'false'}"
            aria-label="${(isLoading && aria?.loading) || nothing}"
            data-test-id="pie-modal">
            <header class="c-modal-header">
                ${hasBackButton ? this.renderBackButton() : nothing}
                <${headingTag} class="c-modal-heading">
                    ${heading}
                </${headingTag}>
                ${isDismissible ? this.renderCloseButton() : nothing}
            </header>
            ${
            // We need to wrap the remaining content in a shared scrollable container if the footer is not pinned
            isFooterPinned
                ? this.renderModalContentAndFooter()
                : html`
                        <div class="c-modal-scrollContainer">
                            ${this.renderModalContentAndFooter()}
                        </div>
                        `
            }
        </dialog>`;
    }

    /**
     * Dismisses the modal on backdrop click if `isDismissible` is `true`.
     * @param {MouseEvent} event - the click event targetting the modal/backdrop
     */
    private _handleDialogLightDismiss = (event: MouseEvent) : void => {
        if (!this.isDismissible) {
            return;
        }

        const rect = this._dialog?.getBoundingClientRect();

        const {
            top = 0, bottom = 0, left = 0, right = 0,
        } = rect || {};

        // This means the dialog is not open due to clicking the close button so
        // we want to escape early
        if (top === 0 && bottom === 0 && left === 0 && right === 0) {
            return;
        }

        const isClickOutsideDialog = event.clientY < top ||
            event.clientY > bottom ||
            event.clientX < left ||
            event.clientX > right;

        if (isClickOutsideDialog) {
            this.isOpen = false;
        }
    };

    /**
     * Note: We should aim to have a shareable event helper system to allow
     * us to share this across components in-future.
     *
     * Dispatch a custom event.
     *
     * To be used whenever we have behavioural events we want to
     * bubble up through the modal.
     *
     * @param {string} eventType
     */
    private _dispatchModalCustomEvent = (eventType: string) : void => {
        const event = new CustomEvent(eventType, {
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(event);
    };
}

defineCustomElement(componentSelector, PieModal);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieModal;
    }
}
