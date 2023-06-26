import { LitElement, unsafeCSS } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js'; // eslint-disable-line import/no-extraneous-dependencies
import { RtlMixin, validPropertyValues, requiredProperty } from '@justeattakeaway/pie-webc-core';
import '@justeattakeaway/pie-icon-button';

import styles from './modal.scss?inline';
import { ModalProps, headingLevels, ON_MODAL_CLOSE_EVENT } from './defs';

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
                <article class="c-modal-content">
                    <slot></slot>
                </article>
            </dialog>
        `;
    }

    updated () {
        this._handleDialogLightDismiss();
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
    willUpdate (changedProperties: Map<string, any>) {
        if (changedProperties.has('isOpen') && this._dialog) {
            const dialog = this._dialog;
            const isClosed = changedProperties.get('isOpen') === false;

            if (isClosed) {
                dialog.showModal();
            } else {
                dialog.close();
            }
        }
    }

    _handleCloseDialog = () => {
        this._dialog.close();
        this._onDialogClose();
    };

    /**
     * Dismiss modal via `_handleCloseDialog()` on backdrop click
     * and will proceed to fire an `ON_MODAL_CLOSE_EVENT` event.
     *
     */
    _handleDialogLightDismiss = () => {
        this._dialog.addEventListener('click', (event) => {
            const rect = this._dialog.getBoundingClientRect();
            const isWithinDialogArea = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX && event.clientX <= rect.left + rect.width);

            if (!isWithinDialogArea) this._handleCloseDialog();
        });
    };

    /**
     * Dispatch `ON_MODAL_CLOSE_EVENT` event.
     * To be used whenever we close the modal.
     *
     * @event
     */
    _onDialogClose = () => {
        const event = new CustomEvent(ON_MODAL_CLOSE_EVENT);
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
