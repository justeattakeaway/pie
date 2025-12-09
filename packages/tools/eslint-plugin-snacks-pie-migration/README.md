# @justeattakeaway/eslint-plugin-snacks-pie-migration

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/tools/eslint-plugin-snacks-pie-migration) | [NPM](https://www.npmjs.com/package/@justeattakeaway/eslint-plugin-snacks-pie-migration)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/eslint-plugin-snacks-pie-migration">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/eslint-plugin-snacks-pie-migration.svg">
  </a>
</p>

This plugin helps developers to identify deprecated Snacks components and provides suggestions of replacement PIE components.

## Table of Contents

- [Installation](#installation)
  - [Additional dependencies](#additional-dependencies)
- [Usage](#usage)
  - [Usage with deprecated configuration file formats](#usage-with-deprecated-configuration-file-formats)
- [What to expect](#what-to-expect)
- [Settings](#settings)
  - [Rule options](#rule-options)
  - [Processor](#processor)
- [How to update the components data](#how-to-update-the-components-data)
- [VSCode usage](#vscode-usage)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@justeattakeaway/eslint-plugin-snacks-pie-migration`:

```sh
npm install @justeattakeaway/eslint-plugin-snacks-pie-migration --save-dev
```

### Additional dependencies
This plugin requires the following peer dependencies to be installed in your project:

- `eslint` version 7.32.0 or above
- `typescript` version 4.8.4 or above, less than 6.0.0
- `@typescript-eslint/parser` version 8.46.3 or above

`typescript` and `@typescript-eslint/parser` are required for parsing TypeScript files.

## Usage

- In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `@justeattakeaway/eslint-plugin-snacks-pie-migration` and add `snacks-pie-migration` to the `plugins` key
- Then add the main rule to the `rules` key: `snacks-pie-migration/deprecated-components`
- Add the processor `@justeattakeaway/snacks-pie-migration/added-components` to only report newly added deprecated components

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

### Recommended configs

The plugin offers two sets of configs: `recommended` and `warn`. The later is the same as the former, but with all rules set to `warn` level.

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

## What to expect

When the plugin detects a deprecated Snacks component, you'll see an error like:

```
The Snacks component "Button" is being deprecated and can be replaced by "@justeattakeaway/pie-button"
@justeattakeaway/snacks-pie-migration/deprecated-component
```

The plugin handles both Typescript and JavaScript syntax.

## Settings

### Rule options

If the project requires certain deprecated components to be ignored, it's possible to bypass them from being reported by providing an array of component names.

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

The plugin provides a processor that **only reports newly added deprecated components** in your code changes. This means:

✅ **Will report**: New usages of deprecated Snacks components you just added.
❌ **Won't report**: Deprecated components that were already in your codebase before you started editing.

This is particularly useful during migration to PIE components, as it allows you to:
- Migrate incrementally without being overwhelmed by existing usage
- Focus on preventing new deprecated component usage
- Gradually refactor existing code at your own pace

> ℹ️ When running locally, the branch changes will be compared against the merge base ref. It assumes the `main` branch exists. Otherwise the `master` branch will be used. In any case, no extra configuration is needed.

> ℹ️ When running on Github CI, the plugin will use the PR base branch SHA since the merge base can't be easily inferred. In this case, ensure to pass the `BASE_SHA` environment variable. Its value should be set to `github.event.pull_request.base.sha`.

To use the processor, add the following line to your ESLint configuration:

```js
...
processor: '@justeattakeaway/snacks-pie-migration/added-components',
...
```

## How to update the components data

The components data used by the plugin is stored in the file `snacks-components-data.jsonz` file. This data is extracted from the PIE repository, based on the `pieMetadata` key of each component `package.json` file.

To update this data, run the following command:

```sh
yarn build
```

## VSCode usage

It's possible to use this plugin with VSCode.

If the plugin is being used with its processor, a better experience can be achieved by setting the VSCode preference `@id:eslint.run` to `onSave` instead of `onType`.

During development it was noted that VSCode would only update the squiggly lines after switching focus back to the editor from another window. Modifying the setting to `onSave` ensures that the linting state is updated correctly when the file is saved, providing a more reliable experience when using the processor.

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
