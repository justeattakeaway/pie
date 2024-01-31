const categorisedIconList = require('../../../_11ty/shortcodes/categorisedIconList');

describe('categorisedIconList.js', () => {
    it('should return the expected HTML', () => {
        // act
        const result = categorisedIconList();

        // assert
        expect(result).toMatchSnapshot();
    });
});
