const createLink = require('../../../_11ty/shortcodes/link');

describe('link.js', () => {
    const link = 'https://www.google.com';

    it('should return the expected HTML for the link', () => {
        // act
        const result = createLink(link)

        // assert
        expect(result).toMatchSnapshot();
    });

    xit.each([
        'google.com',
        ['https://www.google.com']
    ])('should throw an error if link is invalid', (link) => {
        // arrange
        const invalidURL = link;
        const invalidURLError = new Error(`Link is not valid. Please ensure URL is a *string* containing http or https.`);

        // assert
        expect(() => {
            createLink(invalidURL);
        }).toThrow(invalidURLError);
    });
});
