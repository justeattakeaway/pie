# stylelint-full-class-name-modifiers

[![npm version](https://badge.fury.io/js/@justeattakeaway%stylelint-full-class-name-modifiers.svg)](https://badge.fury.io/js/@justeattakeaway%stylelint-full-class-name-modifiers)

A Stylelint plugin used in PIE – Just Eat Takeaway’s design system.

This custom Stylelint rule is designed to ensure the use of full class names for modifiers rather than relying solely on nesting with the ampersand (`&`). It enforces two important principles in projects following the SUIT CSS naming methodology:

1. **Improved Codebase Searchability**: By avoiding solely the use of the ampersand to define class names and instead using the full class name for modifiers, it becomes easier to locate and understand CSS classes across large codebases.

2. **Enhanced Specificity**: Using the full class name within nesting improves CSS specificity. This ensures that the modifier styles only apply when the base class is also present, preventing unintentional overrides or application of styles.

## Example:

```scss
/* ❌ Fails when omitting the full class name from the modifier */
.foo {
    &--bar {
        color: red;
    }
}

/* ✅ Works when the full class name is used */
.foo {
    &.foo--bar {
        color: red;
    }
}
```

This usage ensures the full class name is explicit and that the modifier will only take effect when the base class is also applied.

## Installation

```bash
npm install @justeattakeaway/stylelint-full-nested-class-modifiers --save-dev
```

## Usage

Add the plugin to your Stylelint config `plugins` array, and also to the `rules` object.

```js
{
  "plugins": [
    "@justeattakeaway/stylelint-full-nested-class-modifiers"
  ],
  "rules": {
    '@justeattakeaway/stylelint-full-nested-class-modifiers': true,
  }
}
```

Regular usage will show error messages in the console when you use nested class modifiers with just the ampersand.

### Example output:

```bash
✖  Nested class modifier "&--bar" does not use the full class name. Use "&.foo--bar" instead.  @justeattakeaway/stylelint-full-nested-class-modifiers
```

### Fixing errors

The plugin supports the `--fix` flag (autofix) and will automatically add the missing class name to the nested modifier.
