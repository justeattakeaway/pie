import { LitElement, unsafeCSS } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { property, query } from 'lit/decorators.js';
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
        _dialog: HTMLDialogElement;

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
                <article>
                    <div class="c-modal-content">
                        <slot></slot>
                    </div>
                </article>
            </dialog>
        `;
    }

    _handleCloseDialog = () => {
        this._dialog.close();
        this._onDialogClose();
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
