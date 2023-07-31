const usage = require('../../../_11ty/shortcodes/usage');
const usageTypes = require('../../../_data/usageTypes');

describe('usage.js', () => {
    xit('should return the expected HTML for the image type of usage component', () => {
        const props = {
            type: usageTypes.image,
            items: [{
                width: '200px',
                alt: 'foo bar',
                src: 'some/path/to/image',
                mobileSrc: 'some/path/to/mobile/image',
            }],
        };

        // act
        const result = usage({
            do: props,
            dont: props,
        });

        // assert
        expect(result).toMatchSnapshot();
    });

    xit('should return the expected HTML for the text type of usage component', () => {
        const props = {
            type: usageTypes.text,
            items: ['Hello World', 'Lorem ipsum dolor'],
        };

        // act
        const result = usage({
            do: props,
            dont: props,
        });

        // assert
        expect(result).toMatchSnapshot();
    });
});
