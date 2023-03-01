const { deindentHTML } = require('../../../_11ty/shortcodes/shortcode-utilities');
const contentPageImageShortCode = require('../../../_11ty/shortcodes/contentPageImage');

describe('deindentHTML', () => {
    it('flattens an indented HTML string to a single line', () => {
        const htmlString = `<div>
          <p>Foo Bar Baz</p>
        </div>`;

        const result = deindentHTML(htmlString);

        expect(result).toMatchSnapshot();
    });

    it('flattens the result of a real shortcode', () => {
        const htmlString = contentPageImageShortCode({
            alt: 'foo',
            src: '../some/path',
            context: 'bar'
        });

        const result = deindentHTML(htmlString);

        expect(result).toMatchSnapshot();
    });
});
