import {
    unsafeCSS,
    nothing,
    LitElement,
    type TemplateResult,
    type PropertyValues,
} from 'lit';
import { type StaticValue, html, unsafeStatic } from 'lit/static-html.js';
import { defineCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import { type NotificationProps, type ActionProps,  variants, headingLevels, componentSelector, componentClass } from './defs';
import styles from './notification.scss?inline';

import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/IconClose';
import '@justeattakeaway/pie-icons-webc/IconInfoCircle';
import '@justeattakeaway/pie-icons-webc/IconAlertCircle';
import '@justeattakeaway/pie-icons-webc/IconAlertTriangle';
import '@justeattakeaway/pie-icons-webc/IconCheckCircle';
import '@justeattakeaway/pie-button';

// Valid values available to consumers
export * from './defs';
type InternalActionType = 'leading' | 'supporting';

export interface NotificationEventDetail {
    targetNotification: PieNotification;
}

/**
 * @tagname pie-notification
 */
export class PieNotification extends LitElement implements NotificationProps {
    @property({ type: Boolean })
    public isOpen = true;

    @property()
    @validPropertyValues(componentSelector, variants, 'neutral')
    public variant: NonNullable<NotificationProps['variant']> = 'neutral';

    @property({ type: Boolean })
    public isCompact = false;

    @property({ type: String })
    public heading!: string;

    @property()
    @validPropertyValues(componentSelector, headingLevels, 'h2')
    public headingLevel: NonNullable<NotificationProps['headingLevel']> = 'h2';

    @property({ type: Boolean })
    public hideIcon = false;

    @property({ type: Boolean })
    public hideCloseIcon = false;

    @property({ type: Object })
    public leadingAction!: ActionProps;

    @property({ type: Object })
    public supportingAction!: ActionProps;

    @queryAssignedElements({ slot: 'icon' }) _iconSlot!: Array<HTMLElement>;

    @state()
    protected _hasExternalIcon = false;

    @state()
    protected _hasIconClass = false;

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    /**
     * Lifecycle method executed after component renders.
     */
    protected firstUpdated (): void {
        this.updateIconProperties();
    }

    /**
     * Lifecycle method executed when component is about to update.
     * It update icon properties if variant has changes.
     */
    protected willUpdate (_changedProperties: PropertyValues<this>): void {
        if (_changedProperties.has('variant')) {
            this.updateIconProperties();
        }
    }

    /**
     * Method responsible to check if an external icon has been provided.
     * It reads from icon slot if there is an external icon as well check if variant has default icon.
     *
     * @private
     */
    private updateIconProperties () {
        this._hasExternalIcon = this._iconSlot.length > 0;
        this._hasIconClass = this._hasExternalIcon || this.variantHasDefaultIcon(this.variant);
    }

    /**
     * Template for the footer area
     * Called within the main render function.
     *
     * @private
     */
    private renderFooter (leadingAction: ActionProps, supportingAction?: ActionProps) {
        return html`
            <footer class="${componentClass}-footer" data-test-id="${componentSelector}-footer" is-compact="${this.isCompact}">
                ${supportingAction ? this.renderActionButton(supportingAction, 'supporting') : nothing}
                ${leadingAction ? this.renderActionButton(leadingAction, 'leading') : nothing}
            </footer>
        `;
    }

    /**
     * Template for the header area
     * Called within the main render function.
     *
     * @param {NotificationProps['heading']} heading
     * @param {StaticValue} headingTag
     *
     * @private
     */
    private renderNotificationHeading (heading: NotificationProps['heading'], headingTag: StaticValue): TemplateResult {
        return html`
            <header class="${componentClass}-header" data-test-id="${componentSelector}-header">
                <${headingTag} class="${componentClass}-heading" data-test-id="${componentSelector}-heading">${heading}</${headingTag}>
            </header>
        `;
    }

    /**
     * Util method that returns a boolean if variant has a default icon.
     *
     * @param {NonNullable<NotificationProps['variant']>} variant
     *
     * @private
     */
    private variantHasDefaultIcon (variant: NonNullable<NotificationProps['variant']>) {
        const validVariants = ['info', 'success', 'warning', 'error'];

        return validVariants.includes(variant);
    }

    /**
     * Util method that returns an icon from a variant that has default icon.
     *
     * @param {NonNullable<NotificationProps['variant']>} variant
     *
     * @private
     */
    private getDefaultVariantIcon (variant: NonNullable<NotificationProps['variant']>) {
        switch (variant) {
            case 'info':
                return html`<icon-info-circle size="s" data-test-id="${componentSelector}-heading-icon-info"></icon-info-circle>`;
            case 'success':
                return html`<icon-check-circle size="s" data-test-id="${componentSelector}-heading-icon-success"></icon-check-circle>`;
            case 'warning':
                return html`<icon-alert-triangle size="s" data-test-id="${componentSelector}-heading-icon-warning"></icon-alert-triangle>`;
            case 'error':
                return html`<icon-alert-circle size="s" data-test-id="${componentSelector}-heading-icon-error"></icon-alert-circle>`;
            default:
                return nothing as never;
        }
    }

    /**
     * Util method that returns a template with a default icon according to the chosen variant.
     * Called within the renderIcon method.
     *
     * @param {NonNullable<NotificationProps['variant']>} variant
     *
     * @private
     */
    private renderIconVariant (variant: NonNullable<NotificationProps['variant']>) {
        if (this.variantHasDefaultIcon(variant)) {
            return this.getDefaultVariantIcon(variant);
        }

        return nothing;
    }

    /**
     * Template for the heading icon area.
     * It can return an icon provided externally via named slot or it can return an default icon according to the chosen variant.
     * Called within the main render function.
     *
     * @param {NonNullable<NotificationProps['variant']>} variant
     * @param {boolean} hasExternalIcon
     *
     * @private
     */
    private renderIcon (variant: NonNullable<NotificationProps['variant']>, hasExternalIcon: boolean, hasIconClass: boolean): TemplateResult | typeof nothing {
        return html`
            <div data-test-id="${componentSelector}-icon-area" class="${hasIconClass ? 'has-icon ' : ''}${componentClass}-heading-icon">
                ${!hasExternalIcon ? this.renderIconVariant(variant) : nothing}
                <slot name="icon"></slot>
            </div>
        `;
    }

    /**
     * Template for the close button element. Called within the
     * main render function.
     *
     * @private
     */
    private renderCloseButton (): TemplateResult {
        return html`
            <pie-icon-button
                variant="ghost-secondary"
                size="small"
                class="${componentClass}-icon-close"
                data-test-id="${componentSelector}-icon-close"
                @click="${() => { this.isOpen = false; }}"
                >
                <icon-close></icon-close>
            </pie-icon-button>`;
    }

    /**
     * Render the action button depending on action type and its action.
     *
     * @param {ActionProps} action - The action properties.
     * @param {InternalActionType} actionType - The type of the action.
     * 
     * @returns {TemplateResult | typeof nothing} - The rendered action button or nothing if the action text is not defined.
     * @private
     */
    private renderActionButton (action: ActionProps, actionType: InternalActionType) : TemplateResult | typeof nothing {
        const { text, ariaLabel, onClick } = action;

        if (!text) {
            return nothing;
        }

        const buttonVariant = actionType === 'leading' ? 'primary' : 'ghost';

        return html`
            <pie-button
                variant="${buttonVariant}"
                size="small-productive"
                aria-label="${ariaLabel || nothing}"
                @click="${onClick ? () => onClick() : nothing}"
                data-test-id="${componentSelector}-${actionType}-action"
                type="submit">
                ${text}
            </pie-button>
        `;
    }

    render () {
        const {
            variant,
            heading,
            headingLevel,
            isCompact,
            _hasExternalIcon,
            hideIcon,
            _hasIconClass,
            leadingAction,
            supportingAction,
            isOpen
        } = this;

        if (!isOpen) {
            return nothing;
        }

        return html`
            <div data-test-id="${componentSelector}" class="${componentClass}" variant="${variant}" is-compact="${isCompact}">
                ${!isCompact ? this.renderCloseButton() : nothing}

                <section class="${componentClass}-content-section">
                    ${!hideIcon ? this.renderIcon(variant, _hasExternalIcon, _hasIconClass) : nothing}    
                    <article>
                        ${heading ? this.renderNotificationHeading(heading, unsafeStatic(headingLevel)) : nothing}
                        <slot></slot>
                    </article>
                </section>
                
                ${leadingAction ? this.renderFooter(leadingAction, supportingAction) : nothing}
            </div>`;
    }

    /**
     * Dispatch a custom event.
     *
     * To be used whenever we have behavioural events we want to
     * bubble up through the notification.
     *
     * @param {string} eventType
     */
    private dispatchModalCustomEvent (eventType: string): void {
        const event = new CustomEvent<NotificationEventDetail>(eventType, {
            bubbles: true,
            composed: true,
            detail: { targetNotification: this },
        });

        this.dispatchEvent(event);
    }
}

defineCustomElement(componentSelector, PieNotification);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieNotification;
    }
}
