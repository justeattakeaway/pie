import {
    LitElement, nothing, TemplateResult, unsafeCSS,
} from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import {
    RtlMixin, validPropertyValues, requiredProperty,
} from '@justeattakeaway/pie-webc-core';
import type { DependentMap } from '@justeattakeaway/pie-webc-core';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import '@justeattakeaway/pie-icons-webc/icons/IconClose';
import '@justeattakeaway/pie-icons-webc/icons/IconChevronLeft';
import '@justeattakeaway/pie-icons-webc/icons/IconChevronRight';

import styles from './modal.scss?inline';
import {
    ModalProps,
    headingLevels,
    ON_MODAL_CLOSE_EVENT,
    ON_MODAL_OPEN_EVENT,
    ON_MODAL_BACK_EVENT,
    sizes,
} from './defs';

// Valid values available to consumers
export { type ModalProps, headingLevels, sizes };

const componentSelector = 'pie-modal';

/**
 * @event {CustomEvent} pie-modal-open - when the modal is opened.
 * @event {CustomEvent} pie-modal-close - when the modal is closed.
 * @event {CustomEvent} pie-modal-back - when the modal back button is clicked.
 */
export class PieModal extends RtlMixin(LitElement) implements ModalProps {
    @property({ type: String })
    @requiredProperty(componentSelector)
    public heading!: string;

    @property()
    @validPropertyValues(componentSelector, headingLevels, 'h2')
    public headingLevel: ModalProps['headingLevel'] = 'h2';

    @property({ type: Boolean, reflect: true })
    public isDismissible = false;

    @property({ type: Boolean })
    public hasBackButton = false;

    @property({ type: Boolean })
    public isFullWidthBelowMid = false;

    @property({ type: Boolean })
    public isOpen = false;

    @property({ type: Boolean, reflect: true })
    public isLoading = false;

    @property()
    public returnFocusAfterCloseSelector?: string;

    @property()
    @validPropertyValues(componentSelector, sizes, 'medium')
    public size: ModalProps['size'] = 'medium';

    @property()
    public leadingAction!: {
        text: string;
        variant?: string;
        ariaLabel?: string;
    };

    @query('dialog')
    private _dialog?: HTMLDialogElement;

    private _backButtonClicked = false;

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    constructor () {
        super();
        this.addEventListener('click', (event) => this._handleDialogLightDismiss(event));
    }

    connectedCallback () : void {
        super.connectedCallback();
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

    firstUpdated (changedProperties: DependentMap<ModalProps>) : void {
        this._dialog?.addEventListener('cancel', (event) => this._handleDialogCancelEvent(event));
        this._handleModalOpenStateOnFirstRender(changedProperties);

        this._dialog?.addEventListener('close', () => {
            this.isOpen = false;
        });
    }

    updated (changedProperties: DependentMap<ModalProps>) : void {
        this._handleModalOpenStateChanged(changedProperties);
    }

    /**
     * Opens the dialog element and disables page scrolling
     */
    private _handleModalOpened () : void {
        disableBodyScroll(this);
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
        enableBodyScroll(this);
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
    private _handleModalOpenStateOnFirstRender (changedProperties: DependentMap<ModalProps>) : void {
        // This ensures if the modal is open on first render, the scroll lock and backdrop are applied
        const previousValue = changedProperties.get('isOpen');

        if (previousValue === undefined && this.isOpen) {
            this._dispatchModalCustomEvent(ON_MODAL_OPEN_EVENT);
        }
    }

    // Handles changes to the modal isOpen property by dispatching any appropriate events
    private _handleModalOpenStateChanged (changedProperties: DependentMap<ModalProps>) : void {
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
                data-test-id="modal-close-button"><icon-close /></pie-icon-button>
        `;
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
                data-test-id="modal-back-button">
                ${this.isRTL ? html`<icon-chevron-right />` : html`<icon-chevron-left />`}
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
    private renderLeadingAction (): TemplateResult {
        const { text, variant = 'primary', ariaLabel } = this.leadingAction;

        return html`
            <pie-button
                  variant="${variant}"
                  aria-label="${ariaLabel || nothing}"
                  type="submit"
                  @click="${() => this._dialog?.close('leading')}"
                  data-test-id="modal-leading-action">
                ${text}
              </pie-button>
        `;
    }

    public render () {
        const {
            hasBackButton,
            heading,
            headingLevel = 'h2',
            isDismissible,
            isFullWidthBelowMid,
            isLoading,
            size,
            leadingAction,
        } = this;

        const headingTag = unsafeStatic(headingLevel);

        return html`
        <dialog
            id="dialog"
            class="c-modal"
            data-test-id="pie-modal"
            size="${size}"
            ?hasBackButton=${hasBackButton}
            ?isDismissible=${isDismissible}
            ?isFullWidthBelowMid=${isFullWidthBelowMid}
            ?isLoading=${isLoading}
            data-test-id="pie-modal">
            <header class="c-modal-header">
                ${hasBackButton ? this.renderBackButton() : nothing}
                <${headingTag} class="c-modal-heading">
                    ${heading}
                </${headingTag}>
                ${isDismissible ? this.renderCloseButton() : nothing}
            </header>
            <article class="c-modal-content c-modal-content--scrollable">
                <div class="c-modal-contentInner">
                    <slot></slot>
                </div>
            </article>
            <footer class="c-modal-footer">
                ${leadingAction ? this.renderLeadingAction() : nothing}
                <pie-button
                    variant="ghost"
                    type="reset"
                    @click="${() => this._dialog?.close('supporting')}"
                    data-test-id="modal-supporting-action">
                    Cancel
                </pie-button>
            </footer>
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

customElements.define(componentSelector, PieModal);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieModal;
    }
}
