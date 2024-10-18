import globals from 'globals';

export default [
    {
        languageOptions: {
            globals: {
                ...globals.es2015, // ES6 === ES2015
            },
            parserOptions: {
                ecmaFeatures: {
                    generators: false,
                    objectLiteralDuplicateProperties: false,
                },
                ecmaVersion: 6,
                sourceType: 'module',
            },
        },
        rules: {
            // require parens in arrow function arguments
            // http://eslint.org/docs/rules/arrow-parens
            'arrow-parens': ['error', 'always'],

            // require property shorthand syntax for object literals
            // http://eslint.org/docs/rules/object-shorthand
            'object-shorthand': ['error', 'properties'],

            // Prefer destructuring from arrays and objects
            // http://eslint.org/docs/rules/prefer-destructuring
            'prefer-destructuring': ['warn', {
                array: true,
                object: true,
            }, {
                enforceForRenamedProperties: false,
            }],
        },
    },
];
