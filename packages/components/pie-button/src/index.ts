import {
    LitElement, html, unsafeCSS, nothing,
} from 'lit';
import { property } from 'lit/decorators.js';
import { validPropertyValues } from '@justeattakeaway/pie-webc-core';
import {
    ButtonProps, sizes, types, variants, iconPlacements,
} from './defs';
import styles from './button.scss?inline';
import 'element-internals-polyfill';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-button';

/**
 * @slot icon - The icon slot
 * @slot - Default slot
 */
export class PieButton extends LitElement implements ButtonProps {
    // TODO - we may want to consider making the element internals code reusable for other form controls.
    static formAssociated = true;

    private readonly _internals: ElementInternals;

    public get form () {
        return this._internals.form;
    }

    constructor () {
        super();
        this._internals = this.attachInternals();
    }

    @property()
    @validPropertyValues(componentSelector, sizes, 'medium')
    public size: ButtonProps['size'] = 'medium';

    @property()
    @validPropertyValues(componentSelector, types, 'submit')
    public type: ButtonProps['type'] = 'submit';

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

    @property({ type: String })
    public name?: string;

    @property({ type: String })
    public value?: string;

    @property()
    public formaction: ButtonProps['formaction'];

    @property()
    public formenctype: ButtonProps['formenctype'];

    @property()
    public formmethod: ButtonProps['formmethod'];

    @property({ type: Boolean })
    public formnovalidate: ButtonProps['formnovalidate'];

    @property()
    public formtarget: ButtonProps['formtarget'];

    /**
     * This method creates an invisible button of the same type as pie-button. It is then clicked, and immediately removed from the DOM.
     * This is done so that we trigger native form actions, such as submit and reset in the browser. The performance impact of adding and removing a single button to the DOM
     * should be neglible, however this should be monitored.
     * This is the only viable way of guaranteeing native button behaviour when using a web component in place of an actual HTML button.
     *
     * TODO: if we need to repeat this logic elsewhere, then we should consider moving this code to a shared class or mixin.
     */
    private _simulateNativeButtonClick (btnType: 'submit' | 'reset') {
        if (!this.form) return;

        const btn = document.createElement('button');
        btn.type = btnType;

        // Visually hidden styles
        btn.style.position = 'absolute';
        btn.style.width = '1px';
        btn.style.height = '1px';
        btn.style.padding = '0';
        btn.style.margin = '-1px';
        btn.style.overflow = 'hidden';
        btn.style.border = '0';
        btn.style.whiteSpace = 'nowrap';

        if (btnType === 'submit') {
            if (this.name) {
                btn.name = this.name;
            }
            if (this.value) {
                btn.value = this.value;
            }
            if (this.formaction) {
                btn.setAttribute('formaction', this.formaction);
            }
            if (this.formenctype) {
                btn.setAttribute('formenctype', this.formenctype);
            }
            if (this.formmethod) {
                btn.setAttribute('formmethod', this.formmethod);
            }
            if (this.formnovalidate) {
                btn.setAttribute('formnovalidate', 'formnovalidate');
            }
            if (this.formtarget) {
                btn.setAttribute('formtarget', this.formtarget);
            }
        }

        this.form.append(btn);
        btn.click();
        btn.remove();
    }

    private _handleClick () {
        if (!this.isLoading && this.form) {
            if (this.type === 'submit') {
                // only submit the form if either formnovalidate is set, or the form passes validation checks (triggers native form validation)
                if (this.formnovalidate || this.form.reportValidity()) {
                    this._simulateNativeButtonClick('submit');
                }
            }

            if (this.type === 'reset') {
                this._simulateNativeButtonClick('reset');
            }
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
                @click=${this._handleClick}
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
