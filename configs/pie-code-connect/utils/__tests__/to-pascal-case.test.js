const toPascalCase = require('../to-pascal-case');

describe('toPascalCase', () => {
    it('should convert a kebab-case string to PascalCase', () => {
        expect(toPascalCase('pie-button')).toBe('PieButton');
    });

    it('should capitalise a single-segment string', () => {
        expect(toPascalCase('button')).toBe('Button');
    });

    it('should handle multiple segments', () => {
        expect(toPascalCase('pie-icon-button')).toBe('PieIconButton');
    });

    it('should preserve existing uppercase letters within a segment', () => {
        expect(toPascalCase('pie-CSS')).toBe('PieCSS');
    });

    it('should return an empty string when given an empty string', () => {
        expect(toPascalCase('')).toBe('');
    });
});
