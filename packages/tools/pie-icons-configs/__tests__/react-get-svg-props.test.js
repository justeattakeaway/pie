// eslint-disable-next-line import/no-extraneous-dependencies
import {
    describe, it, expect, vi,
} from 'vitest';
import { getSvgProps } from '../configs-react';
import { regularIconSizeDefault, largeIconSizeDefault } from '../configs';

describe('configs-react getSvgProps', () => {
    describe('when provided with a class for regular size icon', () => {
        describe('when provided with valid parameters', () => {
            it('returns an object that contains a className property', () => {
                const received = getSvgProps('pie-icon pie-icon--app-order', null, regularIconSizeDefault, 'IconAppOrder');

                expect(received).toHaveProperty('className');
                expect(received).not.toHaveProperty('width');
                expect(received).not.toHaveProperty('height');
            });

            describe('when provided with a staticClass parameter', () => {
                it('returns an object with the expected classes', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order', 'FOO', regularIconSizeDefault, 'IconAppOrder');

                    expect(received.className).toEqual(expect.stringContaining('pie-icon'));
                    expect(received.className).toEqual(expect.stringContaining('pie-icon--app-order'));
                    expect(received.className).toEqual(expect.stringContaining('pieIcon'));
                    expect(received.className).toEqual(expect.stringContaining('FOO'));
                });
            });
        });

        describe('when provided with invalid parameters', () => {
            it('returns an object with the expected classes', () => {
                const received = getSvgProps('pie-icon pie-icon--app-order', 'FOO', null);

                expect(received.className).toEqual(expect.stringContaining('pie-icon'));
                expect(received.className).toEqual(expect.stringContaining('pie-icon--app-order'));
                expect(received.className).toEqual(expect.stringContaining('pieIcon'));
            });

            it('outputs a console error', () => {
                const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
                const iconName = 'IconAppOrder';

                getSvgProps('pie-icon pie-icon--app-order', 'FOO', null, iconName);

                expect(spy).toHaveBeenCalled();
                expect(spy).toHaveBeenCalledWith(expect.stringContaining('Invalid prop "iconSize" value'));
                expect(spy).toHaveBeenCalledWith(expect.stringContaining(iconName));
                spy.mockRestore();
            });
        });
    });

    describe('when provided with a class for large size icon', () => {
        describe('when provided with valid parameters', () => {
            it('returns an object that contains a class and width and height properties', () => {
                const received = getSvgProps('pie-icon pie-icon--app-order-large', null, largeIconSizeDefault);

                expect(received).toHaveProperty('className');
                expect(received).toHaveProperty('width');
                expect(received).toHaveProperty('height');
            });

            describe('when provided with a staticClass parameter', () => {
                it('returns an object with the expected classes', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order-large', 'FOO', largeIconSizeDefault);

                    expect(received.className).toEqual(expect.stringContaining('pie-icon'));
                    expect(received.className).toEqual(expect.stringContaining('pie-icon--app-order'));
                    expect(received.className).toEqual(expect.stringContaining('FOO'));
                });
            });
        });

        describe('when provided with invalid parameters', () => {
            describe('when provided with an invalid iconSize', () => {
                it('returns an object with width and height properties', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order-large', null, null);

                    expect(received).toHaveProperty('className');
                    expect(received).toHaveProperty('width');
                    expect(received).toHaveProperty('height');
                });

                it('returns an object with the default width and height', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order-large', null, null);

                    expect(received.width).toEqual(largeIconSizeDefault);
                    expect(received.height).toEqual(largeIconSizeDefault);
                });

                it('returns an object with the expected classes', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order-large', null, null);

                    expect(received.className).toEqual(expect.stringContaining('pie-icon'));
                    expect(received.className).toEqual(expect.stringContaining('pie-icon--app-order-large'));
                });

                it('returns an object with valid width and height properties', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order-large', null, 49);
                    const expected = 48;
                    expect(received.width).toEqual(expected);
                    expect(received.height).toEqual(expected);
                });

                it('outputs a console error', () => {
                    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
                    const iconName = 'IconAppOrder';

                    getSvgProps('pie-icon pie-icon--app-order-large', 'FOO', null, iconName);

                    expect(spy).toHaveBeenCalled();
                    expect(spy).toHaveBeenCalledWith(expect.stringContaining('Invalid prop "iconSize" value'));
                    expect(spy).toHaveBeenCalledWith(expect.stringContaining(iconName));
                    spy.mockRestore();
                });
            });
        });
    });
});
