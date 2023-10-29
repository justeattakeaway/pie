const createLink = require('../../../_11ty/shortcodes/link');

describe('link.js', () => {
    const link = [ {link: 'https://www.google.com', ariaLabel: 'google' }];

    it('should return the expected HTML for the link', () => {
        // act
        const result = createLink(link);

        // assert
        expect(result).toMatchSnapshot();
    });

    xit.each([{
        link: 'google.com',
        ariaLabel: 'link to google'
    }, 
    {
        link: 'https://www.google.com',
        ariaLabel: 'link to google'
    }
    ])('should throw an error if link is invalid', (link) => {
        // arrange
        const invalidURL = link;
        const invalidURLError = new Error('Link is not valid. Please ensure URL is a *string* containing http or https.');

        // assert
        expect(() => {
            createLink(invalidURL, ariaLabel);
        }).toThrow(invalidURLError);
    });
});
