const list = require('../../../_11ty/shortcodes/list');
const listTypes = require('../../../_data/listTypes');

describe('list.js', () => {
    const items = ['a', 'b', 'c', 'd'];

    xit.each(['ordered', 'pill'])('should return the expected HTML', (type) => {
        // act
        const result = list({ type, items });

        // assert
        expect(result).toMatchSnapshot();
    });

    xit('should return the expected HTML for an icon list', () => {
        // act
        const result = list({
            type: 'icon',
            iconName: 'close-circle-filled',
            iconFill: 'support-positive',
            items,
        });

        // assert
        expect(result).toMatchSnapshot();
    });

    it('should throw an error if `type` is invalid', () => {
        // arrange
        const invalidType = 'not a real type';
        const invalidTypeError = new Error(
            `List 'type = ${invalidType}' not recognised. Try ${Object.values(listTypes).join(
                ', ',
            )}`,
        );

        // assert
        expect(() => {
            list({ type: invalidType, items });
        }).toThrow(invalidTypeError);
    });
});
