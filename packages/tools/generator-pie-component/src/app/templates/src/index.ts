import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
<% if (needsRTL) { %>import { RtlMixin, safeCustomElement } from '@justeattakeaway/pie-webc-core';<% } %>
<% if (!needsRTL) { %>import { safeCustomElement } from '@justeattakeaway/pie-webc-core';<% } %>
import styles from './<%= fileName %>.scss?inline';
import { type <%= componentName %>Props } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-<%= fileName %>';

/**
 * @tagname pie-<%= fileName %>
 */
@safeCustomElement('pie-<%= fileName %>')
<% if (needsRTL) { %>export class Pie<%= componentName %> extends RtlMixin(PieElement) implements <%= componentName %>Props {<% }
else { %>export class Pie<%= componentName %> extends PieElement implements <%= componentName %>Props {<% } %>
    render () {
        return html`<h1 data-test-id="pie-<%= fileName %>">Hello world!</h1>`;
    }

    // Renders a `CSSResult` generated from SCSS by Vite
    static styles = unsafeCSS(styles);
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: Pie<%= componentName %>;
    }
}
