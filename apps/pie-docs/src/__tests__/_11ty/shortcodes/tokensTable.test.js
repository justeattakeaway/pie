const tokensTable = require('../../../_11ty/shortcodes/tokensTable');
const tokenTypes = require('../../../_data/tokenTypes');

describe('tokensTable.js', () => {
    it.each([
        ['color.alias.default', tokenTypes.COLOR],
        ['color.alias.dark', tokenTypes.COLOR],
        ['color.global', tokenTypes.COLOR],
        ['elevation.alias', tokenTypes.ELEVATION],
        ['font.global', tokenTypes.FONT],
        ['font.alias.wide', tokenTypes.FONT],
        ['font.alias.narrow', tokenTypes.FONT],
        ['radius.global', tokenTypes.RADIUS],
        ['radius.alias', tokenTypes.RADIUS],
        ['spacing.global', tokenTypes.SPACING],
    ])('should return the expected HTML', (path, tokenType) => {
        // act
        const result = tokensTable({ path, tokenType });

        // assert
        expect(result).toMatchSnapshot();
    });
});
