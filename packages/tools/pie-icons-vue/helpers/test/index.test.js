const { removeHyphenBeforeDigits } = require('../index');

describe('removeHyphenBeforeDigits', () => {
    it.each([
        ['component-123', 'component123'],
        ['test-', 'test-'],
        ['test123', 'test123'],
        ['-123', '123'],
        ['7', '7'],
        ['', ''],
        ['component-name', 'component-name'],
        ['component-123-extra', 'component123-extra'],
        ['component-1-2-3', 'component1-2-3']
    ])('should remove a hyphen before digits - case = %s', (testString, expected) => {
        // Act
        const result = removeHyphenBeforeDigits(testString);

        // Assert
        expect(result).toBe(expected);
    });
});
