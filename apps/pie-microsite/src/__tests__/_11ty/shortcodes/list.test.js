const list = require('../../../_11ty/shortcodes/list');

describe('list.js', () => {
    const items = ['a', 'b', 'c', 'd'];

    it.each([
        'ordered',
        'pill'
    ])('should return the expected HTML', type => {
        // act
        const result = list({ type, items });

        // assert
        expect(result).toMatchSnapshot();
    });

    it('should throw an error if `type` is invalid', () => {
        // arrange
        const invalidType = 'not a real type';
        const invalidTypeError = new Error(`List 'type = ${invalidType}' not recognised. Try 'ordered' or 'pill'`);

        // assert
        expect(() => {
            list({ type: invalidType, items });
        }).toThrow(invalidTypeError);
    });
});
