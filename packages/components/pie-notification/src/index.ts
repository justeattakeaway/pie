import {
    unsafeCSS,
    nothing,
    type TemplateResult,
    type PropertyValues,
} from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { classMap } from 'lit/directives/class-map.js';
import { html, unsafeStatic } from 'lit/static-html.js';
import { validPropertyValues, dispatchCustomEvent, safeCustomElement } from '@justeattakeaway/pie-webc-core';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
    type NotificationProps,
    type ActionProps,
    variants,
    positions,
    headingLevels,
    actionSizes,
    componentSelector,
    componentClass,
    ON_NOTIFICATION_CLOSE_EVENT,
    ON_NOTIFICATION_OPEN_EVENT,
    ON_NOTIFICATION_LEADING_ACTION_CLICK_EVENT,
    ON_NOTIFICATION_SUPPORTING_ACTION_CLICK_EVENT,
    defaultProps,
    defaultActionButtonProps,
} from './defs';
import styles from './notification.scss?inline';

import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/dist/IconAlertCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconAlertTriangle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCheckCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';
import '@justeattakeaway/pie-icons-webc/dist/IconInfoCircle.js';

// Valid values available to consumers
export * from './defs';

/**
 * @tagname pie-notification
 * @event {CustomEvent} pie-notification-leading-action-click -  When the notification leading action is clicked.
 * @event {CustomEvent} pie-notification-supporting-action-click - When the notification supporting action is clicked.
 * @event {CustomEvent} pie-notification-close - When the notification is closed.
 * @event {CustomEvent} pie-notification-open - When the notification is opened.
 * @slot - Default slot
 * @slot icon - The icon slot
 */
