import { html } from 'lit';
import {
    describe, it, expect, vi, afterEach,
} from 'vitest';

import { PieElement } from '../../internals/PieElement';
import {
    DEFAULT_TEST_ID_ATTRIBUTE, setPieTestIdAttribute,
} from '../../functions/testIdAttribute';

vi.mock('lit', async () => ({
    ...((await vi.importActual('lit')) as Record<string, unknown>),
    isServer: false,
}));

const SELECTOR = 'pie-element-testid-mock';

class MockComponent extends PieElement {
    render () {
        return html`<div data-test-id="pie-element-inner"></div>`;
    }
}

customElements.define(SELECTOR, MockComponent);

describe('PieElement + TestIdController integration', () => {
    afterEach(() => {
        (globalThis as Record<symbol, unknown>)[Symbol.for('pie.testIdAttribute')] = undefined;
        document.body.innerHTML = '';
    });

    it('renames internal test ids on any PieElement subclass when overridden', async () => {
        setPieTestIdAttribute('data-qa');
        document.body.innerHTML = `<${SELECTOR}></${SELECTOR}>`;
        const el = document.body.querySelector(SELECTOR) as MockComponent;
        await el.updateComplete;

        expect(el.shadowRoot?.querySelector('[data-qa="pie-element-inner"]')).not.toBeNull();
        expect(el.shadowRoot?.querySelector('[data-test-id]')).toBeNull();
    });
});
