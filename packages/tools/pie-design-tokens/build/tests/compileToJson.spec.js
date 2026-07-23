const { writeToFile } = require('../helpers');
const compileToJson = require('../compileToJson');

const { TEST_THEME_TOKENS } = require('./testObjects');

jest.mock('../helpers');

describe('compileToJson', () => {
    beforeEach(jest.clearAllMocks);

    it.each([
        '',
        'testString',
        0,
        {},
        []
    ])('should not write any files when given an invalid input of %s', (input) => {
        // Act
        const result = compileToJson(input);

        // Assert
        expect(writeToFile).not.toHaveBeenCalled();
        expect(result).toBe(false);
    });

    it('should stringify the tokens correctly', () => {
        // Act
        const result = compileToJson(TEST_THEME_TOKENS);

        // Assert
        expect(writeToFile.mock.calls).toMatchSnapshot();
        expect(result).toBe(true);
    });
});
