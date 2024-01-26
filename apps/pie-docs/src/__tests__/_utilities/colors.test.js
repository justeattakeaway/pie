const systemUnderTest = require('../../_utilities/colors');

describe('colors.js', () => {
    describe('isColorDark', () => {
        it.each([
            ['#000', true],
            ['#000000', true],
            ['#fff', false],
            ['#ffffff', false],
            ['#f36805', false]
        ])('hexcode %p returns %p', (tokenValue, expected) => {
            // act
            const result = systemUnderTest.isColorDark(tokenValue);

            // assert
            expect(result).toBe(expected);
        });
    });

    describe('convertHexcodeToRBG', () => {
        it.each([
            ['#f6c243'],
            ['#000'],
            ['#fff'],
            ['#000000'],
            ['#ffffff']
        ])('converts hexcode %p to the expected RGB object', (hexcode) => {
            // act
            const result = systemUnderTest.convertHexcodeToRBG(hexcode);

            // assert
            expect(result).toMatchSnapshot();
        });
    });
});
