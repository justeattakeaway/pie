import {
    nothing, type TemplateResult, unsafeCSS, type PropertyValues,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { html, unsafeStatic } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-icon-button';
import {
    requiredProperty,
    validPropertyValues,
    dispatchCustomEvent,
    safeCustomElement,
} from '@justeattakeaway/pie-webc-core';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronLeft.js';
import '@justeattakeaway/pie-spinner';

import styles from './modal.scss?inline';
import {
    type ModalProps,
    type ModalActionType,
    headingLevels,
    positions,
    sizes,
    backgroundColors,
    defaultProps,
    imageSlotAspectRatios,
    ON_MODAL_BACK_EVENT,
    ON_MODAL_CLOSE_EVENT,
    ON_MODAL_OPEN_EVENT,
    ON_MODAL_LEADING_ACTION_CLICK,
    ON_MODAL_SUPPORTING_ACTION_CLICK,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-modal';

export interface ModalEventDetail {
    targetModal: PieModal;
}

/**
 * @tagname pie-modal
 * @event {CustomEvent} pie-modal-open - when the modal is opened.
 * @event {CustomEvent} pie-modal-close - when the modal is closed.
 * @event {CustomEvent} pie-modal-back - when the modal back button is clicked.
 * @event {CustomEvent} pie-modal-leading-action-click - when the modal leading action is clicked.
 * @event {CustomEvent} pie-modal-supporting-action-click - when the modal supporting action is clicked.
 * @slot headerContent - Used to pass additional content to the modal header that scrolls with the heading and controls.
 * @slot footer - Used to pass optional content to the modal component footer area.
 * @slot - The default slot is used to pass content into the modal component.
 */
@safeCustomElement('pie-modal')
export class PieModal extends PieElement implements ModalProps {
    @property({ type: Object })
    public aria: ModalProps['aria'];

    @property({ type: String })
    @requiredProperty(componentSelector)
    public heading!: string;

    @property({ type: String })
    @validPropertyValues(componentSelector, headingLevels, defaultProps.headingLevel)
    public headingLevel = defaultProps.headingLevel;

    @property({ type: Boolean })
    public hasBackButton = defaultProps.hasBackButton;

    @property({ type: Boolean })
    public hasStackedActions = defaultProps.hasStackedActions;

    @property({ type: Boolean, reflect: true })
    public isDismissible = defaultProps.isDismissible;

    @property({ type: Boolean })
    public isHeadingEmphasised = defaultProps.isHeadingEmphasised;

    @property({ type: Boolean })
    public isFooterPinned = defaultProps.isFooterPinned;

    @property({ type: Boolean })
    public isFullWidthBelowMid = defaultProps.isFullWidthBelowMid;

    @property({ type: Boolean, reflect: true })
    public isLoading = defaultProps.isLoading;

    @property({ type: Boolean })
    public isOpen = defaultProps.isOpen;

    @property({ type: Object })
    public leadingAction: ModalProps['leadingAction'];

    @property({ type: String })
    @validPropertyValues(componentSelector, positions, defaultProps.position)
    public position = defaultProps.position;

    @property({ type: String })
    public returnFocusAfterCloseSelector: ModalProps['returnFocusAfterCloseSelector'];

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: Object })
    public supportingAction: ModalProps['supportingAction'];

    @property({ type: String })
    @validPropertyValues(componentSelector, backgroundColors, defaultProps.backgroundColor)
    public backgroundColor = defaultProps.backgroundColor;

    @property({ type: String })
    public imageSlotMode: ModalProps['imageSlotMode'];

    @property({ type: String })
    @validPropertyValues(componentSelector, imageSlotAspectRatios, defaultProps.imageSlotAspectRatio)
    public imageSlotAspectRatio = defaultProps.imageSlotAspectRatio;

    @query('dialog')
    private _dialog!: HTMLDialogElement;

    private _scrollableContainer: HTMLElement | null = null;

    private _backButtonClicked = false;

    private _abortController!: AbortController;

    // We are using a separate controller for this event because it needs
    // to be aborted / reinstantiated on modal open/close
    private _escKeyAbortController: AbortController | null = null;

    private get _modalScrollContainer (): Element | null {
        // Cache the scrollable container to avoid race conditions where it has been removed during disconnectedCallback
        if (!this._scrollableContainer) {
            this._scrollableContainer = this._dialog?.querySelector<HTMLElement>('.c-modal-scrollContainer');
        }

        return this._scrollableContainer;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    connectedCallback (): void {
        super.connectedCallback();
        this._abortController = new AbortController();
        const { signal } = this._abortController;

        this.addEventListener('click', (event) => this._handleDialogLightDismiss(event));

        this._setupEscKeyListener();

        document.addEventListener(ON_MODAL_OPEN_EVENT, (event) => this._handleModalOpened(<CustomEvent>event), { signal });
        document.addEventListener(ON_MODAL_CLOSE_EVENT, (event) => this._handleModalClosed(<CustomEvent>event), { signal });
        document.addEventListener(ON_MODAL_BACK_EVENT, (event) => this._handleModalClosed(<CustomEvent>event), { signal });
    }

    disconnectedCallback (): void {
        super.disconnectedCallback();

        this._abortController.abort();
        this._enableBodyScroll();
        this._removeEscKeyEventListener();
    }

    async firstUpdated (changedProperties: PropertyValues<this>): Promise<void> {
        const dialogPolyfill = await import('dialog-polyfill').then((module) => module.default);
        dialogPolyfill.registerDialog(this._dialog);
        const { signal } = this._abortController;

        this._dialog.addEventListener('close', () => {
            this.isOpen = false;
        }, { signal });

        this._handleModalOpenStateOnFirstRender(changedProperties);
    }

    updated (changedProperties: PropertyValues<this>): void {
        this._handleModalOpenStateChanged(changedProperties);
        this._handleIsDismissibleChanged(changedProperties);
    }

    private _handleIsDismissibleChanged (changedProperties: PropertyValues<this>) {
        const oldValue = changedProperties.get('isDismissible');
        const newValue = this.isDismissible;

        // if the modal is being set to dismissible, remove any esc key listener
        if (!oldValue && newValue) {
            this._removeEscKeyEventListener();
        }

        // if the modal is being set to NOT dismissible, add the esc key listener
        if (oldValue && !newValue) {
            this._setupEscKeyListener();
        }
    }

    /**
     * Opens the dialog element and disables page scrolling
     */
    private _handleModalOpened (event: CustomEvent): void {
        const { targetModal } = event.detail;

        if (targetModal === this) {
            if (this._dialog.hasAttribute('open') || !this._dialog.isConnected) {
                return;
            }

            // The ::backdrop pseudoelement is only shown if the modal is opened via JS
            this._dialog.showModal();

            /*
                Performance:
                This has been optimised with the following to help with performance:

                1. Use requestAnimationFrame to defer non-blocking operations.
                2. Batch non-blocking updates inside requestAnimationFrame
                3. Call `showModal()` first and defer `_disableBodyScroll` & `_setupEscKeyListener`
                    to the next `task`.
            */
            requestAnimationFrame(() => {
                // Read styles before writing them to avoid forced layout recalculations (layout trashing).
                const isOpen = this._dialog.hasAttribute('open');

                if (isOpen) {
                    this._disableBodyScroll();
                    this._setupEscKeyListener();
                }
            });
        }
    }

    /**
     * Closes the dialog element and re-enables page scrolling
     */
    private _handleModalClosed (event: CustomEvent): void {
        const { targetModal } = event.detail;

        if (targetModal === this) {
            this._enableBodyScroll();
            this._dialog.close();
            this._returnFocus();
            this._removeEscKeyEventListener();
        }
    }

    /**
     * Sets up an event listener on the Escape key to prevent dismissing the modal if isDismissible is false
     */
    private _setupEscKeyListener () : void {
        // AbortControllers are single-use. Meaning if we have already aborted this controller,
        // we need to create a new one for setting up subsequent event listeners.
        // We only perform this if the controller does not exist to prevent multiple listeners being set up
        if (!this._escKeyAbortController && !this.isDismissible) {
            this._escKeyAbortController = new AbortController();
            const { signal } = this._escKeyAbortController;

            document.addEventListener('keydown', (event: KeyboardEvent) => this._preventModalKeyboardDismissal(event), { signal });
        }
    }

    /**
     * Removes any event listeners set up that are listening to keyboard events and nulls the existing AbortController.
     */
    private _removeEscKeyEventListener () {
        this._escKeyAbortController?.abort();
        // This is so we can create a new AbortController for any subsequent event listener setup in the future
        this._escKeyAbortController = null;
    }

    /**
     * Prevents the user from dismissing the dialog via the `cancel`
     * event (ESC key) when `isDismissible` is set to false.
     *
     * @param {Event} event - The event object.
     */
    private _preventModalKeyboardDismissal = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            event.preventDefault();
        }
    };

    // Handles the value of the isOpen property on first render of the component
    private _handleModalOpenStateOnFirstRender (changedProperties: PropertyValues<this>): void {
        // This ensures if the modal is open on first render, the scroll lock and backdrop are applied
        const previousValue = changedProperties.get('isOpen');

        if (previousValue === undefined && this.isOpen) {
            dispatchCustomEvent(this, ON_MODAL_OPEN_EVENT, { targetModal: this });
        }
    }

    // Handles changes to the modal isOpen property by dispatching any appropriate events
    private _handleModalOpenStateChanged (changedProperties: PropertyValues<this>): void {
        const wasPreviouslyOpen = changedProperties.get('isOpen');

        if (wasPreviouslyOpen !== undefined) {
            if (wasPreviouslyOpen) {
                if (this._backButtonClicked) {
                    // Reset the flag
                    this._backButtonClicked = false;
                    dispatchCustomEvent(this, ON_MODAL_BACK_EVENT, { targetModal: this });
                } else {
                    dispatchCustomEvent(this, ON_MODAL_CLOSE_EVENT, { targetModal: this });
                }
            } else {
                dispatchCustomEvent(this, ON_MODAL_OPEN_EVENT, { targetModal: this });
            }
        }
    }

    private _handleActionClick (actionType: ModalActionType): void {
        if (actionType === 'leading') {
            this._dialog.close('leading');
            dispatchCustomEvent(this, ON_MODAL_LEADING_ACTION_CLICK, { targetModal: this });
        } else if (actionType === 'supporting') {
            this._dialog.close('supporting');
            dispatchCustomEvent(this, ON_MODAL_SUPPORTING_ACTION_CLICK, { targetModal: this });
        }
    }

    /**
     * Return focus to the specified element, providing the selector is valid
     * and the chosen element can be found.
     */
    private _returnFocus (): void {
        const selector = this.returnFocusAfterCloseSelector?.trim();

        if (selector) {
            (document.querySelector(selector) as HTMLElement)?.focus();
        }
    }

    /**
     * Enables body scroll by unlocking the scroll container.
     */
    private _enableBodyScroll (): void {
        if (this._scrollableContainer) {
            enableBodyScroll(this._scrollableContainer);
        }
    }

    /**
     * Disables body scroll by locking the scroll container.
     */
    private _disableBodyScroll (): void {
        if (this._modalScrollContainer) {
            disableBodyScroll(this._modalScrollContainer);
        }
    }

    private _getHeaderButtonVariant (): 'ghost-secondary' | 'ghost-inverse' | 'secondary' {
        const { imageSlotMode, backgroundColor } = this;

        // Handle the combinations of image slot and background color
        const hasImageSlot = Boolean(imageSlotMode);
        const hasBackgroundColor = Boolean(backgroundColor) && backgroundColor !== 'default';
        const isInverted = backgroundColor === 'brand-06';

        // default case: image slot is not present
        if (!hasImageSlot) {
            return isInverted ? 'ghost-inverse' : 'ghost-secondary';
        }

        // image slot is present
        if (imageSlotMode === 'illustration' && !hasBackgroundColor) {
            return 'ghost-secondary';
        }
        return isInverted ? 'ghost-inverse' : 'secondary';
    }

    /**
     * Template for the close button element. Called within the
     * main render function.
     *
     * @private
     */
    private renderCloseButton (): TemplateResult | typeof nothing {
        if (!this.isDismissible) {
            return nothing;
        }

        const variant = this._getHeaderButtonVariant();

        return html`
            <pie-icon-button
                @click="${() => { this.isOpen = false; }}"
                variant="${variant}"
                class="c-modal-closeBtn"
                .aria=${ifDefined(this.aria?.close) ? { label: this.aria?.close } : nothing}
                data-test-id="modal-close-button">
                <icon-close></icon-close>
            </pie-icon-button>`;
    }

    private renderModalImageSlot (): TemplateResult | typeof nothing {
        const { imageSlotMode, imageSlotAspectRatio } = this;
        if (!imageSlotMode) return nothing;

        return html`
            <div class="c-modal-imageSlot c-modal-imageSlot--${imageSlotMode} c-modal-imageSlot--${imageSlotAspectRatio}" data-test-id="modal-image">
                <slot name="image"></slot>
                ${this.renderCloseButton()}
            </div>
        `;
    }

    /**
     * Template for the back button element. Called within the
     * main render function.
     *
     * @private
     */
    private renderBackButton (): TemplateResult | typeof nothing {
        if (!this.hasBackButton) {
            return nothing;
        }

        const variant = this._getHeaderButtonVariant();

        return html`
            <pie-icon-button
                @click="${() => { this._backButtonClicked = true; this.isOpen = false; }}"
                variant="${variant}"
                class="c-modal-backBtn"
                .aria=${ifDefined(this.aria?.back) ? { label: this.aria?.back } : nothing}
                data-test-id="modal-back-button">
                    <icon-chevron-left class="c-modal-backBtn-icon"></icon-chevron-left>
            </pie-icon-button>
        `;
    }

    /**
     * Renders the "leadingAction" button if the text is provided.
     *
     * If `leadingAction.text` is not provided, the button is not rendered.
     * If `leadingAction.variant` is not provided, the default value of "primary" is used.
     * The (optional) aria-label is read from `leadingAction.ariaLabel`.
     *
     * @private
     */
    private renderLeadingAction (): TemplateResult | typeof nothing {
        const { ariaLabel, text, variant = 'primary' } = this.leadingAction || {};

        if (!text) return nothing;

        return html`
            <pie-button
                variant="${variant}"
                aria-label="${ifDefined(ariaLabel)}"
                type="submit"
                ?isFullWidth="${this.hasStackedActions}"
                @click="${() => this._handleActionClick('leading')}"
                data-test-id="modal-leading-action">
                ${text}
            </pie-button>
        `;
    }

    /**
     * Renders the "supportingAction" button if the text is provided.
     * You cannot have a supporting action without a leading action.
     *
     * If either `supportingAction.text` or `leadingAction.text` are not provided, the button is not rendered.
     * If `supportingAction.variant` is not provided, the default value of "ghost" is used.
     * The (optional) aria-label is read from `supportingAction.ariaLabel`.
     *
     * @private
     */
    private renderSupportingAction (): TemplateResult | typeof nothing {
        const { ariaLabel, text, variant = 'ghost' } = this.supportingAction || {};

        if (!text || !this.leadingAction?.text) {
            return nothing;
        }

        return html`
            <pie-button
                variant="${variant}"
                aria-label="${ifDefined(ariaLabel)}"
                type="reset"
                ?isFullWidth="${this.hasStackedActions}"
                @click="${() => this._handleActionClick('supporting')}"
                data-test-id="modal-supporting-action">
                ${text}
            </pie-button>
        `;
    }

    /**
     * Renders the modal footer if a leading action is provided.
     * Additionally renders the supporting action if it is provided.
     *
     * @private
     */
    private renderModalFooter (): TemplateResult | typeof nothing {
        const hasLeadingAction = this.leadingAction?.text;
        if (!hasLeadingAction) {
            if (this.supportingAction?.text) {
                console.warn('You cannot have a supporting action without a leading action. If you only need one button then use a leading action instead.');
            }
        }

        const footerClasses = {
            'c-modal-footer': true,
            'c-modal-footer--stackedActions': this.hasStackedActions,
        };

        const footerContent = hasLeadingAction ? html`
            <footer class="${classMap(footerClasses)}" data-test-id="pie-modal-footer">
                ${this.renderLeadingAction()}
                ${this.renderSupportingAction()}
            </footer>` : nothing;

        return html`
            <slot name="footer">
                ${footerContent}
            </slot>`;
    }

    /**
     * Renders the loading spinner if `isLoading` is true.
     * @private
     */
    private renderLoadingSpinner (): TemplateResult | typeof nothing {
        if (!this.isLoading) {
            return nothing;
        }

        const variant = this.backgroundColor === 'brand-06' ? 'inverse' : 'secondary';

        return html`<pie-spinner size="xlarge" variant="${variant}"></pie-spinner>`;
    }

    /**
     * Renders the modal inner content and footer of the modal.
     * @private
     */
    private renderModalContentAndFooter (): TemplateResult {
        return html`
            <article class="c-modal-scrollContainer c-modal-content c-modal-content--scrollable">
                <div class="c-modal-contentInner" data-test-id="modal-content-inner">
                    <slot></slot>
                </div>
                ${this.renderLoadingSpinner()}
            </article>
            ${this.renderModalFooter()}`;
    }

    /**
     * Renders the modal heading content in the correct heading tag
     * @private
     */
    private renderHeading (): TemplateResult {
        const { heading, headingLevel, isHeadingEmphasised } = this;
        const headingTag = unsafeStatic(headingLevel);

        const headingClasses = {
            'c-modal-heading': true,
            'c-modal-heading--emphasised': isHeadingEmphasised,
        };

        return html`
            <${headingTag} id="modal-heading" class="${classMap(headingClasses)}" part="heading" data-test-id="modal-heading">
                ${heading}
            </${headingTag}>
        `;
    }

    render () {
        const {
            aria,
            isDismissible,
            isFooterPinned,
            isFullWidthBelowMid,
            isLoading,
            position,
            size,
            backgroundColor,
            imageSlotMode,
        } = this;

        const hasImageSlot = Boolean(imageSlotMode);
        const hasCloseButtonInHeader = !hasImageSlot;

        const modalClasses = {
            'c-modal': true,
            [`c-modal--${size}`]: true,
            'c-modal--top': position === 'top',
            'c-modal--dismissible': isDismissible,
            'c-modal--loading': isLoading,
            'c-modal--pinnedFooter': isFooterPinned,
            'c-modal--fullWidthBelowMid': isFullWidthBelowMid,
            [`c-modal--bg-${backgroundColor}`]: true,
        };

        const ariaLabelForLoading = (isLoading && aria?.loading) || undefined;

        return html`
        <dialog
            id="dialog"
            aria-label="${ifDefined(ariaLabelForLoading)}"
            aria-labelledby="${ifDefined(ariaLabelForLoading ? undefined : 'modal-heading')}"
            class="${classMap(modalClasses)}"
            aria-live="polite"
            aria-busy="${isLoading ? 'true' : 'false'}"
            data-test-id="pie-modal">
            ${this.renderModalImageSlot()}
            <header class="c-modal-header" data-test-id="modal-header">
                ${this.renderBackButton()}
                ${this.renderHeading()}
                ${hasCloseButtonInHeader ? this.renderCloseButton() : nothing}
                <slot name="headerContent"></slot>
            </header>
            ${
            // We need to wrap the remaining content in a shared scrollable container if the footer is not pinned
            isFooterPinned
                ? this.renderModalContentAndFooter()
                : html`
                    <div class="c-modal-scrollContainer">
                        ${this.renderModalContentAndFooter()}
                    </div>`
            }
        </dialog>`;
    }

    /**
     * Dismisses the modal on backdrop click if `isDismissible` is `true`.
     * @param {MouseEvent} event - the click event targetting the modal/backdrop
     */
    private _handleDialogLightDismiss = (event: MouseEvent): void => {
        // Early return if the dialog isn't dismissible or the clicked element isn't the dialog itself
        if (!this.isDismissible || event.target !== event.currentTarget) {
            return;
        }

        const rect = this._dialog.getBoundingClientRect();

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
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieModal;
    }
}
