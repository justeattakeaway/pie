import { LitElement, html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValuesDecoratorFactory } from '@justeattakeaway/pie-webc-core';
import styles from './button.scss?inline';
import {
    ButtonProps, sizes, types, variants,
} from './defs';

// Valid values available to consumers
export {
    type ButtonProps,
    sizes,
    types,
    variants,
};

const componentSelector = 'pie-button';
const validPropertyValues = validPropertyValuesDecoratorFactory(componentSelector);

export class PieButton extends LitElement {
    @property()
    @validPropertyValues(sizes, 'medium')
        size: ButtonProps['size'] = 'medium';

    @property()
    @validPropertyValues(types, 'submit')
        type: ButtonProps['type'] = 'submit';

    @property()
    @validPropertyValues(variants, 'primary')
        variant: ButtonProps['variant'] = 'primary';

    @property({ type: Boolean })
        disabled = false;

    @property({ type: Boolean })
        isFullWidth = false;

    render () {
        const {
            type, disabled, isFullWidth, variant, size,
        } = this;

        return html`
            <button
                class="o-btn"
                type=${type}
                variant=${variant}
                size=${size}
                ?disabled=${disabled}
                ?isFullWidth=${isFullWidth}>
                <slot></slot>
            </button>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieButton);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieButton;
    }
}
