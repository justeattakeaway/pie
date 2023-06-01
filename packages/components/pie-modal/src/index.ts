import { LitElement, html } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { RtlMixin } from '@justeattakeaway/pie-webc-core';

export class PieModal extends RtlMixin(LitElement) {
    // eslint-disable-next-line class-methods-use-this
    render () {
        return html`
            <div>This is the Pie Modal
                <slot></slot>
            </div>`;
    }
}

customElements.define('pie-modal', PieModal);

declare global {
    interface HTMLElementTagNameMap {
        'pie-modal': PieModal;
    }
}
