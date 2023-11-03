const createLink = require('../../../_11ty/shortcodes/link');

describe('link.js', () => {
    const link = [{ link: 'https://www.google.com', ariaLabel: 'google' }];

    it('should return the expected HTML for the link', () => {
        // act
        const result = createLink(link);

        // assert
        expect(result).toMatchSnapshot();
    });

    it('should throw an error if link is invalid', () => {
        // arrange
        const link = [{ link: 'www.google.com', ariaLabel: 'google' }];
        const invalidURLError = new Error('Link is not valid. Please ensure URL is a string containing http or https.');

        // assert
        expect(() => {
            createLink(link);
        }).toThrow(invalidURLError);
    });
});
