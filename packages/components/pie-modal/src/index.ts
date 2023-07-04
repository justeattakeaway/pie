import { LitElement, unsafeCSS } from 'lit';
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

    @property({ type: Boolean })
        isFullWidthBelowMid = false;

    @query('dialog')
        _dialog?: HTMLDialogElement;

    constructor () {
        super();
        this.addEventListener('click', (event) => this._handleDialogLightDismiss(event));
    }

    firstUpdated (changedProperties: DependentMap<ModalProps>) : void {
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

    // Handles the value of the isOpen property on first render of the component
    private _handleModalOpenStateOnFirstRender (changedProperties: DependentMap<ModalProps>) : void {
        // This ensures if the modal is open on first render, the scroll lock and backdrop are applied
        const previousValue = changedProperties.get('isOpen');

        if (previousValue === undefined && this.isOpen) {
            this._dispatchModalOpenEvent();
        }
    }

    // Handles changes to the modal isOpen property by dispatching any appropriate events
    private _handleModalOpenStateChanged (changedProperties: DependentMap<ModalProps>) : void {
        const previousValue = changedProperties.get('isOpen');

        if (previousValue !== undefined) {
            if (previousValue) {
                this._dispatchModalCloseEvent();
            } else {
                this._dispatchModalOpenEvent();
            }
        }
    }

    render () {
        const {
            heading,
            headingLevel = 'h2',
            size,
            isFullWidthBelowMid,
        } = this;

        const headingTag = unsafeStatic(headingLevel);

        return html`
            <dialog
                id="dialog"
                size="${size}"
                ?isFullWidthBelowMid=${isFullWidthBelowMid}
                class="c-modal">
                <header>
                    <${headingTag} class="c-modal-heading">${heading}</${headingTag}>
                    <pie-icon-button
                        @click="${this._triggerCloseModal}"
                        variant="ghost-secondary"
                        class="c-modal-closeBtn"></pie-icon-button>
                </header>
                <article class="c-modal-content">
                    <slot></slot>
                </article>
            </dialog>
        `;
    }

    /**
     * Dismisses the modal on backdrop click
     *
     */
    private _handleDialogLightDismiss = (event: MouseEvent) : void => {
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
     * Dispatch `ON_MODAL_CLOSE_EVENT` event.
     * To be used whenever we close the modal.
     *
     * @event
     */
    private _dispatchModalCloseEvent = () : void => {
        const event = new CustomEvent(ON_MODAL_CLOSE_EVENT, {
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(event);
    };

    /**
     * Dispatch `ON_MODAL_OPEN_EVENT` event.
     * To be used whenever we open the modal.
     *
     * @event
     */
    private _dispatchModalOpenEvent = () : void => {
        const event = new CustomEvent(ON_MODAL_OPEN_EVENT, {
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(event);
    };

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieModal);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieModal;
    }
}
