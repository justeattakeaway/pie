# pie-stylelint-config

TODO - add npm version
TODO - add build status

> PIE shareable stylelint config.

A Stylelint config used in PIE – Just Eat Takeaway’s design system

Use it as is or as a foundation for your own config.

To see the rules that this config uses, please read the [config itself](./index.js).


## Installation

```bash
npm install @justeattakeaway/pie-stylelint-config --save-dev
```

## Usage

If you've installed `pie-stylelint-config` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "@justeattakeaway/pie-stylelint-config"
}
```

The easiest way to do this is by adding the following section to your package.json:

```json
"stylelint": {
  "extends": "@justeattakeaway/pie-stylelint-config"
}
```

You may only want to use a specific ruleset such as `base`, `strict` or `ordering`. If so, simply point to the ones you'd like to use (_note:  `@justeattakeaway/pie-stylelint-config` includes all rules_):

```json
"stylelint": {
  "extends": [
    "@justeattakeaway/pie-stylelint-config-base",
    "@justeattakeaway/pie-stylelint-config-strict",
    "@justeattakeaway/pie-stylelint-config-ordering" 
  ]
}
```

If you've globally installed `pie-stylelint-config` using the `-g` flag, then you'll need to use the absolute path to `pie-stylelint-config` in your config e.g.

```json
{
  "extends": "/absolute/path/to/@justeattakeaway/pie-stylelint-config"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `indentation` to tabs, turn off the `number-leading-zero` rule:

```json
{
  "extends": "@justeattakeaway/pie-stylelint-config",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

### Documentation

#### Configured Lints

`pie-stylelint-config` is a great foundation for your own config. Here is a list of the rules turned on in this config, and what they do:


TODO - add all rules with descriptions and links to stylelint docs


## [Changelog](CHANGELOG.md)
