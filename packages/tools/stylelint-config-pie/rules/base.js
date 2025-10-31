export default {
    extends: 'stylelint-config-standard-scss',
    plugins: [
        '@justeattakeaway/stylelint-no-logical-props-shorthands',
        '@justeattakeaway/stylelint-no-deprecated-tokens',
    ],
    rules: {
        '@justeattakeaway/stylelint-no-logical-props-shorthands': true,
        '@justeattakeaway/stylelint-no-deprecated-tokens': true,
        'alpha-value-notation': 'number',
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-blockless', 'first-nested'],
                ignore: ['after-comment'],
                ignoreAtRules: ['if', 'else', 'include', 'use', 'forward'],
            }
        ],
        'at-rule-no-vendor-prefix': true,
        'color-function-notation': 'legacy',
        'color-hex-length': 'short',
        'color-no-invalid-hex': true,
        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['stylelint-commands'],
            }
        ],
        'comment-whitespace-inside': 'always',
        'custom-property-pattern': '^([a-z][a-z0-9]*)(-[-a-z0-9]+)*$',
        'declaration-block-no-duplicate-properties': [
            true, {
                ignore: ['consecutive-duplicates-with-different-values'],
            }
        ],
        'declaration-block-no-redundant-longhand-properties': [
            true, {
                // Excluding margin/padding logical operators to avoid "stylelint-no-logical-props-shorthands" conflict
                ignoreShorthands: ['/margin-inline/', '/margin-block/', 'padding-inline', 'padding-block'],
            }
        ],
        'declaration-empty-line-before': null,
        'font-family-name-quotes': 'always-where-recommended',
        'font-weight-notation': 'numeric',
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-name-case': [
            'lower',
            {
                ignoreFunctions: ['/zIndex/'],
            }
        ],
        'function-url-quotes': 'always',
        'keyframes-name-pattern': '^([a-z0-9]+)(((([A-Z]){1}([a-z0-9]+))?)+)',
        'length-zero-no-unit': true,
        'media-feature-name-no-vendor-prefix': true,
        'no-descending-specificity': [
            true,
            {
                ignore: ['selectors-within-list'],
            }
        ],
        'no-duplicate-selectors': null,
        'number-max-precision': 3,
        'property-no-unknown': true,
        // TODO - we need to figure out what exceptions to add to this
        'property-no-vendor-prefix': null,
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            }
        ],
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-else-empty-line-before': 'never',
        'scss/at-else-if-parentheses-space-before': 'always',
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/dollar-variable-colon-space-after': 'at-least-one-space',
        'scss/dollar-variable-pattern': null,
        'selector-attribute-quotes': 'always',
        'selector-class-pattern': null,
        // TODO - Test * > * works
        'selector-max-universal': [1, { ignoreAfterCombinators: ['>'] }],
        'selector-no-vendor-prefix': true,
        'selector-pseudo-element-colon-notation': 'single',
        'selector-type-case': 'lower',
        'unit-no-unknown': true,
        'value-no-vendor-prefix': true,
    },
};
