const list = require('../../../_11ty/shortcodes/list');
const listTypes = require('../../../_data/listTypes');

describe('list.js', () => {
    const items = ['a', 'b', 'c', 'd'];

    it.each([
        'ordered',
        'pill'
    ])('should return the expected HTML', (type) => {
        // act
        const result = list({ type, items });

        // assert
        expect(result).toMatchSnapshot();
    });

    it('should return the expected HTML for an ordered list with a start offset', () => {
        // act
        const result = list({ type: listTypes.ordered, start: 8, items });

        // assert
        expect(result).toMatchSnapshot();
    });

    it('should not apply a start offset for an ordered list when `start` is not numeric', () => {
        // act
        const result = list({ type: listTypes.ordered, start: 'not a number', items });

        // assert
        expect(result).not.toContain('start=');
        expect(result).not.toContain('counter-reset');
    });

    it('should return the expected HTML for an icon list', () => {
        // act
        const result = list({
            type: 'icon', iconName: 'close-circle-filled', iconFill: 'support-positive', items,
        });

        // assert
        expect(result).toMatchSnapshot();
    });

    it('should throw an error if `type` is invalid', () => {
        // arrange
        const invalidType = 'not a real type';
        const invalidTypeError = new Error(`List 'type = ${invalidType}' not recognised. Try ${Object.values(listTypes).join(', ')}`);

        // assert
        expect(() => {
            list({ type: invalidType, items });
        }).toThrow(invalidTypeError);
    });

    it('should return the expected HTML for an highlight list', () => {
        // act
        const result = list({
            type: 'highlight', highlightColour: ['support-brand-01', 'support-brand-02', 'support-brand-03', 'support-brand-04'], items,
        });

        // assert
        expect(result).toMatchSnapshot();
    });
});
