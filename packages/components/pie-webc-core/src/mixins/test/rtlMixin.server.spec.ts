import {
    LitElement, html, nothing,
} from 'lit';

import {
    describe,
    it,
    expect,
    vi,
} from 'vitest';

import { RtlMixin } from '../index';

const scenarios = [
    { dir: 'ltr', isRTL: false },
    { dir: 'rtl', isRTL: true },
    { dir: 'auto', isRTL: false }
];

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
        it('should return false for isRTL when dir is not set', () => {
            // Arrange
            document.body.innerHTML = '<rtl-mixin-mock></rtl-mixin-mock>';
            const component = getMockInstance();

            // Assert
            expect(component.isRTL).toBeFalsy();
        });

        scenarios.forEach(({ dir, isRTL }) => {
            it(`should reflect ${isRTL ? 'RTL' : 'LTR'} if the component dir attribute is set to ${dir} when running on the server`, () => {
                // Arrange
                document.body.innerHTML = `<rtl-mixin-mock dir="${dir}"></rtl-mixin-mock>`;
                const component = getMockInstance();

                // Assert
                expect(component.isRTL).toBe(isRTL);
            });
        });
    });
});
