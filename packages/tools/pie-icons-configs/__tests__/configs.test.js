// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from 'vitest';
import { validateGetLargeIconSize, largeIconSizeDefault, validateGetRegularIconClass } from '../configs';

describe('validateGetLargeIconSize', () => {
    describe('when provided with valid iconSize value', () => {
        it('returns an object with the expected keys and values', () => {
            const received = validateGetLargeIconSize(largeIconSizeDefault);
            const expected = {
                iconSize: largeIconSizeDefault,
                isValid: true,
            };
            expect(received).toEqual(expected);
        });
    });

    describe('when provided with invalid iconSize value', () => {
        const expected = {
            iconSize: largeIconSizeDefault,
            isValid: false,
        };

        describe('as an empty string', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetLargeIconSize('');
                expect(received).toEqual(expected);
            });
        });

        describe('as null', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetLargeIconSize(null);
                expect(received).toEqual(expected);
            });
        });

        describe('as undefined', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetLargeIconSize(undefined);
                expect(received).toEqual(expected);
            });
        });

        describe('as zero', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetLargeIconSize(0);
                expect(received).toEqual(expected);
            });
        });
    });
});
describe('validateGetRegularIconClass', () => {
    describe('when provided with valid iconSize value', () => {
        it('returns an object with the expected keys and values', () => {
            const received = validateGetRegularIconClass('xs');
            const expected = {
                iconSizeClass: 'c-pieIcon--xs',
                isValid: true,
            };
            expect(received).toEqual(expected);
        });
    });

    describe('when provided with invalid iconSize value', () => {
        const expected = {
            iconSizeClass: 'c-pieIcon--xs',
            isValid: false,
        };

        describe('as an empty string', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetRegularIconClass('');
                expect(received).toEqual(expected);
            });
        });

        describe('as null', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetRegularIconClass(null);
                expect(received).toEqual(expected);
            });
        });

        describe('as undefined', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetRegularIconClass(undefined);
                expect(received).toEqual(expected);
            });
        });

        describe('as zero', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetRegularIconClass(0);
                expect(received).toEqual(expected);
            });
        });
    });
});
