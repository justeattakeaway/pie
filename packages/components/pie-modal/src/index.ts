import { LitElement, unsafeCSS } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
import { RtlMixin, validPropertyValues, requiredProperty } from '@justeattakeaway/pie-webc-core';
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
        _dialog: HTMLDialogElement;

    // eslint-disable-next-line class-methods-use-this
    firstUpdated (changedProperties: Map<string, any>) {
        // This ensures if the modal is open on first render, the scroll lock is applied
        if (changedProperties.has('isOpen')) {
            const previousValue = changedProperties.get('isOpen');
            if (previousValue === undefined && this.isOpen) {
                this._onDialogOpen();
            }
        }
    }

    // eslint-disable-next-line class-methods-use-this
    updated (changedProperties: Map<string, any>) {
        if (changedProperties.has('isOpen')) {
            const previousValue = changedProperties.get('isOpen');
            if (previousValue) {
                this._onDialogClose();
            } else if (previousValue === false) {
                this._onDialogOpen();
            }
        }
    }

    connectedCallback () {
        super.connectedCallback();

        document.addEventListener(ON_MODAL_OPEN_EVENT, this._disableScrolling);
        document.addEventListener(ON_MODAL_CLOSE_EVENT, this._enableScrolling);
    }

    disconnectedCallback () {
        // Clean up event listeners
        document.removeEventListener(ON_MODAL_OPEN_EVENT, this._disableScrolling);
        document.removeEventListener(ON_MODAL_CLOSE_EVENT, this._enableScrolling);

        super.disconnectedCallback();
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

    _handleCloseDialog = () => {
        this._dialog.close();
        this.isOpen = false;
        this._onDialogClose();
    };

    /**
     * Dispatch `ON_MODAL_CLOSE_EVENT` event.
     * To be used whenever we close the modal.
     *
     * @event
     */
    _onDialogClose = () : void => {
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
    _onDialogOpen = () : void => {
        const event = new CustomEvent(ON_MODAL_OPEN_EVENT, {
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(event);
    };

    _enableScrolling = () => {
        enableBodyScroll(this);
    };

    _disableScrolling = () => {
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
