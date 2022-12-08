const tokensTable = require('../../../_11ty/shortcodes/tokensTable');
const tokenTypes = require('../../../_data/tokenTypes');

describe('tokensTable.js', () => {
    it.each([
        ['theme.jet.color.alias.default', tokenTypes.COLOR],
        ['theme.jet.color.global', tokenTypes.COLOR]
    ])('should return the expected HTML', (path, tokenType) => {
        // act
        const result = tokensTable({ path, tokenType });

        // assert
        expect(result).toMatchSnapshot();
    });
});
