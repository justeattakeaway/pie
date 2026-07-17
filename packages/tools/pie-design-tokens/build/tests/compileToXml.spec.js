const { writeToFile } = require('../helpers');
const compileToXml = require('../compileToXml');

const {
    TEST_GLOBAL_TOKENS,
    TEST_THEME_TOKENS,
    TEST_TOKENS,
    TEST_TOKENS_WITH_THEME_OVERRIDE,
    TEST_TOKENS_WITH_TWO_THEMES,
    TEST_TOKENS_WITH_TWO_THEMES_AND_OVERRIDE,
} = require('./testObjects');

jest.mock('../helpers');

describe('compileToXml', () => {
    beforeEach(jest.clearAllMocks);

    it.each([
        '',
        'testString',
        0,
        {},
        []
    ])('should not write any files when given an invalid input of %s', (input) => {
        // Act
        const result = compileToXml(input);

        // Assert
        expect(writeToFile).not.toHaveBeenCalled();
        expect(result).toBe(false);
    });

    it('should not write any files when there are no defined themes', () => {
        // Act
        const result = compileToXml({
            theme: {},
        });

        // Assert
        expect(writeToFile).not.toHaveBeenCalled();
        expect(result).toBe(false);
    });

    it('should not write any files when only global tokens are passed in', () => {
        // Act
        const result = compileToXml(TEST_GLOBAL_TOKENS);

        // Assert
        expect(writeToFile).not.toHaveBeenCalled();
        expect(result).toBe(false);
    });

    describe('with a single theme', () => {
        it('should write out a single file', () => {
            // Act
            const result = compileToXml(TEST_THEME_TOKENS);

            // Assert
            expect(writeToFile).toHaveBeenCalledTimes(1);
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens', () => {
            // Act
            const result = compileToXml(TEST_TOKENS);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens but not the override', () => {
            // Act
            const result = compileToXml(TEST_TOKENS_WITH_THEME_OVERRIDE);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });
    });

    describe('with two themes', () => {
        it('should write out a single file', () => {
            // Act
            const result = compileToXml(TEST_TOKENS_WITH_TWO_THEMES);

            // Assert
            expect(writeToFile).toHaveBeenCalledTimes(1);
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens', () => {
            // Act
            const result = compileToXml(TEST_TOKENS_WITH_TWO_THEMES);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });

        it('should stringify the tokens correctly and ignore global tokens but not the override', () => {
            // Act
            const result = compileToXml(TEST_TOKENS_WITH_TWO_THEMES_AND_OVERRIDE);

            // Assert
            expect(writeToFile.mock.calls).toMatchSnapshot();
            expect(result).toBe(true);
        });
    });
});
