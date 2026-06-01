import {
    LitElement, html, type ReactiveControllerHost,
} from 'lit';
import {
    describe, it, expect, vi, afterEach,
} from 'vitest';

import { TestIdController } from '../../internals/TestIdController';
import {
    DEFAULT_TEST_ID_ATTRIBUTE, setPieTestIdAttribute,
} from '../../functions/testIdAttribute';

vi.mock('lit', async () => ({
    ...((await vi.importActual('lit')) as Record<string, unknown>),
    isServer: false,
}));

const SELECTOR = 'test-id-controller-client-mock';

class MockComponent extends LitElement {
    constructor () {
        super();
        // eslint-disable-next-line no-new
        new TestIdController(this as ReactiveControllerHost & Element);
    }

    render () {
        return html`
            <div data-test-id="mock-root">
                <button data-test-id="mock-button">Go</button>
            </div>`;
    }
}

customElements.define(SELECTOR, MockComponent);

async function mount (): Promise<MockComponent> {
    document.body.innerHTML = `<${SELECTOR}></${SELECTOR}>`;
    const el = document.body.querySelector(SELECTOR) as MockComponent;
    await el.updateComplete;
    return el;
}

describe('TestIdController (client)', () => {
    afterEach(() => {
        (globalThis as Record<symbol, unknown>)[Symbol.for('pie.testIdAttribute')] = undefined;
        document.body.innerHTML = '';
    });

    it('leaves data-test-id untouched when no override is set', async () => {
        const el = await mount();
        expect(el.shadowRoot?.querySelector('[data-test-id="mock-button"]')).not.toBeNull();
        expect(el.shadowRoot?.querySelector('[data-qa]')).toBeNull();
    });

    it('renames every internal data-test-id to the configured attribute', async () => {
        setPieTestIdAttribute('data-qa');
        const el = await mount();

        expect(el.shadowRoot?.querySelector('[data-qa="mock-root"]')).not.toBeNull();
        expect(el.shadowRoot?.querySelector('[data-qa="mock-button"]')).not.toBeNull();
        expect(el.shadowRoot?.querySelector('[data-test-id]')).toBeNull();
    });
});
