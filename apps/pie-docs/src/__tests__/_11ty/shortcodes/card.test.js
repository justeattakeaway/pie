const card = require('../../../_11ty/shortcodes/card');

const item = {
    linkText: 'label',
    href: 'link.com',
};

const itemWithImage = {
    ...item,
    src: '/path/to/image',
};

describe('card.js', () => {
    it.each([
        [[item]],
        [[itemWithImage]],
        [[item, item]]
    ])('should return the expected HTML', (items) => {
        // act
        const result = card({ items });

        // assert
        expect(result).toMatchSnapshot();
    });
});
