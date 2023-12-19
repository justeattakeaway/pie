module.exports = {
    extends: 'stylelint-config-standard-scss',
    rules: {
        'alpha-value-notation': 'number',
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-blockless', 'first-nested'],
                ignore: ['after-comment'],
                ignoreAtRules: ['if', 'else', 'include', 'use', 'forward'],
            }
        ],
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always',
        'at-rule-no-vendor-prefix': true,
        'block-closing-brace-newline-after': [
            'always',
            {
                ignoreAtRules: ['if', 'else'],
            }
        ],
        'block-closing-brace-newline-before': 'always',
        'block-closing-brace-space-before': 'always-single-line',
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',
        'color-function-notation': 'legacy',
        'color-hex-case': 'lower',
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
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-block-no-duplicate-properties': [
            true, {
                ignore: ['consecutive-duplicates-with-different-values'],
            }
        ],
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': null,
        'font-family-name-quotes': 'always-where-recommended',
        'font-weight-notation': 'numeric',
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'never-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-after': 'always',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-name-case': [
            'lower',
            {
                ignoreFunctions: ['/zIndex/'],
            }
        ],
        'function-parentheses-space-inside': 'never',
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',
        indentation: 4,
        'keyframes-name-pattern': '^([a-z0-9]+)(((([A-Z]){1}([a-z0-9]+))?)+)',
        'length-zero-no-unit': true,
        'max-empty-lines': 2,
        'max-line-length': [
            120,
            {
                ignore: ['non-comments'],
                ignorePattern: '/hsl\\(/',
            }
        ],
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-query-list-comma-newline-before': null,
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',
        'no-descending-specificity': [
            true,
            {
                ignore: ['selectors-within-list'],
            }
        ],
        'no-duplicate-selectors': null,
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,
        'number-leading-zero': 'always',
        'number-max-precision': 3,
        'number-no-trailing-zeros': true,
        'property-case': 'lower',
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
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-before': 'never',
        'selector-max-empty-lines': 0,
        // TODO - Test * > * works
        'selector-max-universal': [1, { ignoreAfterCombinators: ['>'] }],
        'selector-no-vendor-prefix': true,
        'selector-pseudo-element-colon-notation': 'single',
        'selector-type-case': 'lower',
        'string-quotes': 'single',
        'unit-no-unknown': true,
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-no-vendor-prefix': true,
    },
};
