# eslint-config-pie
[![npm version](https://badge.fury.io/js/%40justeattakeaway%2Feslint-config-pie.svg)](https://badge.fury.io/js/%40justeattakeaway%2Feslint-config-pie)

This package provides Just Eat Takeaway's base JS .eslintrc as an extensible shared config and it builds upon the previous work done on `@justeat/eslint-config-fozzie`

It extends the [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) ruleset with our own set of JS linting rules.

Many thanks to the work that the Airbnb team have put in on creating their template for extension rules – we have liberally borrowed from their structure and documentation in creating this ruleset.

## Installation

Our default export contains our base ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import` and `eslint-plugin-vitest`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@justeattakeaway/eslint-config-pie@latest" peerDependencies
  ```

  Linux/OSX users can simply run:

  ```sh
  (
    export PKG=@justeattakeaway/eslint-config-pie;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev @justeattakeaway/eslint-config-pie eslint@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-vitest@^#.#.#
  ```

  Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev @justeattakeaway/eslint-config-pie
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev @justeattakeaway/eslint-config-pie eslint@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-vitest@^#.#.#
  ```

## Usage

### eslint-config-pie

#### ESLint v8 and below

Add `"extends": "@justeattakeaway/eslint-config-pie"` to your `.eslintrc` file, which should look like this:

```js
// Use this file as a starting point for your project's .eslintrc.js
// Rule overrides can be added as needed
module.exports = {
    extends: '@justeattakeaway/eslint-config-pie'
}
```

#### Note for PIE developers

The usage in PIE monorepo is a bit different, since it's preferrable to use the ESLint rules directly from the PIE monorepo. This allow us to always be on the latest version without requiring any manual update.

```js
module.exports = {
    extends: [require.resolve('@justeattakeaway/eslint-config-pie/strict')],
}
```

#### ESLint v9+

use of `eslintrc` configuration files has been officially deprecated in ESLint v9. We are working on updating `eslint-config-pie` to integrate seamlessly with ESLint v9, but until these changes are released you will need to use a package such as [`@eslint/eslintrc`](https://www.npmjs.com/package/@eslint/eslintrc) to ensure compatibility.


### Rulesets

The package contains two ESLint rulesets:

- `base` is the default, less opinionated
- `strict` extends base and it's more opinionated

In order to use the strict set, update the `extends` field:

```js
module.exports = {
    extends: '@justeattakeaway/eslint-config-pie/strict'
}
```

The rules for both sets can be found at `eslint-config-pie/base|strict/rules`.

## Framework specific rules

Both `base` and `strict` rulesets are framework agnostic, though Vue.js rules are available as an optional export. React rules will be added in the near future.


In order to use Vue.js rules, import them from `frameworks` and merge them to your config rules field:

```js
const { vue, vue3 } = require('@justeattakeaway/eslint-config-pie/frameworks');

module.exports = {
    rules: {
        ...vue.rules, ...vue3.rules,
    },
};
```

## Testing

You can run tests on this ruleset with `npm test`.

You can make sure this module lints with itself using `npm run lint:scripts`.
