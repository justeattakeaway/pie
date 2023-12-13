# stylelint-config-pie

[![npm version](https://badge.fury.io/js/@justeattakeaway%stylelint-config-pie.svg)](https://badge.fury.io/js/@justeattakeaway%stylelint-config-pie)

> PIE shareable stylelint config.

A Stylelint config used in PIE – Just Eat Takeaway’s design system.

Use it as is or as a foundation for your own config.

To see the rules that this config uses, please read the [config itself](./index.js).


## Installation

```bash
npm install @justeattakeaway/stylelint-config-pie --save-dev
```

## Usage

### Rules

Currently there are 3 different sets of rules:

1. `base` - the base rules that we'd advise all projects use and extend as needed.
2. `strict` - a smaller collection of _optional_ opinionated rules.
3. `ordering` - an even smaller collection of _optional_ rules that specify the ordering of CSS properties.

### In your projects

If you've installed `stylelint-config-pie` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "@justeattakeaway/stylelint-config-pie/base"
}
```

The easiest way to do this is by adding the following section to your package.json:

```json
"stylelint": {
  "extends": "@justeattakeaway/stylelint-config-pie/base"
}
```

You may only want to use a specific ruleset such as `base`, `strict` or `ordering`. If so, simply point to the ones you'd like to use:

```json
"stylelint": {
  "extends": [
    "@justeattakeaway/stylelint-config-pie/base",
    "@justeattakeaway/stylelint-config-pie/strict",
    "@justeattakeaway/stylelint-config-pie/ordering"
  ]
}
```

_Note:  `@justeattakeaway/stylelint-config-pie` includes all rules. We would strongly recommend using `@justeattakeaway/stylelint-config-pie/base` and going from there._

If you've globally installed `stylelint-config-pie` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-pie` in your config e.g.

```json
{
  "extends": "/absolute/path/to/@justeattakeaway/stylelint-config-pie/base"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `indentation` to tabs, and turn off the `number-leading-zero` rule:

```json
{
  "extends": "@justeattakeaway/stylelint-config-pie/base",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

### Documentation

#### Configured Lints

`stylelint-config-pie` is a great foundation for your own config. Here is a list of the rules turned on in this config, and what they do:

### Base
- [alpha-value-notation](https://stylelint.io/user-guide/rules/alpha-value-notation/)
- [at-rule-empty-line-before](https://stylelint.io/user-guide/rules/at-rule-empty-line-before/)
- [at-rule-name-case](https://stylelint.io/user-guide/rules/at-rule-name-case/)
- [at-rule-name-space-after](https://stylelint.io/user-guide/rules/at-rule-name-space-after/)
- [at-rule-no-vendor-prefix](https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/)
- [block-closing-brace-newline-after](https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/)
- [block-closing-brace-newline-before](https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/)
- [block-closing-brace-space-before](https://stylelint.io/user-guide/rules/block-closing-brace-space-before/)
- [block-opening-brace-newline-after](https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/)
- [block-opening-brace-space-after](https://stylelint.io/user-guide/rules/block-opening-brace-space-after/)
- [block-opening-brace-space-before](https://stylelint.io/user-guide/rules/block-opening-brace-space-before/)
- [color-function-notation](https://stylelint.io/user-guide/rules/color-function-notation/)
- [color-hex-case](https://stylelint.io/user-guide/rules/color-hex-case/)
- [color-hex-length](https://stylelint.io/user-guide/rules/color-hex-length/)
- [color-no-invalid-hex](https://stylelint.io/user-guide/rules/color-no-invalid-hex/)
- [comment-empty-line-before](https://stylelint.io/user-guide/rules/comment-empty-line-before/)
- [comment-whitespace-inside](https://stylelint.io/user-guide/rules/comment-whitespace-inside/)
- [declaration-bang-space-after](https://stylelint.io/user-guide/rules/declaration-bang-space-after/)
- [declaration-bang-space-before](https://stylelint.io/user-guide/rules/declaration-bang-space-before/)
- [declaration-block-no-duplicate-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/)
- [declaration-block-no-shorthand-property-overrides](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/)
- [declaration-block-semicolon-newline-after](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/)
- [declaration-block-semicolon-newline-before](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/)
- [declaration-block-semicolon-space-before](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/)
- [declaration-block-trailing-semicolon](https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/)
- [declaration-colon-newline-after](https://stylelint.io/user-guide/rules/declaration-colon-newline-after/)
- [declaration-colon-space-after](https://stylelint.io/user-guide/rules/declaration-colon-space-after/)
- [declaration-colon-space-before](https://stylelint.io/user-guide/rules/declaration-colon-space-before/)
- [font-family-name-quotes](https://stylelint.io/user-guide/rules/font-family-name-quotes/)
- [font-weight-notation](https://stylelint.io/user-guide/rules/font-weight-notation/)
- [function-calc-no-unspaced-operator](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/)
- [function-comma-newline-after](https://stylelint.io/user-guide/rules/function-comma-newline-after/)
- [function-comma-newline-before](https://stylelint.io/user-guide/rules/function-comma-newline-before/)
- [function-comma-space-after](https://stylelint.io/user-guide/rules/function-comma-space-after/)
- [function-comma-space-before](https://stylelint.io/user-guide/rules/function-comma-space-before/)
- [function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/)
- [function-name-case](https://stylelint.io/user-guide/rules/function-name-case/)
- [function-parentheses-space-inside](https://stylelint.io/user-guide/rules/function-parentheses-space-inside/)
- [function-url-quotes](https://stylelint.io/user-guide/rules/function-url-quotes/)
- [function-whitespace-after](https://stylelint.io/user-guide/rules/function-whitespace-after/)
- [indentation](https://stylelint.io/user-guide/rules/indentation/)
- [keyframes-name-pattern](https://stylelint.io/user-guide/rules/keyframes-name-pattern/)
- [length-zero-no-unit](https://stylelint.io/user-guide/rules/length-zero-no-unit/)
- [max-empty-lines](https://stylelint.io/user-guide/rules/max-empty-lines/)
- [media-feature-colon-space-after](https://stylelint.io/user-guide/rules/media-feature-colon-space-after/)
- [media-feature-colon-space-before](https://stylelint.io/user-guide/rules/media-feature-colon-space-before/)
- [media-feature-name-case](https://stylelint.io/user-guide/rules/media-feature-name-case/)
- [media-feature-name-no-vendor-prefix](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/)
- [media-feature-parentheses-space-inside](https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/)
- [media-feature-range-operator-space-after](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/)
- [media-feature-range-operator-space-before](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/)
- [media-query-list-comma-newline-before](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before/)
- [media-query-list-comma-space-after](https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/)
- [media-query-list-comma-space-before](https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/)
- [no-duplicate-selectors](https://stylelint.io/user-guide/rules/no-duplicate-selectors/)
- [no-eol-whitespace](https://stylelint.io/user-guide/rules/no-eol-whitespace/)
- [no-missing-end-of-source-newline](https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/)
- [number-leading-zero](https://stylelint.io/user-guide/rules/number-leading-zero/)
- [number-max-precision](https://stylelint.io/user-guide/rules/number-max-precision/)
- [number-no-trailing-zeros](https://stylelint.io/user-guide/rules/number-no-trailing-zeros/)
- [property-case](https://stylelint.io/user-guide/rules/property-case/)
- [property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown/)
- [property-no-vendor-prefix](https://stylelint.io/user-guide/rules/property-no-vendor-prefix/)
- [rule-empty-line-before](https://stylelint.io/user-guide/rules/rule-empty-line-before/)
- [scss/at-else-closing-brace-newline-after](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-closing-brace-newline-after/README.md)
- [scss/at-else-closing-brace-space-after](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-closing-brace-space-after/README.md)
- [scss/at-else-empty-line-before](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-empty-line-before)
- [scss/at-else-if-parentheses-space-before](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-if-parentheses-space-before)
- [scss/at-if-closing-brace-newline-after](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after)
- [selector-attribute-quotes](https://stylelint.io/user-guide/rules/selector-attribute-quotes/)
- [selector-class-pattern](https://stylelint.io/user-guide/rules/selector-class-pattern/)
- [selector-combinator-space-after](https://stylelint.io/user-guide/rules/selector-combinator-space-after/)
- [selector-combinator-space-before](https://stylelint.io/user-guide/rules/selector-combinator-space-before/)
- [selector-descendant-combinator-no-non-space](https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/)
- [selector-list-comma-newline-after](https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/)
- [selector-list-comma-newline-before](https://stylelint.io/user-guide/rules/selector-list-comma-newline-before/)
- [selector-list-comma-space-before](https://stylelint.io/user-guide/rules/selector-list-comma-space-before/)
- [selector-max-empty-lines](https://stylelint.io/user-guide/rules/selector-max-empty-lines/)
- [selector-max-universal](https://stylelint.io/user-guide/rules/selector-max-universal/)
- [selector-no-vendor-prefix](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/)
- [selector-pseudo-element-colon-notation](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/)
- [selector-type-case](https://stylelint.io/user-guide/rules/selector-type-case/)
- [string-quotes](https://stylelint.io/user-guide/rules/string-quotes/)
- [unit-no-unknown](https://stylelint.io/user-guide/rules/unit-no-unknown/)
- [value-list-comma-newline-after](https://stylelint.io/user-guide/rules/value-list-comma-newline-after/)
- [value-list-comma-newline-before](https://stylelint.io/user-guide/rules/value-list-comma-newline-before/)
- [value-list-comma-space-after](https://stylelint.io/user-guide/rules/value-list-comma-space-after/)
- [value-list-comma-space-before](https://stylelint.io/user-guide/rules/value-list-comma-space-before/)
- [value-no-vendor-prefix](https://stylelint.io/user-guide/rules/value-no-vendor-prefix/)

### Strict
- [color-named](https://stylelint.io/user-guide/rules/color-named/)
- [max-nesting-depth](https://stylelint.io/user-guide/rules/max-nesting-depth/)
- [media-query-list-comma-newline-after](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/)
- [selector-max-compound-selectors](https://stylelint.io/user-guide/rules/selector-max-compound-selectors/)
- [selector-max-id](https://stylelint.io/user-guide/rules/selector-max-id/)

### Ordering
- [order/order](https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md)
- [order/properties-order](https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md)

## [Changelog](CHANGELOG.md)
