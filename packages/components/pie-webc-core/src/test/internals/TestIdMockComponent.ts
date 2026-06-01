import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { PieElement } from '../../internals/PieElement';

const componentSelector = 'test-id-mock';

/**
 * Mock element used by the test-id override browser story. Renders a nested set
 * of internal `data-test-id` hooks so the rename pass can be observed in a real
 * browser shadow root.
 */
@customElement(componentSelector)
export class TestIdMockComponent extends PieElement {
    render () {
        return html`
            <div data-test-id="test-id-mock-root">
                <span data-test-id="test-id-mock-label">Mock</span>
            </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'test-id-mock': TestIdMockComponent;
    }
}
