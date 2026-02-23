# stylelint-pie-design-tokens

[![npm version](https://badge.fury.io/js/@justeattakeaway%stylelint-pie-design-tokens.svg)](https://badge.fury.io/js/@justeattakeaway%stylelint-pie-design-tokens)

A Stylelint plugin used in PIE – Just Eat Takeaway's design system.

This plugin validates the usage of PIE design tokens in CSS and SCSS files.

## What it does

The plugin performs two main validations:

### 1. Invalid Token Detection

Flags tokens that don't exist in the PIE design token system.

```scss
/* ❌ Fails - token doesn't exist */
border-width: var(--xds-border-width-regular);

/* ✅ Works - valid token */
border-width: var(--dt-spacing-a);
```

### 2. Deprecated Token Detection

Identifies deprecated tokens and suggests replacements.

```scss
/* ❌ Fails - deprecated token */
color: var(--dt-color-blue-25);

/* ✅ Works - use the replacement */
color: var(--dt-color-cupcake-30);
```

## Installation

```bash
npm install @justeattakeaway/stylelint-pie-design-tokens --save-dev
```

## Usage

Add the plugin to your Stylelint config `plugins` array, and also to the `rules` object.

```js
{
  "plugins": [
    "@justeattakeaway/stylelint-pie-design-tokens"
  ],
  "rules": {
    '@justeattakeaway/stylelint-pie-design-tokens': true,
  }
}
```

Regular usage will show error messages in the console when invalid or deprecated tokens are used.

Example:

```bash
✖  Token "--xds-border-width-regular" is not a valid pie token.                          @justeattakeaway/stylelint-pie-design-tokens
✖  Token "--dt-color-blue-25" is deprecated. Use "--dt-color-cupcake-30" instead.        @justeattakeaway/stylelint-pie-design-tokens
```