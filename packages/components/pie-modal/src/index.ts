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
        _dialog!: HTMLDialogElement;

    firstUpdated (changedProperties: DependentMap<ModalProps>) {
        this._handleModalOpenOnFirstRender(changedProperties);
    }

    updated (changedProperties: DependentMap<ModalProps>) {
        this._handleModalStateChanged(changedProperties);
    }

    connectedCallback () {
        super.connectedCallback();
        document.addEventListener(ON_MODAL_OPEN_EVENT, this._disableScrolling);
        document.addEventListener(ON_MODAL_CLOSE_EVENT, this._enableScrolling);
    }

    disconnectedCallback () {
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
            if (previousValue) {
                this._dispatchModalCloseEvent();
            } else if (previousValue === false) {
                this._dispatchModalOpenEvent();
            }
        }
    }

    render () {
        const {
            isOpen,
            heading,
            headingLevel = 'h2',
        } = this;

        const headingTag = unsafeStatic(headingLevel);

        return html`
            <dialog id="dialog" class="c-modal" ?open="${isOpen}">
                <header>
                    <${headingTag} class="c-modal-heading">${heading}</${headingTag}>
                    <pie-icon-button
                        @click="${this._handleCloseDialog}"
                        variant="ghost-tertiary"
                        class="c-modal-closeBtn"></pie-icon-button>
                </header>
                <article >
                    <div class="c-modal-content">
                        <slot></slot>
                    </div>
                </article>
            </dialog>
        `;
    }

    private _handleCloseDialog = () => {
        this._dialog.close();
        this.isOpen = false;
        this._dispatchModalCloseEvent();
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
