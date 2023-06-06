import { describe, test, expect } from 'vitest';
import { removeHyphenBeforeDigits } from '../index';

describe('removeHyphenBeforeDigits', () => {
    test.each([
        ['component-123', 'component123'],
        ['-123', '123']
    ])('should remove a hyphen before digits - case = "%s"', (testString, expected) => {
        // Act
        const result = removeHyphenBeforeDigits(testString);

        // Assert
        expect(result).toBe(expected);
    });

    test.each([
        ['component-1-2-3', 'component1-2-3'],
        ['component-123-extra', 'component123-extra'],
        ['component-extra-1-2-3', 'component-extra1-2-3']
    ])('should only remove the first hyphen before digits - case = "%s"', (testString, expected) => {
        // Act
        const result = removeHyphenBeforeDigits(testString);

        // Assert
        expect(result).toBe(expected);
    });

    test.each([
        '',
        '7',
        'test-',
        'test123',
        'component-name'
    ])('should do nothing if there are no hyphens before digits - case = "%s"', (testString) => {
        // Arrange
        let result;

        // Act & Assert
        expect(() => {
            result = removeHyphenBeforeDigits(testString);
        }).not.toThrowError();

        expect(result).toBe(testString);
    });
});
