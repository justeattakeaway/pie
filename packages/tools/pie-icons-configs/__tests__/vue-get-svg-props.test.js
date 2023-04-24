// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from 'vitest';
import { getSvgProps } from '../configs-vue';
import { largeIconSizeDefault, regularIconSizeDefault } from '../configs';

describe('configs-vue getSvgProps', () => {
    describe('when provided with a class for regular size icon', () => {
        describe('when provided with valid parameters', () => {
            it('returns an object that contains a class property', () => {
                const received = getSvgProps('c-pieIcon c-pieIcon--appOrder', null, regularIconSizeDefault);

                expect(received).toHaveProperty('class');
                expect(received).not.toHaveProperty('width');
                expect(received).not.toHaveProperty('height');
            });

            describe('when provided with a staticClass parameter', () => {
                it('returns an object with the expected classes', () => {
                    const received = getSvgProps('c-pieIcon c-pieIcon--appOrder', 'FOO', regularIconSizeDefault);

                    expect(received.class).toEqual(expect.stringContaining('c-pieIcon'));
                    expect(received.class).toEqual(expect.stringContaining('c-pieIcon--appOrder'));
                    expect(received.class).toEqual(expect.stringContaining('c-pieIcon--xs'));
                    expect(received.class).toEqual(expect.stringContaining('FOO'));
                });
            });
        });

        describe('when provided with invalid parameters', () => {
            describe('when provided with an invalid iconSize', () => {
                it('returns an object with the expected classes', () => {
                    const received = getSvgProps('c-pieIcon c-pieIcon--appOrder', null, null);

                    expect(received.class).toEqual(expect.stringContaining('c-pieIcon'));
                    expect(received.class).toEqual(expect.stringContaining('c-pieIcon--appOrder'));
                    expect(received.class).toEqual(expect.stringContaining('c-pieIcon--xs'));
                });
            });
        });
    });
    describe('when provided with a class for large size icon', () => {
        describe('when provided with valid parameters', () => {
            it('returns an object that contains a class and width and height properties', () => {
                const received = getSvgProps('c-pieIcon c-pieIcon--appOrderLarge', null, largeIconSizeDefault);

                expect(received).toHaveProperty('class');
                expect(received).toHaveProperty('width');
                expect(received).toHaveProperty('height');
            });

            describe('when provided with a staticClass parameter', () => {
                it('returns an object with the expected classes', () => {
                    const received = getSvgProps('c-pieIcon c-pieIcon--appOrderLarge', 'FOO', largeIconSizeDefault);

                    expect(received.class).toEqual(expect.stringContaining('c-pieIcon'));
                    expect(received.class).toEqual(expect.stringContaining('c-pieIcon--appOrderLarge'));
                    expect(received.class).toEqual(expect.stringContaining('FOO'));
                });
            });
        });

        describe('when provided with invalid parameters', () => {
            describe('when provided with an invalid iconSize', () => {
                it('returns an object with width and height properties', () => {
                    const received = getSvgProps('c-pieIcon c-pieIcon--appOrderLarge', null, null);

                    expect(received).toHaveProperty('class');
                    expect(received).toHaveProperty('width');
                    expect(received).toHaveProperty('height');
                });

                it('returns an object with the default width and height', () => {
                    const received = getSvgProps('c-pieIcon c-pieIcon--appOrderLarge', null, null);

                    expect(received.width).toEqual(largeIconSizeDefault);
                    expect(received.height).toEqual(largeIconSizeDefault);
                });

                it('returns an object with the expected classes', () => {
                    const received = getSvgProps('c-pieIcon c-pieIcon--appOrderLarge', null, null);

                    expect(received.class).toEqual(expect.stringContaining('c-pieIcon'));
                    expect(received.class).toEqual(expect.stringContaining('c-pieIcon--appOrderLarge'));
                });

                it('returns an object with valid width and height properties', () => {
                    const received = getSvgProps('c-pieIcon c-pieIcon--appOrderLarge', null, 49);
                    const expected = 48;

                    expect(received.width).toEqual(expected);
                    expect(received.height).toEqual(expected);
                });
            });
        });
    });
});
