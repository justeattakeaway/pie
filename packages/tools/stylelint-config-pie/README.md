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

Currently there are 4 different sets of rules:

1. `base` - the base rules that we'd advise all projects use and extend as needed.
2. `strict` - a smaller collection of _optional_ opinionated rules.
3. `ordering` - an even smaller collection of _optional_ rules that specify the ordering of CSS Variables.
4. `style` - an _optional_ stylistic ruleset powered by `@stylistic/stylelint-plugin`.

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

You may only want to use specific rulesets such as `base`, `strict`, `ordering` or `style`. If so, simply point to the ones you'd like to use:

```json
"stylelint": {
  "extends": [
    "@justeattakeaway/stylelint-config-pie/base",
    "@justeattakeaway/stylelint-config-pie/strict",
    "@justeattakeaway/stylelint-config-pie/ordering",
    "@justeattakeaway/stylelint-config-pie/style"
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

### Plugins

#### `@justeattakeaway/pie-design-tokens`

A built-in plugin that validates PIE design token usage (`--dt-` prefixed custom properties). Not enabled by default — opt in via your rules:

```json
{
  "extends": "@justeattakeaway/stylelint-config-pie/base",
  "rules": {
    "@justeattakeaway/pie-design-tokens": true
  }
}
```

**Checks:**

- **Global tokens** — Warns when global tokens are used directly instead of alias tokens.
- **Deprecated tokens** — Warns when a deprecated token is used and suggests a replacement.
- **Invalid tokens** — Warns when a `--dt-` token does not exist.
- **Font token `calc()` enforcement** — Warns when `--dt-font-*-size` or `--dt-font-*-line-height` tokens are used in `font-size` or `line-height` without `calc()` wrapping.

> Requires `@justeat/pie-design-tokens` as a dependency. Optionally loads `@justeattakeaway/pie-css` for additional tokens (e.g. z-index).

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

### Style

Stylistic rules (e.g. indentation, casing) were moved out of the core Stylelint package to instead be optionally included via plugins from Stylelint v15. We use the [`@stylistic/stylelint-plugin`](https://github.com/stylelint-stylistic/stylelint-stylistic) to allow these stylistic rules to be optionally included in your rulesets.

Configured rules:

- [@stylistic/at-rule-name-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-case/README.md)
- [@stylistic/at-rule-name-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-space-after/README.md)
- [@stylistic/at-rule-semicolon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-semicolon-newline-after/README.md)
- [@stylistic/block-closing-brace-empty-line-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-empty-line-before/README.md)
- [@stylistic/block-closing-brace-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-after/README.md)
- [@stylistic/block-closing-brace-newline-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-before/README.md)
- [@stylistic/block-closing-brace-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-space-before/README.md)
- [@stylistic/block-opening-brace-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-newline-after/README.md)
- [@stylistic/block-opening-brace-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-after/README.md)
- [@stylistic/block-opening-brace-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-before/README.md)
- [@stylistic/color-hex-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/color-hex-case/README.md)
- [@stylistic/declaration-bang-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-after/README.md)
- [@stylistic/declaration-bang-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-before/README.md)
- [@stylistic/declaration-block-semicolon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-newline-after/README.md)
- [@stylistic/declaration-block-semicolon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-after/README.md)
- [@stylistic/declaration-block-semicolon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-before/README.md)
- [@stylistic/declaration-block-trailing-semicolon](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-trailing-semicolon/README.md)
- [@stylistic/declaration-colon-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-newline-after/README.md)
- [@stylistic/declaration-colon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-after/README.md)
- [@stylistic/declaration-colon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-before/README.md)
- [@stylistic/function-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-newline-after/README.md)
- [@stylistic/function-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-after/README.md)
- [@stylistic/function-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-before/README.md)
- [@stylistic/function-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-max-empty-lines/README.md)
- [@stylistic/function-parentheses-newline-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-newline-inside/README.md)
- [@stylistic/function-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-space-inside/README.md)
- [@stylistic/function-whitespace-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-whitespace-after/README.md)
- [@stylistic/indentation](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/indentation/README.md)
- [@stylistic/max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-empty-lines/README.md)
- [@stylistic/max-line-length](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-line-length/README.md)
- [@stylistic/media-feature-colon-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-after/README.md)
- [@stylistic/media-feature-colon-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-before/README.md)
- [@stylistic/media-feature-name-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-name-case/README.md)
- [@stylistic/media-feature-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-parentheses-space-inside/README.md)
- [@stylistic/media-feature-range-operator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-after/README.md)
- [@stylistic/media-feature-range-operator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-before/README.md)
- [@stylistic/media-query-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-newline-after/README.md)
- [@stylistic/media-query-list-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-after/README.md)
- [@stylistic/media-query-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-before/README.md)
- [@stylistic/no-empty-first-line](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-empty-first-line/README.md)
- [@stylistic/no-eol-whitespace](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-eol-whitespace/README.md)
- [@stylistic/no-extra-semicolons](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-extra-semicolons/README.md)
- [@stylistic/no-missing-end-of-source-newline](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-missing-end-of-source-newline/README.md)
- [@stylistic/number-leading-zero](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-leading-zero/README.md)
- [@stylistic/number-no-trailing-zeros](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-no-trailing-zeros/README.md)
- [@stylistic/property-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/property-case/README.md)
- [@stylistic/selector-attribute-brackets-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-brackets-space-inside/README.md)
- [@stylistic/selector-attribute-operator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-after/README.md)
- [@stylistic/selector-attribute-operator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-before/README.md)
- [@stylistic/selector-combinator-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-after/README.md)
- [@stylistic/selector-combinator-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-before/README.md)
- [@stylistic/selector-descendant-combinator-no-non-space](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-descendant-combinator-no-non-space/README.md)
- [@stylistic/selector-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-newline-after/README.md)
- [@stylistic/selector-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-space-before/README.md)
- [@stylistic/selector-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-max-empty-lines/README.md)
- [@stylistic/selector-pseudo-class-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-case/README.md)
- [@stylistic/selector-pseudo-class-parentheses-space-inside](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-parentheses-space-inside/README.md)
- [@stylistic/selector-pseudo-element-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-element-case/README.md)
- [@stylistic/string-quotes](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/string-quotes/README.md)
- [@stylistic/unit-case](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/unit-case/README.md)
- [@stylistic/value-list-comma-newline-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-newline-after/README.md)
- [@stylistic/value-list-comma-space-after](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-after/README.md)
- [@stylistic/value-list-comma-space-before](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-before/README.md)
- [@stylistic/value-list-max-empty-lines](https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-max-empty-lines/README.md)

## [Changelog](CHANGELOG.md)
