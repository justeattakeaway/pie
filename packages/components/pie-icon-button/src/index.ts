import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './iconButton.scss?inline';
import {
    IconButtonProps, sizes, variants,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-icon-button';

/**
 * @tagname pie-icon-button
 */
export class PieIconButton extends LitElement implements IconButtonProps {
    @property()
    @validPropertyValues(componentSelector, sizes, 'medium')
    public size: IconButtonProps['size'] = 'medium';

    @property()
    @validPropertyValues(componentSelector, variants, 'primary')
    public variant: IconButtonProps['variant'] = 'primary';

    @property({ type: Boolean })
    public disabled = false;

    render () {
        const {
            disabled, size, variant,
        } = this;

        // The inline SVG is temporary until we have a proper icon integration
        return html`
            <button
                class="o-iconBtn"
                size=${size}
                variant=${variant}
                ?disabled=${disabled}>
                <slot></slot>
            </button>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieIconButton);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieIconButton;
    }
}
