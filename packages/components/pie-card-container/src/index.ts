import { LitElement, html, unsafeCSS } from 'lit';

import styles from './card-container.scss?inline';
import { CardContainerProps } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-card-container';

export class PieCardContainer extends LitElement implements CardContainerProps {
    render () {
        return html`<h1 data-test-id="pie-card-container">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, PieCardContainer);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieCardContainer;
    }
}
