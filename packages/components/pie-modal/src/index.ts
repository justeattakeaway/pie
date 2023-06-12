import { LitElement, html, unsafeCSS } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { property } from 'lit/decorators.js';
import { RtlMixin } from '@justeattakeaway/pie-webc-core';

import styles from './modal.scss?inline';

export class PieModal extends RtlMixin(LitElement) {
    @property({ type: Boolean })
        isOpen = false;

    // eslint-disable-next-line class-methods-use-this
    render () {
        return html`
            <dialog class="c-modal" ?open="${this.isOpen}">
                <h3 class="c-modal-heading">Modal header</h3>
                <div class="c-modal-contentWrapper">
                    <slot></slot>
                </div>
            </dialog>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define('pie-modal', PieModal);

declare global {
    interface HTMLElementTagNameMap {
        'pie-modal': PieModal;
    }
}
