# eslint-config-fozzie
[![npm version](https://badge.fury.io/js/%40justeat%2Feslint-config-fozzie.svg)](https://badge.fury.io/js/%40justeat%2Feslint-config-fozzie)

This package provides Just Eat's base JS .eslintrc as an extensible shared config.

It extends the [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) ruleset with our own set of JS linting rules.

Many thanks to the work that the Airbnb team have put in on creating their template for extension rules – we have liberally borrowed from their structure and documentation in creating this ruleset.

## Usage

### eslint-config-fozzie

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@justeat/eslint-config-fozzie@latest" peerDependencies
  ```

  Linux/OSX users can simply run
  ```sh
  (
    export PKG=@justeat/eslint-config-fozzie;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev @justeat/eslint-config-fozzie eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

  Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev @justeat/eslint-config-fozzie
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev @justeat/eslint-config-fozzie eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "@justeat/eslint-config-fozzie"` to your `.eslintrc` file, which should look like this:
```
// Use this file as a starting point for your project's .eslintrc.js
// Copy this file, and add rule overrides as needed.
module.exports = {
    extends: '@justeat/eslint-config-fozzie'
}
```


## Testing

You can run tests on this ruleset with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
