module.exports = {
    rules: {
        'vue/array-bracket-newline': 'off',

        'vue/array-bracket-spacing': ['error', 'never'],

        'vue/arrow-spacing': ['error', { after: true, before: true }],

        'vue/block-lang': 'off',

        'vue/block-spacing': ['error', 'always'],

        'vue/block-tag-newline': 'error',

        'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],

        'vue/camelcase': ['error', { properties: 'never' }],

        'vue/comma-dangle': ['error', 'never'],

        // enforce spacing before and after comma
        'vue/comma-spacing': ['error', { after: true, before: false }],

        // enforce one true comma style
        'vue/comma-style': ['error', 'last', {
            exceptions: {
                ArrayExpression: false,
                ArrayPattern: false,
                ArrowFunctionExpression: false,
                CallExpression: false,
                FunctionDeclaration: false,
                FunctionExpression: false,
                ImportDeclaration: false,
                NewExpression: false,
                ObjectExpression: false,
                ObjectPattern: false,
                VariableDeclaration: false,
            },
        }],

        'vue/component-api-style': 'off',

        'vue/component-definition-name-casing': 'error',

        // Use kebab-case for Vue component names, as then in-line with the
        // HTML custom elements spec (which requires that a dash is included in the name)
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],

        // Default is "PascalCase"
        'vue/component-options-name-casing': 'error',

        'vue/component-tags-order': ['error', {
            order: ['template', 'script', 'style'],
        }],

        'vue/custom-event-name-casing': 'off',

        'vue/define-macros-order': 'off',

        'vue/dot-location': ['error', 'property'],

        // encourages use of dot notation whenever possible
        // https://eslint.org/docs/rules/dot-notation
        'vue/dot-notation': ['error', { allowKeywords: true }],

        'vue/eqeqeq': ['error', 'always', { null: 'ignore' }],

        // enforce spacing between functions and their invocations
        // https://eslint.org/docs/rules/func-call-spacing
        'vue/func-call-spacing': ['error', 'never'],

        'vue/html-button-has-type': ['error'],

        'vue/html-closing-bracket-newline': 'off',

        'vue/html-comment-content-newline': 'error',

        'vue/html-comment-content-spacing': 'off',

        'vue/html-comment-indent': 'off',

        'vue/html-indent': ['error', 4],

        'vue/key-spacing': ['error', {
            afterColon: true,
            beforeColon: false,
            mode: 'minimum',
        }],

        'vue/keyword-spacing': ['error', {
            after: true,
            before: true,
            overrides: {
                case: { after: true },
                return: { after: true },
                throw: { after: true },
            },
        }],

        'vue/match-component-file-name': 'off',

        'vue/match-component-import-name': 'off',

        'vue/max-len': 'off',

        'vue/new-line-between-multi-line-property': 'off',

        'vue/next-tick-style': 'off',

        'vue/no-bare-strings-in-template': 'off',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-boolean-default.md
        'vue/no-boolean-default': 'off',

        'vue/no-child-content': 'error',

        // disallow use of constant expressions in conditions
        'vue/no-constant-condition': 'warn',

        // https://vuejs.org/v2/api/#scope-removed
        'vue/no-deprecated-scope-attribute': 'warn',

        'vue/no-deprecated-slot-attribute': 'error',

        'vue/no-deprecated-slot-scope-attribute': 'error',

        'vue/no-duplicate-attr-inheritance': 'error',

        'vue/no-empty-component-block': 'off',

        'vue/no-empty-pattern': 'error',

        'vue/no-expose-after-await': 'error',

        // disallow unnecessary parentheses
        // https://eslint.org/docs/rules/no-extra-parens
        'vue/no-extra-parens': 'off',

        'vue/no-invalid-model-keys': 'error',

        'vue/no-irregular-whitespace': 'error',

        // Disallow Number Literals That Lose Precision
        // https://eslint.org/docs/rules/no-loss-of-precision
        'vue/no-loss-of-precision': 'error',

        'vue/no-multiple-objects-in-class': 'off',

        'vue/no-potential-component-option-typo': 'off',

        'vue/no-reserved-component-names': 'error',

        'vue/no-restricted-block': 'off',

        'vue/no-restricted-call-after-await': 'off',

        'vue/no-restricted-class': 'off',

        'vue/no-restricted-component-options': 'off',

        'vue/no-restricted-custom-event': 'off',

        'vue/no-restricted-html-elements': 'off',

        'vue/no-restricted-props': 'off',

        'vue/no-restricted-static-attribute': 'off',

        // Copy of baseAIrbnb restricted-syntax ruleset
        // https://github.com/airbnb/javascript/blob/b85baeafed8b66fdd9756439a0b8774860147913/packages/eslint-config-airbnb-base/rules/style.js#L332-L352
        'vue/no-restricted-syntax': [
            'error',
            {
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
                selector: 'ForInStatement',
            },
            {
                message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
                selector: 'ForOfStatement',
            },
            {
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
                selector: 'LabeledStatement',
            },
            {
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
                selector: 'WithStatement',
            }
        ],

        'vue/no-restricted-v-bind': 'off',

        // disallow sparse arrays
        'vue/no-sparse-arrays': 'error',

        'vue/no-static-inline-styles': 'error',

        'vue/no-template-target-blank': 'error',

        'vue/no-this-in-before-route-enter': 'error',

        'vue/no-undef-components': 'off',

        'vue/no-undef-properties': 'off',

        'vue/no-unsupported-features': 'error',

        'vue/no-unused-properties': 'off',

        'vue/no-unused-refs': 'off',

        'vue/no-use-computed-property-like-method': 'off',

        // disallow useless string concatenation
        // https://eslint.org/docs/rules/no-useless-concat
        'vue/no-useless-concat': 'error',

        'vue/no-useless-mustaches': 'error',

        'vue/no-useless-v-bind': 'error',

        'vue/no-v-text': 'off',

        'vue/no-v-text-v-html-on-component': 'error',

        // enforce line breaks between braces
        // https://eslint.org/docs/rules/object-curly-newline
        'vue/object-curly-newline': ['error', {
            ExportDeclaration: { consistent: true, minProperties: 4, multiline: true },
            ImportDeclaration: { consistent: true, minProperties: 4, multiline: true },
            ObjectExpression: { consistent: true, minProperties: 4, multiline: true },
            ObjectPattern: { consistent: true, minProperties: 4, multiline: true },
        }],

        'vue/object-curly-spacing': ['error', 'always'],

        // enforce "same line" or "multiple line" on object properties.
        // https://eslint.org/docs/rules/object-property-newline
        'vue/object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true,
        }],

        // require method and property shorthand syntax for object literals
        // https://eslint.org/docs/rules/object-shorthand
        'vue/object-shorthand': ['error', 'always', {
            avoidQuotes: true,
            ignoreConstructors: false,
        }],

        // Requires operator at the beginning of the line in multiline statements
        // https://eslint.org/docs/rules/operator-linebreak
        'vue/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

        'vue/padding-line-between-blocks': ['error', 'always'],

        'vue/prefer-prop-type-boolean-first': 'off',

        'vue/prefer-separate-static-class': 'off',

        // https://eslint.org/docs/rules/prefer-template
        'vue/prefer-template': 'error',

        'vue/prefer-true-attribute-shorthand': ['error', 'always'],

        // require quotes around object literal property names
        // https://eslint.org/docs/rules/quote-props.html
        'vue/quote-props': ['error', 'as-needed', { keywords: false, numbers: false, unnecessary: true }],

        'vue/require-direct-export': 'off',

        'vue/require-emit-validator': 'off',

        'vue/require-name-property': 'off',

        'vue/script-indent': 'off',

        'vue/sort-keys': ['error', 'asc'],

        // require or disallow spaces inside parentheses
        'vue/space-in-parens': ['error', 'never'],

        'vue/space-infix-ops': 'error',

        // Require or disallow spaces before/after unary operators
        // https://eslint.org/docs/rules/space-unary-ops
        'vue/space-unary-ops': ['error', {
            nonwords: false,
            words: true,
        }],

        'vue/static-class-names-order': 'off',

        // enforce usage of spacing in template strings
        // https://eslint.org/docs/rules/template-curly-spacing
        'vue/template-curly-spacing': 'error',

        'vue/v-for-delimiter-style': 'off',

        'vue/v-on-function-call': ['error', 'never'],

        'vue/v-slot-style': 'off',

        'vue/valid-v-bind-sync': 'error',

        'vue/valid-v-slot': 'error',
    },
};
