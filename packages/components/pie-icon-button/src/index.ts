import { LitElement, html, unsafeCSS } from 'lit'; // eslint-disable-line import/no-extraneous-dependencies
import { property } from 'lit/decorators.js'; // eslint-disable-line import/no-extraneous-dependencies
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './iconButton.scss?inline';
import { IconButtonProps, iconButtonVariants } from './defs';

// Valid values available to consumers
export { type IconButtonProps, iconButtonVariants };

const componentSelector = 'pie-icon-button';

export class PieIconButton extends LitElement {
    @property()
    @validPropertyValues(componentSelector, iconButtonVariants, 'primary')
        variant: IconButtonProps['variant'] = 'primary';

    @property({ type: Boolean })
        disabled = false;

    render () {
        const {
            disabled, variant,
        } = this;

        // The inline SVG is temporary until we have a proper icon integration
        return html`
            <button
                class="o-iconBtn"
                variant=${variant}
                ?disabled=${disabled}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8676 3.20496L8.0001 7.07248L4.13258 3.20496L3.20508 4.13246L7.0726 7.99998L3.20508 11.8675L4.13258 12.795L8.0001 8.92748L11.8676 12.795L12.7951 11.8675L8.92761 7.99998L12.7951 4.13246L11.8676 3.20496Z" fill="#242E30"/>
                </svg>
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
