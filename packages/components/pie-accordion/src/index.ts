import { html, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    RtlMixin,
    safeCustomElement,
    validPropertyValues,
    dispatchCustomEvent,
} from '@justeattakeaway/pie-webc-core';
import styles from './accordion.scss?inline';
import {
    type AccordionProps,
    headingLevels,
    sizes,
    iconSizes,
    defaultProps,
} from './defs';
import '@justeattakeaway/pie-divider';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronUp.js';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-accordion';

/**
 * @tagname pie-accordion
 * @slot icon - Optional leading icon displayed in the trigger.
 * @slot secondary - Optional secondary text. Overrides the secondaryLabel prop.
 * @slot - Default slot for the accordion panel content.
 * @event {CustomEvent} pie-accordion-toggle - Dispatched when the trigger is clicked. Detail: { isOpen: boolean }
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
    public secondaryLabel?: string;

    @property({ type: String, reflect: true })
    @validPropertyValues(componentSelector, iconSizes, defaultProps.iconSize)
    public iconSize = defaultProps.iconSize;

    @property({ type: String, reflect: true })
    @validPropertyValues(componentSelector, sizes, defaultProps.size)
    public size = defaultProps.size;

    @property({ type: Boolean, reflect: true })
    public isEmphasisReduced = defaultProps.isEmphasisReduced;

    @property({ type: Boolean })
    public isDividerEnabled = defaultProps.isDividerEnabled;

    private readonly _headingId = 'accordion-heading';
    private readonly _buttonId = 'accordion-button';
    private readonly _panelId = 'accordion-panel';

    private _handleTriggerClick (): void {
        dispatchCustomEvent(this, 'pie-accordion-toggle', { isOpen: this.isOpen });
    }

    render () {
        return html`<h1 data-test-id="pie-accordion">Hello world!</h1>`;
    }

    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieAccordion;
    }
}
