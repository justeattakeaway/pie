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

    constructor () {
        console.log('constructor');
        super();
        this.addEventListener('click', (event) => this._handleDialogLightDismiss(event));
    }

    @query('dialog')
        _dialog?: HTMLDialogElement;

    firstUpdated (changedProperties: DependentMap<ModalProps>) {
        console.log('firstUpdated');
        console.log(changedProperties.has('isOpen'));
        console.log(this._dialog);
        console.log(changedProperties.get('isOpen'));
        this._handleModalOpenOnFirstRender(changedProperties);
    }

    updated (changedProperties: DependentMap<ModalProps>) {
        console.log('updated');
        this._handleModalStateChanged(changedProperties);
        if (changedProperties.has('isOpen') && this._dialog) {
            const dialog = this._dialog;
            const isClosed = !changedProperties.get('isOpen');
            console.log('isClosed', isClosed);
            if (isClosed) {
                dialog.showModal();
            } else {
                dialog.close();
            }
        }
    }

    connectedCallback () {
        console.log('connectedCallback');
        super.connectedCallback();
        document.addEventListener(ON_MODAL_OPEN_EVENT, this._disableScrolling);
        document.addEventListener(ON_MODAL_CLOSE_EVENT, this._enableScrolling);
    }

    disconnectedCallback () {
        console.log('disconnectedCallback');
        document.removeEventListener(ON_MODAL_OPEN_EVENT, this._disableScrolling);
        document.removeEventListener(ON_MODAL_CLOSE_EVENT, this._enableScrolling);
        this._enableScrolling();
        super.disconnectedCallback();
    }

    private _handleModalOpenOnFirstRender (changedProperties: DependentMap<ModalProps>) {
        // This ensures if the modal is open on first render, the scroll lock is applied
        if (changedProperties.has('isOpen')) {
            const previousValue = changedProperties.get('isOpen') as boolean;
            if (previousValue === undefined && this.isOpen) {
                this._dispatchModalOpenEvent();
            }
        }
    }

    private _handleModalStateChanged (changedProperties: DependentMap<ModalProps>) {
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

    /**
     * We require this because toggling the prop `isOpen` itself won't
     * allow the dialog to open in the correct way (with the default background),
     * the method `showModal()` needs to be invoked.
     *
     * https://lit.dev/docs/components/lifecycle/#willupdate
     *
     * @param changedProperties
     */
    // willUpdate (changedProperties: Map<string, unknown>) {
    //     console.log('will update call!');
    //     console.log(changedProperties.has('isOpen'));
    //     console.log(this._dialog);
    //     if (changedProperties.has('isOpen') && this._dialog) {
    //         const dialog = this._dialog;
    //         const isClosed = changedProperties.get('isOpen') === false;
    //         console.log('isClosed', isClosed);
    //         if (isClosed) {
    //             dialog.showModal();
    //         } else {
    //             dialog.close();
    //         }
    //     }
    // }

    private _handleCloseDialog = () => {
        this._dialog?.close();
        this.isOpen = false;
        this._dispatchModalCloseEvent();
    };

    /**
     * Dismiss modal via `_handleCloseDialog()` on backdrop click
     * and will proceed to fire an `ON_MODAL_CLOSE_EVENT` event.
     *
     */
    private _handleDialogLightDismiss = (event: MouseEvent) => {
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
