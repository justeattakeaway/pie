import {
    LitElement, html, unsafeCSS, nothing, TemplateResult,
} from 'lit';
import { defineCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import '@justeattakeaway/pie-icons-webc/IconClose';
import styles from './notification.scss?inline';
import { type NotificationProps, type ActionProps, variants } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-notification';
const componentClass = 'c-notification';

/**
 * @tagname pie-notification
 */
export class PieNotification extends LitElement implements NotificationProps {
    @property({ type: Boolean })
    public isOpen = false;

    @property()
    @validPropertyValues(componentSelector, variants, 'neutral')
    public variant: NotificationProps['variant'] = 'neutral';

    @property({ type: Boolean })
    public compact = false;

    @property({ type: Boolean })
    public isDismissible = false;

    @property({ type: Object })
    public leadingAction!: ActionProps;

    @property({ type: Object })
    public supportingAction!: ActionProps;

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    /**
     * Render leadingAction button depending on prop availability.
     *
     * 1. If the prop `leadingAction` is not provided, the button is not rendered.
     * 2. If the prop `leadingAction` is provided but any of the optional properties
     * are not provided, they fall back to their default values.
     *
     * @private
     */
    private renderLeadingAction () : TemplateResult | typeof nothing {
        const { text, variant = 'primary', ariaLabel } = this.leadingAction;

        if (!text) {
            return nothing;
        }

        return html`
            <pie-button
                variant="${variant}"
                aria-label="${ariaLabel || nothing}"
                type="submit"
                data-test-id="${componentSelector}-leading-action">
                ${text}
            </pie-button>
        `;
    }

    /**
     * Render supportingAction button depending on prop availability.
     *
     * 1. If the prop `supportingAction` is not provided, the button is not rendered.
     * 2. If the prop `supportingAction` is provided but any of the optional properties
     * are not provided, they fall back to their default values.
     * 3. If `supportingAction` is provided but not `leadingAction`, log a warning and do
     * not render `supportingAction`.
     *
     * @private
     */
    private renderSupportingAction () : TemplateResult | typeof nothing {
        const { text, variant = 'ghost', ariaLabel } = this.supportingAction;

        if (!text) {
            return nothing;
        }

        if (!this.leadingAction) {
            console.warn('Use `leadingAction` instead of `supportingAction`. `supportingAction` is being ignored.');
            return nothing;
        }

        return html`
            <pie-button
                variant="${variant}"
                aria-label="${ariaLabel || nothing}"
                type="reset"
                data-test-id="${componentSelector}-supporting-action">
                ${text}
            </pie-button>
        `;
    }

    private renderFooter () {
        if (!this.leadingAction) {
            return nothing;
        }

        return html`
            <footer class="${componentClass}-footer">
                ${this.leadingAction ? this.renderLeadingAction() : nothing}
                ${this.supportingAction ? this.renderSupportingAction() : nothing}
            </footer>
        `;
    }

    render () {
        return html`
        <div data-test-id="${componentSelector}" class="${componentClass}" variant="${this.variant}">
            <section>
                <header class="${componentClass}-header">
                    <icon-close></icon-close>
                    <h2>Title</h2>
                </header>
                <article>
                    <slot></slot>
                </article>
            </section>
            
            ${this.renderFooter()}
        </div>`;
    }
}

defineCustomElement(componentSelector, PieNotification);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieNotification;
    }
}
