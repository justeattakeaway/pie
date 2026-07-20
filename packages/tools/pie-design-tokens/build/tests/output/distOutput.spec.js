const fs = require('fs');

describe('generated file', () => {
    it.each([
        'colors.xml',
        'jet.scss',
        'jet.css',
        'jet-hsl-colors.css',
        'tokens.json'
    ])('should match %s', (filename) => {
        // Arrange
        const contents = fs.readFileSync(`dist/${filename}`).toString();

        // Assert
        expect(contents).toMatchSnapshot();
    });
});
