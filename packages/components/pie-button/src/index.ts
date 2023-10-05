import {
    LitElement, html, unsafeCSS, nothing,
} from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues, FormAssociatedComponentMixin } from '@justeattakeaway/pie-webc-core';
import {
    ButtonProps, sizes, types, variants, iconPlacements,
} from './defs';
import styles from './button.scss?inline';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-button';

/**
 * @slot icon - The icon slot
 * @slot - Default slot
 */
export class PieButton extends FormAssociatedComponentMixin(LitElement) implements ButtonProps {
    @property()
    @validPropertyValues(componentSelector, sizes, 'medium')
    public size: ButtonProps['size'] = 'medium';

    @property()
    @validPropertyValues(componentSelector, types, 'button')
    public type: ButtonProps['type'] = 'button';

    @property()
    @validPropertyValues(componentSelector, variants, 'primary')
    public variant: ButtonProps['variant'] = 'primary';

    @property({ type: String })
    @validPropertyValues(componentSelector, iconPlacements, 'leading')
    public iconPlacement: ButtonProps['iconPlacement'] = 'leading';

    @property({ type: Boolean })
    public disabled = false;

    @property({ type: Boolean, reflect: true })
    public isLoading = false;

    @property({ type: Boolean })
    public isFullWidth = false;

    @property({ type: String, reflect: true })
    public formId?: string;

    connectedCallback () {
        super.connectedCallback();
        console.log('form: ', this.form);
        console.log('internals: ', this._internals);
    }

    private handleClick () {
        if (this.type === 'submit' && this.form) {
            this.form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            console.info('submitting form');
        }
    }

    render () {
        const {
            type,
            disabled,
            isFullWidth,
            variant,
            size,
            isLoading,
            iconPlacement,
        } = this;

        return html`
            <button
                @click=${this.handleClick}
                class="o-btn"
                type=${type}
                variant=${variant}
                size=${size}
                ?disabled=${disabled}
                ?isFullWidth=${isFullWidth}
                ?isLoading=${isLoading}>
                    ${iconPlacement === 'leading' ? html`<slot name="icon"></slot>` : nothing}
                    <slot></slot>
                    ${iconPlacement === 'trailing' ? html`<slot name="icon"></slot>` : nothing}
            </button>`;
    }

    focus () {
        this.shadowRoot?.querySelector('button')?.focus();
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
