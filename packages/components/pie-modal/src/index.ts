import { LitElement, unsafeCSS } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { html, unsafeStatic } from 'lit/static-html.js';
import { property } from 'lit/decorators.js'; // eslint-disable-line import/no-extraneous-dependencies
import { RtlMixin, validPropertyValues, requiredProperty } from '@justeattakeaway/pie-webc-core';

import styles from './modal.scss?inline';
import type { HEADING_LEVELS } from './defs';

// Valid values available to consumers
export { HEADING_LEVELS };

const componentSelector = 'pie-modal';

export const headingLevels: HEADING_LEVELS[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
export class PieModal extends RtlMixin(LitElement) {
    @property({ type: Boolean })
        isOpen = false;

    @property({ type: String })
    @requiredProperty(componentSelector)
        heading!: string;

    @property()
    @validPropertyValues(componentSelector, headingLevels, 'h2')
        headingLevel : HEADING_LEVELS = 'h2';

    render () {
        const {
            isOpen,
            heading,
            headingLevel,
        } = this;

        const headingTag = unsafeStatic(headingLevel);

        return html`
            <dialog class="c-modal" ?open="${isOpen}">
                <${headingTag} class="c-modal-heading">${heading}</${headingTag}>
                <div class="c-modal-contentWrapper">
                    <slot></slot>
                </div>
            </dialog>
        `;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieModal);

declare global {
    interface HTMLElementTagNameMap {
        'pie-modal': PieModal;
    }
}
