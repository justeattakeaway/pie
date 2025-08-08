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

const scenarios = [
    { dir: 'ltr', isRTL: false },
    { dir: 'rtl', isRTL: true },
    { dir: 'auto', isRTL: false }
];

vi.mock('lit', async () => ({
    ...((await vi.importActual('lit')) as Array<unknown>),
    isServer: false,
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

    describe('when running in the browser', () => {
        scenarios.forEach(({ dir, isRTL }) => {
            it(`should reflect ${isRTL ? 'RTL' : 'LTR'} if the root document dir attribute is set to ${dir}`, () => {
                // Arrange
                document.documentElement.setAttribute('dir', dir);
                document.body.innerHTML = '<rtl-mixin-mock></rtl-mixin-mock>';
                const component = getMockInstance();

                // Assert
                expect(component.isRTL).toBe(isRTL);
            });
        });

        it('should update the isRTL property when the dir attribute of the document changes', async () => {
            // Arrange
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.innerHTML = '<rtl-mixin-mock></rtl-mixin-mock>';
            const component = getMockInstance();
            expect(component.isRTL).toBe(false);

            // Act
            document.documentElement.setAttribute('dir', 'rtl');
            await component.updateComplete;

            // Assert
            expect(component.isRTL).toBe(true);
        });
    });
});
