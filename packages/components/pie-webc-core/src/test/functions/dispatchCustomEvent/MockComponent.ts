import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { dispatchCustomEvent } from '../../../functions/dispatchCustomEvent.js';

const componentSelector = 'dispatch-custom-event-mock';

@customElement('dispatch-custom-event-mock')
export class MockComponent extends LitElement {
    @property({ type: String })
    public eventName = 'pie-mock-event';

    render () {
        return html`
            <button
                @click="${() => dispatchCustomEvent(this, this.eventName)}"
                data-test-id="dispatch-custom-event-mock-button">
                Component with the event to dispatch
            </button>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: MockComponent;
    }
}
