import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { IconAlcoholFilled } from '@justeattakeaway/pie-icons-webc';

export { IconAlcoholFilled };

import styles from './iconButton.scss?inline';
import {
    IconButtonProps, sizes, variants,
} from './defs';

// Valid values available to consumers
export { type IconButtonProps, sizes, variants };

const componentSelector = 'pie-icon-button';

export class PieIconButton extends LitElement {
    @property()
    @validPropertyValues(componentSelector, sizes, 'medium')
        size: IconButtonProps['size'] = 'medium';

    @property()
    @validPropertyValues(componentSelector, variants, 'primary')
        variant: IconButtonProps['variant'] = 'primary';

    @property({ type: Boolean })
        disabled = false;

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
                <icon-alcohol-filled size="${size}" />
            </button>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieIconButton);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieIconButton;
    }
}
