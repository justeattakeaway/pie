import {
    LitElement, html, nothing,
} from 'lit';

import {
    describe,
    it,
    expect,
    vi,
} from 'vitest';
import { RTLComponentProps, RtlMixin } from '../index';

const scenarios = [
    { dir: 'ltr', isRTL: false },
    { dir: 'rtl', isRTL: true },
    { dir: 'auto', isRTL: false }
];

// Mock Lits isServer property to false so we can test browser scenarios
vi.mock('lit', async () => ({
    ...((await vi.importActual('lit')) as Array<unknown>),
    isServer: false,
}));

describe('RtlMixin', () => {
    const componentSelector = 'rtl-mixin-mock';
    class MockComponent extends RtlMixin(LitElement) implements RTLComponentProps {
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
                it(`should default to ${dir} if the component dir attribute is set to ${dir}`, () => {
                    // Arrange
                    document.body.innerHTML = `<rtl-mixin-mock dir="${dir}"></rtl-mixin-mock>`;
                    const component = getMockInstance();

                    // Assert
                    expect(component.dir).toEqual(dir);
                    expect(component.isRTL).toBe(isRTL);
                });
            });
        });

        describe('when the dir attribute is set via the root document', () => {
            scenarios.forEach(({ dir, isRTL }) => {
                it(`should default to ${dir} if the root document dir attribute is set to ${dir}`, () => {
                    // Arrange
                    document.documentElement.setAttribute('dir', dir);
                    document.body.innerHTML = '<rtl-mixin-mock></rtl-mixin-mock>'; // component doesn't set dir
                    const component = getMockInstance();

                    // Assert
                    expect(component.dir).toEqual(dir);
                    expect(component.isRTL).toBe(isRTL);
                });
            });
        });

        it('should default to dir value of the component if the root document and component dir attribute are set', () => {
            // Arrange
            const rootDir = 'ltr';
            const componentDir = 'rtl';
            document.documentElement.setAttribute('dir', rootDir);
            document.body.innerHTML = `<rtl-mixin-mock dir="${componentDir}"></rtl-mixin-mock>`;
            const component = getMockInstance();

            // Assert
            expect(component.dir).toEqual(componentDir);
            expect(component.dir).not.toEqual(rootDir);
            expect(component.isRTL).toBeTruthy();
        });
    });

    describe('when running on the server', () => {
        // Remove the mocked Lit import. isServer will be true as tests run in Node
        vi.unmock('lit');

        describe('when the dir attribute is set via the component', () => {
            scenarios.forEach(({ dir, isRTL }) => {
                it(`should default to ${dir} if the component dir attribute is set to ${dir}`, () => {
                    // Arrange
                    document.body.innerHTML = `<rtl-mixin-mock dir="${dir}"></rtl-mixin-mock>`;
                    const component = getMockInstance();

                    // Assert
                    expect(component.dir).toEqual(dir);
                    expect(component.isRTL).toBe(isRTL);
                });
            });
        });

        it('should default dir to "ltr" if no dir has been provided', () => {
            // Arrange
            document.body.innerHTML = '<rtl-mixin-mock></rtl-mixin-mock>';
            const component = getMockInstance();

            // Assert
            expect(component.dir).toBe('ltr');
            expect(component.isRTL).toBeFalsy();
        });
    });
});
