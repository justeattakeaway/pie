const card = require('../../../_11ty/shortcodes/card');

const item = {
    linkText: 'label',
    href: 'link.com',
};

const itemWithImage = {
    ...item,
    src: '/path/to/image',
};

const itemOpeningInANewTab = {
    ...item,
    shouldOpenInNewTab: true,
};

const itemWithContent = {
    ...item,
    heading: 'heading',
    content: 'Content',
    icon: 'bulb-lightning',
    iconColour: 'support-brand-03',
};

const itemWithInternalLink = {
    ...item,
    isInternalLink: 'true',
};

describe('card.js', () => {
    it.each([
        [[item]],
        [[itemWithImage]],
        [[itemOpeningInANewTab]],
        [[itemWithContent]],
        [[itemWithInternalLink]],
        [[item, item, item], true],
        [[item, item]]
    ])('should return the expected HTML', (items, shouldFillContainer = false) => {
        // act
        const result = card({ items, shouldFillContainer });

        // assert
        expect(result).toMatchSnapshot();
    });
});
