const card = require('../../../_11ty/shortcodes/card');

const item = {
    linkText: 'label',
};

const itemWithImage = {
    ...item,
    src: '/path/to/image',
};

const itemWithLink = {
    ...item,
    href: 'link.com',
};

const itemOpeningInANewTab = {
    ...itemWithLink,
    shouldOpenInNewTab: true,
};

const itemWithInternalLink = {
    ...itemWithLink,
    isInternalLink: 'true',
};

const itemWithContent = {
    ...item,
    heading: 'heading',
    content: 'Content',
    icon: 'bulb-lightning',
    iconColour: 'support-brand-03',
};

describe('card.js', () => {
    // This is a temp fix until we look into resolving the icon / changeset issue properly.
    xit.each([
        [[item]],
        [[itemWithImage]],
        [[itemWithLink]],
        [[itemOpeningInANewTab]],
        [[itemWithInternalLink]],
        [[itemWithContent]],
        [[item, item, item], true],
        [[item, item]],
    ])('should return the expected HTML', (items, shouldFillContainer = false) => {
        // act
        const result = card({ items, shouldFillContainer });

        // assert
        expect(result).toMatchSnapshot();
    });
});
