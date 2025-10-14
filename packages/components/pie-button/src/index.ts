import {
    html, unsafeCSS, nothing, type PropertyValues, type TemplateResult,
} from 'lit';
import { classMap, type ClassInfo } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import 'element-internals-polyfill';

import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    validPropertyValues, FormControlMixin, safeCustomElement, DelegatesFocusMixin,
} from '@justeattakeaway/pie-webc-core';

import '@justeattakeaway/pie-spinner';
import { type SpinnerProps } from '@justeattakeaway/pie-spinner';

import {
    type ButtonProps, defaultProps, iconPlacements, sizes, tags, types, variants,
} from './defs';
import styles from './button.scss?inline';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-button';

/**
 * @tagname pie-button
 * @slot icon - The icon slot
 * @slot - Default slot
 */
@safeCustomElement('pie-button')
export class PieButton extends DelegatesFocusMixin(FormControlMixin(PieElement)) implements ButtonProps {
    connectedCallback () {
        super.connectedCallback();

        if (this.type === 'submit') {
            this.form?.addEventListener('keydown', this._handleFormKeyDown);
        }
    }

    disconnectedCallback () {
        super.disconnectedCallback();

        if (this.type === 'submit') {
            this.form?.removeEventListener('keydown', this._handleFormKeyDown);
        }
    }

    updated (changedProperties: PropertyValues<this>): void {
        if (changedProperties.has('type')) {
            // If the new type is "submit", add the keydown event listener
            if (this.type === 'submit') {
                this.form?.addEventListener('keydown', this._handleFormKeyDown);
            } else {
                this.form?.removeEventListener('keydown', this._handleFormKeyDown);
            }
        }
    }

    @property({ type: String })
    @validPropertyValues(componentSelector, tags, defaultProps.tag)
    public tag = defaultProps.tag;

    @property({ type: String })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: String })
    @validPropertyValues(componentSelector, types, defaultProps.type)
    public type = defaultProps.type;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, iconPlacements, defaultProps.iconPlacement)
    public iconPlacement = defaultProps.iconPlacement;

    @property({ type: Boolean })
    public disabled = defaultProps.disabled;

    @property({ type: Boolean, reflect: true })
    public isLoading = defaultProps.isLoading;

    @property({ type: Boolean, reflect: true })
    public isFullWidth = defaultProps.isFullWidth;

    @property({ type: Boolean })
    public isResponsive = defaultProps.isResponsive;

    @property({ type: String })
    public name: ButtonProps['name'];

    @property({ type: String })
    public value: ButtonProps['value'];

    @property({ type: String })
    public formaction: ButtonProps['formaction'];

    @property({ type: String })
    public formenctype: ButtonProps['formenctype'];

    @property({ type: String })
    public formmethod: ButtonProps['formmethod'];

    @property({ type: Boolean })
    public formnovalidate: ButtonProps['formnovalidate'];

    @property({ type: String })
    public formtarget: ButtonProps['formtarget'];

    @property({ type: String })
    public responsiveSize: ButtonProps['responsiveSize'];

    @property({ type: String })
    public href: ButtonProps['href'];

    @property({ type: String })
    public rel: ButtonProps['rel'];

    @property({ type: String })
    public target: ButtonProps['target'];

    @property({ type: Boolean })
    public download: ButtonProps['download'];

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
        if (!this.form) return;
        if (this.isLoading) return;
        if (this.tag !== 'button') return;

        if (this.type === 'submit') {
            // only submit the form if either formnovalidate is set, or the form passes validation checks (triggers native form validation)
            if (this.formnovalidate || this.form.reportValidity()) {
                this._simulateNativeButtonClick('submit');
            }
        } else if (this.type === 'reset') {
            this._simulateNativeButtonClick('reset');
        }
    }

    // This allows a user to press enter anywhere inside the form and trigger a form submission
    private _handleFormKeyDown = (event: KeyboardEvent) => {
        if (event.key !== 'Enter' || this.type !== 'submit' || this.disabled) {
            return;
        }

        if (event.target instanceof HTMLElement) {
            const targetTagName = event.target.tagName.toLowerCase();

            // We want to ignore the enter key if the user is on a button or another pie-button
            if (targetTagName === 'button' || targetTagName === 'pie-button') {
                return;
            }
        }

        event.preventDefault();
        this._handleClick();
    };

    /**
     * Template for the loading state
     *
     * @private
     */
    private renderSpinner (): TemplateResult {
        const { size, variant, disabled } = this;

        const spinnerSize: SpinnerProps['size'] = size && size.includes('small') ? 'small' : 'medium'; // includes("small") matches for any small size value and xsmall
        let spinnerVariant: SpinnerProps['variant'];
        if (disabled) {
            spinnerVariant = variant === 'ghost-inverse' ? 'inverse' : 'secondary';
        } else {
            const inverseVariants: ButtonProps['variant'][] = ['primary', 'destructive', 'outline-inverse', 'ghost-inverse'];
            spinnerVariant = inverseVariants.includes(this.variant) ? 'inverse' : 'secondary';
        }

        return html`
            <pie-spinner
                size="${spinnerSize}"
                variant="${spinnerVariant}">
            </pie-spinner>`;
    }

    renderAnchor (classes: ClassInfo) {
        const {
            href, iconPlacement, rel, target, download,
        } = this;

        return html`
            <a
                href="${ifDefined(href)}"
                rel="${ifDefined(rel)}"
                target="${ifDefined(target)}"
                ?download="${download}"
                class="${classMap(classes)}">
                ${iconPlacement === 'leading' ? html`<slot name="icon"></slot>` : nothing}
                <slot></slot>
                ${iconPlacement === 'trailing' ? html`<slot name="icon"></slot>` : nothing}
            </a>`;
    }

    renderButton (classes: ClassInfo) {
        const {
            disabled, iconPlacement, isLoading, type,
        } = this;

        const buttonClasses = {
            ...classes,
            'is-loading': isLoading,
        };

        return html`
            <button
                @click=${this._handleClick}
                class=${classMap(buttonClasses)}
                type=${type}
                ?disabled=${disabled}>
                    ${isLoading ? this.renderSpinner() : nothing}
                    ${iconPlacement === 'leading' ? html`<slot name="icon"></slot>` : nothing}
                    <span class="o-btn-text"><slot></slot></span>
                    ${iconPlacement === 'trailing' ? html`<slot name="icon"></slot>` : nothing}
            </button>`;
    }

    render () {
        const {
            isFullWidth,
            isResponsive,
            responsiveSize,
            size,
            tag,
            variant,
        } = this;

        const classes = {
            'o-btn': true,
            'o-btn--fullWidth': isFullWidth,
            'o-btn--responsive': isResponsive,
            [`o-btn--${responsiveSize}`]: Boolean(isResponsive && responsiveSize),
            [`o-btn--${variant}`]: true,
            [`o-btn--${size}`]: true,
        };

        if (tag === 'a') {
            return this.renderAnchor(classes);
        }

        return this.renderButton(classes);
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieButton;
    }
}
