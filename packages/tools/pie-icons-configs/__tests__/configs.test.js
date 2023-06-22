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
                iconSize: sizeToValueMap[regularIconSizeDefault],
                isValid: true,
            };
            expect(received).toEqual(expected);
        });
    });

    describe('when provided with invalid iconSize value', () => {
        const expected = {
            iconSize: sizeToValueMap[regularIconSizeDefault],
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
    describe('when provided with a class for regular size icon', () => {
        const iconName = 'IconAppOrder';

        describe('when provided with valid parameters', () => {
            it('returns an object that contains a class and width and height properties', () => {
                const received = getSvgProps('pie-icon pie-icon--app-order', null, regularIconSizeDefault, iconName);

                expect(received).toHaveProperty('class');
                expect(received).toHaveProperty('width');
                expect(received).toHaveProperty('height');
            });

            it('has expected width and height values', () => {
                const received = getSvgProps('pie-icon pie-icon--app-order', null, regularIconSizeDefault, iconName);
                const expectedRegularIconSizeValue = sizeToValueMap[regularIconSizeDefault];

                expect(received.width).toEqual(expectedRegularIconSizeValue);
                expect(received.height).toEqual(expectedRegularIconSizeValue);
            });

            describe('when provided with a staticClasses parameter', () => {
                it('returns an object with the expected classes', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order', 'FOO BAR', regularIconSizeDefault, iconName);

                    expect(received.class).toEqual(expect.stringContaining('pie-icon'));
                    expect(received.class).toEqual(expect.stringContaining('pie-icon--app-order'));
                    expect(received.class).toEqual(expect.stringContaining('FOO BAR'));
                });
            });
        });

        describe('when provided with invalid parameters', () => {
            it('returns an object with the expected classes', () => {
                const received = getSvgProps('pie-icon pie-icon--app-order', 'FOO', null, iconName);

                expect(received.class).toEqual(expect.stringContaining('pie-icon'));
                expect(received.class).toEqual(expect.stringContaining('pie-icon--app-order'));
            });

            it('outputs a console error', () => {
                const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

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

                expect(received).toHaveProperty('class');
                expect(received).toHaveProperty('width');
                expect(received).toHaveProperty('height');
            });

            describe('when provided with a staticClasses parameter', () => {
                it('returns an object with the expected classes', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order-large', 'FOO BAR', largeIconSizeDefault);

                    expect(received.class).toEqual(expect.stringContaining('pie-icon'));
                    expect(received.class).toEqual(expect.stringContaining('pie-icon--app-order'));
                    expect(received.class).toEqual(expect.stringContaining('FOO BAR'));
                });
            });
        });

        describe('when provided with invalid parameters', () => {
            describe('when provided with an invalid iconSize', () => {
                const iconName = 'IconAppOrder';
                const errorMock = vi.fn();
                console.error = errorMock;

                it('returns an object with width and height properties', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order-large', null, null, iconName);

                    expect(received).toHaveProperty('class');
                    expect(received).toHaveProperty('width');
                    expect(received).toHaveProperty('height');
                });

                it('returns an object with the default width and height', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order-large', null, null, iconName);

                    expect(received.width).toEqual(largeIconSizeDefault);
                    expect(received.height).toEqual(largeIconSizeDefault);
                });

                it('returns an object with the expected classes', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order-large', null, null, iconName);

                    expect(received.class).toEqual(expect.stringContaining('pie-icon'));
                    expect(received.class).toEqual(expect.stringContaining('pie-icon--app-order-large'));
                });

                it('returns an object with valid width and height properties', () => {
                    const received = getSvgProps('pie-icon pie-icon--app-order-large', null, 49, iconName);
                    const expected = 48;
                    expect(received.width).toEqual(expected);
                    expect(received.height).toEqual(expected);
                });

                it('outputs a console error', () => {
                    const spy = vi.spyOn(console, 'error').mockImplementation(vi.fn());

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

