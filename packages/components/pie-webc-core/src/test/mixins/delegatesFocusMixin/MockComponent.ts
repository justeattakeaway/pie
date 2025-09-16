import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DelegatesFocusMixin } from '../../../mixins/delegatesFocus/delegatesFocusMixin.ts';

const componentSelector = 'delegates-focus-mixin-mock';

@customElement('delegates-focus-mixin-mock')
export class MockComponent extends DelegatesFocusMixin(LitElement) {
    render () {
        return html`
            <button id="focus-target">Delegates Focus Component</button>
            <input type="text" id="do-not-focus" />
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: MockComponent;
    }
}
