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

### Dependencies
This plugin requires the following peer dependencies to be installed in your project:

- `eslint` version 7.32.0 or above
- `typescript` version 4.8.4 or above, less than 6.0.0
- `@typescript-eslint/parser` version 8.46.3 or above

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

## Settings

### Rule options

If the project requires certain deprecated components to be ignored, it's possible to bypass specific components from being reported by the `deprecated-components` rule by providing an array of component names.

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

Although not ideal, it's possible to use eslint-disable comments to ignore specific lines where deprecated components are used.

The main downside is that it will lead to ignoring the whole line, so if there are multiple deprecated components used in the same line, all of them will be ignored.

```js
// eslint-disable-next-line @justeattakeaway/snacks-pie-migration/deprecated-components
```

### Processor

The plugin also provides a processor that helps in avoiding false positives, so errors are only reported when changes in source code introduce any deprecated Snacks components that were not already present.

This is particularly useful during migration to PIE components, as it allows developers to focus solely on new usages of deprecated components without being distracted by existing ones.

To use the processor, add the following line to your ESLint configuration:

```js
...
processor: '@justeattakeaway/snacks-pie-migration/added-components',
...
```

## Supported ESLint versions

This plugin is compatible with ESLint version 7.32.0 and above.

## VSCode usage

If desired, it's possible to use this plugin with VSCode.

If the plugin is being used with its processor, a better experience can be achieved by setting the VSCode preference `@id:eslint.run` to `onSave` instead of `onType`.

During development it was noted that VSCode would only update the state of the linting after switching back focus to the editor from another window. Modifying the setting to `onSave` ensures that the linting state is updated correctly when the file is saved, providing a more reliable experience when using the processor.

