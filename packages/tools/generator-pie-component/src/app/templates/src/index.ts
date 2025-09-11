<%
const mixins = [];

if (needsRTL) {
    mixins.push('RtlMixin');
}
if (needsFocusDelegation) {
    mixins.push('DelegatesFocusMixin');
}

if (needsFormControl) {
    mixins.push('FormControlMixin');
}

const coreImports = [...mixins, 'safeCustomElement'];
let baseClass = 'PieElement';

if (needsRTL) {
    baseClass = `RtlMixin(${baseClass})`;
}
if (needsFocusDelegation) {
    baseClass = `DelegatesFocusMixin(${baseClass})`;
}
if (needsFormControl) {
    baseClass = `FormControlMixin(${baseClass})`;
}
%>
import { html, unsafeCSS } from 'lit';
import { PieElement } from '@justeattakeaway/pie-webc-core/src/internals/PieElement';
import {
    <%= coreImports.join(',\n    ') %>,
} from '@justeattakeaway/pie-webc-core';
import styles from './<%= fileName %>.scss?inline';
import { type <%= componentName %>Props } from './defs';

// Valid values available to consumers
export * from './defs';

const componentSelector = 'pie-<%= fileName %>';

/**
 * @tagname pie-<%= fileName %>
 */
@safeCustomElement('pie-<%= fileName %>')
export class Pie<%= componentName %> extends <%= baseClass %> implements <%= componentName %>Props {
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
