const { writeToFile } = require('../helpers');
const compileToCss = require('../compileToCss');
const {
    TEST_GLOBAL_TOKENS,
    TEST_THEME_TOKENS,
    TEST_TOKENS,
    TEST_TOKENS_WITH_THEME_OVERRIDE,
    TEST_TOKENS_WITH_TWO_THEMES,
    TEST_TOKENS_WITH_TWO_THEMES_AND_OVERRIDE,
    TEST_TOKENS_WITH_HIGH_CONTRAST,
} = require('./testObjects');

jest.mock('../helpers', () => {
    const originalHelpers = jest.requireActual('../helpers');

    return {
        ...originalHelpers,
        writeToFile: jest.fn(),
    };
});

describe('compileToCss', () => {
    beforeEach(jest.clearAllMocks);

    it.each(['', 'testString', 0, {}, []])(
        'should not write any files when given an invalid input of %s',
        (input) => {
            // Act
            const result = compileToCss(input);

            // Assert
            expect(writeToFile).not.toHaveBeenCalled();
            expect(result).toBe(false);
        },
    );

    it('should not write any files when there are no defined themes', () => {
        // Act
        const result = compileToCss({
            theme: {},
        });

        // Assert
        expect(writeToFile).not.toHaveBeenCalled();
        expect(result).toBe(false);
    });

    it('should not write any files when only global tokens are passed in', () => {
        // Act
        const result = compileToCss(TEST_GLOBAL_TOKENS);

        // Assert
        expect(writeToFile).not.toHaveBeenCalled();
        expect(result).toBe(false);
    });

    describe('with a single theme', () => {
        it('should write out two files - one for regular theme, one for HSL colors', () => {
            // Act
            const result = compileToCss(TEST_THEME_TOKENS);

            // Assert
            const [[firstCall], [secondCall]] = writeToFile.mock.calls;

            expect(writeToFile).toHaveBeenCalledTimes(2);
            expect(firstCall).toBe('jet');
            expect(secondCall).toBe('jet-hsl-colors');
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens', () => {
            // Act
            const result = compileToCss(TEST_TOKENS);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens but not the override', () => {
            // Act
            const result = compileToCss(TEST_TOKENS_WITH_THEME_OVERRIDE);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });
    });

    describe('with two themes', () => {
        it('should write to four files - one for each theme and another for HSL colors for each theme', () => {
            // Act
            const result = compileToCss(TEST_TOKENS_WITH_TWO_THEMES);

            // Assert
            const [[firstCall], [secondCall], [thirdCall], [fourthCall]] = writeToFile.mock.calls;

            expect(writeToFile).toHaveBeenCalledTimes(4);
            expect(firstCall).toBe('jet');
            expect(secondCall).toBe('jet-hsl-colors');
            expect(thirdCall).toBe('newjet');
            expect(fourthCall).toBe('newjet-hsl-colors');
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens', () => {
            // Act
            const result = compileToCss(TEST_TOKENS_WITH_TWO_THEMES);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens but not the override', () => {
            // Act
            const result = compileToCss(TEST_TOKENS_WITH_TWO_THEMES_AND_OVERRIDE);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });

        it('should exclude high contrast color tokens from output', () => {
            // Act
            const result = compileToCss(TEST_TOKENS_WITH_HIGH_CONTRAST);

            // Assert
            expect(result).toBe(true);

            // Check that writeToFile was called
            expect(writeToFile).toHaveBeenCalled();

            // Get the CSS content from the first call
            const [[, , cssContent]] = writeToFile.mock.calls;

            // Verify that high contrast sections are not included
            expect(cssContent).not.toContain('Highcontrast color theme');
            expect(cssContent).not.toContain('Highcontrast-dark color theme');
            expect(cssContent).not.toContain('--dt-color-content-brand');

            // Verify that regular tokens are still included
            expect(cssContent).toContain('--dt-color-container-default');
            expect(cssContent).toContain('--dt-color-content-default');
        });
    });
});
