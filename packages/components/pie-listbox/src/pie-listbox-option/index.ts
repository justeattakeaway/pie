import { html, unsafeCSS, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './listbox-option.scss?inline';
import { type ListboxOptionProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-listbox-option';

/**
 * @tagname pie-listbox-option
 * @slot - Default slot for the option's content.
 */
@safeCustomElement('pie-listbox-option')
export class PieListboxOption extends PieElement implements ListboxOptionProps {
    @property({ type: Boolean, reflect: true })
    public selected = false;

    @property({ type: Boolean, reflect: true })
    public disabled = false;

    @property({ type: String })
    public value = '';

    connectedCallback () {
        super.connectedCallback();
        this.setAttribute('role', 'option');
        this.setAttribute('aria-selected', this.selected ? 'true' : 'false');
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    }

    updated (changedProperties: PropertyValues<this>): void {
        if (changedProperties.has('selected')) {
            this.setAttribute('aria-selected', this.selected ? 'true' : 'false');
        }
        if (changedProperties.has('disabled')) {
            this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        }
    }

    render () {
        return html`<div>
            <slot></slot>
        </div>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieListboxOption;
    }
}
