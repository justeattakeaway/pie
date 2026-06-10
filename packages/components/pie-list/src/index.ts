import { html, unsafeCSS } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './list.scss?inline';
import { type ListProps, defaultProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-list';

/**
 * @tagname pie-list
 */
@safeCustomElement('pie-list')
export class PieList extends RtlMixin(PieElement) implements ListProps {
    @property({ type: String })
    public type = defaultProps.type;

    @queryAssignedElements({ flatten: true })
    private _slottedChildren!: HTMLElement[];

    private _updateRoles () {
        if (this.type === 'list') {
            this.role = 'list';
            this._slottedChildren.forEach((child) => {
                child.setAttribute('role', 'listitem');
            });
        } else {
            this.role = null;
            this._slottedChildren.forEach((child) => {
                child.removeAttribute('role');
            });
        }
    }

    updated () {
        this._updateRoles();
    }

    private _handleSlotChange () {
        this._updateRoles();
    }

    render () {
        return html`<slot @slotchange=${this._handleSlotChange}></slot>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieList;
    }
}
