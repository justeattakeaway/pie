import { LitElement, html, unsafeCSS } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { property, query } from 'lit/decorators.js';
import { RtlMixin } from '@justeattakeaway/pie-webc-core';

import styles from './modal.scss?inline';

export class PieModal extends RtlMixin(LitElement) {
    @property({ type: Boolean })
        isOpen = false;

    // Note: Using Underscores in Lit querys is some sort of Lit standard or requirement? Perhaps ask the Lit team.
    @query('dialog')
        _dialog;

    connectedCallback () {
        super.connectedCallback();

        // Note: If run inline, querySelector won't find the modal
        // TODO: Check if there is other way to avoid this workaround?
        setTimeout(() => {
            const dialog = this._dialog;

            if (dialog) {
                if (this.isOpen) dialog.showModal();

                dialog.addEventListener('click', this.handleBackdropClick);
                dialog.addEventListener('close', this.handleDialogClose);
            }
        }, 0);
    }

    disconnectedCallback () {
        super.disconnectedCallback();

        const dialog = this._dialog;

        if (dialog) {
            dialog.removeEventListener('click', this.handleBackdropClick);
            dialog.removeEventListener('close', this.handleDialogClose);
        }
    }

    // Note: This wouldn't be necessary if we could use Dialog as modal only by using attributes
    willUpdate (changedProperties: PropertyValues<this>) {
        const dialog = this._dialog;

        if (changedProperties.has('isOpen') && dialog) {
            const isClosed = changedProperties.get('isOpen') === false;

            if (isClosed) {
                dialog.showModal();
            } else {
                dialog.close();
            }
        }
    }

    // eslint-disable-next-line class-methods-use-this
    render () {
        return html`
            <dialog class="c-modal">
                <h3 class="c-modal-heading">
                    Modal header
                    <button @click=${this.handleCloseButtonClick}>close</button>
                </h3>
                <div class="c-modal-contentWrapper">
                    <slot></slot>
                </div>
            </dialog>
        `;
    }

    handleDialogClose () {
        this.dispatchEvent(new CustomEvent('onClose'));
    }

    handleBackdropClick = (event) => {
        // Note: This is a bit hackish, we need to find the most suitable solution for detecting clicks outside the Dialog. Another possible solution is using event.target.getBoundingClientRect() and event.clientX/Y
        if (event.target && event.target.nodeName === 'DIALOG') {
            this._dialog.close();
        }
    };

    handleCloseButtonClick = () => {
        this._dialog.close();
    };

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define('pie-modal', PieModal);

declare global {
    interface HTMLElementTagNameMap {
        'pie-modal': PieModal;
    }
}
