import { LitElement, html } from 'lit';
import { defineCustomElement } from '../../functions/defineCustomElement.ts';
import { dispatchCustomEvent } from '../../functions/dispatchCustomEvent.ts';

const componentSelector = 'dispatch-custom-event-mock';
const eventName = 'mocked-event';
export class MockComponent extends LitElement {
    render () {
        return html`
            <button
                @click="${dispatchCustomEvent(this, eventName)}"
                data-test-id="dispatch-custom-event-mock">
                Component with the event to dispatch
            </button>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: MockComponent;
    }
}

defineCustomElement(componentSelector, MockComponent);
