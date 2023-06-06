import { LitElement, html, unsafeCSS } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { RtlMixin } from '@justeattakeaway/pie-webc-core';

import styles from './modal.scss?inline';

export class PieModal extends RtlMixin(LitElement) {
    // eslint-disable-next-line class-methods-use-this
    render () {
        return html`
            <dialog class="c-modal" open>
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
