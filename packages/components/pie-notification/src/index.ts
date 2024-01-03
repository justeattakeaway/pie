import { LitElement, unsafeCSS, TemplateResult, nothing } from 'lit';
import { StaticValue, html, unsafeStatic } from 'lit/static-html.js';
import { defineCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import { property } from 'lit/decorators.js';
import { type NotificationProps, variants, headingLevels } from './defs';
import styles from './notification.scss?inline';

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

    @property({ type: String })
    public heading!: string;

    @property()
    @validPropertyValues(componentSelector, headingLevels, 'h2')
    public headingLevel: NotificationProps['headingLevel'] = 'h2';

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);

    private renderFooter () {
        return html`
            <footer class="${componentClass}-footer"></footer>
        `;
    }

    private renderNotificationHeading (heading: NotificationProps['heading'], headingTag: StaticValue): TemplateResult {
        return html`
            <${headingTag} class="${componentClass}-heading">
                ${heading}
            </${headingTag}>
        `;
    }

    render () {
        const {
            variant,
            heading,
            headingLevel,
            compact,
            renderNotificationHeading,
        } = this;
        const headingTag = unsafeStatic(headingLevel);

        return html`
            <div data-test-id="${componentSelector}" class="${componentClass}" variant="${variant}" compact="${compact}">
                <section>
                    <header class="${componentClass}-header">
                        <!-- ICONS SHOW UP WITHOUT IMPORTS, ALSO SOME ICONS HAS LAYOUT SHIFTING -->
                        <icon-close></icon-close>
                        <icon-alert-circle></icon-alert-circle>
                        <icon-info-circle></icon-info-circle>
                        <icon-placeholder></icon-placeholder>
                        ${heading ? renderNotificationHeading(heading, headingTag) : nothing}
                        
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
