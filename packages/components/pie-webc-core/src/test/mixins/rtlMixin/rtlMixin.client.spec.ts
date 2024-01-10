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
        describe('when the dir attribute is set via the component', () => {
            scenarios.forEach(({ dir, isRTL }) => {
                it(`should reflect ${isRTL ? 'RTL' : 'LTR'} if the component dir attribute is set to ${dir}`, () => {
                    // Arrange
                    document.body.innerHTML = `<rtl-mixin-mock dir="${dir}"></rtl-mixin-mock>`;
                    const component = getMockInstance();

                    // Assert
                    expect(component.isRTL).toBe(isRTL);
                });
            });
        });

        describe('when the dir attribute is set via the root document and no attribute provided to the component', () => {
            scenarios.forEach(({ dir, isRTL }) => {
                it(`should reflect ${isRTL ? 'RTL' : 'LTR'} if the root document dir attribute is set to ${dir}`, () => {
                    // Arrange
                    document.documentElement.setAttribute('dir', dir);
                    document.body.innerHTML = '<rtl-mixin-mock></rtl-mixin-mock>'; // component doesn't set dir
                    const component = getMockInstance();

                    // Assert
                    expect(component.isRTL).toBe(isRTL);
                });
            });
        });

        it('should prefer the dir value of the component over the root document when both are set', () => {
            // Arrange
            const rootDir = 'ltr';
            const componentDir = 'rtl';
            document.documentElement.setAttribute('dir', rootDir);
            document.body.innerHTML = `<rtl-mixin-mock dir="${componentDir}"></rtl-mixin-mock>`;
            const component = getMockInstance();

            // Assert
            expect(component.isRTL).toBeTruthy();
        });

        it('should reflect the root document dir attribute if `auto` is provided to the component', () => {
            // Arrange
            const rootDir = 'ltr';
            document.documentElement.setAttribute('dir', rootDir);
            document.body.innerHTML = '<rtl-mixin-mock dir="auto"></rtl-mixin-mock>';
            const component = getMockInstance();

            // Assert
            expect(component.isRTL).toBeFalsy();
        });
    });
});
