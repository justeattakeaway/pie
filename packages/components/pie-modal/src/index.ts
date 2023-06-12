import { LitElement, unsafeCSS } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { html, unsafeStatic } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js'; // eslint-disable-line import/no-extraneous-dependencies
import { RtlMixin, validPropertyValues, requiredProperty } from '@justeattakeaway/pie-webc-core';

import styles from './modal.scss?inline';
import { HEADING_LEVELS } from './defs';

// Valid values available to consumers
export { HEADING_LEVELS };

const componentSelector = 'pie-modal';

export class PieModal extends RtlMixin(LitElement) {
    @property({ type: Boolean })
        isOpen = false;

    @property({ type: String })
    @requiredProperty(componentSelector)
        heading!: string;

    @property()
    @validPropertyValues(componentSelector, Object.values(HEADING_LEVELS), HEADING_LEVELS.H2)
        headingLevel : HEADING_LEVELS = HEADING_LEVELS.H2;

    // Note: Using Underscores in Lit querys is some sort of Lit standard or requirement? Perhaps ask the Lit team.
    @query('dialog')
        _dialog: HTMLDialogElement;

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

    render () {
        const {
            heading,
            headingLevel,
        } = this;

        const headingTag = unsafeStatic(headingLevel);

        return html`
            <dialog class="c-modal">
                <${headingTag} class="c-modal-heading">
                    ${heading}
                    <button @click=${this.handleCloseButtonClick}>close</button>
                </${headingTag}>
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

customElements.define(componentSelector, PieModal);

declare global {
    interface HTMLElementTagNameMap {
        'pie-modal': PieModal;
    }
}
