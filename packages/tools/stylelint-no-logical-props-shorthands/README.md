# stylelint-no-logical-props-shorthands

[![npm version](https://badge.fury.io/js/@justeattakeaway%stylelint-no-logical-props-shorthands.svg)](https://badge.fury.io/js/@justeattakeaway%stylelint-no-logical-props-shorthands)

A Stylelint plugin used in PIE – Just Eat Takeaway’s design system.

This plugin was created to prevent the usage of logical property shorthands in CSS. This is because they are not fully supported in Safari versions 14 and 15, and we want to avoid using them in our design system.

Example:

```scss
/* ❌ Fails when use logical props shorthands + variables */
padding-block: var(--dt-spacing-e);
padding-inline: var(--dt-spacing-e);

/* ✅ Works when we use regular logical properties */
padding-block-start: var(--dt-spacing-e);
padding-block-end: var(--dt-spacing-e);
padding-inline-start: var(--dt-spacing-e);
padding-inline-end: var(--dt-spacing-e);
```


## Installation

```bash
npm install @justeattakeaway/stylelint-no-logical-props-shorthands --save-dev
```

## Usage

Add the plugin to your Stylelint config `plugins` array, and also to the `rules` object.

```js
{
  "plugins": [
    "@justeattakeaway/stylelint-no-logical-props-shorthands"
  ],
  "rules": {
    '@justeattakeaway/stylelint-no-logical-props-shorthands': true,
  }
}
```

Regular usage will show error messages in the console when you use logical property shorthands.

Example:

```bash
✖  Disallowed usage of CSS logical property shorthand "margin-inline"   @justeattakeaway/stylelint-no-logical-props-shorthands
✖  Disallowed usage of CSS logical property shorthand "margin-block"    @justeattakeaway/stylelint-no-logical-props-shorthands
```

### Fixing errors

The plugin supports the `--fix` flag (autofix) and will automatically replace the logical property shorthands with regular logical properties.
