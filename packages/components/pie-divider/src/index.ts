import {
    html, LitElement, nothing, unsafeCSS,
} from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { defineCustomElement, validPropertyValues } from '@justeattakeaway/pie-webc-core';
import styles from './divider.scss?inline';
import {
    type DividerProps, defaultProps, orientations, variants,
} from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-divider';

/**
 * @tagname pie-divider
 * @slot - Default slot
 */
export class PieDivider extends LitElement implements DividerProps {
    @state()
        hasSlotContent = false;

    @property({ type: String })
    @validPropertyValues(componentSelector, variants, defaultProps.variant)
    public variant = defaultProps.variant;

    @property({ type: String })
    @validPropertyValues(componentSelector, orientations, defaultProps.orientation)
    public orientation = defaultProps.orientation;

    private checkSlotContent () {
        const slot = this.shadowRoot?.querySelector('slot');
        if (slot) {
            const assignedNodes = slot.assignedNodes({ flatten: true });
            this.hasSlotContent = assignedNodes.length > 0;
        }
    }

    // Handle slotChange event to re-check the slot content
    private handleSlotChange () {
        this.checkSlotContent();
    }

    render () {
        const { variant, orientation } = this;

        const classes = {
            'c-divider': true,
            'c-divider--inverse': variant === 'inverse',
            'c-divider--vertical': orientation === 'vertical',
        };

        return html`
            <div
                id="${componentSelector}"
                data-test-id="${componentSelector}"
                class="${classMap(classes)}">
                ${this.hasSlotContent ? html`<hr aria-hidden="true"/>` : nothing}
                <slot @slotchange=${this.handleSlotChange}></slot>
                <hr aria-hidden="true"/>
            </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieDivider);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieDivider;
    }
}
