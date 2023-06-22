const systemUnderTest = require('../../_utilities/helpers');

describe('helpers.js', () => {
    describe('objectHelpers', () => {
        describe('getObjectPropertyByPath', () => {
            it('returns the expected property', () => {
                // arrange
                const expectedProperty = 'bar';
                const objectToQuery = {
                    level1: {
                        level2: {
                            level3: {
                                level4: {
                                    propertyA: 'foo',
                                    propertyB: {
                                        level5: {
                                            propertyA: expectedProperty,
                                        },
                                    },
                                },
                            },
                        },
                    },
                };

                const pathToProperty = 'level1.level2.level3.level4.propertyB.level5.propertyA';

                // act
                const result = systemUnderTest.objectHelpers.getObjectPropertyByPath(
                    objectToQuery,
                    pathToProperty,
                );

                // assert
                expect(result).toBe(expectedProperty);
            });
        });
    });

    describe('stringHelpers', () => {
        describe('capitaliseFirstLetter', () => {
            it('correctly capitlises the first letter of a provided string', () => {
                // arrange
                const exampleString = 'fooBarBaz';
                const expected = 'FooBarBaz';

                // act
                const result = systemUnderTest.stringHelpers.capitaliseFirstLetter(exampleString);

                // assert
                expect(result).toStrictEqual(expected);
            });
        });
    });

    describe('numberHelpers', () => {
        describe('isNumber', () => {
            [
                ['1', true],
                ['fooBarBaz', false],
                [1, true],
            ].forEach((example) => {
                it('correctly checks whether string can convert to number', () => {
                    // act
                    const result = systemUnderTest.numberHelpers.isNumber(example[0]);

                    // assert
                    expect(result).toStrictEqual(example[1]);
                });
            });
        });
    });
});
