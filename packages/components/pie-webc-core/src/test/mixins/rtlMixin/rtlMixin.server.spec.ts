import {
    LitElement, html, nothing,
} from 'lit';

import {
    describe,
    it,
    expect,
    vi,
} from 'vitest';

import { RtlMixin } from '../../../index';

vi.mock('lit', async () => ({
    ...((await vi.importActual('lit')) as Array<unknown>),
    isServer: true,
}));

describe('RtlMixin', () => {
    const componentSelector = 'rtl-mixin-mock';

    class MockComponent extends RtlMixin(LitElement) {
        render () {
            const { isRTL, dir } = this;
            return html`<div dir="${dir || nothing}">${isRTL ? 'RTL Mode' : 'LTR Mode'}</div>`;
        }
    }

    customElements.define(componentSelector, MockComponent);

    function getMockInstance (): MockComponent {
        return document.body.querySelector(componentSelector) as MockComponent;
    }

    describe('when running on the server', () => {
        it('should always return false for isRTL', () => {
            // Arrange
            document.body.innerHTML = '<rtl-mixin-mock></rtl-mixin-mock>';
            const component = getMockInstance();

            // Assert
            expect(component.isRTL).toBe(false);
        });
    });
});
