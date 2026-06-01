import {
    LitElement, html, type ReactiveControllerHost,
} from 'lit';
import {
    describe, it, expect, vi, afterEach,
} from 'vitest';

import { TestIdController } from '../../internals/TestIdController';
import { setPieTestIdAttribute } from '../../functions/testIdAttribute';

vi.mock('lit', async () => ({
    ...((await vi.importActual('lit')) as Record<string, unknown>),
    isServer: true,
}));

const SELECTOR = 'test-id-controller-server-mock';

class MockComponent extends LitElement {
    constructor () {
        super();
        // eslint-disable-next-line no-new
        new TestIdController(this as ReactiveControllerHost & Element);
    }

    render () {
        return html`<div data-test-id="mock-root"></div>`;
    }
}

customElements.define(SELECTOR, MockComponent);

describe('TestIdController (server)', () => {
    afterEach(() => {
        (globalThis as Record<symbol, unknown>)[Symbol.for('pie.testIdAttribute')] = undefined;
        document.body.innerHTML = '';
    });

    it('does NOT rename when running on the server, even with an override set', async () => {
        setPieTestIdAttribute('data-qa');
        document.body.innerHTML = `<${SELECTOR}></${SELECTOR}>`;
        const el = document.body.querySelector(SELECTOR) as MockComponent;
        await el.updateComplete;

        // isServer guard short-circuits the rename: data-test-id is preserved.
        expect(el.shadowRoot?.querySelector('[data-test-id="mock-root"]')).not.toBeNull();
        expect(el.shadowRoot?.querySelector('[data-qa]')).toBeNull();
    });
});
