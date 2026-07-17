const {
    CONSTANTS,
    convertGlobalTokenValueToStylesValue,
    convertWordToPascalCase,
    getConvertedShadowsToBoxShadowValues,
    convertHexValueToRGB,
    convertHexValueToHSL,
    createRulesForDark,
    formatLine,
    filterAndTransformWebTokens,
    variableGetterFactory,
} = require('../helpers');

const {
    TEST_FILE_CONTENTS,
    TEST_TOKENS,
    TEST_TOKENS_WITH_THEME_OVERRIDE,
    TEST_TOKENS_WITH_TWO_THEMES,
    TEST_TOKENS_WITH_TWO_THEMES_AND_OVERRIDE,
} = require('./testObjects');

let fs;

beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();

    fs = require('fs'); // eslint-disable-line
    jest.mock('fs');
    fs.readFileSync.mockImplementation(() => '');
});

describe('rawPlatformTokens', () => {
    // Arrange
    beforeEach(() => {
        helpers = require('../helpers'); // eslint-disable-line
    });

    it('should call `readFileSync` when helpers is initialised', () => {
        expect(fs.readFileSync).toHaveBeenCalled();
    });

    it('should call `readFileSync` 3 times (for web, ios and android) when helpers is initialised', () => {
        expect(fs.readFileSync).toHaveBeenCalledTimes(3);
    });
});

describe('writeToFile', () => {
    // Arrange
    let writeToFile;
    beforeEach(() => {
        ({ writeToFile } = require('../helpers')); // eslint-disable-line
    });

    it('should create a file with the correct name and location', () => {
        // Act
        writeToFile('filename', 'txt', TEST_FILE_CONTENTS, 'test');

        // Assert
        expect(fs.writeFile).toHaveBeenCalledWith('test/filename.txt', TEST_FILE_CONTENTS, expect.any(Function));
    });

    it('should write to the `dist` directory by default', () => {
        // Act
        writeToFile('filename', 'txt', TEST_FILE_CONTENTS);

        // Assert
        expect(fs.writeFile).toHaveBeenCalledWith('dist/filename.txt', TEST_FILE_CONTENTS, expect.any(Function));
    });
});

describe('buildGlobalTokensIntoThemes', () => {
    // Arrange
    let buildGlobalTokensIntoThemes;
    beforeEach(() => {
        ({ buildGlobalTokensIntoThemes } = require('../helpers')); // eslint-disable-line
    });

    describe('with a single theme', () => {
        it('should add global tokens to theme', () => {
            // Act
            const tokens = buildGlobalTokensIntoThemes(TEST_TOKENS, 'web');

            // Assert
            expect(tokens).toMatchSnapshot();
        });

        it('should preferentially choose themed global tokens over unthemed global tokens', () => {
            // Act
            const tokens = buildGlobalTokensIntoThemes(TEST_TOKENS_WITH_THEME_OVERRIDE, 'web');

            // Assert
            expect(tokens).toMatchSnapshot();
        });
    });

    describe('with multiple themes', () => {
        it('should add global tokens to all themes', () => {
            // Act
            const tokens = buildGlobalTokensIntoThemes(TEST_TOKENS_WITH_TWO_THEMES, 'web');

            // Assert
            expect(tokens).toMatchSnapshot();
        });

        it('should preferentially choose themed global tokens over unthemed global tokens', () => {
            // Act
            const tokens = buildGlobalTokensIntoThemes(TEST_TOKENS_WITH_TWO_THEMES_AND_OVERRIDE, 'web');

            // Assert
            expect(tokens).toMatchSnapshot();
        });
    });
});

// Note: Only currently expected to work from camelCase to PascalCase
describe('convertWordToPascalCase', () => {
    it.each([
        ['test', 'Test'],
        ['testWord', 'TestWord']
    ])('should convert %s to %s', (word, expected) => {
        // Act
        const result = convertWordToPascalCase(word);

        // Assert
        expect(result).toBe(expected);
    });
});

