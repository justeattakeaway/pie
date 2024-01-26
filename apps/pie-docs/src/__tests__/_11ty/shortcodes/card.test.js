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
    it.each([
        [[item]],
        [[itemWithImage]],
        [[itemWithLink]],
        [[itemOpeningInANewTab]],
        [[itemWithInternalLink]],
        [[itemWithContent]],
        [[item, item, item], true],
        [[item, item]]
    ])('should return the expected HTML', (items, shouldFillContainer = false) => {
        // Act
        const result = card({ items, shouldFillContainer });

        // Assert
        expect(result).toMatchSnapshot();
    });
});
