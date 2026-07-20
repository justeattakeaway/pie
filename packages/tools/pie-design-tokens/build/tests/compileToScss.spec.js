const { writeToFile } = require('../helpers');
const compileToScss = require('../compileToScss');
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

describe('compileToScss', () => {
    beforeEach(jest.clearAllMocks);

    it.each([
        '',
        'testString',
        0,
        {},
        []
    ])('should not write any files when given an invalid input of %s', (input) => {
        // Act
        const result = compileToScss(input);

        // Assert
        expect(writeToFile).not.toHaveBeenCalled();
        expect(result).toBe(false);
    });

    it('should not write any files when there are no defined themes', () => {
        // Act
        const result = compileToScss({
            theme: {},
        });

        // Assert
        expect(writeToFile).not.toHaveBeenCalled();
        expect(result).toBe(false);
    });

    it('should not write any files when only global tokens are passed in', () => {
        // Act
        const result = compileToScss(TEST_GLOBAL_TOKENS);

        // Assert
        expect(writeToFile).not.toHaveBeenCalled();
        expect(result).toBe(false);
    });

    describe('with a single theme', () => {
        it('should write out a single file', () => {
            // Act
            const result = compileToScss(TEST_THEME_TOKENS);

            // Assert
            expect(writeToFile).toHaveBeenCalledTimes(1);
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens', () => {
            // Act
            const result = compileToScss(TEST_TOKENS);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens but not the override', () => {
            // Act
            const result = compileToScss(TEST_TOKENS_WITH_THEME_OVERRIDE);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });
    });

    describe('with two themes', () => {
        it('should write to two files', () => {
            // Act
            const result = compileToScss(TEST_TOKENS_WITH_TWO_THEMES);

            // Assert
            expect(writeToFile).toHaveBeenCalledTimes(2);
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens', () => {
            // Act
            const result = compileToScss(TEST_TOKENS_WITH_TWO_THEMES);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens but not the override', () => {
            // Act
            const result = compileToScss(TEST_TOKENS_WITH_TWO_THEMES_AND_OVERRIDE);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });

        it('should exclude high contrast color tokens from output', () => {
            // Act
            const result = compileToScss(TEST_TOKENS_WITH_HIGH_CONTRAST);

            // Assert
            expect(result).toBe(true);

            // Check that writeToFile was called
            expect(writeToFile).toHaveBeenCalled();

            // Get the SCSS content from the first call
            const [[, , scssContent]] = writeToFile.mock.calls;

            // Verify that high contrast sections are not included
            expect(scssContent).not.toContain('Highcontrast color theme');
            expect(scssContent).not.toContain('Highcontrast-dark color theme');
            expect(scssContent).not.toContain('$color-content-brand');

            // Verify that regular tokens are still included
            expect(scssContent).toContain('$color-container-default');
            expect(scssContent).toContain('$color-content-default');
        });
    });
});