describe('formatLine', () => {
    it('should format line in accordance with the "heading" textType', () => {
        // Arrange
        const line = 'This is a heading';
        const textType = 'heading';
        const nestAmount = 1;
        const newLine = false;
        // Act
        const result = formatLine(line, textType, nestAmount, newLine);

        // Assert
        expect(result).toBe('    /* This is a heading */');
    });

    it('should return instruction when no textType is selected', () => {
        // Arrange
        const line = 'value';
        const nestAmount = 1;
        const newLine = false;

        // Act
        const result = formatLine(line, '', nestAmount, newLine);

        // Assert
        expect(result).toBe('Please specify textType');
    });

    it('should return rule with open bracket when "rule" textType is selected', () => {
        // Arrange
        const line = 'value';
        const nestAmount = 1;
        const textType = 'rule';
        const newLine = false;

        // Act
        const result = formatLine(line, textType, nestAmount, newLine);

        // Assert
        expect(result).toBe('    value {');
    });

    it('should add closing bracket with indentation when "closing line" is selected', () => {
        // Arrange
        const nestAmount = 1;
        const textType = 'closingLine';
        const newLine = false;

        // Act
        const result = formatLine('', textType, nestAmount, newLine);

        // Assert
        expect(result).toBe('    }');
    });

    it('should indent the line as many times as specified by the nest amount', () => {
        // Arrange
        const indent = '  ';
        const value = '--dt-color-blue-light-hc: #8bbcfe;';
        const nestAmount = 2;
        const textType = 'variable';
        const newLine = false;

        // Act
        const result = formatLine(value, textType, nestAmount, newLine, indent);

        // Assert
        expect(result).toBe('    --dt-color-blue-light-hc: #8bbcfe;');
    });
});

describe('createRulesForDark', () => {
    it.each([
        [['default'], ['', '']],
        [['dark'], ['html[data-color-mode="dark"]', '@media (prefers-color-scheme: dark) {\nhtml[data-darkmode-system]:not([data-color-mode])']],
        [['default', 'dark'], ['html[data-color-mode="dark"]', '@media (prefers-color-scheme: dark) {\nhtml[data-darkmode-system]:not([data-color-mode])']]
    ])('should return corresponding rules based on the name provided', (name, expected) => {
        // Act
        const result = createRulesForDark(name);

        // Assert
        expect(result).toStrictEqual(expected);
    });
});

describe('convertGlobalTokenValueToStylesValue', () => {
    it('should separate pipe-delimited font values', () => {
        // Arrange
        const category = 'font';
        const value = '14|20'; // FONT_SIZE|LINE_HEIGHT

        // Act
        const result = convertGlobalTokenValueToStylesValue(category, value);

        // Assert
        expect(result).toBe('14, 20');
    });

    it.each(
        ['font', '14', '14'],
        ['font', 'Regular', 'Regular'],
    )('should return non-pipe-delimited values as-is', () => {
        // Arrange
        const category = 'font';
        const value = '14';

        // Act
        const result = convertGlobalTokenValueToStylesValue(category, value);

        // Assert
        expect(result).toBe('14');
    });

    it('should return non-font values as-is', () => {
        // Arrange
        const category = 'color';
        const value = '#125fca';

        // Act
        const result = convertGlobalTokenValueToStylesValue(category, value);

        // Assert
        expect(result).toBe('#125fca');
    });
});

describe('`getConvertedShadowsToBoxShadowValues`', () => {
    it('should exist', () => {
        expect(getConvertedShadowsToBoxShadowValues).toBeDefined();
    });

    describe('when invoked', () => {
        it('should return correctly formatted box-shadow values', () => {
            // Arrange
            const expectOutput = [
                '0px 2px 2px 0px rgba(27, 35, 36, 0.03)',
                '0px 3px 1px -2px rgba(27, 35, 36, 0.07)',
                '0px 1px 5px 0px rgba(27, 35, 36, 0.06)',
                'inset 0px 0.5px 0px 0px rgba(255, 255, 255, 0.05)',
            ];

            const values = {
                shadows: [
                    {
                        x: 0,
                        y: 2,
                        blur: 2,
                        spread: 0,
                        r: 27,
                        g: 35,
                        b: 36,
                        opacity: 0.03,
                    },
                    {
                        x: 0,
                        y: 3,
                        blur: 1,
                        spread: -2,
                        r: 27,
                        g: 35,
                        b: 36,
                        opacity: 0.07,
                    },
                    {
                        x: 0,
                        y: 1,
                        blur: 5,
                        spread: 0,
                        r: 27,
                        g: 35,
                        b: 36,
                        opacity: 0.06,
                    }
                ],
                insets: [
                    {
                        x: 0,
                        y: 0.5,
                        blur: 0,
                        spread: 0,
                        r: 255,
                        g: 255,
                        b: 255,
                        opacity: 0.05,
                    }
                ],
            };

            // Act
            const result = getConvertedShadowsToBoxShadowValues(values);

            // Assert
            expect(result).toEqual(expectOutput);
        });
    });
});

