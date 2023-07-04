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

export class PieModal extends RtlMixin(LitElement) {
    @property({ type: Boolean })
        isDismissible = true;

    @property({ type: Boolean })
        isOpen = false;

    @property({ type: String })
    @requiredProperty(componentSelector)
        heading!: string;

    @property()
    @validPropertyValues(componentSelector, headingLevels, 'h2')
        headingLevel: ModalProps['headingLevel'] = 'h2';

    @property()
    @validPropertyValues(componentSelector, sizes, 'medium')
        size: ModalProps['size'] = 'medium';

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
    }

    updated (changedProperties: DependentMap<ModalProps>) : void {
        this._handleModalOpenStateChanged(changedProperties);
    }

    /**
     * Opens the dialog element and disables page scrolling
     */
    private _handleModalOpened () : void {
        disableBodyScroll(this);
        //  We require this because toggling the prop `isOpen` itself won't
        //  allow the dialog to open in the correct way (with the default background),
        //  the method `showModal()` needs to be invoked.
        this._dialog?.showModal();
    }

    /**
     * Closes the dialog element and re-enables page scrolling
     */
    private _handleModalClosed () : void {
        enableBodyScroll(this);
        //  Closes the native dialog element
        this._dialog?.close();
    }

    /**
     * This is only to be used inside the component template as direct property
     * reassignment is not allowed.
     */
    private _triggerCloseModal = () : void => {
        this.isOpen = false;
    };

    /**
     * Prevents the user from dismissing the dialog via the `cancel`
     * event (ESC key) when `isDismissible` is set to false.
     *
     * @param event
     */
    private _handleDialogCancelEvent = (event: Event) : void => {
        if (!this.isDismissible) event.preventDefault();
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

    render () {
        const {
            heading,
            headingLevel = 'h2',
            size,
        } = this;

        const headingTag = unsafeStatic(headingLevel);

        return html`
            <dialog
                id="dialog"
                class="c-modal"
                size="${size}">
                <header>
                    <${headingTag} class="c-modal-heading">${heading}</${headingTag}>
                     ${this.isDismissible ? this.renderCloseButton() : nothing}
                </header>
                <article class="c-modal-content">
                    <slot></slot>
                </article>
            </dialog>
        `;
    }

    /**
     * Dismisses the modal on backdrop click. (dependent on prop: `isDismissible`)
     *
     */
    private _handleDialogLightDismiss = (event: MouseEvent) : void => {
        if (this.isDismissible) {
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
     * @eventType
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
     * @protected
     */
    protected renderCloseButton (): TemplateResult {
        return html`
            <pie-icon-button
                @click="${this._triggerCloseModal}"
                variant="ghost-secondary"
                class="c-modal-closeBtn"
                data-test-id="c-modal-closeBtn"></pie-icon-button>
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
