import { nothing, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { html, unsafeStatic } from 'lit/static-html.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    RtlMixin,
    safeCustomElement,
    validPropertyValues,
} from '@justeattakeaway/pie-webc-core';
import styles from './accordion.scss?inline';
import {
    type AccordionProps,
    headingLevels,
    sizes,
    defaultProps,
} from './defs';
import '@justeattakeaway/pie-divider';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronDown.js';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-accordion';

/**
 * @tagname pie-accordion
 * @slot icon - Optional leading icon displayed in the trigger.
 * @slot - Default slot for the accordion panel content.
 * @event {Event} toggle - Dispatched when the trigger is clicked
 */
@safeCustomElement('pie-accordion')
export class PieAccordion extends RtlMixin(PieElement) implements AccordionProps {
    @property({ type: Boolean, reflect: true })
    public isOpen = defaultProps.isOpen;

    @property({ type: String })
    public headingLabel = defaultProps.headingLabel;

    @property({ type: String, reflect: true })
    @validPropertyValues(componentSelector, headingLevels, defaultProps.headingLevel)
    public headingLevel = defaultProps.headingLevel;

    @property({ type: String })
    public secondaryLabel: AccordionProps['secondaryLabel'];

    @property({ type: String, reflect: true })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: Boolean, reflect: true })
    public isEmphasisReduced = defaultProps.isEmphasisReduced;

    @property({ type: Boolean, reflect: true })
    public isDividerHidden = defaultProps.isDividerHidden;

    private readonly _headingId = 'accordion-heading';
    private readonly _buttonId = 'accordion-button';
    private readonly _panelId = 'accordion-panel';

    private _handleTriggerClick (): void {
        this.dispatchEvent(new Event('toggle', { bubbles: true, composed: true }));
    }

    render () {
        const {
            headingLevel, headingLabel, secondaryLabel, isOpen, isEmphasisReduced, isDividerHidden, size,
        } = this;
        const tag = unsafeStatic(headingLevel ?? 'h2');
        const classes = {
            'c-accordion-trigger': true,
            'is-open': isOpen,
            'is-reduced-emphasis': isEmphasisReduced,
            'size-wide': size === 'wide',
            'size-narrow': size === 'narrow',
        };

        return html`
            <${tag}
                id="${this._headingId}"
                class="c-accordion-heading"
            >
                <button
                    id="${this._buttonId}"
                    class="${classMap(classes)}"
                    aria-expanded="${isOpen}"
                    aria-controls="${this._panelId}"
                    @click="${this._handleTriggerClick}"
                    data-test-id="${this._buttonId}"
                >
                    <slot name="icon" class="c-accordion-icon"></slot>
                    <span class="c-accordion-labels">
                        <span class="c-accordion-headingLabel">${headingLabel}</span>
                        ${secondaryLabel ? html`<span class="c-accordion-secondaryLabel">${secondaryLabel}</span>` : nothing}
                    </span>
                    <icon-chevron-down
                        size="m"
                        aria-hidden="true"
                        class="c-accordion-chevron"
                    ></icon-chevron-down>
                </button>
            </${tag}>
            <div
                id="${this._panelId}"
                role="region"
                aria-labelledby="${this._buttonId}"
                class="c-accordion-panel"
                ?hidden="${!isOpen}"
                data-test-id="${this._panelId}"
            >
                <slot></slot>
            </div>
            ${isDividerHidden ? nothing : html`<pie-divider></pie-divider>`}
        `;
    }

    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieAccordion;
    }
}
