import {
    LitElement, html, unsafeCSS, nothing, PropertyValues,
} from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './button.scss?inline';
import {
    ButtonProps, sizes, types, variants, iconPlacements,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-button';

/**
 * @slot icon - The icon slot
 * @slot - Default slot
 */
export class PieButton extends LitElement implements ButtonProps {
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

    private _formElement?: HTMLFormElement;

    private observer?: MutationObserver;

    updated (changedProperties: PropertyValues<this>) {
        super.updated(changedProperties);
        if (changedProperties.has('type') || changedProperties.has('formId')) {
            if (this.type === 'submit') {
                let existingForm : HTMLFormElement | null;
                if (this.formId) {
                    existingForm = document.getElementById(this.formId as string) as HTMLFormElement;
                } else {
                    existingForm = this.closest('form');
                }

                if (existingForm) {
                    this._formElement = existingForm as HTMLFormElement;
                    console.info('Form found.');
                } else {
                    this._disconnectObserver(); // disconnect any previously initiated observer
                    this._initObserver();
                }
            }
        }
    }

    _disconnectObserver () {
        if (this.observer) {
            this.observer.disconnect();
            console.log('Disconnected a previous observer.');
            this.observer = undefined;
        }
    }

    _initObserver () {
        console.log('Observer starting...');

        this.observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    let form : HTMLFormElement | null;
                    if (this.formId) {
                        form = document.getElementById(this.formId as string) as HTMLFormElement;
                    } else {
                        form = this.closest('form');
                    }

                    console.log('form is', form);
                    if (form) {
                        this._formElement = form as HTMLFormElement;
                        console.info('formElement', this._formElement);
                        console.info('Observer stopped');
                        this._disconnectObserver();
                    }
                }
            });
        });

        this.observer.observe(document.body, { childList: true, subtree: true });
    }

    private handleClick () {
        if (this.type === 'submit' && this._formElement) {
            this._formElement.dispatchEvent(new Event('submit', { bubbles: true }));
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
