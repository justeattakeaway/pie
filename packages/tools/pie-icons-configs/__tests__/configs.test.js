import {
    sizeToValueMap,
    validateGetLargeIconSize,
    regularIconSizeDefault,
    largeIconSizeDefault,
    validateGetRegularIconSize,
    getSvgProps,
    normalizeIconName,
} from '../configs';

const defaultRegularIconSize = sizeToValueMap[regularIconSizeDefault];

describe('validateGetLargeIconSize', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('when provided with valid size prop', () => {
        it('returns an object with the expected keys and values', () => {
            const received = validateGetLargeIconSize(largeIconSizeDefault);
            const expected = {
                size: largeIconSizeDefault,
                isValid: true,
            };
            expect(received).toEqual(expected);
        });
    });

    describe('when provided with invalid size prop', () => {
        const expected = {
            size: largeIconSizeDefault,
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
    describe('when provided with valid size value', () => {
        it('returns an object with the expected keys and values', () => {
            const received = validateGetRegularIconSize('xs');
            const expected = {
                size: defaultRegularIconSize,
                isValid: true,
            };
            expect(received).toEqual(expected);
        });
    });

    describe('when provided with invalid size value', () => {
        const expected = {
            size: defaultRegularIconSize,
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

        describe('valid size prop', () => {
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

    describe('when provided with invalid size prop', () => {
        const invalidSize = 'n';

        it('returns an object with default width and height properties', () => {
            vi.spyOn(console, 'error').mockImplementation(vi.fn());
            const received = getSvgProps('icon-test', null, invalidSize, regularIconSizeName);

            expect(received.width).toEqual(defaultRegularIconSize);
            expect(received.height).toEqual(defaultRegularIconSize);
        });

        it('outputs a console error', () => {
            const spy = vi.spyOn(console, 'error').mockImplementation(vi.fn());
            getSvgProps('icon-test', null, invalidSize, regularIconSizeName);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(expect.stringContaining('Invalid prop "size" value'));
            expect(spy).toHaveBeenCalledWith(expect.stringContaining(regularIconSizeName));
        });
    });

    describe('when size is not provided', () => {
        it('returns an object with default icon width and height properties', () => {
            const received = getSvgProps('icon-test', null, null, regularIconSizeName);

            expect(received.width).toEqual(defaultRegularIconSize);
            expect(received.height).toEqual(defaultRegularIconSize);
        });
        it('does not output a console error', () => {
            const spy = vi.spyOn(console, 'error').mockImplementation(vi.fn());

            expect(spy).not.toHaveBeenCalled();
        });
    });

    describe('when svgClasses parameter contains -large in class name', () => {
        const largeIconSizeName = 'IconTestLarge';
        describe('when provided with valid size prop', () => {
            it('returns an object that contains a width and height attr with the correct values', () => {
                const validLargeIconSize = 48;
                const received = getSvgProps('icon-test-large', null, validLargeIconSize, largeIconSizeName);

                expect(received).toHaveProperty('width');
                expect(received).toHaveProperty('height');
                expect(received.width).toEqual(validLargeIconSize);
                expect(received.height).toEqual(validLargeIconSize);
            });
        });

        describe('when provided with invalid size prop', () => {
            const invalidSize = 49;

            it('returns an object with the default width and height', () => {
                vi.spyOn(console, 'error').mockImplementation(vi.fn());
                const received = getSvgProps('icon-test-large', null, invalidSize, largeIconSizeName);

                expect(received.width).toEqual(largeIconSizeDefault);
                expect(received.height).toEqual(largeIconSizeDefault);
            });

            it('returns an object with the expected classes', () => {
                vi.spyOn(console, 'error').mockImplementation(vi.fn());
                const received = getSvgProps('icon-test-large', null, invalidSize, largeIconSizeName);

                expect(received).toHaveProperty('class');
                expect(received.class).toEqual('icon-test-large');
            });

            it('outputs a console error', () => {
                const spy = vi.spyOn(console, 'error').mockImplementation(vi.fn());
                getSvgProps('icon-test-large', null, invalidSize, largeIconSizeName);

                expect(spy).toHaveBeenCalled();
                expect(spy).toHaveBeenCalledWith(expect.stringContaining('Invalid prop "size" value'));
                expect(spy).toHaveBeenCalledWith(expect.stringContaining(largeIconSizeName));
            });
        });

        describe('when size is not provided', () => {
            it('returns an object with default icon width and height properties', () => {
                const received = getSvgProps('test-large', null, null, largeIconSizeName);

                expect(received.width).toEqual(largeIconSizeDefault);
                expect(received.height).toEqual(largeIconSizeDefault);
            });
            it('does not output a console error', () => {
                const spy = vi.spyOn(console, 'error').mockImplementation(vi.fn());

                expect(spy).not.toHaveBeenCalled();
            });
        });
    });
});

describe('normalizeIconName', () => {
    it.each([
        ['component-123', 'component123'],
        ['-123', '123']
    ])('should remove a hyphen before digits - case = "%s"', (testString, expected) => {
        // Act
        const result = normalizeIconName(testString);

        // Assert
        expect(result).toBe(expected);
    });

    it.each([
        ['component-1-2-3', 'component1-2-3'],
        ['component-123-extra', 'component123-extra'],
        ['component-extra-1-2-3', 'component-extra1-2-3']
    ])('should only remove the first hyphen before digits - case = "%s"', (testString, expected) => {
        // Act
        const result = normalizeIconName(testString);

        // Assert
        expect(result).toBe(expected);
    });

    it.each([
        '',
        '7',
        'test-',
        'test123',
        'component-name'
    ])('should do nothing if there are no hyphens before digits - case = "%s"', (testString) => {
        // Arrange
        let result;

        // Act & Assert
        expect(() => {
            result = normalizeIconName(testString);
        }).not.toThrowError();

        expect(result).toBe(testString);
    });
});
