import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { IconAppRestaurant } from '@justeattakeaway/pie-icons-webc/icons/IconAppRestaurant';

import styles from './iconButton.scss?inline';
import {
    IconButtonProps, iconButtonSizes, iconButtonVariants,
} from './defs';

// Valid values available to consumers
export { type IconButtonProps, iconButtonSizes, iconButtonVariants };

console.log('yoo', IconAppRestaurant);

const componentSelector = 'pie-icon-button';

export class PieIconButton extends LitElement {
    @property()
    @validPropertyValues(componentSelector, iconButtonSizes, 'medium')
        size: IconButtonProps['size'] = 'medium';

    @property()
    @validPropertyValues(componentSelector, iconButtonVariants, 'primary')
        variant: IconButtonProps['variant'] = 'primary';

    @property({ type: Boolean })
        disabled = false;

    @property({ type: Boolean })
        hello = false;

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
            </button>
            <icon-app-restaurant size="xs">`;
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