describe('variableGetterFactory', () => {
    let lang;

    it('should return a function', () => {
        // Arrange
        lang = 'css';

        // Act
        const result = variableGetterFactory(lang);

        // Assert
        expect(typeof result).toBe('function');
    });

    describe('returned function', () => {
        describe('when lang is CSS', () => {
            beforeEach(() => {
                lang = 'css';
            });

            it('should apply prefix', () => {
                // Arrange
                const variableGetter = variableGetterFactory(lang);

                // Act
                const result = variableGetter('test', false);

                // Assert
                expect(result).toContain(CONSTANTS.VARIABLE_PREFIX_CSS);
            });

            it('should NOT wrap with `var` function when not requested', () => {
                // Arrange
                const variableGetter = variableGetterFactory(lang);

                // Act
                const result = variableGetter('test-var-name', false);

                // Assert
                expect(result).toBe('--dt-test-var-name');
            });

            it('should wrap with `var` function when requested', () => {
                // Arrange
                const variableGetter = variableGetterFactory(lang);

                // Act
                const result = variableGetter('test-var-name', true);

                // Assert
                expect(result).toBe('var(--dt-test-var-name)');
            });
        });

        describe('when lang is SCSS', () => {
            beforeEach(() => {
                lang = 'scss';
            });

            it('should apply prefix', () => {
                // Arrange
                const variableGetter = variableGetterFactory(lang);

                // Act
                const result = variableGetter('test', false);

                // Assert
                expect(result).toContain(CONSTANTS.VARIABLE_PREFIX_SCSS);
            });

            it.each([
                true,
                false
            ])('should NOT wrap with `var` function (insertCssVar is %s)', (insertCssVar) => {
                // Arrange
                const variableGetter = variableGetterFactory(lang);

                // Act
                const result = variableGetter('testVarName', insertCssVar);

                // Assert
                expect(result).toBe('$testVarName');
            });
        });
    });
});

describe('convertHexValueToRGB', () => {
    describe('if one parameter pased', () => {
        it.each([
            ['#f36805', 'rgb(243,104,5,1)'],
            ['#fff', 'rgb(255,255,255,1)'],
            ['fff', 'rgb(255,255,255,1)'],
            ['notHexValue', 'notHexValue']

        ])('should convert %s to %s', (hexCode, expected) => {
            // Act
            const result = convertHexValueToRGB(hexCode);

            // Assert
            expect(result).toBe(expected);
        });
    });
    describe('if two parameters pased', () => {
        it.each([
            ['#f36805', '0.5', 'rgb(243,104,5,0.5)'],
            ['#fff', '0.5', 'rgb(255,255,255,0.5)'],
            ['fff', '0.5', 'rgb(255,255,255,0.5)'],
            ['notHexValue', '0.5', 'notHexValue']

        ])('should convert %s and %s to %s', (hexCode, opacity, expected) => {
            // Act
            const result = convertHexValueToRGB(hexCode, opacity);

            // Assert
            expect(result).toBe(expected);
        });
    });
});

describe('convertHexValueToHSL', () => {
    it('should convert #ffffff to { h: 0, s: 0, l: 100 }', () => {
        const result = convertHexValueToHSL('#ffffff');
        expect(result).toEqual({ h: 0, s: 0, l: 100 });
    });

    it('should convert #000000 to { h: 0, s: 0, l: 0 }', () => {
        const result = convertHexValueToHSL('#000000');
        expect(result).toEqual({ h: 0, s: 0, l: 0 });
    });

    it('should convert #ff0000 to { h: 0, s: 100, l: 50 }', () => {
        const result = convertHexValueToHSL('#ff0000');
        expect(result).toEqual({ h: 0, s: 100, l: 50 });
    });

    it('should convert #008000 to { h: 120, s: 100, l: 25.1 }', () => {
        const result = convertHexValueToHSL('#008000');
        expect(result).toEqual({ h: 120, s: 100, l: 25.1 });
    });

    it('should convert #0000ff to { h: 240, s: 100, l: 50 }', () => {
        const result = convertHexValueToHSL('#0000ff');
        expect(result).toEqual({ h: 240, s: 100, l: 50 });
    });

    it('should convert short form hex #f00 to { h: 0, s: 100, l: 50 }', () => {
        const result = convertHexValueToHSL('#f00');
        expect(result).toEqual({ h: 0, s: 100, l: 50 });
    });

    it('should throw an error when input is not a valid hex color', () => {
        expect(() => convertHexValueToHSL('invalid')).toThrow();
    });
});

describe('filterAndTransformWebTokens', () => {
    it('should filter out iOS and Android prefixed tokens and remvoe web- prefix', () => {
        const tokens = [
            ['container-default', 'white'],
            ['ios-container-base', 'white|0.72'],
            ['android-container-base', 'white|0.95'],
            ['web-container-base', 'white|0.72'],
        ];

        const result = filterAndTransformWebTokens(tokens);

        expect(result).toEqual([
            ['container-default', 'white'], // tokens without platform prefixes are not filtered out
            ['container-base', 'white|0.72'], // web- prefix removed
        ]);
    });
});
