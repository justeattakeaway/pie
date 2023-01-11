const iconList = require('../../../_11ty/shortcodes/iconList');

describe('iconList.js', () => {
    it('should return the expected HTML', () => {
        // act
        const result = iconList();

        // assert
        expect(result).toMatchSnapshot();
    });
});
