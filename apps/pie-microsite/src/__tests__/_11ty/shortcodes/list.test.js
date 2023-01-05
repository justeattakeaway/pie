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
});
