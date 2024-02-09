import {
    LitElement,
    unsafeCSS,
    TemplateResult,
    nothing,
} from 'lit';
import { type StaticValue, html, unsafeStatic } from 'lit/static-html.js';
import { defineCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { type NotificationProps, variants, headingLevels } from './defs';
import styles from './notification.scss?inline';

import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/IconClose';
import '@justeattakeaway/pie-icons-webc/IconInfoCircle';
import '@justeattakeaway/pie-icons-webc/IconAlertCircle';
import '@justeattakeaway/pie-icons-webc/IconAlertTriangle';
import '@justeattakeaway/pie-icons-webc/IconCheckCircle';

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
    public isCompact = false;

    @property({ type: String })
    public heading!: string;

    @property()
    @validPropertyValues(componentSelector, headingLevels, 'h2')
    public headingLevel: NotificationProps['headingLevel'] = 'h2';

    @property({ type: Boolean })
    public hideIcon = false;

    @property({ type: Boolean })
    public hideCloseIcon = false;

    private _hasExternalIcon = false;

    @queryAssignedElements({ slot: 'icon' }) _iconSlot!: Array<HTMLElement>;

    protected firstUpdated (): void {
        if (this._iconSlot.length > 0) {
            this._hasExternalIcon = true;
        }
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    /**
     * Template for the footer area
     * Called within the main render function.
     *
     * @private
     */
    private renderFooter () {
        return html`
            <footer class="${componentClass}-footer"></footer>
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
     * Util static function that returns a boolean if variant has a default icon.
     *
     * @param {NotificationProps['variant']} variant
     *
     * @static
     */
    static variantHasDefaultIcon (variant: NotificationProps['variant']) {
        const validVariants = ['info', 'success', 'warning', 'error'];

        return validVariants.includes(variant);
    }

    /**
     * Util static function that returns an icon from a variant that has default icon.
     *
     * @param {NotificationProps['variant']} variant
     *
     * @static
     */
    static getDefaultVariantIcon (variant: NotificationProps['variant']) {
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
     * Util static function that returns a template with a default icon according to the chosen variant.
     * Called within the renderIcon method.
     *
     * @param {NotificationProps['variant']} variant
     *
     * @static
     */
    static renderIconVariant (variant: NotificationProps['variant']) {
        if (PieNotification.variantHasDefaultIcon(variant)) {
            return PieNotification.getDefaultVariantIcon(variant);
        }

        return nothing;
    }

    /**
     * Template for the heading icon area.
     * It can return an icon provided externally via named slot or it can return an default icon according to the chosen variant.
     * Called within the main render function.
     *
     * @param {NotificationProps['variant']} variant
     * @param {boolean} hasExternalIcon
     *
     * @private
     */
    private renderIcon (variant: NotificationProps['variant'], hasExternalIcon: boolean): TemplateResult | typeof nothing {
        return html`
            <div class="${componentClass}-heading-icon">
                ${!hasExternalIcon ? PieNotification.renderIconVariant(variant) : nothing}
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
                >
                <icon-close></icon-close>
            </pie-icon-button>`;
    }

    render () {
        const {
            variant,
            heading,
            headingLevel,
            isCompact,
            renderNotificationHeading,
            renderIcon,
            _hasExternalIcon,
            hideIcon,
            renderCloseButton,
        } = this;
        const headingTag = unsafeStatic(headingLevel);

        return html`
            <div data-test-id="${componentSelector}" class="${componentClass}" variant="${variant}" is-compact="${isCompact}">
                ${!isCompact ? renderCloseButton() : nothing}

                <section class="${componentClass}-content-section">
                    ${!hideIcon ? renderIcon(variant, _hasExternalIcon) : nothing}    
                    <article>
                        ${heading ? renderNotificationHeading(heading, headingTag) : nothing}
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
