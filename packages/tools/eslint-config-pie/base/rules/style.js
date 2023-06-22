module.exports = {
    rules: {
        'array-bracket-newline': 'off',
        'array-element-newline': 'off',

        // require camel case names
        camelcase: ['error', { properties: 'always' }],

        // Enable dangling commas
        'comma-dangle': [
            'error',
            {
                arrays: 'only-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
            },
        ],

        'function-call-argument-newline': 'off',

        'function-paren-newline': ['error', 'multiline'],

        'import/no-anonymous-default-export': 'off',
        // this option sets a specific tab width for your code
        // http://eslint.org/docs/rules/indent
        indent: [
            'error',
            4,
            {
                FunctionDeclaration: {
                    body: 1,
                    parameters: 1,
                },

                FunctionExpression: {
                    body: 1,
                    parameters: 1,
                },

                MemberExpression: 'off',
                SwitchCase: 1,
                VariableDeclarator: 1,

                ignoredNodes: ['TemplateLiteral'],

                outerIIFEBody: 1,
            },
        ],

        // enforces spacing between keys and values in object literal properties
        'key-spacing': [
            'error',
            {
                afterColon: true,
                beforeColon: false,
                mode: 'minimum',
            },
        ],

        // disallow mixed 'LF' and 'CRLF' as linebreaks
        // http://eslint.org/docs/rules/linebreak-style
        'linebreak-style': 'off',

        'logical-assignment-operators': 'off',

        // specify the maximum length of a line in your program
        // http://eslint.org/docs/rules/max-len
        'max-len': [
            'error',
            200,
            4,
            {
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreUrls: true,
            },
        ],

        'max-lines-per-function': 'off',

        // enforces new line after each method call in the chain to make it
        // more readable and easy to maintain
        // http://eslint.org/docs/rules/newline-per-chained-call
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

        // disallow multiple empty lines and only one newline at the end
        'no-multiple-empty-lines': ['error', { max: 2 }],

        // Allow use of unary operators, ++ and --
        // http://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'off',

        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 'off',

        // allow single or multiple var statements per function
        'one-var': 'off',

        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': 'off',

        'padding-line-between-statements': 'off',

        'prefer-object-spread': 'error',

        'semi-style': ['error', 'last'],

        // require or disallow space before function opening parenthesis
        // http://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                asyncArrow: 'always',
                named: 'always',
            },
        ],

        // require or disallow a space immediately following the // or /* in a comment
        // http://eslint.org/docs/rules/spaced-comment
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    balanced: false,
                    exceptions: ['-', '*'],
                },
                line: {
                    exceptions: ['-', '*'],
                    markers: ['global'],
                },
            },
        ],

        'switch-colon-spacing': ['error', { after: true, before: false }],
    },
};
