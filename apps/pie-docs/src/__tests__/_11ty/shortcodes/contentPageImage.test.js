const contentPageImage = require('../../../_11ty/shortcodes/contentPageImage');

describe('contentPageImage.js', () => {
    it.each([
        {
            width: '200px',
            alt: 'foo bar',
            src: 'some/path/to/image',
            mobileSrc: 'some/path/to/mobile/image',
            context: 'someContainer',
            caption: 'some caption text [with a link](fakeurl/path)',
        },
        {
            src: 'some/path/to/image',
        },
    ])('creates the expected markup for the given config settings', (config) => {
        const result = contentPageImage(config);

        expect(result).toMatchSnapshot();
    });
});
