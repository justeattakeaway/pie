const tokensTable = require('../../../_11ty/shortcodes/tokensTable');
const tokenTypes = require('../../../_data/tokenTypes');

describe('tokensTable.js', () => {
    it.each([
        ['color.alias.default', tokenTypes.COLOR],
        ['color.alias.dark', tokenTypes.COLOR],
        ['elevation.alias.default', tokenTypes.ELEVATION],
        ['elevation.alias.dark', tokenTypes.ELEVATION],
        ['font.alias.wide', tokenTypes.FONT],
        ['font.alias.narrow', tokenTypes.FONT],
        ['radius.alias', tokenTypes.RADIUS],
    ])('should return the expected HTML', (path, tokenType) => {
        // act
        const result = tokensTable({ path, tokenType });

        // assert
        expect(result).toMatchSnapshot();
    });
});
