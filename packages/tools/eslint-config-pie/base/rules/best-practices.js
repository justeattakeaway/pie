module.exports = {
    rules: {
        // require default case in switch statements
        'default-case': ['error', { commentPattern: '^no default$' }],

        'default-param-last': 'off',

        'grouped-accessor-pairs': ['error', 'getBeforeSet'],

        'max-classes-per-file': 'error',

        'no-constructor-return': 'error',

        'no-dupe-else-if': 'error',

        // Do not restrict else if statements
        // It was causing a bug when auto fix is correcting the code
        'no-else-return': ['error', {
            allowElseIf: true,
        }],

        // disallow reassignments of native objects or read-only globals
        // http://eslint.org/docs/rules/no-global-assign
        'no-global-assign': ['error', { exceptions: [] }],

        'no-nonoctal-decimal-escape': 'error',

        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        // rule: http://eslint.org/docs/rules/no-param-reassign.html
        'no-param-reassign': ['error', {
            props: false,
        }],

        'no-setter-return': 'error',

        // disallow usage of expressions in statement position
        'no-unused-expressions': ['error', {
            allowShortCircuit: false,
            allowTaggedTemplates: false,
            allowTernary: false,
        }],

        'no-useless-catch': 'error',

        'prefer-exponentiation-operator': 'error',

        'prefer-named-capture-group': 'off',

        'prefer-object-has-own': 'off',

        'prefer-regex-literals': 'off',
    },
};
