import { LitElement, html, unsafeCSS } from 'lit';
import styles from './<%= fileName %>.scss?inline';
import { <%= componentName %>Props } from './defs';

// Valid values available to consumers
export {
    type <%= componentName% >Props,
};

const componentSelector = 'pie-<%= fileName %>';

export class Pie<%= componentName %> extends LitElement implements <%= componentName %>Props {
    render () {
        return html`<h1>Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

customElements.define(componentSelector, Pie<%= componentName %>);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: Pie<%= componentName %>;
    }
}
