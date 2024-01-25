const categorisedIconList = require('../../../_11ty/shortcodes/categorisedIconList');

describe('categorisedIconList.js', () => {
    // This is a temp fix until we look into resolving the icon / changeset issue properly.
    it('should return the expected HTML', () => {
        // act
        const result = categorisedIconList();

        // assert
        expect(result).toMatchSnapshot();
    });
});
