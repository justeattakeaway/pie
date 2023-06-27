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
    ModalProps, headingLevels, ON_MODAL_CLOSE_EVENT, ON_MODAL_OPEN_EVENT,
} from './defs';

// Valid values available to consumers
export { type ModalProps, headingLevels };

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

    _handleModalOpened () : void {
        this._disableScrolling();
        //  We require this because toggling the prop `isOpen` itself won't
        //  allow the dialog to open in the correct way (with the default background),
        //  the method `showModal()` needs to be invoked.
        this._dialog?.showModal();
    }

    _handleModalClosed () : void {
        this._enableScrolling();
        //  Closes the native dialog element
        this._dialog?.close();
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

    // Handles the value of the isOpen property on first render of the component
    private _handleModalOpenStateOnFirstRender (changedProperties: DependentMap<ModalProps>) : void {
        // This ensures if the modal is open on first render, the scroll lock and backdrop are applied
        if (changedProperties.has('isOpen')) {
            const previousValue = changedProperties.get('isOpen') as boolean;
            if (previousValue === undefined && this.isOpen) {
                this._dispatchModalOpenEvent();
            }
        }
    }

    // Handles changes to the modal isOpen property by dispatching any appropriate events
    private _handleModalOpenStateChanged (changedProperties: DependentMap<ModalProps>) : void {
        if (changedProperties.has('isOpen')) {
            const previousValue = changedProperties.get('isOpen') as boolean;

            if (previousValue === undefined) {
                return;
            }

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
        } = this;

        const headingTag = unsafeStatic(headingLevel);

        return html`
            <dialog id="dialog" class="c-modal">
                <header>
                    <${headingTag} class="c-modal-heading">${heading}</${headingTag}>
                    <pie-icon-button
                        @click="${this._handleCloseDialog}"
                        variant="ghost-tertiary"
                        class="c-modal-closeBtn"></pie-icon-button>
                </header>
                <article class="c-modal-content">
                    <slot></slot>
                </article>
            </dialog>
        `;
    }

    private _handleCloseDialog = () : void => {
        //  Closes the native dialog element
        this._dialog?.close();
        this.isOpen = false;
        this._dispatchModalCloseEvent();
    };

    /**
     * Dismiss modal via `_handleCloseDialog()` on backdrop click
     * and will proceed to fire an `ON_MODAL_CLOSE_EVENT` event.
     *
     */
    private _handleDialogLightDismiss = (event: MouseEvent) : void => {
        const rect = this._dialog?.getBoundingClientRect();

        if (typeof rect !== 'undefined') {
            const isClickOutsideDialog = event.clientY < rect.top ||
                event.clientY > rect.bottom ||
                event.clientX < rect.left ||
                event.clientX > rect.right;

            if (isClickOutsideDialog) {
                this._handleCloseDialog();
            }
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

    private _enableScrolling = () : void => {
        enableBodyScroll(this);
    };

    private _disableScrolling = () : void => {
        disableBodyScroll(this);
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
