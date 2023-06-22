import {
    describe,
    it,
    expect,
    vi,
} from 'vitest';
import {
    sizeToValueMap,
    validateGetLargeIconSize,
    regularIconSizeDefault,
    largeIconSizeDefault,
    validateGetRegularIconSize,
    getSvgProps,
} from '../configs';

const defaultRegularIconSize = sizeToValueMap[regularIconSizeDefault];

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

describe('validateGetRegularIconSize', () => {
    describe('when provided with valid iconSize value', () => {
        it('returns an object with the expected keys and values', () => {
            const received = validateGetRegularIconSize('xs');
            const expected = {
                iconSize: defaultRegularIconSize,
                isValid: true,
            };
            expect(received).toEqual(expected);
        });
    });

    describe('when provided with invalid iconSize value', () => {
        const expected = {
            iconSize: defaultRegularIconSize,
            isValid: false,
        };

        describe('as an empty string', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetRegularIconSize('');
                expect(received).toEqual(expected);
            });
        });

        describe('as null', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetRegularIconSize(null);
                expect(received).toEqual(expected);
            });
        });

        describe('as undefined', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetRegularIconSize(undefined);
                expect(received).toEqual(expected);
            });
        });

        describe('as zero', () => {
            it('returns an object with the expected keys and values', () => {
                const received = validateGetRegularIconSize(0);
                expect(received).toEqual(expected);
            });
        });
    });
});

describe('getSvgProps', () => {
    const regularIconSizeName = 'IconTest';
    describe('when provided with a', () => {
        describe('svgClasses parameter', () => {
            it('returns an object that contains a class attr with the expected classes', () => {
                const received = getSvgProps('icon-test', null, null, regularIconSizeName);

                expect(received).toHaveProperty('class');
                expect(received.class).toEqual('icon-test');
            });
        });

        describe('staticClasses parameter', () => {
            it('returns an object that contains a class attr with the expected classes', () => {
                const received = getSvgProps('icon-test', 'FOO BAR', null, regularIconSizeName);

                expect(received).toHaveProperty('class');
                expect(received.class).toEqual('icon-test FOO BAR');
            });
        });

        describe('valid iconSizeValue parameter', () => {
            it('returns an object that contains a width and height attr with the correct values', () => {
                const received = getSvgProps('icon-test', null, regularIconSizeDefault, regularIconSizeName);
                const expectedRegularIconSizeValue = sizeToValueMap[regularIconSizeDefault];

                expect(received).toHaveProperty('width');
                expect(received).toHaveProperty('height');
                expect(received.width).toEqual(expectedRegularIconSizeValue);
                expect(received.height).toEqual(expectedRegularIconSizeValue);
            });
        });
    });

    describe('when provided with invalid iconSizeValue parameter', () => {
        const invalidIconSizeValue = 'n';

        it('returns an object with valid width and height properties', () => {
            const errorMock = vi.fn();
            console.error = errorMock;
            const received = getSvgProps('icon-test', null, invalidIconSizeValue, regularIconSizeName);

            expect(received.width).toEqual(defaultRegularIconSize);
            expect(received.height).toEqual(defaultRegularIconSize);
        });

        it('outputs a console error', () => {
            const spy = vi.spyOn(console, 'error').mockImplementation(vi.fn());

            getSvgProps('icon-test', null, invalidIconSizeValue, regularIconSizeName);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(expect.stringContaining('Invalid prop "iconSize" value'));
            expect(spy).toHaveBeenCalledWith(expect.stringContaining(regularIconSizeName));
            spy.mockRestore();
        });
    });

    describe('when iconSizeValue is not provided', () => {
        it('returns an object with default icon width and height properties', () => {
            const received = getSvgProps('icon-test', null, null, regularIconSizeName);

            expect(received.width).toEqual(defaultRegularIconSize);
            expect(received.height).toEqual(defaultRegularIconSize);
        });
        it('does not output a console error', () => {
            const spy = vi.spyOn(console, 'error').mockImplementation(vi.fn());

            expect(spy).not.toHaveBeenCalled();
            spy.mockRestore();
        });
    });

    describe('when svgClasses parameter contains -large in class name', () => {
        const largeIconSizeName = 'IconTestLarge';
        describe('when provided with valid iconSizeValue parameter', () => {
            it('returns an object that contains a width and height attr with the correct values', () => {
                const validLargeIconSize = 48;
                const received = getSvgProps('icon-test-large', null, validLargeIconSize, largeIconSizeName);

                expect(received).toHaveProperty('width');
                expect(received).toHaveProperty('height');
                expect(received.width).toEqual(validLargeIconSize);
                expect(received.height).toEqual(validLargeIconSize);
            });
        });

        describe('when provided with invalid iconSizeValue parameter', () => {
            const invalidSize = 49;
            const errorMock = vi.fn();
            console.error = errorMock;

            it('returns an object with the default width and height', () => {
                const received = getSvgProps('icon-test-large', null, invalidSize, largeIconSizeName);

                expect(received.width).toEqual(largeIconSizeDefault);
                expect(received.height).toEqual(largeIconSizeDefault);
            });

            it('returns an object with the expected classes', () => {
                const received = getSvgProps('icon-test-large', null, invalidSize, largeIconSizeName);

                expect(received).toHaveProperty('class');
                expect(received.class).toEqual('icon-test-large');
            });

            it('outputs a console error', () => {
                const spy = vi.spyOn(console, 'error').mockImplementation(vi.fn());

                getSvgProps('icon-test-large', null, invalidSize, largeIconSizeName);

                expect(spy).toHaveBeenCalled();
                expect(spy).toHaveBeenCalledWith(expect.stringContaining('Invalid prop "iconSize" value'));
                expect(spy).toHaveBeenCalledWith(expect.stringContaining(largeIconSizeName));
                spy.mockRestore();
            });
        });

        describe('when iconSize is not provided', () => {
            it('returns an object with default icon width and height properties', () => {
                const received = getSvgProps('test-large', null, null, largeIconSizeName);

                expect(received.width).toEqual(largeIconSizeDefault);
                expect(received.height).toEqual(largeIconSizeDefault);
            });
            it('does not output a console error', () => {
                const spy = vi.spyOn(console, 'error').mockImplementation(vi.fn());

                expect(spy).not.toHaveBeenCalled();
                spy.mockRestore();
            });
        });
    });
});
