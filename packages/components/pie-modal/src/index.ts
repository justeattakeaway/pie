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
import styles from './modal.scss?inline';
import {
    ModalProps,
    headingLevels,
    ON_MODAL_CLOSE_EVENT,
    ON_MODAL_OPEN_EVENT,
    sizes,
} from './defs';

// Valid values available to consumers
export { type ModalProps, headingLevels, sizes };

const componentSelector = 'pie-modal';

/**
 * @event {CustomEvent} pie-modal-open - when the modal is opened.
 * @event {CustomEvent} pie-modal-close - when the modal is closed.
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
    public isFullWidthBelowMid = false;

    @property({ type: Boolean })
    public isOpen = false;

    @property()
    public returnFocusAfterCloseSelector?: string;

    @property()
    @validPropertyValues(componentSelector, sizes, 'medium')
    public size: ModalProps['size'] = 'medium';

    @query('dialog')
        _dialog?: HTMLDialogElement;

    constructor () {
        super();
        this.addEventListener('click', (event) => this._handleDialogLightDismiss(event));
    }

    connectedCallback () : void {
        super.connectedCallback();
        document.addEventListener(ON_MODAL_OPEN_EVENT, this._handleModalOpened.bind(this));
        document.addEventListener(ON_MODAL_CLOSE_EVENT, this._handleModalClosed.bind(this));
    }

    disconnectedCallback () : void {
        document.removeEventListener(ON_MODAL_OPEN_EVENT, this._handleModalOpened.bind(this));
        document.removeEventListener(ON_MODAL_CLOSE_EVENT, this._handleModalClosed.bind(this));
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
        const previousValue = changedProperties.get('isOpen');

        if (previousValue !== undefined) {
            if (previousValue) {
                this._dispatchModalCustomEvent(ON_MODAL_CLOSE_EVENT);
            } else {
                this._dispatchModalCustomEvent(ON_MODAL_OPEN_EVENT);
            }
        }
    }

    /**
     * Return focus to the specified element, providing the selector is valid
     * and the chosen element can be found.
     * Fails silently.
     */
    private _returnFocus () : void {
        const selector = this.returnFocusAfterCloseSelector?.trim();

        if (selector) {
            (document.querySelector(selector) as HTMLElement)?.focus();
        }
    }

    public render = () => html`
        <dialog
            id="dialog"
            class="c-modal"
            size="${this.size}"
            ?isFullWidthBelowMid=${this.isFullWidthBelowMid}
            data-test-id="pie-modal">
            <header>
                ${this._renderModalHeader()}
            </header>
            <article class="c-modal-content c-modal-content--scrollable">
                <slot></slot>
            </article>
            <footer class="c-modal-footer">
                ${this._renderModalFooter()}
            </footer>
        </dialog>`;

    /**
     * Returns the HTML content for the header.
     * Extracted to keep the render method succinct.
     * @returns {TemplateResult} HTML template for the modal's header
     */
    private _renderModalHeader () : TemplateResult {
        const headingTag = unsafeStatic(this.headingLevel);

        return html`
            <${headingTag} class="c-modal-heading">
                ${this.heading}
            </${headingTag}>
            ${this.isDismissible ? this.renderCloseButton() : nothing}`;
    }

    /**
     * Returns the HTML content for the footer.
     * Extracted to keep the render method succinct.
     * @returns {TemplateResult} HTML template for the modal's footer
    */
    private _renderModalFooter = () : TemplateResult => html`
        <pie-button
            variant="primary"
            type="submit"
            @click="${() => this._dialog?.close('leading')}"
            data-test-id="modal-leading-action">
            Confirm
        </pie-button>
        <pie-button
            variant="ghost"
            type="reset"
            @click="${() => this._dialog?.close('supporting')}"
            data-test-id="modal-supporting-action">
            Cancel
        </pie-button>`;

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

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieModal);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieModal;
    }
}