@safeCustomElement('pie-notification')
export class PieNotification extends PieElement implements NotificationProps {
    @property({ type: Boolean })
    public isOpen = defaultProps.isOpen;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, positions, defaultProps.position)
    public position = defaultProps.position;

    @property({ type: Boolean })
    public isDismissible = defaultProps.isDismissible;

    @property({ type: Boolean })
    public isCompact = defaultProps.isCompact;

    @property({ type: String })
    public heading: NotificationProps['heading'];

    @property({ type: String })
    @validPropertyValues(componentSelector, headingLevels, defaultProps.headingLevel)
    public headingLevel = defaultProps.headingLevel;

    @property({ type: Boolean })
    public hideIcon = defaultProps.hideIcon;

    @property({ type: Object })
    public leadingAction: NotificationProps['leadingAction'];

    @property({ type: Object })
    public supportingAction: NotificationProps['supportingAction'];

    @property({ type: Boolean })
    public hasStackedActions = defaultProps.hasStackedActions;

    @property({ type: Object })
    public aria: NotificationProps['aria'];

    @queryAssignedElements({ slot: 'icon' }) _iconSlot!: Array<HTMLElement>;

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    /**
     * Lifecycle method executed when component is updated.
     * It dispatches an event if notification is opened.
     */
    protected updated (_changedProperties: PropertyValues<this>): void {
        if (_changedProperties.has('isOpen') && this.isOpen) {
            dispatchCustomEvent(this, ON_NOTIFICATION_OPEN_EVENT, { targetNotification: this });
        }
    }

    /**
     * Template for the footer area
     * Called within the main render function.
     *
     * @private
     */
    private renderFooter () {
        const {
            leadingAction, supportingAction, isCompact, hasStackedActions,
        } = this;
        const classes = {
            [`${componentClass}-footer`]: true,
            [`${componentClass}-footer--compact`]: isCompact,
            [`${componentClass}-footer--stacked`]: hasStackedActions && !isCompact,
        };
        return html`
            <footer
                class="${classMap(classes)}"
                data-test-id="${componentSelector}-footer">
                    ${supportingAction ? this.renderActionButton(supportingAction, 'supporting') : nothing}
                    ${leadingAction ? this.renderActionButton(leadingAction, 'leading') : nothing}
            </footer>
        `;
    }

    /**
     * Template for the header area
     * Called within the main render function.
     *
     * @private
     */
    private renderNotificationHeading (): TemplateResult {
        const { heading, headingLevel } = this;
        const tag = unsafeStatic(headingLevel);

        return html`<${tag}
                        id="${componentSelector}-heading"
                        class="${componentClass}-heading"
                        data-test-id="${componentSelector}-heading">
                            ${heading}
                    </${tag}>`;
    }

    /**
     * Util method that returns an icon from a variant that has default icon.
     *
     * @private
     */
    private getDefaultVariantIcon () {
        switch (this.variant) {
            case 'info':
                return html`<icon-info-circle class="icon" size="m" data-test-id="${componentSelector}-heading-icon-info"></icon-info-circle>`;
            case 'success':
                return html`<icon-check-circle class="icon" size="m" data-test-id="${componentSelector}-heading-icon-success"></icon-check-circle>`;
            case 'warning':
                return html`<icon-alert-triangle class="icon" size="m" data-test-id="${componentSelector}-heading-icon-warning"></icon-alert-triangle>`;
            case 'error':
                return html`<icon-alert-circle class="icon" size="m" data-test-id="${componentSelector}-heading-icon-error"></icon-alert-circle>`;
            default:
                return nothing as never;
        }
    }

    /**
     * Template for the heading icon area.
     * It can return an icon provided externally via named slot or it can return a default icon according to the chosen variant if defined.
     * Called within the main render function.
     *
     * @private
     */
    private renderIcon (): TemplateResult | typeof nothing {
        return html`<slot name="icon">${this.getDefaultVariantIcon()}</slot>`;
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
                @click="${this.handleCloseButton}"
                aria-label="${ifDefined(this.aria?.close)}">
                <icon-close></icon-close>
            </pie-icon-button>`;
    }

    /**
     * It handles the action when user clicks in the close button.
     * Also triggers an event when is executed.
     *
     * @private
     */
    private handleCloseButton () {
        this.isOpen = false;
        dispatchCustomEvent(this, ON_NOTIFICATION_CLOSE_EVENT, { targetNotification: this });
    }

    /**
     * It handles the action button action.
     * Also triggers an event according to its `actionType`.
     *
     * @param {'leading' | 'supporting'} actionType
     *
     * @private
     */
    private handleActionClick (actionType: 'leading' | 'supporting') {
        const EVENT = actionType === 'leading' ? ON_NOTIFICATION_LEADING_ACTION_CLICK_EVENT : ON_NOTIFICATION_SUPPORTING_ACTION_CLICK_EVENT;

        dispatchCustomEvent(this, EVENT, { targetNotification: this });
    }

    /**
     * Render the action button depending on action type and its action.
     *
     * @param {ActionProps} action - The action properties.
     * @param {'leading' | 'supporting'} actionType - The type of the action.
     *
     * @returns {TemplateResult | typeof nothing} - The rendered action button or nothing if the action text is not defined.
     * @private
     */
    private renderActionButton (action: ActionProps, actionType: 'leading' | 'supporting') : TemplateResult | typeof nothing {
        const {
            text,
            ariaLabel,
            size = defaultActionButtonProps.size,
            href,
            target,
            rel,
            download,
        } = action;

        if (!text) {
            return nothing;
        }

        const buttonVariant = actionType === 'leading' ? 'primary' : 'ghost';
        const buttonSize = size && actionSizes.includes(size) ? size : defaultActionButtonProps.size;
        const isLink = !!href;

        return html`
            <pie-button
                variant="${buttonVariant}"
                size="${ifDefined(buttonSize)}"
                aria-label="${ifDefined(ariaLabel)}"
                @click="${() => this.handleActionClick(actionType)}"
                data-test-id="${componentSelector}-${actionType}-action"
                ?isFullWidth="${this.hasStackedActions}"
                tag="${isLink ? 'a' : 'button'}"
                type="${isLink ? nothing : 'button'}"
                href="${ifDefined(href)}"
                target="${ifDefined(target)}"
                rel="${ifDefined(rel)}"
                download="${ifDefined(download)}">
                ${text}
            </pie-button>
        `;
    }

    render () {
        const {
            variant,
            position,
            heading,
            isDismissible,
            isCompact,
            hideIcon,
            leadingAction,
            isOpen,
            aria,
        } = this;

        if (!isOpen) {
            return nothing;
        }

        const showCloseButton = isDismissible && !isCompact;

        const classes = {
            [componentClass]: true,
            [`${componentClass}--${variant}`]: true,
            [`${componentClass}--${position}`]: true,
            [`${componentClass}--compact`]: isCompact,
        };

        const contentSectionClasses = {
            [`${componentClass}-content-section`]: true,
            [`${componentClass}-content-section--dismissible`]: showCloseButton,
        };

        return html`
            <div
                data-test-id="${componentSelector}"
                class="${classMap(classes)}"
                role="region"
                aria-live="${variant === 'error' ? 'assertive' : 'polite'}"
                aria-labelledby="${heading ? `${componentSelector}-heading` : nothing}"
                aria-label="${!heading && ifDefined(aria?.label)}">
                ${showCloseButton ? this.renderCloseButton() : nothing}

                <section class="${classMap(contentSectionClasses)}">
                    ${!hideIcon ? this.renderIcon() : nothing}
                    <article>
                        ${heading ? this.renderNotificationHeading() : nothing}
                        <slot></slot>
                    </article>
                </section>

                ${leadingAction?.text ? this.renderFooter() : nothing}
            </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieNotification;
    }
}
