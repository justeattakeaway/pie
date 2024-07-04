import { LitElement, html, unsafeCSS } from 'lit';
import { RtlMixin, defineCustomElement } from '@justeattakeaway/pie-webc-core';

import styles from './checkbox-group.scss?inline';
import { CheckboxGroupProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-checkbox-group';

/**
 * @tagname pie-checkbox-group
 */
export class PieCheckboxGroup extends RtlMixin(LitElement) implements CheckboxGroupProps {
    render () {
        return html`<h1 data-test-id="pie-checkbox-group">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

defineCustomElement(componentSelector, PieCheckboxGroup);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCheckboxGroup;
    }
}
