# @justeattakeaway/eslint-plugin-snacks-pie-migration

This plugin helps developers to identify deprecated Snacks components and provides suggestions of replacement PIE components

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@justeattakeaway/eslint-plugin-snacks-pie-migration`:

```sh
npm install @justeattakeaway/eslint-plugin-snacks-pie-migration --save-dev
```

## Usage

- In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `@justeattakeaway/eslint-plugin-snacks-pie-migration` and add `snacks-pie-migration` to the `plugins` key
- Then configure the rules you want to use under the `rules` key

```js
import { defineConfig } from "eslint/config";
import snacksPieMigration from "@justeattakeaway/eslint-plugin-snacks-pie-migration";

export default defineConfig([
  {
    files: ['**/*.jsx', '**/*.tsx', '**/*.js', '**/*.ts'],
    plugins: {
      snacksPieMigration
    },
    rules: {
      "snacks-pie-migration/deprecated-components": "error"
    },
    processor: '@justeattakeaway/snacks-pie-migration/added-components',
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
  }
]);
```

### Usage with deprecated configuration file formats
You can also use the plugin with [deprecated configuration file formats](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated) such as `.eslintrc.js`.

```js
module.exports = {
  files: ['**/*.jsx', '**/*.tsx', '**/*.js', '**/*.ts'],
  plugins: [
    '@justeattakeaway/snacks-pie-migration'
  ],
  rules: {
    '@justeattakeaway/snacks-pie-migration/deprecated-components': 'error',
  },
  processor: '@justeattakeaway/snacks-pie-migration/added-components',
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx:   true, // Enable JSX parsing
      },
    },
  },
};
```

## Configurations

It's possible to bypass certain components from being reported by the `deprecated-components` rule by providing an array of component names to ignore.

```js
...
rules: {
  '@justeattakeaway/snacks-pie-migration/deprecated-components': [
    'error',
    ["Table"], // Any new usage if the Table component will be ignored
  ],
},
...
```
