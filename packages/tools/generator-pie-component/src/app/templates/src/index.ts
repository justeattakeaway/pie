import { LitElement, html, unsafeCSS } from 'lit';
<% if (needsRTL) { %>import { RtlMixin } from '@justeattakeaway/pie-webc-core';<% } %>
import styles from './<%= fileName %>.scss?inline';
import { <%= componentName %>Props } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-<%= fileName %>';

<% if (needsRTL) { %>export class Pie<%= componentName %> extends RtlMixin(LitElement) implements <%= componentName %>Props {<% }
else { %>export class Pie<%= componentName %> extends LitElement implements <%= componentName %>Props {<% } %>
    render () {
        return html`<h1 data-test-id="pie-<%= fileName %>">Hello world!</h1>`;
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
